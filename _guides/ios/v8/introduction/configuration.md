---
layout: guides/content
title: &title Configuration # title as shown in the menu and

menuitem: *title
order: 2
platform: ios
version: v8
category:
  - guide
  - introduction

description: The PhotoEditor SDK for iOS can easily be tailored to meet your business needs. Learn how to swiftly create the editor your use-case requires.

tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


The PhotoEditor SDK can be customized to meet your requirements. There are global settings to set things like
the background color of the app, but also closures that allow an in-depth customization.
Please note that by default the tint color determines the color of the icons.
Of course you are free to override that behavior.

In order to configure the PhotoEditor SDK you have to modify the default configuration. The `Configuration` class contains all global settings and nested configurations for each submodule.
We decided to use a builder-pattern, that means that the properties of any configuration object are read-only.
The constructor of each configuration class has a parameter for its dedicated builder.
Hence, all default settings of our SDK are set in the default builder classes.
To change the configuration of any module, you have to set up your own builder, as follows:

{% capture first_snippet %}
Swift
---
```swift
...
let configuration = Configuration() { builder in
    builder.backgroundColor = .red
}

let cameraViewController = CameraViewController(configuration: configuration)
...
```
{% endcapture %}

{% capture second_snippet %}
Objective-C
---
```objc
...
PESDKConfiguration *configuration = [[PESDKConfiguration alloc] initWithBuilder:^(PESDKConfigurationBuilder * _Nonnull builder) {
  builder.backgroundColor = UIColor.redColor;
}];

PESDKCameraViewController *cameraViewController = [[PESDKCameraViewController alloc] initWithConfiguration:configuration];
...

```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-CONFIG{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

In order to modify the options of any specific tool, you need to modify the corresponding options using the same pattern. For example, changing the background color of the transform tool can be done using the following code:

{% capture first_snippet %}
Swift
---
```swift
let configuration = Configuration { builder in
  builder.configureTransformToolController { options in
    options.backgroundColor = .darkGray
  }
}
```
{% endcapture %}

{% capture second_snippet %}
Objective-C
---
```objc
PESDKConfiguration *configuration = [[PESDKConfiguration alloc] initWithBuilder:^(PESDKConfigurationBuilder * _Nonnull builder) {
  [builder configureTransformToolController:^(PESDKTransformToolControllerOptionsBuilder * _Nonnull options) {
    options.backgroundColor = UIColor.darkGrayColor;
  }];
}];
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-TRANSFORMCONFIG1{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

For more configuration examples, please refer to the examples shown below or take a look at the {% include guides/ios/demo-repository.md %}. Or take a look at our default configuration in action and check out our {% include guides/ios/example-app.md %}.

## Interface

The editor UI is divided into different sections. Some members like `backgroundColor` can be set globally, and if needed locally.
That means, that if you set the `backgroundColor` of the `Configuration` to black, all tools have that `backgroundColor`,
unless you set another `backgroundColor` in the specific tool configuration.
The following image annotates the most common configuration members.
Please note that the background color of the toolbar,
which sits at the bottom, is set through a property of the `PhotoEditViewController`.

![Common members]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/commonMembers.jpg)

### Using the closures

Most configuration objects offer closures to setup UI elements individually.
In that case they usually come with an array of actions that determine the available actions.
These closures will also have a `cell` and an `menuItem` as parameters.
This is due to the fact that most of our controllers use `UICollectionView`s.
For example, the main tool bar presents all available tools like filters and transform.
The closure is then called for each of these menu items. If you wish to change the transform button icon
you have to check the menu item and set the image accordingly.

{% capture first_snippet %}
Swift
---
```swift
builder.configurePhotoEditorViewController { options in
  options.actionButtonConfigurationClosure = { cell, menuItem in
    switch menuItem {
      case .tool(let toolMenuItem):
        if toolMenuItem.toolControllerClass == TransformToolController.self {
          cell.imageView.image = ...
        }
      default:
        break
    }

    cell.captionTintColor = UIColor.red
  }
}
```
{% endcapture %}

{% capture second_snippet %}
Objective-C
---
```objc
[builder configurePhotoEditorViewController:^(PESDKPhotoEditViewControllerOptionsBuilder * _Nonnull options) {
  options.actionButtonConfigurationBlock = ^(PESDKIconCaptionCollectionViewCell * _Nonnull cell, PESDKPhotoEditMenuItem * _Nonnull menuItem) {
    if ([menuItem.toolMenuItem.title isEqualToString:@"Transform"]) {
      cell.imageView.image = ...
    }

    cell.captionTintColor = UIColor.redColor;
  };
}];
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-TRANSFORMCONFIG2{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}


### Changing icons

You can register a block using the `PESDK.bundleImageBlock` property which gets called once for each icon that is used by the SDK. The block is passed with the name of the image and within the block you should return your desired icon for the given name. Please note that the icons that you return should have the same dimensions as the default icons to ensure the best user experience.


### Selecting menu items

`PhotoEditViewController` has a constructor which takes an array of `PhotoEditMenuItem`s.

`PhotoEditMenuItem` is an enum with two possible cases.
1. `case tool(ToolMenuItem)` represents a tool that can be pushed onto the stack. It has a `ToolMenuItem` as an associated value, which has a title, an icon and the class of the tool that should be instantiated.
2. `case action(ActionMenuItem)` represents an action that should be executed when this menu item is selected. It has an `ActionMenuItem` as an associated value, which has a title, an icon, the closure that should be executed and which can update the current photo edit model, and a state closure that is used to query the active state of the action.

The `.tool` case can be used to present any subclass of `PhotoEditToolController`, making it easier to add your very own custom tool controllers to the SDK.
Here is the code for the current default set of menu items:

```swift
/// Creates the default menu items (transform, filter, adjust, sticker, text, overlay, frame,
/// brush, focus and auto enhancement)
public static var defaultItems: [PhotoEditMenuItem] {
  let menuItems: [MenuItem?] = [
    ToolMenuItem.createTransformToolItem(),
    ToolMenuItem.createFilterToolItem(),
    ToolMenuItem.createAdjustToolItem(),
    ToolMenuItem.createStickerToolItem(),
    ToolMenuItem.createTextToolItem(),
    ToolMenuItem.createOverlayToolItem(),
    ToolMenuItem.createFrameToolItem(),
    ToolMenuItem.createBrushToolItem(),
    ToolMenuItem.createFocusToolItem(),
    ActionMenuItem.createMagicItem()
  ]

  let photoEditMenuItems: [PhotoEditMenuItem] = menuItems.flatMap { menuItem in
    switch menuItem {
    case let menuItem as ToolMenuItem:
      return .tool(menuItem)
    case let menuItem as ActionMenuItem:
      return .action(menuItem)
    default:
      return nil
    }
  }

  return photoEditMenuItems
}
```
