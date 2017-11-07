---
layout: guides/content
title: &title Getting Started # title as shown in the menu and
order: 1
menuitem: *title
platform: ios
version: v8
category:
  - guide
  - introduction

description: A quick guide on how to easily get started with the PhotoEditor SDK for iOS. Your kick-off to delight your users with top-notch editing capabilities.

tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


## Requirements

PhotoEditor SDK 8 requires Xcode 9.0, Swift 4.0 and iOS 9 and above. If you have to use older versions of Swift or support older versions of iOS, please have a look at previous versions.

## CocoaPods

PhotoEditor SDK is available via CocoaPods. If you're new to CocoaPods, [this Getting Started Guide will help you](https://guides.cocoapods.org/using/getting-started.html). CocoaPods is the preferred and simplest way to use the PhotoEditor SDK.

**Important:** Please make sure that you have a CocoaPods version >= 0.39.0 installed. You can check your version of CocoaPods with `pod --version`.

Here's what you have to add to your `Podfile`:

```ruby
use_frameworks!

pod 'PhotoEditorSDK'
```

Then run `pod install`.

## License file

Before using any components of the PhotoEditor SDK, you have to unlock the SDK using your license key file. It is important that you set the license key before using any of the SDK classes.

{% capture first_snippet %}
Swift
---
```swift
func application(_ application: UIApplication, willFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey : Any]? = nil) -> Bool {
  if let licenseURL = Bundle.main.url(forResource: "license", withExtension: "") {
    PESDK.unlockWithLicense(at: licenseURL)
  }

  return true
}
```
{% endcapture %}

{% capture second_snippet %}
Objective-C
---
```objc
- (BOOL)application:(UIApplication *)application willFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [PESDK unlockWithLicenseAt:[[NSBundle mainBundle] URLForResource:@"license" withExtension:@""]];
  return YES;
}
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-UNLOCK{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}


The license is digitally signed so it can not be altered without becoming invalid.
Our sample app comes with its own license, so you can try that right away.
To try our SDK in your own app, you'll have to request a trial license because a license is bound to a bundle identifier. You can request a demo license at [https://www.photoeditorsdk.com/pricing](https://www.photoeditorsdk.com/pricing).

Once you retrieved the license file it can be used to unlock the view controller.
The following examples demonstrates how to unlock the SDK.

## Manually

If you prefer not to use CocoaPods, you can integrate PhotoEditor SDK into your project manually via a dynamic framework.

1) Download the SDK [here](https://github.com/imgly/pesdk-ios-build/releases/latest), then simply drag `PhotoEditorSDK.framework` into the `Embedded Binaries` section of your target:

![Embedded Binaries]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/embedded-binaries.jpg)

If you are integrating the PhotoEditor SDK into an Objective-C only project you also have to set the `Always Embed Swift Standard Libraries` build setting to `Yes`.

2) Add a new `Run Script Phase` in your target’s `Build Phases`.

**IMPORTANT:** Make sure this `Run Script Phase` is below the `Embed Frameworks` build phase.
You can drag and drop build phases to rearrange them.
Paste the following line in this `Run Script Phase`'s script text field:

```bash
bash "$BUILT_PRODUCTS_DIR/$FRAMEWORKS_FOLDER_PATH/PhotoEditorSDK.framework/strip-framework.sh"
```

The script works around an [App Store submission bug](http://www.openradar.me/radar?id=6409498411401216) triggered by universal binaries. It also copies PhotoEditor SDK's bcsymbolmap files into your target's xcarchive. These bcsymbolmap files are required if you want to include app symbols for your application to receive symbolicated crash logs from Apple when you upload your app to the App Store.

![Run Script Phase]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/run-script-phase.jpg)

3) (Optional but recommended) You may want to copy debug symbols for debugging and crash reporting: Add PhotoEditorSDK.framework.dSYM to your Xcode project (do not add it to any targets - just add it to the tree) and add this folder as input file to the Run Script Phase of step 2). The script will copy the debug symbols into the product's directory and strip it from unneeded architectures. The dSYM file is part of the dmg download available [here](https://github.com/imgly/pesdk-ios-build/releases/latest).

![Run Script Phase]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/copy-dsym.jpg)


Our SDK provides two main view controllers. One to work with the camera and the other to edit an image.
In the following section, we will first explain how the licensing works and then how the basic view controllers are set up. 
We will also demonstrate how they can be embedded into a `UINavigationController`.

## Add Import Statement
You have to add an import statement like this:

{% capture first_snippet %}
Swift
---
```swift
import PhotoEditorSDK
```
{% endcapture %}

{% capture second_snippet %}
Objective-C
---
```objc
@import PhotoEditorSDK;
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-IMPORT{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

## Add a CameraViewController

The `CameraViewController` class is responsible for displaying an interface to interact with the camera. It provides user interface elements among others to enable the flash, toggle the camera and choose a filter. All you have to do is the following:

{% capture first_snippet %}
Swift
---
```swift
let cameraViewController = CameraViewController()
present(cameraViewController, animated: true, completion: nil)
```
{% endcapture %}

{% capture second_snippet %}
Objective-C
---
```objc
PESDKCameraViewController *cameraViewController = [[PESDKCameraViewController alloc] init];
[self presentViewController:cameraViewController animated:YES completion:nil];
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-CAMERA{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

The `CameraViewController` has a `completionBlock` property. When it is set to `nil`, the photo is passed to the `PhotoEditViewController`, which is then presented modally.

## Add a PhotoEditViewController

The `PhotoEditViewController` class is responsible for presenting and rendering an image. It can be presented modally in which case it will display a toolbar at the bottom or it can be pushed onto a `UINavigationController` in which case it will use the navigation controller’s navigation bar. It also handles presentation of `PhotoEditToolController` subclasses.

To present a `PhotoEditViewController` just add these few lines:

{% capture first_snippet %}
Swift
---
```swift
let sampleImage = UIImage(named: "sample_image")

let photoEditViewController = PhotoEditViewController(photo: sampleImage!)
photoEditViewController.delegate = self

present(photoEditViewController, animated: true, completion: nil)
```
{% endcapture %}

{% capture second_snippet %}
Objective-C
---
```objc
PESDKConfiguration *configuration = [[PESDKConfiguration alloc] initWithBuilder:^(PESDKConfigurationBuilder * _Nonnull builder) {
  // See Configuration section
}];

UIImage *sampleImage = [UIImage imageNamed:@"sample_image"];

PESDKPhotoEditViewController *photoEditViewController = [[PESDKPhotoEditViewController alloc] initWithPhoto:sampleImage configuration:configuration];
photoEditViewController.delegate = self;

[self presentViewController:photoEditViewController animated:YES completion:nil];
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-EDITOR{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

Here, we set the `delegate` of the `photoEditViewController` object to `self`.
That means that the presenting view controller must implement the `PhotoEditViewControllerDelegate` protocol.
The methods of the `PhotoEditViewControllerDelegate` protocol are designed to inform the delegate about the result of the editing process (for example cancellation).

The method that gets called when the user confirms the changes is
`func photoEditViewController(_ photoEditViewController: PhotoEditViewController, didSave image: UIImage, and data: Data)`.
It provides the resulting image as an `UIImage` and a `Data` object. Please note that the EXIF data of the input image is only fully contained within the `Data` object. Please refer to the next section for more information about EXIF handling.

## Embed in an UINavigationController

The controllers provided with the SDK can be embedded in an `UINavigationController`. The following code demonstrates how.

{% capture first_snippet %}
Swift
---
```swift
let sampleImage = UIImage(named: "sample_image")

let photoEditViewController = PhotoEditViewController(photo: sampleImage!)
photoEditViewController.delegate = self

let navigationController = UINavigationController(rootViewController: photoEditViewController)
present(navigationController, animated: true, completion: nil)
```
{% endcapture %}

{% capture second_snippet %}
Objective-C
---
```objc
PESDKConfiguration *configuration = [[PESDKConfiguration alloc] initWithBuilder:^(PESDKConfigurationBuilder * _Nonnull builder) {
  // See Configuration section
}];

UIImage *sampleImage = [UIImage imageNamed:@"sample_image"];

PESDKPhotoEditViewController *photoEditViewController = [[PESDKPhotoEditViewController alloc] initWithPhoto:sampleImage configuration:configuration];
photoEditViewController.delegate = self;

UINavigationController *navigationController = [[UINavigationController alloc] initWithRootViewController:photoEditViewController];
[self presentViewController:navigationController animated:YES completion:nil];
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-NAVIGATION{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

To try these examples, and find out about more options please take a look at the sample project provided [here](https://github.com/imgly/pesdk-ios-examples).
