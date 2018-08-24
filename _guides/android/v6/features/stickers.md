---
layout: guides/content
title: &title Stickers # title as shown in the menu and 
description: The PhotoEditor SDK for Android ships with a preset sticker library containing emoticons and shapes. Learn how to add custom sticker packages to the library
menuitem: *title
order: 6
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


The PhotoEditor SDK comes with a predefined set of stickers, which you can examine in our demo app. You can download the app from the [Play Store](https://play.google.com/store/apps/details?id=com.photoeditorsdk.android.app) or clone from the {% include guides/android/demo-repository.md %}.

The backend settings of each sticker is implemented in the [`ImageStickerLayerSettings`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/backend/model/state/layer/ImageStickerLayerSettings.html) class and displayed using the [`StickerToolPanel`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/panels/StickerToolPanel.html). If you want to customize the appearance of this tool, take a look at the [styling]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/customization/styling) section.

## Managing sticker assets

> Please make sure you put the PNG files into the `res/raw` **or** the `res/drawable-nodpi` folder, otherwise the sticker is scaled by Android.

The list of [`ImageStickerAsset`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/backend/model/config/ImageStickerAsset.html) objects represents the stickers that are available for rendering.

A sticker configuration could then look like this:

{% capture first_snippet_ExampleConfigUtility_configStickerAsset %}
Java
---
``````java
// Obtain the asset config from you settingsList
AssetConfig assetConfig = settingsList.getConfig();
// Add Assets
assetConfig.addAsset(
  new ImageStickerAsset(
    "stickerAssetId1",
    ImageSource.create(R.drawable.imgly_sticker_emoticons_alien)
  ),
  new ImageStickerAsset(
    "stickerAssetId2",
    ImageSource.create(R.drawable.imgly_sticker_emoticons_nerd)
  ),
  new ImageStickerAsset(
    "stickerAssetId4",
    R.drawable.imgly_sticker_shapes_arrow_02,
    ImageStickerAsset.OPTION_MODE.TINT_STICKER
  ),
  new ImageStickerAsset(
    "stickerAssetId5",
    R.drawable.imgly_sticker_emoticons_angel,
    ImageStickerAsset.OPTION_MODE.INK_STICKER
  ),
  new ImageStickerAsset(
    "stickerAssetId6",
    ImageSource.create(Uri.parse("https://content.mydomain/stickers/glasses.png"))
  ),
  new ImageStickerAsset(
    "stickerAssetId7",
    ImageSource.create(Uri.parse("https://content.mydomain/stickers/glasses-vector.xml"))
  ),
  new ImageStickerAsset(
    "stickerAssetId8",
    ImageSource.create(Uri.fromFile(new File("path_to_sticker_folder", "sticker_name.png")))
  )
);
``````
{% endcapture %}{% capture second_snippet_ExampleConfigUtility_configStickerAsset %}
Kotlin
---
``````kotlin
// Add Assets
settingsList.config.apply {
    addAsset(
      ImageStickerAsset(
        "stickerAssetId1",
        ImageSource.create(R.drawable.imgly_sticker_emoticons_alien)
      ),
      ImageStickerAsset(
        "stickerAssetId2",
        ImageSource.create(R.drawable.imgly_sticker_emoticons_nerd)
      ),
      ImageStickerAsset(
        "stickerAssetId4",
        R.drawable.imgly_sticker_shapes_arrow_02,
        ImageStickerAsset.OPTION_MODE.TINT_STICKER
      ),
      ImageStickerAsset(
        "stickerAssetId5",
        R.drawable.imgly_sticker_emoticons_angel,
        ImageStickerAsset.OPTION_MODE.INK_STICKER
      ),
      ImageStickerAsset(
        "stickerAssetId6",
        ImageSource.create(Uri.parse("https://content.mydomain/stickers/glasses.png"))
      ),
      ImageStickerAsset(
        "stickerAssetId7",
        ImageSource.create(Uri.parse("https://content.mydomain/stickers/glasses-vector.xml"))
      ),
      ImageStickerAsset(
        "stickerAssetId8",
        ImageSource.create(Uri.fromFile(File("path_to_sticker_folder", "sticker_name.png")))
      )
    )
}
``````
{% endcapture %}{% assign snippets = "" | split: "" | push: first_snippet_ExampleConfigUtility_configStickerAsset | push: second_snippet_ExampleConfigUtility_configStickerAsset %}
{% capture identifier %}{{page.title}}-{{page.version}}-ExampleConfigUtility_configStickerAsset{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}


## Adding sticker items to the UI
In order to change the available stickers or add new stickers, start with a default [`SettingsList`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/backend/model/state/manager/SettingsList.html) as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section. Then use the [`setStickerList(StickerCategoryItem...)`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/model/state/UiStickerConfig.html) method to update the configuration. The stickers are partitioned into categories, therefore the [`AssetConfig`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/backend/model/state/AssetConfig.html) expects a list of [`StickerCategoryItem`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/panels/item/StickerCategoryItem.html) objects. Each of these objects represents a single sticker category and takes three parameters:

1. The resource identifier of the sticker name. Will not be displayed in the default layout but, is used for accessibility
2. A drawable resource or ImageSource of the icon
3. A list of [`ImageStickerItem`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/panels/item/ImageStickerItem.html) objects

{% capture first_snippet_ExampleConfigUtility_configStickerUi %}
Java
---
``````java
UiConfigSticker uiConfigSticker = settingsList.getSettingsModel(UiConfigSticker.class);
uiConfigSticker.setStickerLists(
  new StickerCategoryItem(
    "myUniqStickerCategoryId1",
    R.string.imgly_sticker_category_name_emoticons,
    ImageSource.create(R.drawable.imgly_sticker_emoticons_alien),
    new ImageStickerItem("imgly_sticker_emoticons_grin", ly.img.android.pesdk.assets.sticker.emoticons.R.string.imgly_sticker_name_emoticons_grin, ImageSource.create(ly.img.android.pesdk.assets.sticker.emoticons.R.drawable.imgly_sticker_emoticons_grin)),
    new ImageStickerItem("imgly_sticker_emoticons_laugh", ly.img.android.pesdk.assets.sticker.emoticons.R.string.imgly_sticker_name_emoticons_laugh, ImageSource.create(ly.img.android.pesdk.assets.sticker.emoticons.R.drawable.imgly_sticker_emoticons_laugh)),
    new ImageStickerItem("imgly_sticker_emoticons_smile", ly.img.android.pesdk.assets.sticker.emoticons.R.string.imgly_sticker_name_emoticons_smile, ImageSource.create(ly.img.android.pesdk.assets.sticker.emoticons.R.drawable.imgly_sticker_emoticons_smile)),
    new ImageStickerItem("imgly_sticker_emoticons_wink", ly.img.android.pesdk.assets.sticker.emoticons.R.string.imgly_sticker_name_emoticons_wink, ImageSource.create(ly.img.android.pesdk.assets.sticker.emoticons.R.drawable.imgly_sticker_emoticons_wink)),
    new ImageStickerItem("imgly_sticker_emoticons_tongue_out_wink", ly.img.android.pesdk.assets.sticker.emoticons.R.string.imgly_sticker_name_emoticons_tongue_out_wink, ImageSource.create( ly.img.android.pesdk.assets.sticker.emoticons.R.drawable.imgly_sticker_emoticons_tongue_out_wink)),
    new ImageStickerItem("imgly_sticker_emoticons_angel", ly.img.android.pesdk.assets.sticker.emoticons.R.string.imgly_sticker_name_emoticons_angel, ImageSource.create( ly.img.android.pesdk.assets.sticker.emoticons.R.drawable.imgly_sticker_emoticons_angel))
    //...
  ),
  new StickerCategoryItem(
    "myUniqStickerCategoryId2",
    R.string.imgly_sticker_category_name_shapes,
    ImageSource.create(R.drawable.imgly_sticker_shapes_badge_35),
    new ImageStickerItem("imgly_sticker_shapes_badge_01", ly.img.android.pesdk.assets.sticker.shapes.R.string.imgly_sticker_name_shapes_badge_01, ImageSource.create( ly.img.android.pesdk.assets.sticker.shapes.R.drawable.imgly_sticker_shapes_badge_01)),
    new ImageStickerItem("imgly_sticker_shapes_badge_04", ly.img.android.pesdk.assets.sticker.shapes.R.string.imgly_sticker_name_shapes_badge_04, ImageSource.create( ly.img.android.pesdk.assets.sticker.shapes.R.drawable.imgly_sticker_shapes_badge_04)),
    new ImageStickerItem("imgly_sticker_shapes_badge_12", ly.img.android.pesdk.assets.sticker.shapes.R.string.imgly_sticker_name_shapes_badge_12, ImageSource.create( ly.img.android.pesdk.assets.sticker.shapes.R.drawable.imgly_sticker_shapes_badge_12)),
    new ImageStickerItem("imgly_sticker_shapes_badge_06", ly.img.android.pesdk.assets.sticker.shapes.R.string.imgly_sticker_name_shapes_badge_06, ImageSource.create( ly.img.android.pesdk.assets.sticker.shapes.R.drawable.imgly_sticker_shapes_badge_06)),
    new ImageStickerItem("imgly_sticker_shapes_badge_13", ly.img.android.pesdk.assets.sticker.shapes.R.string.imgly_sticker_name_shapes_badge_13, ImageSource.create( ly.img.android.pesdk.assets.sticker.shapes.R.drawable.imgly_sticker_shapes_badge_13))
    //...
  )
);
``````
{% endcapture %}{% capture second_snippet_ExampleConfigUtility_configStickerUi %}
Kotlin
---
``````kotlin
settingsList.getSettingsModel(UiConfigSticker::class.java).apply {
    setStickerLists(
      StickerCategoryItem(
        "myUniqStickerCategoryId1",
        R.string.imgly_sticker_category_name_emoticons,
        ImageSource.create(R.drawable.imgly_sticker_emoticons_alien),
        ImageStickerItem("imgly_sticker_emoticons_grin", ly.img.android.pesdk.assets.sticker.emoticons.R.string.imgly_sticker_name_emoticons_grin, ImageSource.create(ly.img.android.pesdk.assets.sticker.emoticons.R.drawable.imgly_sticker_emoticons_grin)),
        ImageStickerItem("imgly_sticker_emoticons_laugh", ly.img.android.pesdk.assets.sticker.emoticons.R.string.imgly_sticker_name_emoticons_laugh, ImageSource.create(ly.img.android.pesdk.assets.sticker.emoticons.R.drawable.imgly_sticker_emoticons_laugh)),
        ImageStickerItem("imgly_sticker_emoticons_smile", ly.img.android.pesdk.assets.sticker.emoticons.R.string.imgly_sticker_name_emoticons_smile, ImageSource.create(ly.img.android.pesdk.assets.sticker.emoticons.R.drawable.imgly_sticker_emoticons_smile)),
        ImageStickerItem("imgly_sticker_emoticons_wink", ly.img.android.pesdk.assets.sticker.emoticons.R.string.imgly_sticker_name_emoticons_wink, ImageSource.create(ly.img.android.pesdk.assets.sticker.emoticons.R.drawable.imgly_sticker_emoticons_wink)),
        ImageStickerItem("imgly_sticker_emoticons_tongue_out_wink", ly.img.android.pesdk.assets.sticker.emoticons.R.string.imgly_sticker_name_emoticons_tongue_out_wink, ImageSource.create(ly.img.android.pesdk.assets.sticker.emoticons.R.drawable.imgly_sticker_emoticons_tongue_out_wink)),
        ImageStickerItem("imgly_sticker_emoticons_angel", ly.img.android.pesdk.assets.sticker.emoticons.R.string.imgly_sticker_name_emoticons_angel, ImageSource.create(ly.img.android.pesdk.assets.sticker.emoticons.R.drawable.imgly_sticker_emoticons_angel))
        //...
      ),
      StickerCategoryItem(
        "myUniqStickerCategoryId2",
        R.string.imgly_sticker_category_name_shapes,
        ImageSource.create(R.drawable.imgly_sticker_shapes_badge_35),
        ImageStickerItem("imgly_sticker_shapes_badge_01", ly.img.android.pesdk.assets.sticker.shapes.R.string.imgly_sticker_name_shapes_badge_01, ImageSource.create(ly.img.android.pesdk.assets.sticker.shapes.R.drawable.imgly_sticker_shapes_badge_01)),
        ImageStickerItem("imgly_sticker_shapes_badge_04", ly.img.android.pesdk.assets.sticker.shapes.R.string.imgly_sticker_name_shapes_badge_04, ImageSource.create(ly.img.android.pesdk.assets.sticker.shapes.R.drawable.imgly_sticker_shapes_badge_04)),
        ImageStickerItem("imgly_sticker_shapes_badge_12", ly.img.android.pesdk.assets.sticker.shapes.R.string.imgly_sticker_name_shapes_badge_12, ImageSource.create(ly.img.android.pesdk.assets.sticker.shapes.R.drawable.imgly_sticker_shapes_badge_12)),
        ImageStickerItem("imgly_sticker_shapes_badge_06", ly.img.android.pesdk.assets.sticker.shapes.R.string.imgly_sticker_name_shapes_badge_06, ImageSource.create(ly.img.android.pesdk.assets.sticker.shapes.R.drawable.imgly_sticker_shapes_badge_06)),
        ImageStickerItem("imgly_sticker_shapes_badge_13", ly.img.android.pesdk.assets.sticker.shapes.R.string.imgly_sticker_name_shapes_badge_13, ImageSource.create(ly.img.android.pesdk.assets.sticker.shapes.R.drawable.imgly_sticker_shapes_badge_13))
        //...
      )
    )
}
``````
{% endcapture %}{% assign snippets = "" | split: "" | push: first_snippet_ExampleConfigUtility_configStickerUi | push: second_snippet_ExampleConfigUtility_configStickerUi %}
{% capture identifier %}{{page.title}}-{{page.version}}-ExampleConfigUtility_configStickerUi{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}