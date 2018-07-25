---
layout: guides/content
title: &title Transform # title as shown in the menu and 
description: The transform tool of the PhotoEditor SDK for Android unifies cropping, flipping and rotation operations. Learn how to add custom crop ratios to the library
menuitem: *title
order: 5
platform: android
version: v6
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}


Our transform tool unifies cropping, flipping and rotation operations in one feature. The PhotoEditor SDK holds various preset crop ratios (e.g. 16:9) that can easily be complemented by any crop ratio you deem necessary.

The User Interface is implemented in the [`TransformToolPanel`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/ui/panels/TransformToolPanel.html). If you want to customize the appearance of this tool, take a look at the [styling]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/concepts/styling) section.


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

// Obtain the asset config from you settingsList
AssetConfig assetConfig = settingsList.getConfig();

// Add aspect assets to backend
assetConfig.addAsset(
    CropAspectConfig.FREE_CROP,
    new CropAspectConfig("my_crop_1_1",1, 1, false),
    new CropAspectConfig("my_crop_16_9",16, 9, false),
    new CropAspectConfig("my_crop_9_16",9, 16, false),
    new CropAspectConfig("my_crop_4_3",4, 3, false),
    new CropAspectConfig("my_crop_3_4",3, 4, false),
    new CropAspectConfig("my_crop_3_2",3, 2, false),
    new CropAspectConfig("my_crop_2_3",2, 3, false)
);

// Obtain the ui config from you settingsList
UiConfigAspect uiConfigAspect = settingsList.getStateModel(UiConfigAspect.class);
// Add Items to UI
uiConfigAspect.setAspectList(
	new CropAspectItem("my_crop_free", R.string.pesdk_transform_title_freeCrop),
	new CropAspectItem("my_crop_1_1"),
	new CropAspectItem("my_crop_16_9"),
	new CropAspectItem("my_crop_9_16"),
	new CropAspectItem("my_crop_4_3"),
	new CropAspectItem("my_crop_3_4"),
	new CropAspectItem("my_crop_3_2"),
	new CropAspectItem("my_crop_2_3")
);

```

