---
layout: guides/content
title: &title Text # title as shown in the menu and
description: The PhotoEditor SDK for iOS ships with a robust tool that provides all necessary functions for quickly adding text. Learn how to add custom fonts.
menuitem: *title
order: 4
platform: ios
version: v8
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}

A picture says more than a thousand words, however sometimes it still takes a few more. The robust text feature of the PhotoEditor SDK provides all necessary functions for quickly adding text to any picture or creative. The corresponding font library can easily be exchanged, reduced, or expanded.

The tool is implemented in the `TextToolController` class and can be configured using the [`TextToolControllerOptions`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/TextToolControllerOptions.html). In order to adjust the available colors, change their names or the default color you have to modify the [`TextColorToolControllerOptions`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/TextColorToolControllerOptions.html). For more details take a look at the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section.

## Adding and removing fonts
For version 6 of our SDK, we added an easy way to use your own fonts.
The `FontImporter` class now has a static `all` property that holds an array of `Font` objects.
By default this array contains all fonts that we ship with the SDK.

A `Font` object is a simple collection of the metadata of a font, the `fontName`, the `displayName`
and the `path`. The `path` points to the font file, or is empty if a system font should be added.
Since font names or their family names can get quite long and/or ugly, the string stored in the `displayName` property
is used throughout the UI. The `fontName` refers to the name of the font. That can be the family name.
That property is passed to the constructor of `UIFont`. If any font doesn't load, it is mostly due to
the wrong value of the `fontName` property. If you're having trouble loading a font, please refer to the [official documentation](https://developer.apple.com/reference/uikit/uifont) of `UIFont`,
to understand how the name must be constructed.

Here is an example font array that adds system fonts:
```swift
private func customizeFonts() {
  FontImporter.all = [
    Font(displayName: "Arial", fontName: "ArialMT", identifier: "ArialMT"),
    Font(displayName: "Helvetica", fontName: "Helvetica", identifier: "Helvetica"),
    Font(displayName: "Avenir", fontName: "Avenir-Heavy", identifier: "Avenir-Heavy"),
    Font(displayName: "Chalk", fontName: "Chalkduster", identifier: "Chalkduster"),
    Font(displayName: "Copperplate", fontName: "Copperplate", identifier: "Copperplate"),
    Font(displayName: "Noteworthy", fontName: "Noteworthy-Bold", identifier: "Noteworthy-Bold")
  ]
}
```

Supported types are **ttf** and **otf**.
