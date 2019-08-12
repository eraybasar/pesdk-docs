---
layout: guides/content
title: &title Localization # title as shown in the menu and
description: The PhotoEditor SDK for iOS can be localized easily. Learn how to quickly set up your editor in the proper language for your target audience.
menuitem: *title
order: 0
platform: ios
version: v10
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---ished: true # Either published or not
---


The PhotoEditor SDK is fully localizable. We provide an English fallback localization, that will be used when no matching localization is found. To determine the matching language, PhotoEditor SDK uses `NSLocale.preferredLanguages`.
To add support for a language, please refer to Apple's localization guidelines.
We also provide two properties to customize your localization, `PESDK.localizationDictionary` and `PESDK.localizationBlock`.

## Localization Dictionary

The first method to add another language is to set `PESDK.localizationDictionary` to a dictionary containing your localizations. The key of the dictionary needs to be the locale that you want to add, the value should be another dictionary containing the string that needs to be localized as the key and the localized version as the value. An example for the German language might look like this:

{% capture first_snippet %}
Swift
---
```swift
PESDK.localizationDictionary = [
  "de": [
    "No permission": "Keine Berechtigung",
    "Top left cropping area": "Zuschneidebereich oben links",
    "Settings": "Einstellungen"
  ]
]
```
{% endcapture %}

{% capture second_snippet %}
Objective-C
---
```objc
[PESDK setLocalizationDictionary: @{
  @"de": @{
    @"No permission": @"Keine Berechtigung",
    @"Top left cropping area": @"Zuschneidebereich oben links",
    @"Settings": @"Einstellungen"
  }
}];
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-localizationDictionary{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

## Localization Closure

The more advanced way to add localization is passing a closure, which will be called for each string that can be localized. You can then use that closure to look up a matching localization in your app's `Localizable.strings` file or do something completely custom. An example might look like this:

{% capture first_snippet %}
Swift
---
```swift
PESDK.localizationBlock = { stringToLocalize in
  return NSLocalizedString(stringToLocalize, comment: "")
}
```
{% endcapture %}

{% capture second_snippet %}
Objective-C
---
```objc
[PESDK setLocalizationBlock:^NSString * _Nullable(NSString * _Nonnull stringToLocalize) {
  return NSLocalizedString(stringToLocalize, nil);
}];
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-localizationBlock{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

## Localizable.strings

A list of strings that are used in the SDK is available within the framework's bundle at `PhotoEditorSDK.framework/PhotoEditorSDK.bundle/en.lproj/Localizable.strings`. The contents of that file are in binary format. To convert them back into a readable format please use the following command:

```bash
plutil -convert xml1 PhotoEditorSDK.framework/PhotoEditorSDK.bundle/en.lproj/Localizable.strings
```
