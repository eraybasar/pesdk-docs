---
layout: guides/content
title: &title Stickers # title as shown in the menu and
description: The PhotoEditor SDK for iOS ships with a preset sticker library containing emoticons and shapes. Learn how to add custom sticker packages to the library.
menuitem: *title
order: 7
platform: ios
version: v10
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}


The PhotoEditor SDK ships with a categorized sticker library whose UI is optimized for exploration and discovery. You can easily leverage the API to complement the library with your custom sticker packages.

The tool allows placing, rotating, scaling and ordering stickers on your image. Once a sticker has been placed the user can reselect it by tapping the sticker again.

The tool is implemented in the `StickerToolController` class and can be customized using the [`StickerToolControllerOptions`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/StickerToolControllerOptions.html). For details on how to modify the options, take a look at the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section

## Adding stickers

Stickers are inserted into the SDK using the static property `StickerCategory.all`, which is an array of `StickerCategory` objects.
A `StickerCategory` object holds the metadata of a sticker category, such as its preview image or the title and has an array of `Sticker` objects,
which again hold the metadata for a `Sticker`, such as its `imageURL` and `thumbnailURL`. The `Sticker` class can handle local and remote resources.
Supported formats are jpeg and png.

{% capture first_snippet %}
Swift
---
```swift
var categories = StickerCategory.all

let stickers = [
  Bundle.main.url(forResource: "glasses_nerd", withExtension: "png"),
  Bundle.main.url(forResource: "glasses_normal", withExtension: "png"),
  Bundle.main.url(forResource: "glasses_shutter_green", withExtension: "png"),
  Bundle.main.url(forResource: "glasses_shutter_yellow", withExtension: "png"),
  Bundle.main.url(forResource: "glasses_sun", withExtension: "png"),
  Bundle.main.url(forResource: "hat_cap", withExtension: "png"),
  Bundle.main.url(forResource: "hat_party", withExtension: "png"),
  Bundle.main.url(forResource: "hat_scherif", withExtension: "png"),
  Bundle.main.url(forResource: "hat_zylinder 2", withExtension: "png"),
  Bundle.main.url(forResource: "heart", withExtension: "png"),
  Bundle.main.url(forResource: "mustache_long", withExtension: "png"),
  Bundle.main.url(forResource: "mustache1", withExtension: "png"),
  Bundle.main.url(forResource: "mustache2", withExtension: "png"),
  Bundle.main.url(forResource: "mustache3", withExtension: "png"),
  Bundle.main.url(forResource: "pipe", withExtension: "png"),
  Bundle.main.url(forResource: "smile", withExtension: "png"),
  Bundle.main.url(forResource: "snowflake", withExtension: "png"),
  Bundle.main.url(forResource: "star", withExtension: "png"),
  Bundle.main.url(forResource: "teardrop", withExtension: "png")
].compactMap { $0.map { Sticker(imageURL: $0, thumbnailURL: nil, identifier: $0.path) } }

if let previewURL = Bundle.main.url(forResource: "face_decor", withExtension: "png") {
  categories.append(StickerCategory(title: "Oldschool", imageURL: previewURL, stickers: stickers))
}

StickerCategory.all = categories
```
{% endcapture %}

{% capture second_snippet %}
Objective-C
---
```objc
NSMutableArray<PESDKStickerCategory *> *categories = [[PESDKStickerCategory all] mutableCopy];

NSArray<NSURL *> *stickerURLs = @[
  [[NSBundle mainBundle] URLForResource:@"glasses_nerd" withExtension:@"png"],
  [[NSBundle mainBundle] URLForResource:@"glasses_normal" withExtension:@"png"],
  [[NSBundle mainBundle] URLForResource:@"glasses_shutter_green" withExtension:@"png"],
  [[NSBundle mainBundle] URLForResource:@"glasses_shutter_yellow" withExtension:@"png"],
  [[NSBundle mainBundle] URLForResource:@"glasses_sun" withExtension:@"png"],
  [[NSBundle mainBundle] URLForResource:@"hat_cap" withExtension:@"png"],
  [[NSBundle mainBundle] URLForResource:@"hat_party" withExtension:@"png"],
  [[NSBundle mainBundle] URLForResource:@"hat_scherif" withExtension:@"png"],
  [[NSBundle mainBundle] URLForResource:@"hat_zylinder 2" withExtension:@"png"],
  [[NSBundle mainBundle] URLForResource:@"heart" withExtension:@"png"],
  [[NSBundle mainBundle] URLForResource:@"mustache_long" withExtension:@"png"],
  [[NSBundle mainBundle] URLForResource:@"mustache1" withExtension:@"png"],
  [[NSBundle mainBundle] URLForResource:@"mustache2" withExtension:@"png"],
  [[NSBundle mainBundle] URLForResource:@"mustache3" withExtension:@"png"],
  [[NSBundle mainBundle] URLForResource:@"pipe" withExtension:@"png"],
  [[NSBundle mainBundle] URLForResource:@"smile" withExtension:@"png"],
  [[NSBundle mainBundle] URLForResource:@"snowflake" withExtension:@"png"],
  [[NSBundle mainBundle] URLForResource:@"star" withExtension:@"png"],
  [[NSBundle mainBundle] URLForResource:@"teardrop" withExtension:@"png"]
];

NSMutableArray<PESDKSticker *> *stickers = [[NSMutableArray alloc] init];
for (NSURL *stickerURL in stickerURLs) {
  [stickers addObject:[[PESDKSticker alloc] initWithImageURL:stickerURL thumbnailURL:nil identifier:stickerURL.path]];
}

[categories addObject:[[PESDKStickerCategory alloc] initWithTitle:@"Oldschool" imageURL:[[NSBundle mainBundle] URLForResource:@"face_decor" withExtension:@"png"] stickers:stickers]];
PESDKStickerCategory.all = [categories copy];
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ADDSTICKERS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

## Personal stickers

This feature is disabled by default. It can be configured with [`StickerToolControllerOptions.personalStickersEnabled`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/StickerToolControllerOptions.html#/c:@M@ImglyKit@objc(cs)PESDKStickerToolControllerOptions(py)personalStickersEnabled).
If enabled, the end user can create personal stickers from the device's photo library. A button is added as first item
in the menu in front of the sticker categories which modally presents an image selection dialog for personal sticker creation.
Personal stickers will be added to a personal sticker category called "Custom" with the identifier `"imgly_sticker_category_personal"`. The personal sticker category will be added between the button and the regular sticker categories if it does not exist.

You can configure the tint mode of all of these personal stickers with the [`StickerToolControllerOptions.defaultPersonalStickerTintMode`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/StickerToolControllerOptions.html#/c:@M@ImglyKit@objc(cs)PESDKStickerToolControllerOptions(py)defaultPersonalStickerTintMode) option.

Please note that these types of personal stickers are always included in serialization files, which can increase the size of such a serialization
by quite a lot. 

{% capture first_snippet %}
Swift
---
```swift
let configuration = Configuration { builder in
  builder.configureStickerToolController { options in
    options.personalStickersEnabled = true
    options.defaultPersonalStickerTintMode = .none
  }
}
```
{% endcapture %}

{% capture second_snippet %}
Objective-C
---
```objc
PESDKConfiguration *configuration = [[PESDKConfiguration alloc] initWithBuilder:^(PESDKConfigurationBuilder * _Nonnull builder) {
  [builder configureStickerToolController:^(PESDKStickerToolControllerOptionsBuilder * _Nonnull options) {
    options.personalStickersEnabled = YES;
    options.defaultPersonalStickerTintMode = PESDKStickerTintModeNone;
  }];
}];
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-PERSONALSTICKERS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}
