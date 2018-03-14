---
layout: guides/content
title: &title Overlays # title as shown in the menu and

menuitem: *title
order: 8
platform: html5
version: v4
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/{{page.title | downcase}}.jpg){: .center-image style="padding: 20px; max-height: 400px;"}

## Adding custom overlay images

In order to add custom overlay images to your UI, you can pass them using the `overlays` option of the `overlay` control:

{% capture second_snippet %}
DesktopUI
---
```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  editor: {
    controlsOptions: {
      overlay: {
        overlays: [
          {
            identifier: 'my_overlay',
            defaultName: 'Custom Overlay',
            image: 'overlays/my_overlay.jpg',
            thumbnail: 'overlays/my_overlay_thumb.jpg',
            blendMode: 'lighten'
          }
        ],
        replaceOverlays: false
      }
    }
  }
})
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

Available blend modes are `normal`, `overlay`, `hard light`, `soft light`, `multiply`, `darken`, `lighten`, `screen` and `color burn`.

If you set the `replaceOverlays` option to `true`, only your own overlays will be displayed in the UI. You can also specify the available overlays by passing their identifiers using the `availableOverlays` option.

The default identifiers are: `imgly_overlay_golden`, `imgly_overlay_bokeh`, `imgly_overlay_hearts`, `imgly_overlay_lightleak1`, `imgly_overlay_lightleak2`, `imgly_overlay_rain`, `imgly_overlay_wood`, `imgly_overlay_mosaic`, `imgly_overlay_chop`, `imgly_overlay_vintage`, `imgly_overlay_metal`, `imgly_overlay_paper`, `imgly_overlay_painting`, `imgly_overlay_grain`, `imgly_overlay_clouds`, `imgly_overlay_wall1` and `imgly_overlay_wall2`

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
