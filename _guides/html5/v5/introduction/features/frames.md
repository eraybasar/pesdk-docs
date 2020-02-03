---
layout: guides/content
title: &title Frames # title as shown in the menu and
description: The PhotoEditor SDK for HTML5 provides a quick and easy way for adding frames to any creative. Learn how to add custom frame assets to the library.
menuitem: *title
order: 6
platform: html5
version: v5
category:
  - guide
  - feature
published: true # Either published or not
---
<!-- ![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg){: .center-image style="padding: 20px; max-height: 400px;"} -->

{% capture image_desktop %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg
{% endcapture %}
{% capture image_react %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}_react.jpg
{% endcapture %}

{% assign images = "" | split: "" | push: image_desktop | push: image_react %}
{% include image_carousel.html images=images %}

Good frames might not save bad paintings, however they may very well complete and enhance good photography. The PhotoEditor SDK includes a versatile frame tool that works with any given photo size or ratio. For the flexible frames tool that works perfectly for creatives with repeatable or stretchable areas, we abandoned the 9-patch standard and replaced it with a novel and even more flexible 12-patch layout.

## Specifying the available frames

This example shows the default frame configuration.
In order to enable or disable specific frames, simply pass the `items` option to the frame controls. The items will be displyed in the order mentioned by the configuration.

```js
const editor = new PhotoEditorSDKUI({
  frame: {
    items: [
      { identifier: "imgly_frame_art_decor" },
      { identifier: "imgly_frame_black_passepartout" },
      { identifier: "imgly_frame_lowpoly_shadow" },
      { identifier: "imgly_frame_wood_passepartout" },
      { identifier: "imgly_frame_dia" },
    ]
  },
})
```

## Adding custom frames

Frames consist of four groups. Each group has a start, middle and an end image. The start and end images are optional and for the middle image there are two modes, `repeat` and `stretch`, the latter being the default. These modes determine whether the asset should be stretched over the area, or if it should be repeated to fill up space. Please note that in `repeat` mode, assets are never cut off, but rather squeezed or stretched a bit, to fit in only complete copies of the asset.
The four groups can be laid out in two layouts: `horizontal-inside` or `vertical-inside`. See the following images for clarification:

![frame inside]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/frame_inside.png){: height="150px" .center-image }

The idea behind the naming is, that if you imagine a box that covers the right and left groups and the top and bottom groups surrounding it,
the horizontal box is inside the groups, as illustrated by the following image,

![frame horizontal]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/horizontalFrame.png){: height="150px" .center-image }

Let's have a look at a real world example.

![dia sample]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/dia_sample.png){: height="300px" .center-image }

The layout mode is horizontal inside. The top and bottom group just have a middle image, containing the film strip pattern.
The left and right group consist of a stretched border texture, and a start and end image to create a nice transition between the two sides of the film strip.

The code to create such a frame and pass it to the editor looks like this:

---
```js
const editor = new PhotoEditorSDKUI({
  frame: {
    items: [
      ...,
      {
        identifier: 'my-new-generic-frame',
        name: 'Generic',
        thumbnailURI: 'frames/generic.png' // path to the thumbail, relative to the frame asset directory
        layoutMode: 'horizontal-inside', // 'horizontal-inside' or 'vertical-inside'
        tintable: false, 
         /**
          * Images for the 12-patch layout of a dynamic frame that automatically adapts to
          * any output image resolution
          */
        imageGroups: {
          top: {
            mid: {
              image: './items/imgly_frame_generic/imgly_frame_generic_top.png',
              mode: 'repeat',
            },
          },
          left: {
            start: './items/imgly_frame_generic/imgly_frame_generic_top_corner_left.png',
            mid: './items/imgly_frame_generic/imgly_frame_generic_left.png',
            end: './items/imgly_frame_generic/imgly_frame_generic_bottom_corner_left.png',
          },
          right: {
            start: './items/imgly_frame_generic/imgly_frame_generic_top_corner_right.png',
            mid: './items/imgly_frame_generic/imgly_frame_generic_right.png',
            end: './items/imgly_frame_generic/imgly_frame_generic_bottom_corner_right.png',
          },
          bottom: {
            mid: {
              image: './items/imgly_frame_generic/imgly_frame_generic_bottom.png',
              mode: 'repeat',
            },
          },
        }
      }
    ]
  }
})

```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

## Localization

You can override all the labels used in frames tool using the `custom.languages` object in [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration), below are the default frames localisation lables

```json
  "frame": {
    "title": "Frames",
    "controls": {
      "buttonReset": "Reset Frame",
      "sliderOpacity": "Frame Opacity",
      "sliderSize": "Frame Size",
      "selectColor": "Frame Color",
      "tabColor": "Color",
      "tabOpacity": "Opacity",
      "tabSize": "Size"
    },
    "items": {
      "imgly_frame_dia": "Dia",
      "imgly_frame_art_decor": "Art Decor",
      "imgly_frame_black_passepartout": "Black",
      "imgly_frame_lowpoly_shadow": "Low Poly",
      "imgly_frame_wood_passepartout": "Wood"
    }
  }
```
{% comment %}
## Interactive Example

Try the conceps above in the interactive editor below. You can edit the source code and see the results by clicking on the 'reload' button.

{% capture code %}
window.onload = function () {
        PhotoEditorSDK.Loaders.ImageLoader.load('{{ site.baseurl }}/assets/images/shared/test.png')
          .then((image) => {
            let container = document.getElementById('editor')
            let options = {
              container: container,
              license: PESDK_LICENSE_STRING,
              editor: {
                image: image,
                controlsOptions: {
                  frame: {
                    availableFrames: ['imgly_frame_dia']
                  }
                }
              },
              assets: {
                baseUrl: PESDK_ASSETS_URL
              }
            }
            let editor = new PhotoEditorSDK.UI.DesktopUI(options)
        })
      }
{% endcapture %}
{% capture identifier %}{{page.title}}-{{page.version}}-EXAMPLE-01{% endcapture %}
{% include pesdk_html5_editor.html code=code identifier=identifier %}

{% endcomment %}