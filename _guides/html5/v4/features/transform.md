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

Our transform tool unifies cropping, resizing, flipping and rotation operations in one feature. The PhotoEditor SDK holds various preset crop ratios (e.g. 16:9) that can easily be complemented by any crop ratio you deem necessary.

<!--The tool is implemented in the `TransformToolController` class and can be customized using the [`TransformToolControllerOptions`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/TransformToolControllerOptions.html) as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section. By modifying these options, you may customize the available transform actions and crop aspect ratios by adding or removing `CropAspect` and `TransformAction` objects from or to the corresponding arrays. All sliders and buttons can be customized as well. In order to disable free cropping and force the use of one of the available aspect ratios, set the `allowFreeCrop` property to `true`.-->

## Configuration Options

The transform user interface can be configured with the following options:

{% capture first_snippet %}
DesktopUI
---
```js
const editor = new PhotoEditorSDK.UI.DesktopUI({
  editor: {
    controlsOptions: {
      transform: {
        categories: [], // Defines preset aspect ratios and categories
        availableRatios: ['imgly_transform_common_custom', ...] // Defines available aspect ratios
        replaceCategories: false, // Defines if categories are added or replaced
        enableRotation: true, // Enables or disables the option to rotate the image
        enableStraighten: true, // Enables or disables the option to straighten the image
        enableFlip: true, // Enables or disables the option to flip the image
        enableAcceptButton: false, // Enables or disables showing the accept button to exit the tool
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
        ratios: [], // Defines preset aspect ratios
        replaceRatios: false, // Defines if ratios are added or replaced
        availableRatios: ['imgly_transform_common_custom', ...] // Defines available aspect ratios
      }
    }
  }
})
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS0{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

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
                ratio: 5 / 4, // The image aspect ratio (a floating point number)
                dimensions: { x: 50, y: 40 }, // Optional resolution
                forceDimensions: false, // Controls whether the dimensions are user-editable
                lockDimensions: true // Controls whether dimension inputs affect the crop area
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
            dimensions: { x: 50, y: 40 } // Optional fixed,

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

Read the section on [image resizing](#image-resizing) for a more in-depth explanation of the `forceDimensions` and `lockDimensions`
properties.

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

## Image resizing

In addition to cropping images, our DesktopUI also allows users to resize 
and export their images at custom resolutions. 

By default, entering a new resolution in the width and height input fields automatically updates the crop
area to match the new resolution. If instead, the user wants to keep the crop area but rescale its contents to
the new resolution, they can simply check the "Lock Resolution" checkbox before inputting new dimensions. You can
set an initial value for this lock with the ratio's `lockDimensions` property.

Using the `forceDimensions` option of each ratio, you can enable or disable the user's ability to change 
the resolution entirely. Due to backwards compatibility reasons, `forceDimensions` has a
default value of `true` if the `dimensions` property is set, so you need to actively set it to 
`false` if you are looking to make the suggested dimensions user-editable.

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