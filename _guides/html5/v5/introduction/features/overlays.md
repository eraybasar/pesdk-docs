---
layout: guides/content
title: &title Overlays # title as shown in the menu and

menuitem: *title
order: 10
platform: html5
version: v5
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

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

Overlays are an easy, yet powerful way to create stunning effects. To put it simply, overlays are images put on top of the input image. We provide several blend modes, that determine how exactly the overlay is applied. Each mode has its own characteristics and will add a unique flavor to the final composition. Supported asset formats are jpeg and png.

## Specifying the available overlays

In order to enable or disable specific overlay, simply pass the `items` option to the overlay tool configuration. The items will be displayed in the order mentioned by the configuration. Here is the list of default overlay items.

```js
const editor = new PhotoEditorSDKUI({
  overlay: {
    items: [
      { identifier: "imgly_overlay_golden" },
      { identifier: "imgly_overlay_bokeh" },
      { identifier: "imgly_overlay_hearts" },
      { identifier: "imgly_overlay_lightleak1" },
      { identifier: "imgly_overlay_lightleak2" },
      { identifier: "imgly_overlay_rain" },
      { identifier: "imgly_overlay_wood" },
      { identifier: "imgly_overlay_mosaic" },
      { identifier: "imgly_overlay_chop" },
      { identifier: "imgly_overlay_vintage" },
      { identifier: "imgly_overlay_metal" },
      { identifier: "imgly_overlay_paper" },
      { identifier: "imgly_overlay_painting" },
      { identifier: "imgly_overlay_grain" },
      { identifier: "imgly_overlay_clouds" },
      { identifier: "imgly_overlay_wall1" },
      { identifier: "imgly_overlay_wall2" },
    ]
  },
})
```

## Adding custom overlay images

You can add new overlays to the existing list of items using same configuration interface as above

```js
const editor = new PhotoEditorSDKUI({
  overlay: {
    items: [
      ...,
      {
        identifier: "my_overlay",
        name: 'Custom Overlay',
        defaultBlendMode: 'normal',
        overlayURI: '' ,// path to the overlay image, relative to the overlay asset directory
        thumbnailURI: '' // path to the thumbnail, relative to the overlay asset directory
      },
    ]
  },
})
```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

Available blend modes are `normal`, `overlay`, `hardlight`, `softlight`, `multiply`, `darken`, `lighten`, `screen` and `colorburn`.

## Localization

You can override all the labels used in overlay tool using the `custom.languages` object in [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration), below are the default overlay localization lables

```js
new PhotoEditorSDKUI({
  ...,
  custom: {
    languages: {
      en: {
        ...,
        overlay: {
          title: 'Overlays',
          controls: {
            buttonReset: 'Reset to default',
            sliderOpacity: 'Overlay Opacity',
            carouselBlendMode: 'Overlay Blend mode',
            blendModeNormal: 'Normal',
            blendModeOverlay: 'Overlay',
            blendModeHardLight: 'Hard Light',
            blendModeSoftLight: 'Soft Light',
            blendModeMultiply: 'Multiply',
            blendModeDarken: 'Darken',
            blendModeLighten: 'Lighten',
            blendModeScreen: 'Screen',
            blendModeColorBurn: 'Color Burn',
            tabOpacity: 'Opacity',
            tabBlendMode: 'Blend Mode',
          },
          items: {
            imgly_overlay_bokeh: 'Bokeh',
            imgly_overlay_chop: 'Chop',
            imgly_overlay_clouds: 'Clouds',
            imgly_overlay_golden: 'Golden',
            imgly_overlay_grain: 'Grain',
            imgly_overlay_hearts: 'Hearts',
            imgly_overlay_lightleak1: 'Light Leak 1',
            imgly_overlay_lightleak2: 'Light Leak 2',
            imgly_overlay_metal: 'Metal',
            imgly_overlay_mosaic: 'Mosaic',
            imgly_overlay_painting: 'Painting',
            imgly_overlay_paper: 'Paper',
            imgly_overlay_rain: 'Rain',
            imgly_overlay_vintage: 'Vintage',
            imgly_overlay_wall1: 'Wall',
            imgly_overlay_wall2: 'Wall 2',
            imgly_overlay_wood: 'Wood',
          },
        }
      }
    }
  }
})
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
                  overlay: {
                    overlays: [
                      {
                        identifier: 'my_custom_overlay',
                        defaultName: 'Custom Overlay',
                        image: 'overlays/imgly_overlay_bokeh.jpg',
                        thumbnail: 'overlays/imgly_overlay_bokeh_thumb.jpg',
                        blendMode: 'lighten'
                      }
                    ],
                    replaceOverlays: false,
                    availableOverlays: ['my_custom_overlay']
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