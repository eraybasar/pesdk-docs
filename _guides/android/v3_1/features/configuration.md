---
layout: guides/android/v3_1/content
title: &title Configuration # title as shown in the menu and 

menuitem: *title
order: 0
platform:
  - android
version:
  - v3_1
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---
# Configuration

The `ImgLyConfig` provides a lot of functions for customizing the Editor.
To modify this configuration you need to generate a default object using a new `SettingsList` object. You can then configure the SDK using the `ImglyConfig` object returned from `getConfig()`. Afterwards you add the modified `settingsList` to the `CameraPreviewBuilder` or the `PhotoEditorBuilder`.

```java
SettingsList settingsList = new SettingsList();
ImgLyConfig config = settingsList.getConfig()

/********************************
 * Do your configuration modifications. *
 ********************************/

 new CameraPreviewBuilder(this)
    .setSettingsList(settingsList)
    .startActivityForResult(this, CAMERA_PREVIEW_RESULT);
```

## Toolset configuration

![Editor Tools](/assets/images/android/imgly_editor_tools.png){: width="360px"}

In order to change the tools or rearrange them, use the `setTools()` method of the `ImgLyConfig` object. Before this you can use the `getTools()` method to get an `ArrayList` containing the default tools. You can use the `clear()` method to clear the list and refill it with your selection of tools in the preferred order or update it directly. You can also add custom tools by extending
the `AbstractEditorTool` class.

A single `EditorTool` object takes two parameters:

1. A resource identifier of the tool name
2. A drawable resource identifier of the icon

```java
ArrayList<AbstractEditorTool> tools = new ArrayList<>();

/* This is the default configuration: */

tools.add(new CropTool(R.string.imgly_tool_name_crop,               R.drawable.imgly_icon_tool_crop));
tools.add(new OrientationTool(R.string.imgly_tool_name_orientation, R.drawable.imgly_icon_tool_orientation));
tools.add(new Divider());
tools.add(new FilterTool(R.string.imgly_tool_name_filter,           R.drawable.imgly_icon_tool_filters));
tools.add(new ColorMatrixTool(R.string.imgly_tool_name_adjust,      R.drawable.imgly_icon_tool_adjust));
tools.add(new Divider());
tools.add(new TextTool(R.string.imgly_tool_name_text,               R.drawable.imgly_icon_tool_text));
tools.add(new StickerTool(R.string.imgly_tool_name_sticker,         R.drawable.imgly_icon_tool_sticker));
tools.add(new Divider());
tools.add(new FocusTool(R.string.imgly_tool_name_focus,             R.drawable.imgly_icon_tool_focus));

config.setTools(tools);
```

## Crop configuration

![Editor Crop](/assets/images/android/imgly_editor_crop.png){: width="360px"}

You can set your own crop configuration using the `getCropConfig()` method.

There are two types of crop configurations:

* Fixed aspect ratio while keeping the resolution
* Fixed aspect ratio with fixed resolution

<div class="todo">
Ask Sven about details and extract comment from code block.
</div>

```java

ArrayList<CropAspectConfig> cropConfig = new ArrayList<>();

/*
 * For a crop configuration with a fixed aspect ratio, create a new CropAspectConfig with the
 * following parameters:
 *
 *  Parameter 1 (Optional): Resource identifier of the crop name.
 *  Parameter 2: Width
 *  Parameter 3: Height
 */

/* Add a the custom crop configuration (optional) */
cropConfig.add(CropAspectConfig.FREE_CROP);

/* Add a 16:9 crop configuration */
cropConfig.add(new CropAspectConfig(16, 9));

/* Add a 4:3 crop configuration with name */
cropConfig.add(new CropAspectConfig(R.string.my_4_3_crop_name, 4, 3));

config.setAspectConfig(cropConfig);
```

## Further configurations

Take a look at the [text documentation](/guides/android/v3_1/features/text).

## ​Set stickers

Take a look at the [stickers documentation](/guides/android/v3_1/features/stickers).

## Adding or removing filters

Take a look at the [filters documentation](/documentation/android/filters).


