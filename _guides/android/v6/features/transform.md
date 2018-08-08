---
layout: guides/content
title: &title Transform # title as shown in the menu and 
description: The transform tool of the PhotoEditor SDK for Android unifies cropping, flipping and rotation operations. Learn how to add custom crop ratios to the library
menuitem: *title
order: 4
platform: android
version: v6
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/screenshot_{{page.title | downcase}}.jpg){: height="400px" .center-image}


Our transform tool unifies cropping, flipping and rotation operations in one feature. The PhotoEditor SDK holds various preset crop ratios (e.g. 16:9) that can easily be complemented by any crop ratio you deem necessary.

The backend settings are implemented in the [`TransformSettings`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/pesdk/backend/model/state/TransformSettings.html) class and displayed using the [`TransformToolPanel`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/pesdk/ui/panels/TransformToolPanel.html). If you want to customize the appearance of this tool, take a look at the [styling]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/customization/styling) section.

As an example, you could create the following configuration:

{% capture first_snippet_ExampleConfigUtility_configTransform %}
Java
---
``````java
// Obtain the asset config from you settingsList
AssetConfig assetConfig = settingsList.getConfig();

// Add aspect assets to backend
assetConfig.addAsset(
  CropAspectAsset.FREE_CROP,
  new CropAspectAsset("my_crop_1_1",1, 1, false),
  new CropAspectAsset("my_crop_16_9",16, 9, false),
  new CropAspectAsset("my_crop_9_16",9, 16, false),
  new CropAspectAsset("my_crop_4_3",4, 3, false),
  new CropAspectAsset("my_crop_3_4",3, 4, false),
  new CropAspectAsset("my_crop_3_2",3, 2, false),
  new CropAspectAsset("my_crop_2_3",2, 3, false)
);

// Obtain the ui config from you settingsList
UiConfigAspect uiConfigAspect = settingsList.getSettingsModel(UiConfigAspect.class);

// Add Items to UI
uiConfigAspect.setAspectList(
  new CropAspectItem("my_crop_free", R.string.pesdk_transform_button_freeCrop),
  new CropAspectItem("my_crop_1_1"),
  new CropAspectItem("my_crop_16_9"),
  new CropAspectItem("my_crop_9_16"),
  new CropAspectItem("my_crop_4_3"),
  new CropAspectItem("my_crop_3_4"),
  new CropAspectItem("my_crop_3_2"),
  new CropAspectItem("my_crop_2_3")
);
``````
{% endcapture %}{% capture second_snippet_ExampleConfigUtility_configTransform %}
Kotlin
---
``````kotlin
// Add aspect assets to backend
settingsList.config.apply {
    addAsset(
      CropAspectAsset.FREE_CROP,
      CropAspectAsset("my_crop_1_1", 1, 1, false),
      CropAspectAsset("my_crop_16_9", 16, 9, false),
      CropAspectAsset("my_crop_9_16", 9, 16, false),
      CropAspectAsset("my_crop_4_3", 4, 3, false),
      CropAspectAsset("my_crop_3_4", 3, 4, false),
      CropAspectAsset("my_crop_3_2", 3, 2, false),
      CropAspectAsset("my_crop_2_3", 2, 3, false)
    )
}

// Add Items to UI
  settingsList.getSettingsModel(UiConfigAspect::class.java).apply {
    setAspectList(
      CropAspectItem("my_crop_free", R.string.pesdk_transform_button_freeCrop),
      CropAspectItem("my_crop_1_1"),
      CropAspectItem("my_crop_16_9"),
      CropAspectItem("my_crop_9_16"),
      CropAspectItem("my_crop_4_3"),
      CropAspectItem("my_crop_3_4"),
      CropAspectItem("my_crop_3_2"),
      CropAspectItem("my_crop_2_3")
    )
}
``````
{% endcapture %}{% assign snippets = "" | split: "" | push: first_snippet_ExampleConfigUtility_configTransform | push: second_snippet_ExampleConfigUtility_configTransform %}
{% capture identifier %}{{page.title}}-{{page.version}}-ExampleConfigUtility_configTransform{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

