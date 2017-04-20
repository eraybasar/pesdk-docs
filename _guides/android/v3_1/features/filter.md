---
layout: guides/android/v3_1/content
title: &title Filter # title as shown in the menu and 

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

# Filter

Our SDK features more than 60 high quality filters. The PhotoEditor SDK enables you to add custom filters with ease. The processing of the images is lightning fast.
Adding custom filters doesn't require super math skills high level coding skills.
The way we realize filters simply requires programs like Gimp or Photoshop. Only the implementation of the filters requires code.

## Add or remove predefined ColorFilter

![Filter](/assets/images/android/imgly_editor_filter.png){: width="360px"}

To set the list of color filters, use the method: `ImgLyConfig.setFilterConfig()`.

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
We use a technology that we call response filters.
The main idea is that colors respond to operations that are carried out during the filtering process. We 'record' that very response. We do that by applying the filter to the image shown below.

![Identity LUT](/assets/images/shared/identity.png){: width="30%"}

The resulting image can be used within our SDK. The recorded changes can be applied to any image.
If you want to create a new filter, you'll need to upload the image shown above into your software, apply the operations, save it and add it to your app. In a last step you need to add the filter to
the list of available filters.

This is a code example for adding your custom filter:

```java
    ArrayList<<ColorFilter>> filter = config.getFilterConfig();

    /*
        For a lut color filter config create a new ImageStickerConfig with the following Parameters:
        Parameter 1: String resource identifier of the font name will not displayed in the default layout but is used for Accessibility
        Parameter 2: Preview image resource for the CameraPreview activity. This image is replaced in the Editor with the source image you uploaded. It will be filtered by the LUT before being displayed
        Parameter 3: Drawable-nodpi or Raw resource identifier of the PNG 3D LUT.
         // Be sure that you put the PNG LUT to the res/raw OR the res/drawable-nodpi folder, otherwise, the LUT will be scaled by the Android system!
         // Use the Raw folder if you want to optimize the PNG file size by yourself, put the file  into the drawable-nodpi folder in order to let the android compiler optimize it for you.

    filter.add(new LutColorFilter(R.string.imgly_color_filter_name_ad1920, R.drawable.imgly_filter_preview_photo, R.drawable.my_color_lut));
```
