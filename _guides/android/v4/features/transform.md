---
layout: guides/content
title: &title Transform # title as shown in the menu and 

menuitem: *title
order: 4
platform: android
version: v4
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}


Our transform tool unifies cropping, flipping and rotation operations in one feature. The PhotoEditor SDK holds various preset crop ratios (e.g. 16:9) that can easily be complemented by any crop ratio you deem necessary.

The tool is implemented in the [`TransformEditorTool`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/sdk/tools/TransformEditorTool.html) class and displayed using the [`TransformToolPanel`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/ui/panels/TransformToolPanel.html). If you want to customize the appearance of this tool, take a look at the [styling]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/concepts/styling) section.


You can set your own crop configuration using the `getCropConfig()` method.

There are two types of crop configurations:

* Fixed aspect ratio while keeping the resolution
* Fixed aspect ratio with fixed resolution

You can create a fixed aspect ratio by creating a new `CropAspectConfig` with the following parameters:

1. A resource identifier for the crop configurations name (optional)
2. The width (e.g. 16)
3. The height (e.g. 9)

As an example, you could create the following configuration:

```java

ArrayList<CropAspectConfig> cropConfig = new ArrayList<>();

/* Add a the custom crop configuration (optional) */
cropConfig.add(CropAspectConfig.FREE_CROP);

/* Add a 16:9 crop configuration */
cropConfig.add(new CropAspectConfig(16, 9));

/* Add a 4:3 crop configuration with name */
cropConfig.add(new CropAspectConfig(R.string.my_4_3_crop_name, 4, 3));

config.setAspects(cropConfig);
```

## Forcing specific ratios

In order to force your users to crop their image to one of the available crop ratios, you can use the `setForcedCropMode` of the `PESDKConfig` object to set the desired `CropAspectConfig` configurations in portrait and landscape mode. This creates a crop overlay when displaying the camera preview and crops the image to the desired aspect ratio when the user captures an image. In this case, you need to remove the `CustomCrop` option from the tool as well, to ensure that a user can't remove the forced crop ratio afterwards.
