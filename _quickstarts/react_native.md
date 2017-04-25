---
layout: quickstarts/content
title: &title React Native # title as shown in the menu and 

menuitem: *title
order: 0
category: 
  - quickstart
tags: &tags # tags that are necessary
  - photo editor 
  - ios
  - android
published: true
---

![React Native Demo](/assets/images/react-native/react-native.png)

# Getting Started with React Native

Often our users ask whether it’s possible to use the SDK with React Native. Although we do not offer a fully fledged solution, we created a demo app and put together a guide on how to easily set up the PhotoEditor SDK with React Native and how to avoid eventual pitfalls.

We start with the basic react setup, add the native SDKs to the corresponding platforms, create an iOS and Android plugin and wire it all together using JavaScript. If you want to jump ahead you can always take a look at our [demo repository](https://github.com/imgly/pesdk-react-native-demo).

## Setup

Create a demo project using `react-native init <PROJECT_NAME>` and add follow the [manual installation](/guides/ios/v6_5/introduction/getting_started) steps from the iOS documentation. Once the PhotoEditor SDK has been set up in your iOS app, repeat the same for Android by following the corresponding [getting started steps](/guides/android/v3_1/introduction/getting_started) from our docs.

## Bridging between React Native and the native SDKs

To use the SDK from JavaScript you need to create modules that bridge between React Native and the PhotoEditor SDK. To ensure consistency we recommend to start with the iOS module and add the Android module, once iOS is fully functional. This way you can ensure API compatability across both modules, which makes accessing the modules from JavaScript much easier.

#### iOS Module

Creating a native module in React Native is fairly easy. Simply create `PESDKModule.h` and `PESDKModule.m` and defined a `PESDKModule` class that inherits from `NSObject` and implements the `RCTBridgeModule` protocol. In the classes implementation we registered our module with React Native by calling `RCT_EXPORT_MODULE(PESDK)`:

```objc
#import <React/RCTBridgeModule.h>
@interface PESDKModule : NSObject <RCTBridgeModule>
@end
 
// PESDKModule.m
@implementation PESDKModule
 
RCT_EXPORT_MODULE(PESDK);
```

Due to the heavy use of macros and React Natives Objective-C roots, we highly recommend to write your modules in Objective-C. If you prefer Swift you could create a thin Objective-C wrapper as well.

You now need to expose a method to JavaScript, that takes an image and fires up the SDK. In order to do so you make use of the `RCT_EXPORT_METHOD` macro and define your method:

```objc
RCT_EXPORT_METHOD(present) {
  IMGLYToolbarController *toolbarController = [IMGLYToolbarController new];
  IMGLYPhotoEditViewController *photoEditViewController = [[IMGLYPhotoEditViewController alloc] initWithImage:[UIImage named:"test"]];
  UIViewController *currentViewController = RCTPresentedViewController();
 
  dispatch_async(dispatch_get_main_queue(), ^{
    [toolbarController pushViewController:photoEditViewController animated:NO completion:NULL];
    [currentViewController presentViewController:toolbarController animated:YES completion:NULL];
  });
}
```

This creates a new `ToolbarController` and pushes a `PhotoEditController` that loads a sample image, just like our [documentation](/guides/android/v3_1/introduction/getting_started) suggests.

As you'll probably won't want to load the same image over and over again, modify the method to take a path argument and load the image at the given path:
```objc
RCT_EXPORT_METHOD(present:(NSString *)path) {
  ...
  [[IMGLYPhotoEditViewController alloc] initWithData:[NSData dataWithContentsOfFile:path]];
  ...
}
```

#### Opening the module from React Native

Now you're ready to launch the PhotoEditor SDK from your React Native code. Just load the PESDK` module from React Natives `NativeModules` and call the `present(...)` method, we defined above:

```javascript
const PESDK = NativeModules.PESDK
 
// ...
 
render () {
  return (
    <View style={{flex: 1, padding: 20, backgroundColor: '#e6e6e6'}}>
      <TouchableHighlight onPress={this.onOpenEditorPress.bind(this)}>
        <Text style={styles.button}>Push PESDK Editor</Text>
      </TouchableOpacity>
    </View>
  )
}
onOpenEditorPress () {
  // ...get your image path
  PESDK.present(imagePath)
}
```

#### Android Module

As you have seen, opening the PhotoEditor SDK from React Native can easily be done on iOS. Adding the same functionality to Android requires repeating the same steps in Java. First, create a native module that opens the PhotoEditor SDK, just as documented in our [docs](/guides/android/v3_1/introduction/getting_started):

```java
public class PESDKModule extends ReactContextBaseJavaModule {
    public PESDKModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }
 
    @Override
    public String getName() {
        return "PESDK";
    }
    
    @ReactMethod
    public void present(@NonNull String image) {
        if (getCurrentActivity() != null) {
            SettingsList settingsList = new SettingsList();
            settingsList.getSettingsModel(EditorLoadSettings.class)
                .setImageSourcePath(image, true)
                .getSettingsModel(EditorSaveSettings.class)
                .setExportDir(Directory.DCIM, "test")
                .setExportPrefix("result_")
                .setSavePolicy(
                        EditorSaveSettings.SavePolicy.KEEP_SOURCE_AND_CREATE_ALWAYS_OUTPUT
                );

            new PhotoEditorBuilder(getCurrentActivity())
                    .setSettingsList(settingsList)
                    .startActivityForResult(getCurrentActivity(), PESDK_EDITOR_RESULT);
        }
    }
}
```

On Android you need to register your module as a package and add that package to your application upon launch:

```java
public class PESDKPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new PESDKModule(reactContext));
        return modules;
    }
 
    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }
 
    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
```

```java
@NonNull
@Override
public List<ReactPackage> createAdditionalReactPackages() {
    // Add the packages you require here.
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
            new RNFSPackage(),
            new PESDKPackage()
    );
}
```

Thanks to React Native and the matching iOS/Android interfaces, thats all! Just fire up your React Native app on Android and you should be able to load the PhotoEditor SDK for Android.

## Moving on

Now you've got the SDKs wired in your React Native application and can customize them to your needs. You could try to bridge the configuration settings for iOS and Android, but we recommend to do any customization within the native modules. Just take a look at the corresponding docs for [iOS](/guides/ios/v6_5/features/configuration) and [Android](/guides/android/v3_1/features/configuration) and you'll be able to create an end to end photo editing experience within your React Native app in no time.

If you need more details, take a look at our corresponding [blog post](https://blog.photoeditorsdk.com/photoeditor-sdk-react-native-15179c589a55) or head to our [demo repository](https://github.com/imgly/pesdk-react-native-demo) on GitHub. Feel free to adapt our code and add the PhotoEditor SDK to your React Native app. We’re looking forward to your feedback and any pull requests, that further optimize our implementation.
