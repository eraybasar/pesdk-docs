---
layout: guides/ios/v3_6/content
title: &title Crop # title as shown in the menu and 

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

# Crop controls

## Adding custom crop ratios

To add custom crop ratios, pass them using the `ratios` option.

If `replaceRatios` is set to true, all default ratios are removed. If it is set to `false`,
your additional ratios are appended.

```js
const editor = new PhotoEditorSDK.UI.NightReact({
  controlsOptions: {
    crop: {
      ratios: [
        {
          name: 'some-custom-ratio', // A unique name for this ratio
          ratio: 5 / 4, // The image ratio (a floating point number)
          dimensions: new PhotoEditorSDK.Math.Vector2(50, 40) // Optional fixed dimensions
        }
      ],
      replaceRatios: false
    }
  }
})
```

You will also need to add an icon to the `assets/ui/night-react/controls/crop` directory with
the same name (`some-custom-ratio`) and a `@2x.png` suffix.


## Specifying the available ratios

Per default, all existing ratios (including your own) are available to the user. To make only
specific ratios available to the user, use the `selectableRatios` option.

The default ratio names are `custom` (no fixed ratio), `square` (1:1 ratio), `4-3`
(4:3 ratio) and `16-9` (16:9 ratio).

```js
const editor = new PhotoEditorSDK.UI.NightReact({
  controlsOptions: {
    crop: {
      selectableRatios: ['custom', 'square', '4-3', '16-9', 'some-custom-ratio']
    }
  }
})
```
