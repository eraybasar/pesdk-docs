---
layout: guides/content
title: &title Configuration # title as shown in the menu and 

menuitem: *title
order: 2
platform: android
version: v4
category: 
  - guide
  - introduction
  
description: The PhotoEditor SDK for Android can easily be tailored to meet your business needs. Learn how to swiftly create the editor your use-case requires.
  
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

![Editor Tools]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_editor_tools.png){: width="360px"}

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

## Select available crop ratios

Check out our [transform documentation]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/transform).

## Configuring available fonts

Take a look at the [text documentation]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/text).

## Adding or removing stickers

Take a look at the [stickers documentation]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/stickers).

## Adding or removing filters

Take a look at the [filters documentation]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/filters).


