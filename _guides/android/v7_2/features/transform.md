---
layout: guides/content
title: &title Transform # title as shown in the menu and 
description: The transform tool of the PhotoEditor SDK for Android unifies cropping, flipping and rotation operations. Learn how to add custom crop ratios to the library
menuitem: *title
order: 10
platform: android
version: v7_2
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/screenshot_{{page.title | downcase}}.jpg){: height="400px" .center-image}


Our transform tool unifies cropping, flipping and rotation operations in one feature. The PhotoEditor SDK holds various preset crop ratios (e.g. 16:9) that can easily be complemented by any crop ratio you deem necessary.

The backend settings are implemented in the [`TransformSettings`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/backend/model/state/TransformSettings.html) class and displayed using the [`TransformToolPanel`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/panels/TransformToolPanel.html). If you want to customize the appearance of this tool, take a look at the [customization]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/customization/introduction) section.

As an example, you could create the following configuration:

{% capture first_snippet_ExampleConfigUtility_configTransform %}
Java
---
``````java
// Obtain the asset config from you settingsList
AssetConfig assetConfig = settingsList.getConfig();

// Clear defaults and add aspect assets to the backend
assetConfig.getAssetMap(CropAspectAsset.class).clear().add(
  CropAspectAsset.FREE_CROP,
  new CropAspectAsset("my_crop_1_1", 1, 1, false),
  new CropAspectAsset("my_crop_16_9", 16, 9, false),
  new CropAspectAsset("my_crop_9_16", 9, 16, false),
  new CropAspectAsset("my_crop_4_3", 4, 3, false),
  new CropAspectAsset("my_crop_3_4", 3, 4, false),
  new CropAspectAsset("my_crop_3_2", 3, 2, false),
  new CropAspectAsset("my_crop_2_3", 2, 3, false)
);

// Obtain the ui config from you settingsList
UiConfigAspect uiConfigAspect = settingsList.getSettingsModel(UiConfigAspect.class);

// Add aspect items to UI
uiConfigAspect.setAspectList(
  new CropResetItem(),
  new CropAspectItem("my_crop_free", R.string.pesdk_transform_button_freeCrop, ImageSource.create(R.drawable.imgly_icon_custom_crop)),
  new CropAspectItem("my_crop_1_1", R.string.pesdk_transform_button_squareCrop),
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
    getAssetMap(CropAspectAsset::class.java).clear().add(
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

## Forcing specific ratios

Per default the SDK chooses the best matching aspect for the input photo. This is in general the `FREE_CROP`.
In order to force your users to crop their image to one of the available crop ratios, you need to remove the `FREE_CROP` option from the assets, to ensure that a user can’t remove the forced crop ratio afterward.
{% capture first_snippet_ExampleConfigUtility_configForceCrop %}
Java
---
``````java
// Remove default Assets and add your own aspects
settingsList.getSettingsModel(AssetConfig.class).getAssetMap(CropAspectAsset.class)
  .clear().add(
  new CropAspectAsset("aspect_1_1", 1, 1, false),
  new CropAspectAsset("aspect_16_9", 16, 9, false),
  new CropAspectAsset("aspect_9_16", 9, 16, false)
);

// Add your own Asset to UI config and select the Force crop Mode.
settingsList.getSettingsModel(UiConfigAspect.class).setAspectList(
  new CropAspectItem("aspect_1_1"),
  new CropAspectItem("aspect_16_9"),
  new CropAspectItem("aspect_9_16")
).setForceCropMode(
  // This prevents that the Transform tool opens at start.
  UiConfigAspect.ForceCrop.SHOW_TOOL_NEVER
);
``````
{% endcapture %}{% capture second_snippet_ExampleConfigUtility_configForceCrop %}
Kotlin
---
``````kotlin
// Remove default Assets and add your own aspects
settingsList.getSettingsModel(AssetConfig::class.java).apply {
    getAssetMap(CropAspectAsset::class.java)
      .clear().add(
        CropAspectAsset("aspect_1_1", 1, 1, false),
        CropAspectAsset("aspect_16_9", 16, 9, false),
        CropAspectAsset("aspect_9_16", 9, 16, false)
      )
}

// Add your own Asset to UI config and select the Force crop Mode.
settingsList.getSettingsModel(UiConfigAspect::class.java).apply {
    setAspectList(
      CropAspectItem("aspect_1_1"),
      CropAspectItem("aspect_16_9"),
      CropAspectItem("aspect_9_16")
    )
    forceCropMode = UiConfigAspect.ForceCrop.SHOW_TOOL_NEVER
}
``````
{% endcapture %}{% assign snippets = "" | split: "" | push: first_snippet_ExampleConfigUtility_configForceCrop | push: second_snippet_ExampleConfigUtility_configForceCrop %}
{% capture identifier %}{{page.title}}-{{page.version}}-ExampleConfigUtility_configForceCrop{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

You can also force a specific aspect for portrait and landscape images. (In this case you do not need to removing the `FREE_CROP` option)
{% capture first_snippet_ExampleConfigUtility_configShouldCropped %}
Java
---
``````java
// Set force crop by asset id, make sure you have added that asset.
settingsList.getSettingsModel(TransformSettings.class)
  .setForceCrop("aspect_16_9", "aspect_9_16");
``````
{% endcapture %}{% capture second_snippet_ExampleConfigUtility_configShouldCropped %}
Kotlin
---
``````kotlin
// Set force crop by asset id, make sure you have added that asset.
settingsList.getSettingsModel(TransformSettings::class.java).apply {
    setForceCrop("aspect_16_9", "aspect_9_16")
}
``````
{% endcapture %}{% assign snippets = "" | split: "" | push: first_snippet_ExampleConfigUtility_configShouldCropped | push: second_snippet_ExampleConfigUtility_configShouldCropped %}
{% capture identifier %}{{page.title}}-{{page.version}}-ExampleConfigUtility_configShouldCropped{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}
