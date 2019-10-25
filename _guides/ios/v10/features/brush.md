---
layout: guides/content
title: &title Brush # title as shown in the menu and
description: The Brush Engine of the PhotoEditor SDK for iOS is optimized for touch screen interaction and supports various brush strokes, thicknesses, and colors.
menuitem: *title
order: 1
platform: ios
version: v10
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}


The high performant brush engine of the PhotoEditor SDK is optimized for touch screen interaction and supports different brush strokes that can be edited in terms of thickness and color.

The tool is implemented in the `BrushToolController` class and can be configured using the [`BrushToolControllerOptions`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/BrushToolControllerOptions.html) as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section. Using these options you can configure the available tools, their order, the allowed overlay actions, the brush size and hardness values (minimum, maximum and default), the default color and whether the brush opacity should vary by the size of the brush.


To change the available colors within the brush tool, you need to modify the [`BrushColorToolControllerOptions`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/BrushColorToolControllerOptions.html), as the color selection is managed using a `BrushColorToolController`. These allow you to set the available colors and their names.
