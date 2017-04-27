---
layout: guides/android/v3_1/content
title: &title Transform # title as shown in the menu and 

menuitem: *title
order: 4
platform: android
version: v3_1
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}

# Transform

Our transform tool unifies cropping, flipping and rotation operations in one feature. The PhotoEditor SDK holds various preset crop ratios (e.g. 16:9) that can easily be complemented by any crop ratio you deem necessary.

The tool is implemented in the [`TransformEditorTool`](https://static.photoeditorsdk.com/docs/android-v3/ly/img/android/sdk/tools/TransformEditorTool.html) class and displayed using the [`TransformToolPanel`](https://static.photoeditorsdk.com/docs/android-v3/ly/img/android/ui/panels/TransformToolPanel.html). If you want to customize the appearance of this tool, take a look at the [styling]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/concepts/styling) section.

## Forcing specific ratios

In order to force your users to crop their image to one of the available crop ratios, you can use the `setForcedCropMode` of the `ImgLyConfig` object to set the desired `CropAspectConfig` configurations in portrait and landscape mode. This creates a crop overlay when displaying the camera preview and crops the image to the desired aspect ratio when the user captures an image. In this case, you need to remove the `CustomCrop` option from the tool as well, to ensure that a user can't remove the forced crop ratio afterwards.
