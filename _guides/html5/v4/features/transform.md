---
layout: guides/content
title: &title Transform # title as shown in the menu and
description: The transform tool of the PhotoEditor SDK for HTML5 unifies cropping, flipping and rotation operations. Learn how to add custom crop ratios to the library.
menuitem: *title
order: 3
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

Our transform tool unifies cropping, flipping and rotation operations in one feature. The PhotoEditor SDK holds various preset crop ratios (e.g. 16:9) that can easily be complemented by any crop ratio you deem necessary.

<!--The tool is implemented in the `TransformToolController` class and can be customized using the [`TransformToolControllerOptions`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/TransformToolControllerOptions.html) as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section. By modifying these options, you may customize the available transform actions and crop aspect ratios by adding or removing `CropAspect` and `TransformAction` objects from or to the corresponding arrays. All sliders and buttons can be customized as well. In order to disable free cropping and force the use of one of the available aspect ratios, set the `allowFreeCrop` property to `true`.-->

## Adding custom crop ratios

To add custom crop ratios, pass them using the `ratios` option. Ratios can be grouped in arrays, which will be displayed using separators.

If `replaceRatios` is set to true, all default ratios are removed. If it is set to `false`, your additional ratios are appended.

{% capture first_snippet %}
DesktopUI
---
```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  editor: {
    controlsOptions: {
      transform: {
        categories: [
          {
            identifier: 'my_custom_category',
            defaultName: 'My Custom Ratios',
            ratios: [
              {
                identifier: 'my_custom_ratio', // A unique identifier for this ratio
                defaultName: 'Custom Ratio', // The default translation for this ratio
                ratio: 5 / 4, // The image ratio (a floating point number)
                dimensions: new PhotoEditorSDK.Math.Vector2(50, 40) // Optional fixed
              }
            ]
          }
        ],
        replaceCategories: false
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
      transform: {
        ratios: [
          {
            identifier: 'my_custom_ratio', // A unique identifier for this ratio
            defaultName: 'Custom Ratio', // The default translation for this ratio
            ratio: 5 / 4, // The image ratio (a floating point number)
            dimensions: new PhotoEditorSDK.Math.Vector2(50, 40) // Optional fixed
          }
        ],
        replaceRatios: false
      }
    }
  }
})
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

You will also need to add an icon to the `assets/ui/desktop-ui/controls/transform` directory with the same identifier (`my_custom_ratio`) and a `@2x.png` suffix.


## Specifying the available ratios

Per default, all existing ratios (including your own) are available to the user. To make only
specific ratios available to the user, use the `availableRatios` option.

The default ratio identifiers are `imgly_transform_common_custom`, `imgly_transform_common_square`, `imgly_transform_common_4-3`, `imgly_transform_common_16-9`, `imgly_transform_facebook_profile`, `imgly_transform_facebook_ad`, `imgly_transform_facebook_post` and `imgly_transform_facebook_cover`

{% capture first_snippet %}
DesktopUI
---
```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  editor: {
    controlsOptions: {
      transform: {
        availableRatios: ['imgly_transform_common_custom', 'my_custom_ratio']
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
      transform: {
        availableRatios: ['imgly_transform_common_custom', 'my_custom_ratio']
      }
    }
  }
})
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS02{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

## Localization

By default, our UI displays each ratio's `defaultName` as the ratio label. You can override this value for each ratio by overriding or adding new keys to the `controls.transform.ratios` object in the [Localization JSON]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/customization/localization) file:

{% capture first_snippet %}
DesktopUI
---
```json
{
  "editor": {
    "controls": {
      // ...
      "transform": {
        // ...
        "ratios": {
          // ...
          "my_custom_category": {
            "name": "My Category Name",
            "ratios": {
              "my_custom_ratio": "Customly localized ratio name"
            }
          },
          "my_other_custom_category": {
            "name": "My Other Category Name",
            "ratios": {
              "my_other_custom_ratio": "Other Customly localized ratio name"
            }
          }
          // ...
        }
        // ...
      }
      // ...
    }
  }
}
```
{% endcapture %}

{% capture second_snippet %}
ReactUI
---
```json
{
  "editor": {
    "controls": {
      // ...
      "transform": {
        // ...
        "ratios": {
          // ...
          "my_custom_ratio": "Customly localized ratio name"
          // ...
        }
        // ...
      }
      // ...
    }
  }
}
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS03{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

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
                  transform: {
                    categories: [
                      {
                        identifier: 'my_custom_category',
                        defaultName: 'My Custom Ratios',
                        ratios: [
                          {
                            identifier: 'my_custom_ratio', // A unique identifier for this ratio
                            defaultName: 'Custom Ratio', // The default translation for this ratio
                            ratio: 5 / 4, // The image ratio (a floating point number)
                            dimensions: new PhotoEditorSDK.Math.Vector2(50, 40) // Optional fixed
                          }
                        ]
                      }
                    ],
                    replaceCategories: false,
                    availableRatios: ['my_custom_ratio', 'imgly_transform_common_16-9','imgly_transform_facebook_profile']
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