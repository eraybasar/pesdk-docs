---
layout: guides/content
title: &title Menu Items # title as shown in the menu and

menuitem: *title
order: 6
platform: android
version: v7
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

## Toolset configuration

![Editor Tools]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/screenshot_editor_toolbar.jpg){: width="360px"}

In order to change the tools or rearrange them, use the [`setToolList`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/model/state/UiConfigMainMenu.html) method of the [`UiConfigMainMenu`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/model/state/UiConfigMainMenu.html) object. Before this, you can use the `getTools()` method to get an `ArrayList` containing the default tools. You can use the `clear()` method to clear the list and refill it with your selection of tools in the preferred order or update it directly. You can also add custom tools by extending
the `AbstractEditorTool` class.

A single [`ToolItem`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/panels/item/ToolItem.html) object takes three parameters:

1. ID of the tool panel
2. The tool name
3. ImageSource of the icon

{% capture first_snippet_ExampleConfigUtility_configEditorTools %}
Java
---
``````java
// Obtain the config
UiConfigMainMenu uiConfigMainMenu = settingsList.getSettingsModel(UiConfigMainMenu.class);
// Set the tools you want keep sure you licence is cover the feature and do not forget to include the correct modules in your build.gradle
uiConfigMainMenu.setToolList(
  new ToolItem("imgly_tool_transform", R.string.pesdk_transform_title_name, ImageSource.create(R.drawable.imgly_icon_tool_transform)),
  new ToolItem("imgly_tool_filter", R.string.pesdk_filter_title_name, ImageSource.create(R.drawable.imgly_icon_tool_filters)),
  new ToolItem("imgly_tool_adjustment", R.string.pesdk_adjustments_title_name, ImageSource.create(R.drawable.imgly_icon_tool_adjust)),
  new ToolItem("imgly_tool_sticker_selection", R.string.pesdk_sticker_title_name, ImageSource.create(R.drawable.imgly_icon_tool_sticker)),
  new ToolItem("imgly_tool_text_design", R.string.pesdk_textDesign_title_name, ImageSource.create(R.drawable.imgly_icon_tool_text_design)),
  new ToolItem("imgly_tool_text", R.string.pesdk_text_title_name, ImageSource.create(R.drawable.imgly_icon_tool_text)),
  new ToolItem("imgly_tool_overlay", R.string.pesdk_overlay_title_name, ImageSource.create(R.drawable.imgly_icon_tool_overlay)),
  new ToolItem("imgly_tool_frame", R.string.pesdk_frame_title_name, ImageSource.create(R.drawable.imgly_icon_tool_frame)),
  new ToolItem("imgly_tool_brush", R.string.pesdk_brush_title_name, ImageSource.create(R.drawable.imgly_icon_tool_brush)),
  new ToolItem("imgly_tool_focus", R.string.pesdk_focus_title_name, ImageSource.create(R.drawable.imgly_icon_tool_focus))
);
``````
{% endcapture %}{% capture second_snippet_ExampleConfigUtility_configEditorTools %}
Kotlin
---
``````kotlin
// Obtain the config
settingsList.getSettingsModel(UiConfigMainMenu::class.java).apply {
    // Set the tools you want keep sure you licence is cover the feature and do not forget to include the correct modules in your build.gradle
    setToolList(
      ToolItem("imgly_tool_transform", R.string.pesdk_transform_title_name, ImageSource.create(R.drawable.imgly_icon_tool_transform)),
      ToolItem("imgly_tool_filter", R.string.pesdk_filter_title_name, ImageSource.create(R.drawable.imgly_icon_tool_filters)),
      ToolItem("imgly_tool_adjustment", R.string.pesdk_adjustments_title_name, ImageSource.create(R.drawable.imgly_icon_tool_adjust)),
      ToolItem("imgly_tool_sticker_selection", R.string.pesdk_sticker_title_name, ImageSource.create(R.drawable.imgly_icon_tool_sticker)),
      ToolItem("imgly_tool_text_design", R.string.pesdk_textDesign_title_name, ImageSource.create(R.drawable.imgly_icon_tool_text_design)),
      ToolItem("imgly_tool_text", R.string.pesdk_text_title_name, ImageSource.create(R.drawable.imgly_icon_tool_text)),
      ToolItem("imgly_tool_overlay", R.string.pesdk_overlay_title_name, ImageSource.create(R.drawable.imgly_icon_tool_overlay)),
      ToolItem("imgly_tool_frame", R.string.pesdk_frame_title_name, ImageSource.create(R.drawable.imgly_icon_tool_frame)),
      ToolItem("imgly_tool_brush", R.string.pesdk_brush_title_name, ImageSource.create(R.drawable.imgly_icon_tool_brush)),
      ToolItem("imgly_tool_focus", R.string.pesdk_focus_title_name, ImageSource.create(R.drawable.imgly_icon_tool_focus))
    )
}
``````
{% endcapture %}{% assign snippets = "" | split: "" | push: first_snippet_ExampleConfigUtility_configEditorTools | push: second_snippet_ExampleConfigUtility_configEditorTools %}
{% capture identifier %}{{page.title}}-{{page.version}}-ExampleConfigUtility_configEditorTools{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}
