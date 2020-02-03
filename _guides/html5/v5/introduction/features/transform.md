---
layout: guides/content
title: &title Transform # title as shown in the menu and
description: The transform tool of the PhotoEditor SDK for HTML5 unifies cropping, flipping and rotation operations. Learn how to add custom crop ratios to the library.
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


# Specifying the available transformation ratios

This example shows the default transform tool configuration.
In order to enable or disable specific crop ratios, simply pass the `categories` option to the transform tool configuration. The items will be displyed in the order mentioned by the configuration.
If `categories: [{ identifier: 'imgly_transforms_common' }]` is given without any items, editor will include all the existing `imgly_transforms_common` crop ratios
If `flattenCategories` is set to true, all enabled transform ratios will be shown in the top-level of the adjust selection tool, which effectively hides the categories

---
```js
const editor = new PhotoEditorSDKUI({
  transform: {
    categories: [
      {
        identifier: 'imgly_transforms_common',
        items: [
          { "identifier": "imgly_transform_common_custom" },
          { "identifier": "imgly_transform_common_square" },
          { "identifier": "imgly_transform_common_4" },
          { "identifier": "imgly_transform_common_16" },
        ]
      },
      {
        identifier: 'imgly_transforms_facebook',
        items: [
          { "identifier": "imgly_transform_facebook_profile" },
          { "identifier": "imgly_transform_facebook_ad" },
          { "identifier": "imgly_transform_facebook_post" },
          { "identifier": "imgly_transform_facebook_cover" }
        ]
      }
    ],
    flattenCategories: false
  },
})
```

## Configuration Options

The transform user interface can be configured with the following options:

```js
const editor = new PhotoEditorSDKUI({
  transform: {
    enableRotation: false, // true by default
    enableFlip: false // true by default
  }
})
```


{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS0{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

## Adding custom crop ratios

You can add new crop ratios to the existing categories, or create new categories using same configuration interface as above

```js
const editor = new PhotoEditorSDKUI({
  transform: {
    categories: [
      ...,
      {
        identifier: 'imgly_transforms_instagram',
        items: [{
          identifier: "imgly_transform_instagram_story",
          name: 'Story',
          thumbnailURI: '', //
          ratio: 5 / 4,
          forceDimensions: false, // false by default
          lockDimensions: false, // false by default
        }]
      }
    ],
    flattenCategories: false
  },
})
```
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

Read the section on [image resizing](#image-resizing) for a more in-depth explanation of the `forceDimensions` and `lockDimensions`
properties.




{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS02{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

## Image resizing

In addition to cropping images, our UI also allows users to resize 
and export their images at custom resolutions. 

By default, entering a new resolution in the width and height input fields automatically updates the crop
area to match the new resolution. If instead, the user wants to keep the crop area but rescale its contents to
the new resolution, they can simply check the "Lock Resolution" checkbox before inputting new dimensions. You can
set an initial value for this lock with the ratio's `lockDimensions` property.

Using the `forceDimensions` option of each ratio, you can enable or disable the user's ability to change 
the resolution entirely. Due to backwards compatibility reasons, `forceDimensions` has a
default value of `true` if the `dimensions` property is set, so you need to actively set it to 
`false` if you are looking to make the suggested dimensions user-editable.


{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS0{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

## Localization

You can override all the labels used in transform tool using the `custom.languages` object in [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration), below are the default transform localisation lables

---
```json
{
  
  "transform": {
    "title": "Transform",
    "controls": {
      "buttonReset": "Reset to default",
      "checkboxKeepResolution": "Keep Resolution",
      "inputCropSize": "Crop Size",
      "inputHeight": "h",
      "inputWidth": "w",
      "tabFlipAndRotate": "Flip & Rotate",
      "tabResolution": "Resolution",
      "tabCropSize": "Crop Size",
      "selectFlipRatio": "Flip Crop Ratio"
    },
    "categories": {
      "imgly_transforms_common": "Common Crops",
      "imgly_transforms_facebook": "Facebook"
    },
    "items": {
      "imgly_transform_common_custom": "Custom",
      "imgly_transform_common_square": "Square",
      "imgly_transform_common_4": "4:3",
      "imgly_transform_common_16": "16:9",
      "imgly_transform_facebook_profile": "Profile Pic",
      "imgly_transform_facebook_ad": "Ad",
      "imgly_transform_facebook_post": "Post",
      "imgly_transform_facebook_cover": "Cover"
    }
  }
}
```


{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS03{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}