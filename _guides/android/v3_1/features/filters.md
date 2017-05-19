---
layout: guides/content
title: &title Filters # title as shown in the menu and 
description: The PhotoEditor SDK for Android features more than 60 high-quality filters with lightning fast processing. Learn how to easily add your own custom filters.
menuitem: *title
order: 1
platform: android
version: v3_1
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}

# Filters

Our PhotoEditor SDK features more than 60 high quality filters and enables you to add custom filters with ease. The processing of the images is lightning fast and adding your own filters neither requires super math nor high level coding skills.

To examine the included filters, you can download the {% include guides/android/example-app.md %} from the Play Store or clone our {% include guides/android/demo-repository.md %}.

The tool is implemented in the [`FilterEditorTool`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/sdk/tools/FilterEditorTool.html) class and displayed using the [`FilterToolPanel`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/ui/panels/FilterToolPanel.html). If you want to customize the appearance of this tool, take a look at the [styling]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/concepts/styling) section.

## Add or remove predefined filters

In order to change the available filters or rearrange them, start with a default `ImglyConfig` as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section and use the `setFilterConfig()` method to add your filter selection as a list of `ColorFilter` objects:

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
We use a technology called LUTs in order to add new filters to our SDK.
The main idea is that colors respond to operations that are carried out during the filtering process. We 'record' that very response by applying the filter to the identity image shown below.

![Identity LUT]({{ site.baseurl }}/assets/images/shared/identity.png){: width="30%" .center-image}

The resulting image can be used within our SDK and the recorded changes can then be applied to any image by looking up the transformed colors in the modified LUT.

If you want to create a new filter, you'll need to [download]({{ site.baseurl }}/assets/images/shared/identity.png){: download="pesdk_identity_lut" } the identity LUT shown above, load it into an image editing software of your choice, apply your operations, save it and add it to your app. Please note that not all operations can be translated into a response filter.
Typically those operations use surrounding the pixels to determine the color of the pixel, such as blur.

> __WARNING:__ As any compression artifacts in the edited LUT could lead to distorted results when applying the filter, you need to save your LUT as a PNG file.
 
The last step step is to add the filter to
the list of available filters by creating a `LutColorFilter` object just as described above. The object takes the following three parameters:

1. String resource identifier of the filters name, which will not be displayed in the default layout, but is used for Accessibility.
2. Preview image resource for the `CameraPreview` activity. This image is replaced with a filtered version within the editor.
3. Drawable-nodpi or Raw resource identifier of the PNG LUT.

> __WARNING:__ Be sure to put the LUT PNG file in the 'res/drawable-nodpi' folder. Otherwise the LUT will be scaled by the Android system. 

Adding the custom filter to the available filters then looks like this:

```java
    ArrayList<<ColorFilter>> filters = config.getFilterConfig();
    filters.add(new LutColorFilter(R.string.my_filter_name, R.drawable.imgly_filter_preview_photo, R.drawable.my_filter_lut));
    config.setFilter(filters);
```
