---
layout: guides/content
title: &title Focus # title as shown in the menu and
description: The focus tool of the PhotoEditor SDK for HTML5 lets your users add a radial or linear blur to their images. Learn how to configure the tool.
menuitem: *title
order: 3
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

## Specifying the available focus modes

In order to enable or disable specific focus modes, simply pass the `items` option to the focus tool configuration. The items will be displayed in the order mentioned by the configuration. Here is the list of default focus modes.

```js
const editor = new PhotoEditorSDKUI({
  ...,
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

You can override all the labels used in focus tool using the `custom.languages` object in [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/customization/localization). Here are the default focus localization labels.

```js
new PhotoEditorSDKUI({
  ...,
  custom: {
    languages: {
      en: {
        ...,
        focus: {
          title: 'Focus',
          controls: {
            buttonReset: 'Reset to default',
            sliderIntensity: 'Focus Intensity'
          },
          items: {
            radial: 'Radial',
            mirrored: 'Mirrored',
            linear: 'Linear',
            gaussian: 'Gaussian'
          },
          history: {
            focusPosition: 'Focus Position',
            focusSize: 'Focus Size'
          },
        }
      }
    }
  }
})

```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}
