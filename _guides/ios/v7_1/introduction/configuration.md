---
layout: guides/content
title: &title Configuration # title as shown in the menu and

menuitem: *title
order: 2
platform: ios
version: v7_1
category:
  - guide
  - introduction

description: The PhotoEditor SDK for iOS can easily be tailored to meet your business needs. Learn how to swiftly create the editor your use-case requires.

tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

# Configuration

The PhotoEditor SDK can be customized to meet your requirements. There are global settings to set things like
the background color of the app, but also closures that allow an in-depth customization.
Please note that by default the tint color determines the color of the icons.
Of course you are free to override that behavior.

In order to configure the PhotoEditor SDK you have to modify the default configuration. The `Configuration` class contains all global settings and nested configurations for each submodule.
We decided to use a builder-pattern, that means that the properties of any configuration object are read-only.
The constructor of each configuration class has a parameter for its dedicated builder.
Hence, all default settings of our SDK are set in the default builder classes.
To change the configuration of any module, you have to set up your own builder, as follows:

```swift
...
let configuration = Configuration() { builder in
    builder.backgroundColor = .red
}

let cameraViewController = CameraViewController(configuration: configuration)
...
```

In order to modify the options of any specific tool, you need to modify the corresponding options using the same pattern. For example, changing the background color of the transform tool can be done using the following code:

```swift
let configuration = Configuration { builder in
    builder.configureTransformToolController { options in
        options.backgroundColor = .darkGray
}
```

For more configuration examples, please refer to the examples shown below or take a look at the {% include guides/ios/demo-repository.md %}. Or take a look at our default configuration in action and check out our {% include guides/ios/example-app.md %}.

## Interface

The editor UI is divided into different sections. Some members like `backgroundColor` can be set globally, and if needed locally.
That means, that if you set the `backgroundColor` of the `Configuration` to black, all tools have that `backgroundColor`,
unless you set another `backgroundColor` in the specific tool configuration.
The following image annotates the most common configuration members.
Please note that the background color of the toolbar,
which sits at the bottom, is set through a property of the `toolbarController`.

![Common members]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/commonMembers.jpg)

### Using the closures

Most configuration objects offer closures to setup UI elements individually.
In that case they usually come with an array of actions that determine the available actions.
These closures will also have a `cell` and an `action` as parameters.
This is due to the fact that most of our controllers use `UICollectionViews`.
For example, the main tool bar presents all available actions like filters, crop, orientation.
The closure is then called for each of these actions. So if you wish to change the crop button icon
you have to check the action type and set the image accordingly.

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

You can register a block using the `PESDK.bundleImageBlock` property which gets called once for each icon that is used by the SDK. The block is passed with the name of the image and within the block you should return your desired icon for the given name. Please note that the icons that you return should have the same dimensions as the default icons to ensure the best user experience.


### Selecting menu items

With version 6 we changed the way menu items are configured. Now there is a new constructor for the `PhotoEditViewController`,
that takes an array of `MenuItem`'s. We recommend having a separate function to setup the menu items:

```swift
func menuItems(with configuration: Configuration) -> [MenuItem] {
    return [
        .tool("Transform", UIImage(named: "ic_crop_48pt", in: Bundle.pesdkBundle, compatibleWith: nil)!, TransformToolController(configuration: configuration))
    ]
}
```

`MenuItem` is an enum with three possible cases.
1. `case tool(String, UIImage, PhotoEditToolController)` represents a tool that can be pushed onto the stack. It has a title, an icon and the instantiated tool as associated values.
2. `case action(String, UIImage, (inout PhotoEditModel) -> Void, ((PhotoEditModel) -> Bool)?)` represents an action that should be run when this menu item is selected. It has a title, an icon, the closure that should be run and which can update the current photo edit model, and a state closure that is used to query the active state of the action as associated values.
3. `case separator` represents a visual separator in the menu. It has no associated values.

The `.tool` case can be used to present any subclass of `PhotoEditToolController`, making it easier to add your very own custom tool controllers to the SDK.
Here is the code for the current default set of menu items:

```swift
/// The default items that will be used for the main menu.
///
/// - Parameter configuration: A configuration instance to use to configure the tools.
/// - Returns: An array with the default menu items.
public static func defaultItems(with configuration: Configuration) -> [MenuItem] {
  return [
    .tool("Transform".localized, UIImage.bundledTemplateImage(named: "imgly_icon_tool_transform_48pt"), TransformToolController(configuration: configuration)),
    .tool("Filter".localized, UIImage.bundledTemplateImage(named: "imgly_icon_tool_filter_48pt"), FilterToolController(configuration: configuration)),
    .tool("Adjust".localized, UIImage.bundledTemplateImage(named: "imgly_icon_tool_adjust_48pt"), AdjustToolController(configuration: configuration)),
    .tool("Sticker".localized, UIImage.bundledTemplateImage(named: "imgly_icon_tool_sticker_48pt"), StickerToolController(configuration: configuration)),
    .tool("Text".localized, UIImage.bundledTemplateImage(named: "imgly_icon_tool_text_48pt"), TextToolController(configuration: configuration)),
    .tool("Overlay".localized, UIImage.bundledTemplateImage(named: "imgly_icon_tool_overlay_48pt"), OverlayToolController(configuration: configuration)),
    .tool("Frame".localized, UIImage.bundledTemplateImage(named: "imgly_icon_tool_frame_48pt"), FrameToolController(configuration: configuration)),
    .tool("Brush".localized, UIImage.bundledTemplateImage(named: "imgly_icon_tool_brush_48pt"), BrushToolController(configuration: configuration)),
    .tool("Focus".localized, UIImage.bundledTemplateImage(named: "imgly_icon_tool_focus_48pt"), FocusToolController(configuration: configuration)),
    .action("Magic".localized, UIImage.bundledTemplateImage(named: "imgly_icon_tool_magic_48pt"), { photoEditModel in
      var updatedPhotoEditModel = photoEditModel
      updatedPhotoEditModel.isAutoEnhancementEnabled = !updatedPhotoEditModel.isAutoEnhancementEnabled
      photoEditModel = updatedPhotoEditModel

      if updatedPhotoEditModel.isAutoEnhancementEnabled {
        PESDK.analytics.logEvent(.autoEnhancementOn)
      } else {
        PESDK.analytics.logEvent(.autoEnhancementOff)
      }
    }, { photoEditModel in
      photoEditModel.isAutoEnhancementEnabled
    })
  ]
}
```
