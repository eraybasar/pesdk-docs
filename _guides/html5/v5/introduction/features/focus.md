---
layout: guides/content
title: &title Focus # title as shown in the menu and
description: The focus tool of the PhotoEditor SDK for HTML5 lets your users add a radial or linear blur to their images. Learn how to configure the tool.
menuitem: *title
order: 0
platform: html5
version: v5
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

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

The focus tool allows your users to add a radial or linear blur to their images which lets them mimic *Tilt Shift* or *Bokeh* effects.

# Specifying the available focus modes

This example shows the default focus configuration.
In order to enable or disable specific focus, simply pass the `items` option to the focus controls. The items will be displyed in the order mentioned by the configuration.

```js
const editor = new PhotoEditorSDKUI({
  focus: {
    items: [
      { identifier: 'radial' },
      { identifier: 'mirrored' },
      { identifier: 'linear' },
      { identifier: 'gaussian' }
    ]
  },
})
```

## Localization

You can override all the labels used in focus tool using the `custom.languages` object in [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration), below are the default focus localisation lables

```json
{
  ...,
  "focus": { 
    "title": "Focus",
    "controls": {
      "buttonReset": "Reset to default",
      "sliderIntensity": "Focus Intensity"
    },
    "items": {
      "radial": "Radial",
      "mirrored": "Mirrored",
      "linear": "Linear",
      "gaussian": "Gaussian"
    },
    "history": {
      "focusPosition": "Focus Position",
      "focusSize": "Focus Size"
    }
  }
}
```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

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
                  focus: {
                    availableModes: ['radial', 'gaussian']
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