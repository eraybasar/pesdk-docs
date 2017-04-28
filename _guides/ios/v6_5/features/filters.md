---
layout: guides/ios/v6_5/content
title: &title Filters # title as shown in the menu and

menuitem: *title
order: 0
platform: ios
version: v6_5
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}

# Filters
Our SDK features more than 60 high quality filters. The processing is lightning fast, and its easy to add your own filters.
You might think that adding your own filters requires super math skills, or is complicated.
Well, not at all. The way we realize filters, makes it super easy. Actually you don't need to code filters,
you just need a program like gimp of photoshop. The only thing that needs to be done in code, is to add the filter you created.

The tool is implemented in the `FilterToolController` class and can be customized using the [`FilterToolControllerOptions`](https://static.photoeditorsdk.com/docs/ios/Classes/FilterToolControllerOptions.html). For details on how to modify the options, take a look at the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section.

## Setting available filters

Every filter is represented by an instance of the `PhotoEffect` class. That class also holds the `allEffects` array that allows you to access all available filters that are shipped with the SDK.
The following example shows how a custom selection of filters can be set:

```swift
private let effects: [PhotoEffect] = [
    PhotoEffect(identifier: "None", CIFilterName: nil, lutURL: nil, displayName: "None", options: nil),
    PhotoEffect(identifier: "K1", lutURL: Bundle.imglyKitBundle.url(forResource: "K1", withExtension: "png"), displayName: "K1"),
    PhotoEffect(identifier: "K2", lutURL: Bundle.imglyKitBundle.url(forResource: "K2", withExtension: "png"), displayName: "K2"),
    PhotoEffect(identifier: "K6", lutURL: Bundle.imglyKitBundle.url(forResource: "K6", withExtension: "png"), displayName: "K6"),
    PhotoEffect(identifier: "Dynamic", lutURL: Bundle.imglyKitBundle.url(forResource: "Dynamic", withExtension: "png"), displayName: "Dynamic"),
    PhotoEffect(identifier: "Fridge", lutURL: Bundle.imglyKitBundle.url(forResource: "Fridge", withExtension: "png"), displayName: "Fridge")
]

PhotoEffect.allEffects = effects
```

To add a custom filter, create an instance of a `PhotoEffect`, and add it to the `allEffects` array. The array is shared across all tools. Therefore any filters added to the array become available in the live camera preview, as well as the filter tool. For more details on the filter preview when using the camera, take a look at the [camera]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/camera) section.

## Response filters
We use a technology called LUTs in order to add new filters to our SDK.
The main idea is that colors respond to operations that are carried out during the filtering process. We 'record' that very response by applying the filter to the identity image shown below.

![Identity LUT]({{ site.baseurl }}/assets/images/shared/identity.png){: width="30%" .center-image}

The resulting image can be used within our SDK and the recorded changes can then be applied to any image by looking up the transformed colors in the modified LUT.

If you want to create a new filter, you'll need to [download]({{ site.baseurl }}/assets/images/shared/identity.png){: download="pesdk_identity_lut" } the identity LUT shown above, load it into an image editing software of your choice, apply your operations, save it and add it to your app.

> __WARNING:__ As any compression artifacts in the edited LUT could lead to distorted results when applying the filter, you need to save your LUT as a PNG file.

The last step is described above, but you need to pass the path to your own LUT file instead of pointing to our bundle. Please note that not all operations can be translated into a response filter.
Typically those operations use surrounding the pixels to determine the color of the pixel, such as blur.
