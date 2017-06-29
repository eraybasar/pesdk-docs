---
layout: guides/content
title: &title Brush # title as shown in the menu and
description: The Brush Engine of the PhotoEditor SDK for HTML5 is optimized for touch screen interaction and supports various brush strokes, thicknesses, and colors.
menuitem: *title
order: 7
platform: html5
version: v3_6
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---
![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg){: .center-image style="padding: 20px; max-height: 400px;"}

The high performant brush engine of the PhotoEditor SDK is optimized for touch screen interaction and supports different brush strokes that can be edited in terms of thickness and color.

## Specifying brush presets

In order to specify brush size presets, use the `thicknessPresets` option:

```js
const editor = new PhotoEditorSDK.UI.ReactUI({
  controlsOptions: {
    brush: {
      thicknessPresets: [
        0.01, 0.02, 0.03, 0.05, 0.1
      ]
    }
  }
})
```

Please note that the thickness is relative to the shortest edge of your image. If your image is
200x500 pixels and the brush thickness is 0.05, the final thickness on the image will be
`200 * 0.05 = 10 pixels`.
