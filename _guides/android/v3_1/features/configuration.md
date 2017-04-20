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
To modify this config you need to create a new SettingsList() an set it to the `CameraPreviewBuilder`or the `PhotoEditorBuilder`

```java
SettingsList settingsList = new SettingsList();
ImgLyConfig config = settingsList.getConfig()

/********************************
 * Do you config modifications. *
 ********************************/

 new CameraPreviewBuilder(this)
    .setSettingsList(settingsList)
    .startActivityForResult(this, CAMERA_PREVIEW_RESULT);
```

## Toolset configuration

![Editor Tools](/assets/images/android/imgly_editor_tools.png){: width="360px"}

In order to change the tools or rearrange them, use the `setTools()` method. Before this you can use the `getTools()` method to get an `ArrayList` containing the default tools. You can use the `clear()` method to clear the list and re-fill it with the tools you like in any order you prefer or you can set direcly. You can also add custom tools by extending
the `AbstractEditorTool` class.

```java
ArrayList<AbstractEditorTool> tools = new ArrayList<>();

/*  All tools need the following parameters:
 *   Parameter 1: Resource identifier of the tool name (String)
 *   Parameter 2: Drawable resource identifier of the icon (String)
 */

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

## ​Fonts configuration

Take a look at the [text documentation](/guides/android/v3_1/features/text).

## ​Set stickers

Take a look at the [stickers documentation](/guides/android/v3_1/features/stickers).

## Adding or removing filters

Take a look at the [filters documentation](/documentation/android/filters).


