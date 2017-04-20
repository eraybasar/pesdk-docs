---
layout: guides/android/v3_1/content
title: &title Filters # title as shown in the menu and 

menuitem: *title
order: 0
platform:
  - android
version:
  - v3_1
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

# Filters

Our PhotoEditor SDK features more than 60 high quality filters and enables you to add custom filters with ease. The processing of the images is lightning fast and adding your own filters neither requires super math nor high level coding skills.

![Filters](/assets/images/android/imgly_editor_filter.png){: width="360px"}

The SDK comes with a predefined set of filters, which you can examine in our demo app. You can download the app from the [Play Store](https://play.google.com/store/apps/details?id=com.photoeditorsdk.android.app) or clone from the [GitHub repository](https://github.com/imgly/imgly-sdk-android-demo).

## Add or remove predefined filters

In order to change the available filters or rearrange them, start with a default `ImglyConfig` as described in the [Configuration](/guides/android/v3_1/features/configuration) section and use the `setFilterConfig()` method to add your filter selection as a list of `ColorFilter` objects:

```java
    ArrayList<<ColorFilter>> filter = new ArrayList<>();

    filter.add(new NoneColorFilter());
    filter.add(new ColorFilterAD1920());
    filter.add(new ColorFilterAncient());
    filter.add(new ColorFilterBleached());
    filter.add(new ColorFilterBleachedBlue());
    filter.add(new ColorFilterBlues());
    filter.add(new ColorFilterBlueShadows());
    filter.add(new ColorFilterBreeze());
    filter.add(new ColorFilterBW());
    filter.add(new ColorFilterCelsius());
    filter.add(new ColorFilterClassic());
    filter.add(new ColorFilterColorful());
    filter.add(new ColorFilterCool());
    filter.add(new ColorFilterCottonCandy());
    filter.add(new ColorFilterCreamy());
    filter.add(new ColorFilterEighties());
    filter.add(new ColorFilterElder());
    filter.add(new ColorFilterEvening());
    filter.add(new ColorFilterFall());
    filter.add(new ColorFilterFixie());
    filter.add(new ColorFilterFood());
    filter.add(new ColorFilterFridge());
    filter.add(new ColorFilterFront());
    filter.add(new ColorFilterGlam());
    filter.add(new ColorFilterHighCarb());
    filter.add(new ColorFilterHighContrast());
    filter.add(new ColorFilterK1());
    filter.add(new ColorFilterK2());
    filter.add(new ColorFilterK6());
    filter.add(new ColorFilterKDynamic());
    filter.add(new ColorFilterKeen());
    filter.add(new ColorFilterLenin());
    filter.add(new ColorFilterLitho());
    filter.add(new ColorFilterLomo());
    filter.add(new ColorFilterLomo100());
    filter.add(new ColorFilterLucid());
    filter.add(new ColorFilterMellow());
    filter.add(new ColorFilterNeat());
    filter.add(new ColorFilterNoGreen());
    filter.add(new ColorFilterOrchid());
    filter.add(new ColorFilterPale());
    filter.add(new ColorFilterPola669());
    filter.add(new ColorFilterPolaSx());
    filter.add(new ColorFilterPro400());
    filter.add(new ColorFilterQuozi());
    filter.add(new ColorFilterSepiahigh());
    filter.add(new ColorFilterSettled());
    filter.add(new ColorFilterSeventies());
    filter.add(new ColorFilterSin());
    filter.add(new ColorFilterSoft());
    filter.add(new ColorFilterSteel());
    filter.add(new ColorFilterSummer());
    filter.add(new ColorFilterSunset());
    filter.add(new ColorFilterTender());
    filter.add(new ColorFilterTexas());
    filter.add(new ColorFilterTwilight());
    filter.add(new ColorFilterWinter());
    filter.add(new ColorFilterX400());

    config.setFilter(filter);
```

## Response filters
We use a technology called response filters in order to add new filters to our SDK.
The main idea is that colors respond to operations that are carried out during the filtering process. We 'record' that very response. We do that by applying the filter to the identity image shown below.

![Identity LUT](/assets/images/shared/identity.png){: width="30%"}

The resulting image can be used within our SDK and the recorded changes can then be applied to any image.
If you want to create a new filter, you'll need to upload the image shown above into an image editing software of your choice, apply your operations, save it and add it to your app. In a last step you need to add the filter to
the list of available filters.

<div class="todo">
Ask Sven if this is the right code snippet and why it was called ImageStickerConfig. Make sure point 2 is right. LUT, response filter or 3D LUT?
</div>

In order to make a custom LUT available as a new filter, you create a `LutColorFilter` object and add it to your list of filters. The object takes the following three parameters:

1. String resource identifier of the filters name, which will not be displayed in the default layout, but is used for Accessibility.
2. Preview image resource for the `CameraPreview` activity. This image is replaced with a filtered version within the editor.
3. Drawable-nodpi or Raw resource identifier of the PNG LUT.

> __WARNING:__ Be sure to put the PNG LUT to the 'res/raw' **OR** the 'res/drawable-nodpi' folder. Otherwise the LUT will be scaled by the Android system.
> Use the 'raw' folder if you want to optimize the PNG file size yourself or add the file to the 'drawable-nodpi' folder in order to let the Android compiler optimize it for you.

This is a code example for adding a custom filter:

```java
    ArrayList<<ColorFilter>> filters = config.getFilterConfig();
    filters.add(new LutColorFilter(R.string.imgly_color_filter_name_ad1920, R.drawable.imgly_filter_preview_photo, R.drawable.my_color_lut));
    config.setFilter(filters);
```
