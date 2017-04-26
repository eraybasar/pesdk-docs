---
layout: guides/ios/v6_5/content
title: &title Configuration # title as shown in the menu and 

menuitem: *title
order: 2
platform: ios
version: v6_5
category: 
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

# Configuration

The PhotoEditor SDK can be customized to fit your needs. There are global settings to set things like
the background color of the app, but also closures that allow a in-depth customization.
Please note that by default the tint color determines the color of the icons.
Of course you are free to override that behaviour.

In order to configure the PhotoEditor SDK you modify the default configuration. The `Configuration` class contains all global settings and nested configurations for each submodule.
We decided to use a builder-pattern, meaning the properties of any configuration object are read-only.
The constructor of each configuration class has a parameter for its dedicated builder.
Hence all default settings of our SDK are set in the default builder classes.
To change the configuration of any module, you need to set up your own builder, like so:

```swift
...
let configuration = Configuration() { builder in
    builder.backgroundColor = .red
}

let cameraViewController = CameraViewController(configuration: configuration)
...
```

In order to modify the options of any specific tool, you need to modify the corresponding options using the same pattern. As an example, changing the background color of the transform tool can be done using the following code:

```swift
let configuration = Configuration { builder in
    builder.configureTransformToolController { options in
        options.backgroundColor = .darkGray
}
```

For more configuration examples, please refer to the examples shown below or take a look at the {% include guides/ios/demo-repository.md %}. And to see our default configuration in action, check out our {% include guides/ios/example-app.md %}.

## Interface

The editor UI is divided in different sections. Some members like `backgroundColor` can be set globally, and if needed locally.
That means, that if you set the `backgroundColor` of the `Configuration` to black, all tools have that `backgroundColor`,
unless you set another `backgroundColor` in the specific tool configuration.
The following image annotates the most common configuration members.
Please note that the background color of the toolbar,
which sits on the bottom, is set through a property of the `toolbarController`.

![Common members]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/commonMembers.png)

### Using the closures

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

### Changing icons

You can register a block using the `PESDK.bundleImageBlock` property which gets called once for each icon that is used by the SDK. The block is passed the name of the image and within the block you should return your desired icon for the given name. Please note that the icons that you return should have the same dimensions as the default icons to ensure the best user experience.


### Selecting menu items

With version 6 we changed the way, menu items are configured. Now there is a constructor overload for the `PhotoEditViewController`,
that takes an array of `MenuItem`'s. We recommend having a separate function to setup the menu items:

```swift
func menuItems(with configuration: Configuration) -> [MenuItem] {
    return [
        .tool("Transform", UIImage(named: "ic_crop_48pt", in:  Bundle.imglyKitBundle, compatibleWith: nil)!, TransformToolController(configuration: configuration))
    ]
}
```

We added the `.tool` method for convenience. Also note, that it is now possible to map to any subclass of `PhotoEditToolController`.
That makes it easier to add your very own custom tool controller to the SDK.
Here is the code for the default set of menu items:

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
