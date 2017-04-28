---
layout: guides/content
title: &title Brush # title as shown in the menu and 

menuitem: *title
order: 8
platform: ios
version: v6_5
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

The tool is implemented in the `BrushToolController` class and can be configured using the [`BrushToolControllerOptions`](https://static.photoeditorsdk.com/docs/ios/Classes/BrushColorToolControllerOptions.html) as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section. Using these options you can configure the available tools, their order, the allowed overlay actions, the brush size and hardness values (minimum, maximum and default), the default color and whether the brush opacity should vary by the size of the brush.

# Brush color

To change the available colors within the brush tool, you need to modify the [`BrushColorToolControllerOptions`](https://static.photoeditorsdk.com/docs/ios/Classes/BrushColorToolControllerOptions.html), as the color selection is managed using a `BrushColorToolController`. These allow you to set the available colors and their names.
