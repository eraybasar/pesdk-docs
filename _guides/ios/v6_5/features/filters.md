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

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.png){: height="400px" .center-image}

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
    PhotoEffect(identifier: "K1", lutURL: NSBundle(forClass: PhotoEffect.self).URLForResource("K1", withExtension: "png"), displayName: "K1"),
    PhotoEffect(identifier: "K2", lutURL: NSBundle(forClass: PhotoEffect.self).URLForResource("K2", withExtension: "png"), displayName: "K2"),
    PhotoEffect(identifier: "K6", lutURL: NSBundle(forClass: PhotoEffect.self).URLForResource("K6", withExtension: "png"), displayName: "K6"),
    PhotoEffect(identifier: "Dynamic", lutURL: NSBundle(forClass: PhotoEffect.self).URLForResource("Dynamic", withExtension: "png"), displayName: "Dynamic"),
    PhotoEffect(identifier: "Fridge", lutURL: NSBundle(forClass: PhotoEffect.self).URLForResource("Fridge", withExtension: "png"), displayName: "Fridge")
]

PhotoEffect.allEffects = effects
```

To add a custom filter, create an instance of a `PhotoEffect`, and add it to the `allEffects` array. The array is shared across all tools. Therefore any filters added to the array become available in the live camera preview, as well as the filter tool. For more details on the filter preview when using the camera, take a look at the [camera]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/camera) section.

## Response filters
We are using a technology we call response filters.
The main idea is, that colors respond to operations that are done during the filtering process and we are able to 'record' that
very response. We do that by applying the filter to the image shown below:

![Identity LUT]({{ site.baseurl }}/assets/images/shared/identity.png){: width="30%"}

The resulting image can then be used to create a new filter within the SDK and the recorded changes can be applied to any image.
So if you want to create a filter, you load the image above into your software, apply the operations, save it and add it to your app. The last step is to add the filter to
the list of available filters. Please note that not all operations can be translated into a response filter.
Typically those operations use surrounding the pixels to determine the color of the pixel, such as blur.
