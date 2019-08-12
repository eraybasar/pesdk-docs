---
published: true # Either published or not
layout: guides/content
title: &title Introduction # title as shown in the menu and

menuitem: *title
order: 0
platform: ios
version: v10
description: The PhotoEditor SDK for iOS can easily be tailored to meet your business needs. Learn how to swiftly create the editor your use-case requires.

category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor
---

The PhotoEditor SDK can be customized to meet your requirements. There are global settings to set things like
the menu background color of the app, but also closures that allow an in-depth customization.
Please note that by default the tint color determines the color of the icons.
Of course, you are free to override that behavior.

In order to configure the PhotoEditor SDK, you have to modify the default configuration. The `Configuration` class contains all global settings and nested configurations for each submodule.
We decided to use a builder-pattern, that means that the properties of any configuration object are read-only.
The constructor of each configuration class has a parameter for its dedicated builder.
Hence, all default settings of our SDK are set in the default builder classes.
To change the configuration of any module, you have to set up your own builder, as follows:

{% capture first_snippet %}
Swift
---
```swift
// ...
let configuration = Configuration { builder in
  builder.theme.menuBackgroundColor = .red
}

let cameraViewController = CameraViewController(configuration: configuration)
// ...
```
{% endcapture %}

{% capture second_snippet %}
Objective-C
---
```objc
// ...
PESDKConfiguration *configuration = [[PESDKConfiguration alloc] initWithBuilder:^(PESDKConfigurationBuilder * _Nonnull builder) {
  builder.theme.menuBackgroundColor = UIColor.redColor;
}];

PESDKCameraViewController *cameraViewController = [[PESDKCameraViewController alloc] initWithConfiguration:configuration];
// ...
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-CONFIG{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

In order to modify the options of any specific tool, you need to modify the corresponding options using the same pattern. For example, changing the menu background color of the transform tool can be done using the following code:

{% capture first_snippet %}
Swift
---
```swift
let configuration = Configuration { builder in
  builder.configureTransformToolController { options in
    options.menuBackgroundColor = .darkGray
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
    options.menuBackgroundColor = UIColor.darkGrayColor;
  }];
}];
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-TRANSFORMCONFIG1{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

For more configuration examples, please refer to the examples shown below or take a look at the {% include guides/ios/demo-repository.md %}. Or take a look at our default configuration in action and check out our {% include guides/ios/example-app.md %}.


## Using the closures

Most configuration objects offer closures to setup UI elements individually.
In that case, they usually come with an array of actions that determine the available actions.
These closures will also have a `cell` and a `menuItem` as parameters.
This is due to the fact that most of our controllers use `UICollectionView`s.
For example, the main tool bar presents all available tools like filters and transform.
The closure is then called for each of these menu items. If you wish to change the transform button icon
you have to check the menu item and set the image accordingly.

{% capture first_snippet %}
Swift
---
```swift
builder.configurePhotoEditViewController { options in
  options.actionButtonConfigurationClosure = { cell, menuItem in
    switch menuItem {
    case .tool(let toolMenuItem):
      if toolMenuItem.toolControllerClass == TransformToolController.self {
        cell.iconImageView.image = UIImage(named: "sample_image")
        // ...
      }
    default:
      break
    }

    cell.contentTintColor = .red
  }
}
```
{% endcapture %}

{% capture second_snippet %}
Objective-C
---
```objc
[builder configurePhotoEditViewController:^(PESDKPhotoEditViewControllerOptionsBuilder * _Nonnull options) {
  options.actionButtonConfigurationBlock = ^(PESDKMenuCollectionViewCell * _Nonnull cell, PESDKPhotoEditMenuItem * _Nonnull menuItem) {
    if ([menuItem.toolMenuItem.title isEqualToString:@"Transform"]) {
      cell.iconImageView.image = [UIImage imageNamed:@"sample_image"];
      // ...
    }

    cell.contentTintColor = UIColor.redColor;
  };
}];
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-TRANSFORMCONFIG2{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}
