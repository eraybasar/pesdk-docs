---
layout: guides/content
title: &title Brush # title as shown in the menu and 

menuitem: *title
order: 1
platform: android
version: v7_2
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/screenshot_{{page.title | downcase}}.jpg){: height="400px" .center-image}


The high performant brush engine of the PhotoEditor SDK is optimized for touch screen interaction and supports different brush strokes that can be edited in terms of thickness and color.

The backend settings are implemented in the [`BrushSettings`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/backend/model/state/BrushSettings.html) class and displayed using the [`BrushToolPanel`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/panels/BrushToolPanel.html). If you want to customize the appearance of this tool, take a look at the [customization]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/customization/introduction) section.

Example: How to set the default brush values:

{% capture first_snippet_ExampleConfigUtility_configBrush %}
Java
---
``````java
// Obtain the config from you settingsList
BrushSettings brushSettings = settingsList.getSettingsModel(BrushSettings.class);
brushSettings.setBrushColor(0xFFFF0000);
brushSettings.setBrushHardness(1f);
brushSettings.setBrushSize(0.5f);
``````
{% endcapture %}{% capture second_snippet_ExampleConfigUtility_configBrush %}
Kotlin
---
``````kotlin
// Obtain the config from you settingsList
val brushSettings = settingsList.getSettingsModel(BrushSettings::class.java)
brushSettings.brushColor = ColorValue(0xFFFF0000)
brushSettings.brushHardness = 1f
brushSettings.brushSize = 0.5f
``````
{% endcapture %}{% assign snippets = "" | split: "" | push: first_snippet_ExampleConfigUtility_configBrush | push: second_snippet_ExampleConfigUtility_configBrush %}
{% capture identifier %}{{page.title}}-{{page.version}}-ExampleConfigUtility_configBrush{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}