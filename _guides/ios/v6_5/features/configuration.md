---
layout: guides/ios/v6_5/content
title: &title Customization # title as shown in the menu and 

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
# Customization

The Photo Editor SDK can be customized to fit your needs. There are global settings to set things like
the background color of the app, but also closures that allow a in-depth customization.
Please note that by default the tint color determines the color of the icons.
Of course you are free to override that behaviour.

## Overview

The editor UI is divided in different sections. These can be customized using the configuration class,
and its subsequent members. Some members like `backgroundColor` can be set globally, and if needed locally.
That means, that if you set the `backgroundColor` of the `Configuration` to black, all tools have that `backgroundColor`,
unless you set another `backgroundColor` in the specific tool configuration.
The following image annotates the most common configuration members.
Please note that the background color of tool bar,
which sits on the bottom, is set through a property of the `toolbarController`.

![Common members](/assets/images/ios/commonMembers.png)

## Configuration class
The `Configuration` class contains all global settings and nested configurations for each submodule.
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

For more examples, please refer to the examples shown below, or checkout the example app.

## Using the closures

Most configuration objects offer closures to setup UI elements individually.
In that case they usually come with an array of actions that determines the available actions.
These closures will also have a `cell` and an `action` as parameters.
This is due that fact that most of our controllers use `UICollectionViews`.
For example, the main tool bar, presents all available actions, like filters, crop, orientation.
The closure is than called for each of these actions. So if you wish to change the crop button icon
you check the action type and set the image accordingly.

```swift
builder.configurePhotoEditorViewController { options in
    options.actionButtonConfigurationClosure = { cell, action in
        if action == .Crop {
            cell.imageView.image = ...
        }
    }

    options.actionButtonConfigurationClosure = { cell, action in
      cell.captionTintColor = UIColor.red
    }
}
```

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

We added the `.tool` method for convinience. Also note, that it is now possible to map to any subclass of `PhotoEditToolController`.
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

## Changing icons

You can register a block using the `PESDK.bundleImageBlock` property which gets called once for each icon that is used by the SDK. The block is passed the name of the image and within the block you should return your desired icon for the given name. Please note that the icons that you return should have the same dimensions as the default icons to ensure the best user experience.

## Adding stickers

Stickers are inserted into the SDK using a data source. The basic idea is taken from other components of
UIKit such as collection views. We provide a ready to use data source, the `StickerDataSource`. It just
takes an array of `Sticker` objects, and handles the rest for you. A `Sticker` object hold the meta data of a sticker, such as the image
for its `thumbnailURL`, of the caption for the menu. The `Sticker` class can handle local and remote resources.

## Adding frames

Similar to stickers frames are inserted into the SDK using a data source. We provide a ready to use data source, the `FrameDataSource`.
It takes an array or `Frame` objects, and handles the rest for you. A `Frame` object holds  usually holds multiple versions of the same image, each matching
a different crop ratio. That is to prevent distorted results. So if you app supports three different crop ratios, each frame should have an asset for each individual
crop ratio. To add an asset to a `Frame` object, use the `addImage(_ imageURL: URL, thumbnailURL: URL?, forRatio ratio: CGFloat)` function.
Just as the sticker data source, this data source supports local and remote sources.

## Adding fonts
With version 6 of our SDK, we added an easy way to use your own fonts.
The `TextToolControllerOptions` now has a `fonts` property that holds an array of `Font` objects.
The default is an empty array. In that case the SDK loads a default set of fonts.
A `Font` object is a simple collection of the meta data of a font, the `fontName`, the `displayName`
and the `path`. The `path` points to the font file, or is empty if system font should be added.
Since font names or their family names can get quite long or ugly, the string stored in the `displayName` property
is used within the UI. The `fontName` refers to the name of the font. That can be the family name.
That property is passed to the constructor of `UIFont`. If any font does not load, it is mostly due to
the wrong value of the `fontName` property. If you having trouble loading a font, please refer to the official documentation of `UIFont`,
to understand how the name must be constructed.

Here is an example font array that adds system fonts:
```swift
private func customizeTextTool(_ builder: ConfigurationBuilder) {
    builder.configureTextToolController { options in
        let fonts = [Font(displayName: "Arial", fontName: "ArialMT"),
                        Font(displayName: "Helvetica", fontName: "Helvetica"),
                        Font(displayName: "Avenir", fontName: "Avenir-Heavy"),
                        Font(displayName: "Chalk", fontName: "Chalkduster"),
                        Font(displayName: "Copperplate", fontName: "Copperplate"),
                        Font(displayName: "Noteworthy", fontName: "Noteworthy-Bold")
        ]
        options.fonts = fonts
    }
}
```
Supported types are **ttf** and **otf**.
