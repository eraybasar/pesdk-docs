---
layout: guides/content
title: &title Brush # title as shown in the menu and
description: The Brush Engine of the PhotoEditor SDK for HTML5 is optimized for touch screen interaction and supports various brush strokes, thicknesses, and colors.
menuitem: *title
order: 1
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
{% capture image_basic_light %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/basic-light/{{page.title | downcase}}.png
{% endcapture %}

{% assign images = "" | split: "" | push: image_advanced_dark | push: image_advanced_light | push: image_basic_light %}
{% include image_carousel.html images=images %}

The highly efficient brush engine of PhotoEditor SDK is optimized for touch screen interaction and supports different brush strokes that can be edited in terms of thickness and color.


{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

Please note that the thickness is relative to the shortest edge of your image. If your image is 200x500 pixels and the brush thickness is 0.05, the final thickness on the image will be
`200 * 0.05 = 10 pixels`.

## Localization


You can override all the labels used in brush tool using the `custom.languages` object in [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/customization/localization), below are the default brush localization lables

```js
new PhotoEditorSDKUI({
  ...,
  custom: {
    languages: {
      en: {
        ...,
        brush: {
          title: 'Brush',
          controls: {
            sliderSize: 'Brush Size',
            sliderHardness: 'Brush Hardness',
            selectColor: 'Brush Color',
            tabSize: 'Size',
            tabHardness: 'Hardness',
            tabColor: 'Color',
          },
          history: {
            brushStroke: 'Brush Stroke',
          },
        }
      }
    }
  }
})
  
```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}