---
layout: guides/content
title: &title Frames # title as shown in the menu and
description: The PhotoEditor SDK for HTML5 provides a quick and easy way for adding frames to any creative. Learn how to add custom frame assets to the library.
menuitem: *title
order: 8
platform: html5
version: v5
category:
  - guide
  - feature
published: true # Either published or not
---
<!-- ![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg){: .center-image style="padding: 20px; max-height: 400px;"} -->

{% capture image_advanced_dark %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/advanced-dark/{{page.title | downcase}}.png
{% endcapture %}
{% capture image_advanced_light %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/advanced-light/{{page.title | downcase}}.png
{% endcapture %}
{% capture image_basic_dark %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/basic-dark/{{page.title | downcase}}.png
{% endcapture %}
{% capture image_basic_light %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/basic-light/{{page.title | downcase}}.png
{% endcapture %}

{% assign images = "" | split: "" | push: image_advanced_dark | push: image_advanced_light | push: image_basic_dark | push: image_basic_light %}
{% include image_carousel.html images=images %}

Good frames might not save bad paintings, however they may very well complete and enhance good photography. The PhotoEditor SDK includes a versatile frame tool that works with any given photo size or ratio. For the flexible frames tool that works perfectly for creatives with repeatable or stretchable areas, we abandoned the 9-patch standard and replaced it with a novel and even more flexible 12-patch layout.

## Specifying the available frames

In order to enable or disable specific frames, simply pass the `items` option to the frame tool configuration. The items will be displayed in the order mentioned by the configuration. Here is the list of default frame items.

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

![frame inside]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}/frame-inside.png){: height="150px" .center-image }

The idea behind the naming is, that if you imagine a box that covers the right and left groups and the top and bottom groups surrounding it,
the horizontal box is inside the groups, as illustrated by the following image,

![frame horizontal]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}/horizontal-frame.png){: height="150px" .center-image }

Let's have a look at a real world example.

![dia sample]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}/dia-sample.png){: height="300px" .center-image }

The layout mode is horizontal inside. The top and bottom group just have a middle image, containing the film strip pattern.
The left and right group consist of a stretched border texture, and a start and end image to create a nice transition between the two sides of the film strip.

The code to create such a frame and pass it to the editor looks like this:

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
              image: '..', // path to the image, relative to the frame asset directory
              mode: 'repeat',
            },
          },
          left: {
            start: '..', // path to the image, relative to the frame asset directory
            mid: '..', // path to the image, relative to the frame asset directory
            end: '..', // path to the image, relative to the frame asset directory
          },
          right: {
            start: '..', // path to the image, relative to the frame asset directory
            mid: '..', // path to the image, relative to the frame asset directory
            end: '..', // path to the image, relative to the frame asset directory
          },
          bottom: {
            mid: {
              image: '..', // path to the image, relative to the frame asset directory
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

You can override all the labels used in frames tool using the `custom.languages` object in [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/customization/localization), below are the default frames localization lables

```js
new PhotoEditorSDKUI({
  ...,
  custom: {
    languages: {
      en: {
        ...,
          frame: {
            title: 'Frames',
            controls: {
              buttonReset: 'Reset Frame',
              sliderOpacity: 'Frame Opacity',
              sliderSize: 'Frame Size',
              selectColor: 'Frame Color',
              tabColor: 'Color',
              tabOpacity: 'Opacity',
              tabSize: 'Size',
            },
            items: {
              imgly_frame_dia: 'Dia',
              imgly_frame_art_decor: 'Art Decor',
              imgly_frame_black_passepartout: 'Black',
              imgly_frame_lowpoly_shadow: 'Low Poly',
              imgly_frame_wood_passepartout: 'Wood',
            },
          }
      }
    }
  }
})

```
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}