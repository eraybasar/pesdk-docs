---
layout: guides/content
title: &title Filters # title as shown in the menu and 
description: The PhotoEditor SDK for Android features more than 60 high-quality filters with lightning fast processing. Learn how to easily add your own custom filters.
menuitem: *title
order: 1
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


Our PhotoEditor SDK features more than 60 high-quality filters and enables you to add custom filters with ease. The processing of the images is lightning fast and adding your own filters neither requires super math nor high-level coding skills.

To examine the included filters, you can download the {% include guides/android/example-app.md %} from the Play Store or clone our {% include guides/android/demo-repository.md %}.

The backend settings are implemented in the [`FilterSettings`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/pesdk/backend/model/state/FilterSettings.html) class and displayed using the [`FilterToolPanel`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/pesdk/ui/panels/FilterToolPanel.html). If you want to customize the appearance of this tool, take a look at the [styling]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/concepts/styling) section.

## Add or remove predefined filters

In order to change the available filters or rearrange them, start with a default [`SettingsList`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/pesdk/backend/model/state/manager/SettingsList.html) as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section and use [`getSettingsModel(UiConfigText.class)`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/pesdk/ui/model/state/UiConfigText.html) and the [`setFilterList(ly.img.android.pesdk.ui.panels.item.FilterItem...)`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/pesdk/ui/model/state/UiConfigFilter.html) method to add your filter selection as a list of [`FilterItem`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/pesdk/ui/panels/item/FilterItem.html) objects:

```java
ConfigMap<FilterAsset> filterAssetsMap = settingsList.getSettingsModel(AssetConfig.class).getAssetMap(FilterAsset.class);
filterAssetsMap.add(FilterAsset.NONE_FILER);
filterAssetsMap.add(new LutColorFilterAsset("my_own_lut_id", ImageSource.create(R.drawable.imgly_lut_ad1920_5_5_128), 5, 5, 128));
filterAssetsMap.add(new ColorFilterAssetAD1920());
filterAssetsMap.add(new ColorFilterAssetAncient());
filterAssetsMap.add(new ColorFilterAssetBleached());
filterAssetsMap.add(new ColorFilterAssetBleachedBlue());
filterAssetsMap.add(new ColorFilterAssetBlues());
filterAssetsMap.add(new ColorFilterAssetBlueShadows());
filterAssetsMap.add(new ColorFilterAssetBreeze());
filterAssetsMap.add(new ColorFilterAssetBW());
filterAssetsMap.add(new ColorFilterAssetCelsius());
filterAssetsMap.add(new ColorFilterAssetChest());
filterAssetsMap.add(new ColorFilterAssetClassic());
filterAssetsMap.add(new ColorFilterAssetColorful());
filterAssetsMap.add(new ColorFilterAssetCool());
filterAssetsMap.add(new ColorFilterAssetCottonCandy());
filterAssetsMap.add(new ColorFilterAssetCreamy());
filterAssetsMap.add(new ColorFilterAssetEighties());
filterAssetsMap.add(new ColorFilterAssetElder());
filterAssetsMap.add(new ColorFilterAssetEvening());
filterAssetsMap.add(new ColorFilterAssetFall());
filterAssetsMap.add(new ColorFilterAssetFixie());
filterAssetsMap.add(new ColorFilterAssetFood());
filterAssetsMap.add(new ColorFilterAssetFridge());
filterAssetsMap.add(new ColorFilterAssetFront());
filterAssetsMap.add(new ColorFilterAssetGlam());
filterAssetsMap.add(new ColorFilterAssetGobblin());
filterAssetsMap.add(new ColorFilterAssetHighCarb());
filterAssetsMap.add(new ColorFilterAssetHighContrast());
filterAssetsMap.add(new ColorFilterAssetK1());
filterAssetsMap.add(new ColorFilterAssetK2());
filterAssetsMap.add(new ColorFilterAssetK6());
filterAssetsMap.add(new ColorFilterAssetKDynamic());
filterAssetsMap.add(new ColorFilterAssetKeen());
filterAssetsMap.add(new ColorFilterAssetLenin());
filterAssetsMap.add(new ColorFilterAssetLitho());
filterAssetsMap.add(new ColorFilterAssetLomo());
filterAssetsMap.add(new ColorFilterAssetLomo100());
filterAssetsMap.add(new ColorFilterAssetLucid());
filterAssetsMap.add(new ColorFilterAssetMellow());
filterAssetsMap.add(new ColorFilterAssetNeat());
filterAssetsMap.add(new ColorFilterAssetNoGreen());
filterAssetsMap.add(new ColorFilterAssetOrchid());
filterAssetsMap.add(new ColorFilterAssetPale());
filterAssetsMap.add(new ColorFilterAssetPitched());
filterAssetsMap.add(new ColorFilterAssetPola669());
filterAssetsMap.add(new ColorFilterAssetPolaSx());
filterAssetsMap.add(new ColorFilterAssetPro400());
filterAssetsMap.add(new ColorFilterAssetQuozi());
filterAssetsMap.add(new ColorFilterAssetSepiahigh());
filterAssetsMap.add(new ColorFilterAssetSettled());
filterAssetsMap.add(new ColorFilterAssetSeventies());
filterAssetsMap.add(new ColorFilterAssetSin());
filterAssetsMap.add(new ColorFilterAssetSoft());
filterAssetsMap.add(new ColorFilterAssetSteel());
filterAssetsMap.add(new ColorFilterAssetSummer());
filterAssetsMap.add(new ColorFilterAssetSunset());
filterAssetsMap.add(new ColorFilterAssetTender());
filterAssetsMap.add(new ColorFilterAssetTexas());
filterAssetsMap.add(new ColorFilterAssetTwilight());
filterAssetsMap.add(new ColorFilterAssetWinter());
filterAssetsMap.add(new ColorFilterAssetX400());
```

## Response filters
We use a technology called LUTs in order to add new filters to our SDK.
The main idea is that colors respond to operations that are carried out during the filtering process. We 'record' that very response by applying the filter to the identity image shown below.

Starting with version 4.0, we support lower resolution LUT files in order to further reduce your apps deployment size and speed up live filters and filter previews. The supported formats are:

- 512x512 LUT with 8 columns and 8 rows (default) ([download ]({{ site.baseurl }}/assets/images/shared/identity_8_8_512.png){: download="identity_8_8_512" })
- 256x256 LUT with 7 columns and 7 rows ([download ]({{ site.baseurl }}/assets/images/shared/identity_7_7_256.png){: download="identity_7_7_256" })
- 256x256 LUT with 6 columns and 6 rows ([download ]({{ site.baseurl }}/assets/images/shared/identity_6_6_256.png){: download="identity_6_6_256" })
- 128x128 LUT with 5 columns and 5 rows ([download ]({{ site.baseurl }}/assets/images/shared/identity_5_5_128.png){: download="identity_5_5_128" })

Using a smaller LUT file may lead to issues when applying your filter, as our processing engine needs to interpolate missing values. We recommend starting with the smallest possible LUT file and falling back to larger files if you notice that your filter can’t be fully reproduced:

{:center: style="text-align: center"}
![Identity 512x512 8x8 LUT]({{ site.baseurl }}/assets/images/shared/identity_8_8_512.png){: width="256px" style="padding: 10px"}
![Identity 256x256 7x7 LUT]({{ site.baseurl }}/assets/images/shared/identity_7_7_256.png){: width="128px" style="padding: 10px"}
![Identity 256x256 6x6 LUT]({{ site.baseurl }}/assets/images/shared/identity_6_6_256.png){: width="128px" style="padding: 10px"}
![Identity 128x128 5x5 LUT]({{ site.baseurl }}/assets/images/shared/identity_5_5_128.png){: width="64px" style="padding: 10px"}
{:center}

The black borders are required in order to optimize performance and the number of rows translates to the resolution for the green channel, the number of columns translates to the resolution of the red channel and the number of tiles translates to the blue channels resolution. And larger LUTs naturally guarantee a larger resolution across all channels.

The resulting image can be used within our SDK and the recorded changes can then be applied to any image by looking up the transformed colors in the modified LUT.

If you want to create a new filter, you'll need to download one of the identity LUTs shown above, load it into an image editing software of your choice, apply your operations, save it and add it to your app. Please note that not all operations can be translated into a response filter.
Typically those operations use surrounding the pixels to determine the color of the pixel, such as blur.

> __WARNING:__ As any compression artifacts in the edited LUT could lead to distorted results when applying the filter, you need to save your LUT as a PNG file.
 
The last step is to add the filter to
the list of available filters by creating a `LutColorFilter` object just as described above. The object takes the following three parameters:

1. String resource identifier of the filters name, which will not be displayed in the default layout, but is used for Accessibility.
2. Preview image resource for the `CameraPreview` activity. This image is replaced with a filtered version of the current image within the editor.
3. Drawable-nodpi or Raw resource identifier of the PNG LUT.

> __WARNING:__ Be sure to put the LUT PNG file in the 'res/drawable-nodpi' folder. Otherwise, the LUT will be scaled by the Android system. 

Adding the custom filter to the available filters then looks like this:

```java
DataSourceIdItemList<FilterItem> filterInUiList = settingsList.getSettingsModel(UiConfigFilter.class).getFilterList();
filterInUiList.clear();
filterInUiList.add(new FilterItem("my_own_lut_id", "My Filter"));
filterInUiList.add(new FilterItem(FilterAsset.NONE_FILTER_ID, R.string.pesdk_filter_asset_none));
filterInUiList.add(new FilterItem(ColorFilterAssetAD1920.ID, R.string.pesdk_filter_asset_ad1920));
filterInUiList.add(new FilterItem(ColorFilterAssetAncient.ID, R.string.pesdk_filter_asset_ancient));
filterInUiList.add(new FilterItem(ColorFilterAssetBleached.ID, R.string.pesdk_filter_asset_bleached));
filterInUiList.add(new FilterItem(ColorFilterAssetBleachedBlue.ID, R.string.pesdk_filter_asset_bBlue));
filterInUiList.add(new FilterItem(ColorFilterAssetBlues.ID, R.string.pesdk_filter_asset_blues));
filterInUiList.add(new FilterItem(ColorFilterAssetBlueShadows.ID, R.string.pesdk_filter_asset_blueShade));
filterInUiList.add(new FilterItem(ColorFilterAssetBreeze.ID, R.string.pesdk_filter_asset_breeze));
filterInUiList.add(new FilterItem(ColorFilterAssetBW.ID, R.string.pesdk_filter_asset_bw));
filterInUiList.add(new FilterItem(ColorFilterAssetCelsius.ID, R.string.pesdk_filter_asset_celsius));
filterInUiList.add(new FilterItem(ColorFilterAssetChest.ID, R.string.pesdk_filter_asset_chest));
filterInUiList.add(new FilterItem(ColorFilterAssetClassic.ID, R.string.pesdk_filter_asset_classic));
filterInUiList.add(new FilterItem(ColorFilterAssetColorful.ID, R.string.pesdk_filter_asset_colorful));
filterInUiList.add(new FilterItem(ColorFilterAssetCool.ID, R.string.pesdk_filter_asset_cool));
filterInUiList.add(new FilterItem(ColorFilterAssetCottonCandy.ID, R.string.pesdk_filter_asset_candy));
filterInUiList.add(new FilterItem(ColorFilterAssetCreamy.ID, R.string.pesdk_filter_asset_creamy));
filterInUiList.add(new FilterItem(ColorFilterAssetEighties.ID, R.string.pesdk_filter_asset_80s));
filterInUiList.add(new FilterItem(ColorFilterAssetElder.ID, R.string.pesdk_filter_asset_elder));
filterInUiList.add(new FilterItem(ColorFilterAssetEvening.ID, R.string.pesdk_filter_asset_evening));
filterInUiList.add(new FilterItem(ColorFilterAssetFall.ID, R.string.pesdk_filter_asset_fall));
filterInUiList.add(new FilterItem(ColorFilterAssetFixie.ID, R.string.pesdk_filter_asset_fixie));
filterInUiList.add(new FilterItem(ColorFilterAssetFood.ID, R.string.pesdk_filter_asset_food));
filterInUiList.add(new FilterItem(ColorFilterAssetFridge.ID, R.string.pesdk_filter_asset_fridge));
filterInUiList.add(new FilterItem(ColorFilterAssetFront.ID, R.string.pesdk_filter_asset_front));
filterInUiList.add(new FilterItem(ColorFilterAssetGlam.ID, R.string.pesdk_filter_asset_glam));
filterInUiList.add(new FilterItem(ColorFilterAssetGobblin.ID, R.string.pesdk_filter_asset_goblin));
filterInUiList.add(new FilterItem(ColorFilterAssetHighCarb.ID, R.string.pesdk_filter_asset_carb));
filterInUiList.add(new FilterItem(ColorFilterAssetHighContrast.ID, R.string.pesdk_filter_asset_hicon));
filterInUiList.add(new FilterItem(ColorFilterAssetK1.ID, R.string.pesdk_filter_asset_k1));
filterInUiList.add(new FilterItem(ColorFilterAssetK2.ID, R.string.pesdk_filter_asset_k2));
filterInUiList.add(new FilterItem(ColorFilterAssetK6.ID, R.string.pesdk_filter_asset_k6));
filterInUiList.add(new FilterItem(ColorFilterAssetKDynamic.ID, R.string.pesdk_filter_asset_dynamic));
filterInUiList.add(new FilterItem(ColorFilterAssetKeen.ID, R.string.pesdk_filter_asset_keen));
filterInUiList.add(new FilterItem(ColorFilterAssetLenin.ID, R.string.pesdk_filter_asset_lenin));
filterInUiList.add(new FilterItem(ColorFilterAssetLitho.ID, R.string.pesdk_filter_asset_litho));
filterInUiList.add(new FilterItem(ColorFilterAssetLomo.ID, R.string.pesdk_filter_asset_lomo));
filterInUiList.add(new FilterItem(ColorFilterAssetLomo100.ID, R.string.pesdk_filter_asset_lomo100));
filterInUiList.add(new FilterItem(ColorFilterAssetLucid.ID, R.string.pesdk_filter_asset_lucid));
filterInUiList.add(new FilterItem(ColorFilterAssetMellow.ID, R.string.pesdk_filter_asset_mellow));
filterInUiList.add(new FilterItem(ColorFilterAssetNeat.ID, R.string.pesdk_filter_asset_neat));
filterInUiList.add(new FilterItem(ColorFilterAssetNoGreen.ID, R.string.pesdk_filter_asset_noGreen));
filterInUiList.add(new FilterItem(ColorFilterAssetOrchid.ID, R.string.pesdk_filter_asset_orchid));
filterInUiList.add(new FilterItem(ColorFilterAssetPale.ID, R.string.pesdk_filter_asset_pale));
filterInUiList.add(new FilterItem(ColorFilterAssetPitched.ID, R.string.pesdk_filter_asset_pitched));
filterInUiList.add(new FilterItem(ColorFilterAssetPola669.ID, R.string.pesdk_filter_asset_669));
filterInUiList.add(new FilterItem(ColorFilterAssetPolaSx.ID, R.string.pesdk_filter_asset_sx));
filterInUiList.add(new FilterItem(ColorFilterAssetPro400.ID, R.string.pesdk_filter_asset_pro400));
filterInUiList.add(new FilterItem(ColorFilterAssetQuozi.ID, R.string.pesdk_filter_asset_quozi));
filterInUiList.add(new FilterItem(ColorFilterAssetSepiahigh.ID, R.string.pesdk_filter_asset_sepiaHigh));
filterInUiList.add(new FilterItem(ColorFilterAssetSettled.ID, R.string.pesdk_filter_asset_settled));
filterInUiList.add(new FilterItem(ColorFilterAssetSeventies.ID, R.string.pesdk_filter_asset_70s));
filterInUiList.add(new FilterItem(ColorFilterAssetSin.ID, R.string.pesdk_filter_asset_sin));
filterInUiList.add(new FilterItem(ColorFilterAssetSoft.ID, R.string.pesdk_filter_asset_soft));
filterInUiList.add(new FilterItem(ColorFilterAssetSteel.ID, R.string.pesdk_filter_asset_steel));
filterInUiList.add(new FilterItem(ColorFilterAssetSummer.ID, R.string.pesdk_filter_asset_summer));
filterInUiList.add(new FilterItem(ColorFilterAssetSunset.ID, R.string.pesdk_filter_asset_sunset));
filterInUiList.add(new FilterItem(ColorFilterAssetTender.ID, R.string.pesdk_filter_asset_tender));
filterInUiList.add(new FilterItem(ColorFilterAssetTexas.ID, R.string.pesdk_filter_asset_texas));
filterInUiList.add(new FilterItem(ColorFilterAssetTwilight.ID, R.string.pesdk_filter_asset_twilight));
filterInUiList.add(new FilterItem(ColorFilterAssetWinter.ID, R.string.pesdk_filter_asset_winter));
filterInUiList.add(new FilterItem(ColorFilterAssetX400.ID, R.string.pesdk_filter_asset_x400));
```