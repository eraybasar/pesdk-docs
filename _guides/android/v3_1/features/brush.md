---
layout: guides/android/v3_1/content
title: &title Brush # title as shown in the menu and 

menuitem: *title
order: 8
platform: android
version: v3_1
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}

# Brush

The high performant brush engine of the PhotoEditor SDK is optimized for touch screen interaction and supports different brush strokes that can be edited in terms of thickness and color.

The tool is implemented in the [`BrushEditorTool`](https://static.photoeditorsdk.com/docs/android-v3/ly/img/android/sdk/tools/BrushEditorTool.html) class and displayed using the [`BrushToolPanel`](https://static.photoeditorsdk.com/docs/android-v3/ly/img/android/ui/panels/BrushToolPanel.html). If you want to customize the appearance of this tool, take a look at the [styling]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/concepts/styling) section.
