---
layout: guides/content
title: &title Filters # title as shown in the menu and
description: The PhotoEditor SDK for iOS features more than 60 high-quality filters with lightning fast processing. Learn how to easily add your own custom filters.
menuitem: *title
order: 0
platform: ios
version: v9
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}

Our SDK features more than 60 high-quality filters. The processing is lightning fast, and it's easy to add your own filters.
You might think that adding your own filters is complicated or requires super math skills.
Well, not at all. The way we realize filters makes it super easy. Actually, you don't have to code filters,
you just need a program like Gimp of Photoshop. The only thing that needs to be done in code, is to add the filter you created.

The tool is implemented in the `FilterToolController` class and can be customized using the [`FilterToolControllerOptions`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/FilterToolControllerOptions.html). For details on how to modify the options, take a look at the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section.

## Setting available filters

Every filter is represented by an instance of the `PhotoEffect` class. Said class also holds the `allEffects` array that allows you to access all available filters that ship with the SDK.
The following example shows how a custom selection of filters can be set:

{% capture first_snippet %}
Swift
---
```swift
private let effects: [PhotoEffect] = [
  PhotoEffect(identifier: "K1", lutURL: Bundle.pesdkBundle.url(forResource: "imgly_lut_k1_5_5_128", withExtension: "png"), displayName: "K1"),
  PhotoEffect(identifier: "K2", lutURL: Bundle.pesdkBundle.url(forResource: "imgly_lut_k2_8_8_512", withExtension: "png"), displayName: "K2"),
  PhotoEffect(identifier: "K6", lutURL: Bundle.pesdkBundle.url(forResource: "imgly_lut_k6_5_5_128", withExtension: "png"), displayName: "K6"),
  PhotoEffect(identifier: "Dynamic", lutURL: Bundle.pesdkBundle.url(forResource: "imgly_lut_kdynamic_5_5_128", withExtension: "png"), displayName: "Dynamic"),
  PhotoEffect(identifier: "Fridge", lutURL: Bundle.pesdkBundle.url(forResource: "imgly_lut_fridge_8_8_512", withExtension: "png"), displayName: "Fridge")
]

PhotoEffect.allEffects = effects
```
{% endcapture %}

{% capture second_snippet %}
Objective-C
---
```objc
NSArray<PESDKPhotoEffect *> *effects = @[
                                         [[PESDKPhotoEffect alloc] initWithIdentifier:@"K1" lutURL:[[NSBundle pesdkBundle] URLForResource:@"imgly_lut_k1_5_5_128" withExtension:@"png"] displayName:@"K1"],
                                         [[PESDKPhotoEffect alloc] initWithIdentifier:@"K2" lutURL:[[NSBundle pesdkBundle] URLForResource:@"imgly_lut_k2_8_8_512" withExtension:@"png"] displayName:@"K2"],
                                         [[PESDKPhotoEffect alloc] initWithIdentifier:@"K6" lutURL:[[NSBundle pesdkBundle] URLForResource:@"imgly_lut_k6_5_5_128" withExtension:@"png"] displayName:@"K6"],
                                         [[PESDKPhotoEffect alloc] initWithIdentifier:@"Dynamic" lutURL:[[NSBundle pesdkBundle] URLForResource:@"imgly_lut_kdynamic_5_5_128" withExtension:@"png"] displayName:@"Dynamic"],
                                         [[PESDKPhotoEffect alloc] initWithIdentifier:@"Fridge" lutURL:[[NSBundle pesdkBundle] URLForResource:@"imgly_lut_fridge_8_8_512" withExtension:@"png"] displayName:@"Fridge"]
                                        ];
PESDKPhotoEffect.allEffects = effects;
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ADDFILTERS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

To add a custom filter, create an instance of a `PhotoEffect`, and add it to the `allEffects` array. The array is shared across all tools. Therefore any filters added to the array become available in the live camera preview, as well as in the filter tool. For more details on the filter preview when using the camera, take a look at the [camera]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/camera) section.

## Response filters
We use a technology called LUTs in order to add new filters to our SDK.
The main idea is that colors respond to operations that are carried out during the filtering process. We 'record' that very response by applying the filter to the identity image shown below.

Starting with version 7.0, we support lower resolution LUT files in order to further reduce your app's deployment size and speed up live filters and filter previews. The supported formats are:

- 512x512 LUT with 8 columns and 8 rows (default) ([download ]({{ site.baseurl }}/assets/images/shared/identity_8_8_512.png){: download="identity_8_8_512" })
- 256x256 LUT with 7 columns and 7 rows ([download ]({{ site.baseurl }}/assets/images/shared/identity_7_7_256.png){: download="identity_7_7_256" })
- 256x256 LUT with 6 columns and 6 rows ([download ]({{ site.baseurl }}/assets/images/shared/identity_6_6_256.png){: download="identity_6_6_256" })
- 128x128 LUT with 5 columns and 5 rows ([download ]({{ site.baseurl }}/assets/images/shared/identity_5_5_128.png){: download="identity_5_5_128" })

The end of the assets name, holds information about structure of the data it contains. The ending `8_8_512` tells the SDK that the LUT image contains 8 times 8 tiles, and has a resolution of 512 pixel.
When you create your own filters you must name your assets accordingly.

Using a smaller LUT file may lead to issues when applying your filter, as our processing engine needs to interpolate missing values. We recommend starting with the smallest possible LUT file and falling back to larger files, if you notice that your filter can’t be fully reproduced:

{:center: style="text-align: center"}
![Identity 512x512 8x8 LUT]({{ site.baseurl }}/assets/images/shared/identity_8_8_512.png){: width="256px" style="padding: 10px"}
![Identity 256x256 7x7 LUT]({{ site.baseurl }}/assets/images/shared/identity_7_7_256.png){: width="128px" style="padding: 10px"}
![Identity 256x256 6x6 LUT]({{ site.baseurl }}/assets/images/shared/identity_6_6_256.png){: width="128px" style="padding: 10px"}
![Identity 128x128 5x5 LUT]({{ site.baseurl }}/assets/images/shared/identity_5_5_128.png){: width="64px" style="padding: 10px"}
{:center}

The black borders are required in order to optimize performance and the number of rows translates to the resolution for the green channel, the number of columns translates to the resolution of the red channel and the number of tiles translates to the blue channels resolution. And larger LUTs naturally guarantee a larger resolution across all channels.

The resulting image can be used within our SDK and the recorded changes can then be applied to any image by looking up the transformed colors in the modified LUT.

If you want to create a new filter, you'll have to download one of the identity LUTs shown above, load it into an image editing software of your choice, apply your operations, save it and add it to your app.

> __WARNING:__ As any compression artifacts in the edited LUT could lead to distorted results when applying the filter, you have to save your LUT as a PNG file.

The last step is described above, but you have to pass the path to your own LUT file instead of pointing to our bundle. Please note that not all operations can be translated into a response filter.
Typically those operations use surrounding the pixels to determine the color of the pixel, such as blur.
