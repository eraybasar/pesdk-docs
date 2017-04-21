---
layout: guides/ios/v6_5/content
title: &title Configuration # title as shown in the menu and 

menuitem: *title
order: 0
platform:
  - ios
version:
  - v6_5
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

# Configuration

In order to configure the PhotoEditor SDK to match your needs, you modify the default configuration. The `Configuration` class contains all global settings and nested configurations for each submodule.
We decided to use a builder-pattern, meaning the properties of any configuration object are read-only.
The constructor of each configuration class has a parameter for its dedicated builder.
Hence all default settings of our SDK are set in the default builder classes.
To change the configuration of any module, you need to set up your own builder, like so:

```swift
...
let configuration = Configuration() { builder in
    builder.backgroundColor = UIColor.redColor()
}

let cameraViewController = CameraViewController(configuration: configuration)
...
```

For more configuration examples, please refer to the examples shown below. To find out how to customize the UI of the PhotoEditor SDK, take a look at the [customization](/guides/ios/v6_5/ui/customization) documentation. And to see our default configuration in action, check out our [example app](https://itunes.apple.com/de/app/img.ly-camera-pro-photo-sharing/id589839231?mt=8).

## Selecting menu items

With version 6 we changed to way, menu items are picked. Now there is a constructor overload for the `PhotoEditViewController`,
that takes an array of `MenuItem`'s. We recommend having a separate function to setup the menu items like so,

```swift
func menuItems(with configuration: Configuration) -> [MenuItem] {
    return [
        .tool("Transform", UIImage(named: "ic_crop_48pt", in:  Bundle.imglyKitBundle, compatibleWith: nil)!, TransformToolController(configuration: configuration))
    ]
}
```

We added the `.tool` method for convenience. Also note, that it is now possible to map to any subclass of `PhotoEditToolController`.
That makes it easier to add your very own custom tool controller to the SDK.
Here is the code for the default menu items.

```swift
/// The default items that will be used for the main menu.
///
/// - Parameter configuration: A configuration instance to use to configure the tools.
/// - Returns: An array with the default menu items.
public static func defaultItems(with configuration: Configuration) -> [MenuItem] {
    return [
        .tool("Transform".localized, UIImage.bundledTemplateImage(named: "ic_crop_48pt"), TransformToolController(configuration: configuration)),
        .tool("Filter".localized, UIImage.bundledTemplateImage(named: "ic_filter_48pt"), FilterToolController(configuration: configuration)),
        .tool("Adjust".localized, UIImage.bundledTemplateImage(named: "ic_adjust_48pt"), AdjustToolController(configuration: configuration)),
        .tool("Text".localized, UIImage.bundledTemplateImage(named: "ic_text_48pt"), TextToolController(configuration: configuration)),
        .tool("Sticker".localized, UIImage.bundledTemplateImage(named: "ic_sticker_48pt"), StickerToolController(configuration: configuration)),
        .tool("Frame".localized, UIImage.bundledTemplateImage(named: "ic_frame_48pt"), FrameToolController(configuration: configuration)),
        .tool("Brush".localized, UIImage.bundledTemplateImage(named: "ic_brush_48pt"), BrushToolController(configuration: configuration)),
        .tool("Focus".localized, UIImage.bundledTemplateImage(named: "ic_focus_48pt"), FocusToolController(configuration: configuration)),
        .action("Magic".localized, UIImage.bundledTemplateImage(named: "ic_magic_48pt"), { photoEditModel in
            var updatedPhotoEditModel = photoEditModel
            updatedPhotoEditModel.isAutoEnhancementEnabled = !updatedPhotoEditModel.isAutoEnhancementEnabled
            photoEditModel = updatedPhotoEditModel
        })
    ]
}
```
