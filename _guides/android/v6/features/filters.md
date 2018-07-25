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

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}


Our PhotoEditor SDK features more than 60 high-quality filters and enables you to add custom filters with ease. The processing of the images is lightning fast and adding your own filters neither requires super math nor high-level coding skills.

To examine the included filters, you can download the {% include guides/android/example-app.md %} from the Play Store or clone our {% include guides/android/demo-repository.md %}.

The backend settings are implemented in the [`FilterSettings`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/sdk/tools/FilterEditorTool.html) class and displayed using the [`FilterToolPanel`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/ui/panels/FilterToolPanel.html). If you want to customize the appearance of this tool, take a look at the [styling]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/concepts/styling) section.

## Add or remove predefined filters

In order to change the available filters or rearrange them, start with a default `SettingsList` as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section and use `getSettingsModel(UiConfigFilter.class)` and the `setFilterList()` method to add your filter selection as a list of `FilterItem` objects:

```java
// Obtain the config from you settingsList
UiConfigFilter uiConfigFilter = settingsList.getSettingsModel(UiConfigFilter.class);
// Set the FilterItems you want
uiConfigFilter.setFilterList(
    new FilterItem(NoneImageFilter.ID, R.string.pesdk_filter_asset_none),
    new FilterItem(ColorFilterAD1920.ID, R.string.pesdk_filter_asset_ad1920),
    new FilterItem(ColorFilterAncient.ID, R.string.pesdk_filter_asset_ancient),
    new FilterItem(ColorFilterBleached.ID, R.string.pesdk_filter_asset_bleached),
    new FilterItem(ColorFilterBleachedBlue.ID, R.string.pesdk_filter_asset_bBlue),
    new FilterItem(ColorFilterBlues.ID, R.string.pesdk_filter_asset_blues),
    new FilterItem(ColorFilterBlueShadows.ID, R.string.pesdk_filter_asset_blueShade),
    new FilterItem(ColorFilterBreeze.ID, R.string.pesdk_filter_asset_breeze),
    new FilterItem(ColorFilterBW.ID, R.string.pesdk_filter_asset_bw),
    new FilterItem(ColorFilterCelsius.ID, R.string.pesdk_filter_asset_celsius),
    new FilterItem(ColorFilterChest.ID, R.string.pesdk_filter_asset_chest),
    new FilterItem(ColorFilterClassic.ID, R.string.pesdk_filter_asset_classic),
    new FilterItem(ColorFilterColorful.ID, R.string.pesdk_filter_asset_colorful),
    new FilterItem(ColorFilterCool.ID, R.string.pesdk_filter_asset_cool),
    new FilterItem(ColorFilterCottonCandy.ID, R.string.pesdk_filter_asset_candy),
    new FilterItem(ColorFilterCreamy.ID, R.string.pesdk_filter_asset_creamy),
    new FilterItem(ColorFilterEighties.ID, R.string.pesdk_filter_asset_80s),
    new FilterItem(ColorFilterElder.ID, R.string.pesdk_filter_asset_elder),
    new FilterItem(ColorFilterEvening.ID, R.string.pesdk_filter_asset_evening),
    new FilterItem(ColorFilterFall.ID, R.string.pesdk_filter_asset_fall),
    new FilterItem(ColorFilterFixie.ID, R.string.pesdk_filter_asset_fixie),
    new FilterItem(ColorFilterFood.ID, R.string.pesdk_filter_asset_food),
    new FilterItem(ColorFilterFridge.ID, R.string.pesdk_filter_asset_fridge),
    new FilterItem(ColorFilterFront.ID, R.string.pesdk_filter_asset_front),
    new FilterItem(ColorFilterGlam.ID, R.string.pesdk_filter_asset_glam),
    new FilterItem(ColorFilterGobblin.ID, R.string.pesdk_filter_asset_goblin),
    new FilterItem(ColorFilterHighCarb.ID, R.string.pesdk_filter_asset_carb),
    new FilterItem(ColorFilterHighContrast.ID, R.string.pesdk_filter_asset_hicon),
    new FilterItem(ColorFilterK1.ID, R.string.pesdk_filter_asset_k1),
    new FilterItem(ColorFilterK2.ID, R.string.pesdk_filter_asset_k2),
    new FilterItem(ColorFilterK6.ID, R.string.pesdk_filter_asset_k6),
    new FilterItem(ColorFilterKDynamic.ID, R.string.pesdk_filter_asset_dynamic),
    new FilterItem(ColorFilterKeen.ID, R.string.pesdk_filter_asset_keen),
    new FilterItem(ColorFilterLenin.ID, R.string.pesdk_filter_asset_lenin),
    new FilterItem(ColorFilterLitho.ID, R.string.pesdk_filter_asset_litho),
    new FilterItem(ColorFilterLomo.ID, R.string.pesdk_filter_asset_lomo),
    new FilterItem(ColorFilterLomo100.ID, R.string.pesdk_filter_asset_lomo100),
    new FilterItem(ColorFilterLucid.ID, R.string.pesdk_filter_asset_lucid),
    new FilterItem(ColorFilterMellow.ID, R.string.pesdk_filter_asset_mellow),
    new FilterItem(ColorFilterNeat.ID, R.string.pesdk_filter_asset_neat),
    new FilterItem(ColorFilterNoGreen.ID, R.string.pesdk_filter_asset_noGreen),
    new FilterItem(ColorFilterOrchid.ID, R.string.pesdk_filter_asset_orchid),
    new FilterItem(ColorFilterPale.ID, R.string.pesdk_filter_asset_pale),
    new FilterItem(ColorFilterPitched.ID, R.string.pesdk_filter_asset_pitched),
    new FilterItem(ColorFilterPola669.ID, R.string.pesdk_filter_asset_669),
    new FilterItem(ColorFilterPolaSx.ID, R.string.pesdk_filter_asset_sx),
    new FilterItem(ColorFilterPro400.ID, R.string.pesdk_filter_asset_pro400),
    new FilterItem(ColorFilterQuozi.ID, R.string.pesdk_filter_asset_quozi),
    new FilterItem(ColorFilterSepiahigh.ID, R.string.pesdk_filter_asset_sepiaHigh),
    new FilterItem(ColorFilterSettled.ID, R.string.pesdk_filter_asset_settled),
    new FilterItem(ColorFilterSeventies.ID, R.string.pesdk_filter_asset_70s),
    new FilterItem(ColorFilterSin.ID, R.string.pesdk_filter_asset_sin),
    new FilterItem(ColorFilterSoft.ID, R.string.pesdk_filter_asset_soft),
    new FilterItem(ColorFilterSteel.ID, R.string.pesdk_filter_asset_steel),
    new FilterItem(ColorFilterSummer.ID, R.string.pesdk_filter_asset_summer),
    new FilterItem(ColorFilterSunset.ID, R.string.pesdk_filter_asset_sunset),
    new FilterItem(ColorFilterTender.ID, R.string.pesdk_filter_asset_tender),
    new FilterItem(ColorFilterTexas.ID, R.string.pesdk_filter_asset_texas),
    new FilterItem(ColorFilterTwilight.ID, R.string.pesdk_filter_asset_twilight),
    new FilterItem(ColorFilterWinter.ID, R.string.pesdk_filter_asset_winter),
    new FilterItem(ColorFilterX400.ID, R.string.pesdk_filter_asset_x400)
);
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

    // Obtain the assets config from you settingsList
    AssetConfig assetConfig = settingsList.getConfig();
    // Add the Asset to the Backend
    assetConfig.addAsset(new LutColorFilter(
      "myUniqeId", // One uniqe id per asset
      ImageSource.create(R.drawable.lut_my_lut_resource),
      8,  // Vertical Tiles
      8,  // Horizontal Tiles
      512 // Texture Size
    ));

    // Obtain the ui config from you settingsList
    UiConfigFilter uiConfigFilter = settingsList.getSettingsModel(UiConfigFilter.class);
    // Add the filter item to the UI
    uiConfigFilter.getFilterList().add(
        new FilterItem("myUniqeId", R.string.my_color_filter_name)
    );

```
