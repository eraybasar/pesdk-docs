---
layout: guides/content
title: &title Adjustment # title as shown in the menu and
description: The Adjustment tool set of the PhotoEditor SDK for HTML5 offers essential and advanced editing functions like Brightness, Contrast, Saturation or Exposure.
menuitem: Adjustment
order: 2
platform: html5
version: v5
category:
  - guide
  - feature
tags:
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

Our Adjustment tool is our swiss army knife for image optimization. It offers essential functions like brightness and contrast, while allowing more expert users to fine tune highlights, shadows, sharpness and clarity.

## Specifying the available adjustments

In order to enable or disable specific adjustments, simply pass the `categories` option to the adjustment tool configuration. The items will be displayed in the order mentioned by the configuration. Here is the list of default adjustment categories and items.

```js
const editor = new PhotoEditorSDKUI({
  adjustment: {
    categories: [
      {
        identifier: 'basics',
        items: [
          { identifier: 'brightness' },
          { identifier: 'saturation' },
          { identifier: 'contrast' },
          { identifier: 'gamma' }
        ]
      },
      {
        identifier: 'refinements',
        items: [
          { identifier: 'clarity' },
          { identifier: 'exposure' },
          { identifier: 'shadows' },
          { identifier: 'highlights' },
          { identifier: 'whites' },
          { identifier: 'blacks' },
          { identifier: 'temperature' },
          { identifier: 'sharpness' }
        ]
      }
    ],
    flattenCategories: false
  },
})
```

## Flattening of categories

If `flattenCategories` is set to true, all enabled adjustment will be shown in the top-level of the adjustment tool, which effectively hides the categories.

```js
const editor = new PhotoEditorSDKUI({
  adjustment: {
    flattenCategories: true
  }
})
```

## Including all the items from a category

If a existing category identifier is specified without any items, editor will include all the existing adjustment under `basics` category.

```js
const editor = new PhotoEditorSDKUI({
  adjustment: {
    categories: [{
      identifier: 'basics'
    }],
  },
})
```

## Localization

You can override all the labels used in adjustment tool using the `custom.languages` object in [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/customization/localization), below are the default adjustment localization lables

```js
new PhotoEditorSDKUI({
  ...,
  custom: {
    languages: {
      en: {
        ...,
        adjustment: {
          title: 'Adjust',
          controls: {
            buttonReset: 'Reset to default',
          },
          categories: {
            basics: 'Basic',
            refinements: 'Refinements',
          },
          items: {
            brightness: 'Brightness',
            saturation: 'Saturation',
            contrast: 'Contrast',
            gamma: 'Gamma',
            sharpness: 'Sharpness',
            clarity: 'Clarity',
            exposure: 'Exposure',
            shadows: 'Shadows',
            highlights: 'Highlights',
            whites: 'Whites',
            blacks: 'Blacks',
            temperature: 'Temperature',
          },
        }
    }
  }
})

```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

