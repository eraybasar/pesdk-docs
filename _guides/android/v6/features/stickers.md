---
layout: guides/content
title: &title Stickers # title as shown in the menu and 
description: The PhotoEditor SDK for Android ships with a preset sticker library containing emoticons and shapes. Learn how to add custom sticker packages to the library
menuitem: *title
order: 8
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


The PhotoEditor SDK comes with a predefined set of stickers, which you can examine in our demo app. You can download the app from the [Play Store](https://play.google.com/store/apps/details?id=com.photoeditorsdk.android.app) or clone from the {% include guides/android/demo-repository.md %}.

The tool is implemented in the [`StickerEditorTool`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/sdk/tools/StickerEditorTool.html) class and displayed using the [`StickerToolPanel`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/ui/panels/StickerToolPanel.html). If you want to customize the appearance of this tool, take a look at the [styling]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/concepts/styling) section.

## Managing sticker assets

> Please make sure you put the PNG files into the `res/raw` **or** the `res/drawable-nodpi` folder, otherwise the sticker is scaled by Android.

The list of `StickerConfig` objects represents the stickers that are available in the current category. Each `StickerConfig` takes the following five parameters:

1. Sticker identifier, this should be unique. It is currently used for serialization only.
2. `Drawable` resource or `ImageSource` of the sticker
3. (Optional) `ImageStickerConfig.OPTION_MODE` to configure the coloring behavior

A sticker configuration could then look like this:

```java
// Obtain the asset config from you settingsList
AssetConfig assetConfig = settingsList.getConfig();

// Add Assets
assetConfig.addAsset(
    new ImageStickerConfig(
        "stickerAssetId1",
        R.drawable.sticker_glasses_normal
    ),
    new ImageStickerConfig(
        "stickerAssetId2",
        R.drawable.sticker_glasses_nerd
    ),
    new ImageStickerConfig(
        "stickerAssetId3",
        R.drawable.sticker_glasses_shutter_green
    ),
    new ImageStickerConfig(
        "stickerAssetId4",
        R.drawable.sticker_glasses_shutter_yellow
    )
    new ImageStickerConfig(
        "stickerAssetId5",
        R.drawable.imgly_sticker_toy_drum, 
        ImageStickerConfig.OPTION_MODE.INK_STICKER
    ),
    new ImageStickerConfig(
        "stickerAssetId6",
        R.drawable.imgly_sticker_toy_crayons, 
        ImageStickerConfig.OPTION_MODE.INK_STICKER
    )
    new ImageStickerConfig(
        "stickerAssetId7",
        ImageSource.create(Uri.parse("https://content.mydomain/stickers/glasses.png"))
    ),
    new ImageStickerConfig(
        "stickerAssetId8",
        ImageSource.create(Uri.parse("https://content.mydomain/stickers/glasses-vector.xml"))
    ),
    new ImageStickerConfig(
        "stickerAssetId9",
        ImageSource.create(Uri.fromFile(myFile))
    )
);
```


## Adding sticker items to the UI
In order to change the available stickers, rearrange or add new stickers, start with a default `SettingsList` as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section. Then use the `setStickerLists(StickerCategoryItem... items)` method to update the configuration. The stickers are partitioned into categories, therefore the `PESDKConfig` expects a list of `StickerCategoryConfig` objects. Each of these objects represents a single sticker category and takes three parameters:

1. The resource identifier of the sticker name. Will not be displayed in the default layout but, is used for accessibility
2. A drawable resource or ImageSource of the icon
3. A list of `StickerConfig` objects

```
UiConfigSticker uiConfigSticker = settingsList.getSettingsModel(UiConfigSticker.class);
uiConfigSticker.setStickerLists(
  new StickerCategoryItem(
    "myUniqStickerCategoryId1",
    R.string.my_category_name_1,
    ImageSource.create(R.drawable.my_category_1_thumb),
    new ImageStickerItem("stickerAssetId1", R.string.my_sticker_name_1, ImageSource.create(R.drawable.my_sticker_thump_1)),
    new ImageStickerItem("stickerAssetId2", R.string.my_sticker_name_2, ImageSource.create(R.drawable.my_sticker_thump_2)),
    new ImageStickerItem("stickerAssetId3", R.string.my_sticker_name_3, ImageSource.create(R.drawable.my_sticker_thump_3)),
    new ImageStickerItem("stickerAssetId4", R.string.my_sticker_name_4, ImageSource.create(R.drawable.my_sticker_thump_4)),
    new ImageStickerItem("stickerAssetId5", R.string.my_sticker_name_5, ImageSource.create(R.drawable.my_sticker_thump_5)),
    new ImageStickerItem("stickerAssetId6", R.string.my_sticker_name_6, ImageSource.create(R.drawable.my_sticker_thump_6))
  ),
  new StickerCategoryItem(
    "myUniqStickerCategoryId2",
    R.string.my_category_name_2,
    ImageSource.create(R.drawable.my_category_2_thumb),
    new ImageStickerItem("stickerAssetId7", R.string.my_sticker_name_7, ImageSource.create(R.drawable.my_sticker_thump_7)),
    new ImageStickerItem("stickerAssetId8", R.string.my_sticker_name_8, ImageSource.create(R.drawable.my_sticker_thump_8)),
    new ImageStickerItem("stickerAssetId9", R.string.my_sticker_name_9, ImageSource.create(R.drawable.my_sticker_thump_9)),
  )
);
```