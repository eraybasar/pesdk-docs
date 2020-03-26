---
layout: guides/content
title: &title Filters # title as shown in the menu and
description: The PhotoEditor SDK for HTML5 features more than 60 high-quality filters with lightning fast processing. Learn how to easily add your own custom filters.

menuitem: *title
order: 0
platform: html5
version: v4
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor
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

Filters determine the mood and atmosphere of pictures and help convey the right message for your creative. The PhotoEditor SDK ships with over 50 handcrafted filters covering all state of the art style- and mood settings. Furthermore, the API of the PhotoEditor SDK enables you to expand the filter library with your own set of custom filters and define your unique visual language. Custom filters can easily be created by anyone using LUTs (Lookup Tables) from popular apps like Photoshop, GIMP or Lightroom.

## Adding Custom Filters

We use a technology called Lookup Tables (LUTs) in order to add new filters to our SDK.
The main idea is that colors respond to operations that are carried out during the filtering process. We 'record' that very response by applying the filter to the identity image shown below.

![Identity LUT]({{ site.baseurl }}/assets/images/shared/identity.png){: width="30%" .center-image}

The resulting image can be used within our SDK and the recorded changes can then be applied to any image by looking up the transformed colors in the modified LUT.

If you want to create a new filter, you'll need to [download]({{ site.baseurl }}/assets/images/shared/identity.png){: download="pesdk_identity_lut" } the identity LUT shown above, load it into an image editing software of your choice, apply your operations, save it and add it to your app.

> __WARNING:__ As any compression artifacts in the edited LUT could lead to distorted results when applying the filter, you need to save your LUT as a PNG file.

Afterwards, you'll need to add the LUT image to the filter options. Filters are grouped in categories.

If `replaceCategories` is set to true, only your custom filter categories and filters will be displayed.

{% capture first_snippet %}
DesktopUI
---
```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  editor: {
    controlsOptions: {
      filter: {
        categories: [
          {
            identifier: 'my_category', // A unique identifier for this filter category
            defaultName: 'My Category', // The default translation for this filter category
            filters: [
              {
                identifier: 'my_custom_lut', // A unique identifier for this filter
                defaultName: 'Custom LUT', // The default translation for this filter
                lutImage: 'filters/my_custom_lut.png' // The path to the LUT image
              }
            ]
          }
        ]
      }
    }
  }
})
```
{% endcapture %}

{% capture second_snippet %}
ReactUI
---
```js
const editor = new PhotoEditorSDK.UI.ReactUI({
  editor: {
    controlsOptions: {
      filter: {
        categories: [
          {
            identifier: 'my_category', // A unique identifier for this filter category
            defaultName: 'My Category', // The default translation for this filter category
            filters: [
              {
                identifier: 'my_custom_lut', // A unique identifier for this filter
                defaultName: 'Custom LUT', // The default translation for this filter
                lutImage: 'filters/my_custom_lut.png' // The path to the LUT image
              }
            ]
          }
        ]
      }
    }
  }
})
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

## Specifying the available filters

By default, all existing filters (including your own) are available to the user. To make only specific filters available to the user, use the `availableFilters` option.

{% capture first_snippet02 %}
DesktopUI
---
```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  editor: {
    controlsOptions: {
      filter: {
        availableFilters: ['imgly_lut_ad1920', 'imgly_lut_blues']
      }
    }
  }
})
```
{% endcapture %}

{% capture second_snippet02 %}
ReactUI
---
```js
const editor = new PhotoEditorSDK.UI.ReactUI({
  editor: {
    controlsOptions: {
      filter: {
        availableFilters: ['imgly_lut_ad1920', 'imgly_lut_blues']
      }
    }
  }
})
```
{% endcapture %}

{% assign snippets02 = "" | split: "" | push: first_snippet02 | push: second_snippet02 %}
{% capture identifier02 %}{{page.title}}-{{page.version}}-ANALYTICS02{% endcapture %}
{% include multilingual_code_block.html snippets=snippets02 identifier=identifier02 %}

## Localization

### Filter name

By default, our UI displays each filter's `defaultName` as the filter label. You can override this value for each filter by overriding or adding new keys to the `pesdk.filter.asset` object in the [Localization JSON]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/customization/localization) file:

```js
{
  "pesdk": {
    "filter": {
      // ...
      "asset": {
        // ...
        "my_custom_lut": "Customly localized filter name"
        // ...
      }
      // ...
    }
  }
}
```

### Category name

Same goes for the category name, the localization key for this is `pesdk.filter.categories`:

```js

{
  "pesdk": {
    "filter": {
      // ...
      "asset": {
        // ...
        "my_category": "Customly localized filter category name"
        // ...
      }
      // ...
    }
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
                  filter: {
                    categories: [
                      {
                        identifier: 'my_category',
                        defaultName: 'My Category',
                        filters: [
                          {
                            identifier: 'my_custom_lut',
                            defaultName: 'Custom LUT',
                            lutImage: 'filters/imgly_lut_bleachedblue_5_5_128.png'
                          },
                          {
                            identifier: 'my_other_custom_lut',
                            defaultName: 'Other Custom LUT',
                            lutImage: 'filters/imgly_lut_blues_5_5_128.png'
                          },
                          {
                            identifier: 'my_third_custom_lut',
                            defaultName: 'Third Custom LUT',
                            lutImage: 'filters/imgly_lut_orchid_5_5_128.png'
                          }
                        ]
                      }
                    ],
                    replaceCategories: true,
                    availableFilters: ['my_custom_lut', 'my_third_custom_lut']
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