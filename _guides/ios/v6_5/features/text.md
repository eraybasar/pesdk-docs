---
layout: guides/ios/v6_5/content
title: &title Text # title as shown in the menu and 

menuitem: *title
order: 0
platform:
  - ios
version:
  - v6_5
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

# Text

## Adding fonts
With version 6 of our SDK, we added an easy way to use your own fonts.
The `TextToolControllerOptions` now has a `fonts` property that holds an array of `Font` objects.
The default is an empty array. In that case the SDK loads a default set of fonts.
A `Font` object is a simple collection of the metadata of a font, the `fontName`, the `displayName`
and the `path`. The `path` points to the font file, or is empty if a system font should be added.
Since font names or their family names can get quite long or ugly, the string stored in the `displayName` property
is used throughout the UI. The `fontName` refers to the name of the font. That can be the family name.
That property is passed to the constructor of `UIFont`. If any font does not load, it is mostly due to
the wrong value of the `fontName` property. If you are having trouble loading a font, please refer to the [official documentation](https://developer.apple.com/reference/uikit/uifont) of `UIFont`,
to understand how the name must be constructed.

Here is an example font array that adds system fonts:
```swift
private func customizeTextTool(_ builder: ConfigurationBuilder) {
    builder.configureTextToolController { options in
        let fonts = [Font(displayName: "Arial", fontName: "ArialMT"),
                        Font(displayName: "Helvetica", fontName: "Helvetica"),
                        Font(displayName: "Avenir", fontName: "Avenir-Heavy"),
                        Font(displayName: "Chalk", fontName: "Chalkduster"),
                        Font(displayName: "Copperplate", fontName: "Copperplate"),
                        Font(displayName: "Noteworthy", fontName: "Noteworthy-Bold")
        ]
        options.fonts = fonts
    }
}
```
Supported types are **ttf** and **otf**.
