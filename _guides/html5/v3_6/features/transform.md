---
layout: guides/content
title: &title Transform # title as shown in the menu and

menuitem: *title
order: 3
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


Our transform tool unifies cropping, flipping and rotation operations in one feature. The PhotoEditor SDK holds various preset crop ratios (e.g. 16:9) that can easily be complemented by any crop ratio you deem necessary.

<!--The tool is implemented in the `TransformToolController` class and can be customized using the [`TransformToolControllerOptions`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/TransformToolControllerOptions.html) as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section. By modifying these options, you may customize the available transform actions and crop aspect ratios by adding or removing `CropAspect` and `TransformAction` objects from or to the corresponding arrays. All sliders and buttons can be customized as well. In order to disable free cropping and force the use of one of the available aspect ratios, set the `allowFreeCrop` property to `true`.-->

## Adding custom crop ratios

To add custom crop ratios, pass them using the `ratios` option.

If `replaceRatios` is set to true, all default ratios are removed. If it is set to `false`,
your additional ratios are appended.

```js
const editor = new PhotoEditorSDK.UI.ReactUI({
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
const editor = new PhotoEditorSDK.UI.ReactUI({
  controlsOptions: {
    crop: {
      selectableRatios: ['custom', 'square', '4-3', '16-9', 'some-custom-ratio']
    }
  }
})
```
