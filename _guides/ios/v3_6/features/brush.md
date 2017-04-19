---
layout: guides/ios/v3_6/content
title: &title Brush # title as shown in the menu and 

menuitem: *title
order: 0
platform:
  - ios
version:
  - v3_6
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---
# Brush

## Specifying brush presets

In order to specify brush size presets, use the `thicknessPresets` option:

```js
const editor = new PhotoEditorSDK.UI.NightReact({
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
