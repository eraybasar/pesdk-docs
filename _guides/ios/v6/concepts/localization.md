---
layout: guides/content
title: &title Localization # title as shown in the menu and 
description: The PhotoEditor SDK for iOS can be localized easily. Learn how to quickly set up your editor in the proper language for your target audience.
menuitem: *title
order: 0
platform: ios
version: v6
category: 
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---ished: true # Either published or not 
---


The PhotoEditor SDK is fully localizable. We provide an english fallback localization, that will be used when no matching localization is found. To determine the matching language PhotoEditor SDK uses `NSLocale.preferredLanguages`.
To add support for a language, please refer to Apple's localization guidelines.
We also provide two properties to customize your localization, `PESDK.localizationDictionary` and `PESDK.localizationBlock`.

## Add further localization to the PhotoEditor SDK

You can either set new localization programmatically or add further localization via adding the corresponding folders.
To get an overview of all available strings that need to be localized, look inside /imglyKit.bundle/en.lproj/Localizable.strings.
As mentioned above, there are two ways to add localization programmatically. The first is to set a localization dictionary like so:

```swift
PESDK.localizationDictionary = [
    "en": [
      "No permission" : "No permission",
      "Top left cropping area" : "Top left cropping area",
      "Settings" : "Settings"
    ]
]
```

The `en` string indicates, that this translation should be used when english language is needed.
You can chain multiple translations like this. The second option is, to use a block, allowing you to easily use your
default bundle, or a customized bundle with `NSLocalizedStringFromTableInBundle`.

```objc
[PESDK setLocalizationBlock:^NSString * _Nullable(NSString * _Nonnull stringToLocalize) {
    // This will look up strings in Localizable.strings inside your resource folder.
    return NSLocalizedStringFromTable(stringToLocalize, @"Localizable", nil);

    // You can also route your default localization:
    return NSLocalizedString(stringToLocalize, nil);

    // Or use a custom variant, for example to test if everything is localized:
    // Please keep in mind that several strings like "Edit" are provided by the system and automatically translated, provided that you have the correct localization resources set.
    return [NSString stringWithFormat:@"_____%@_____", stringToLocalize];
}];
```

## Plurals

To have plurals handled correctly, we use a [.stringsdict](https://developer.apple.com/library/ios/documentation/MacOSX/Conceptual/BPInternational/StringsdictFileFormat/StringsdictFileFormat.html) file. These define plural rules of a language. Some languages have more plural rules than others.

Here is an example for croatian:
```xml
<key>%tu match(es) found</key>
<dict>
    <key>NSStringLocalizedFormatKey</key>
    <string>%#@tu_matches_found@</string>
    <key>tu_matches_found</key>
    <dict>
        <key>NSStringFormatSpecTypeKey</key>
        <string>NSStringPluralRuleType</string>
        <key>NSStringFormatValueTypeKey</key>
        <string>tu</string>
        <key>zero</key>
        <string>Nema pronađenih rezultata</string>
        <key>one</key>
        <string>%tu pronađen rezultat</string>
        <key>two</key>
        <string>%tu pronađena rezultata</string>
        <key>other</key>
        <string>%tu pronađenih rezultata</string>
    </dict>
</dict>
```
