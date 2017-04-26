---
layout: guides/ios/v6_5/content
title: &title Stickers # title as shown in the menu and 

menuitem: *title
order: 5
platform: ios
version:
  - v6_5
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool](/assets/images/guides/ios/v6_5/features/{{page.title | downcase}}.png){: height="400px" .center-image}

# Stickers

The PhotoEditor SDK ships with a categorized sticker library whose UI is optimized for exploration and discovery. You can easily leverage the API to complement the library with your custom sticker packages.

The tool allows placing, rotating, scaling and ordering stickers on your image. Once a sticker has been placed the user can reselect it by tapping the sticker again.

The tool is implemented in the `StickerToolController` class and can be customized using the [`StickerToolControllerOptions`](https://static.photoeditorsdk.com/docs/ios/Classes/StickerToolControllerOptions.html). For details on how to modify the options, take a look at the [configuration](/guides/ios/v6_5/introduction/configuration) section

## Adding stickers

Stickers are inserted into the SDK using a data source. The basic idea is taken from other components of
UIKit such as collection views. We provide a ready to use data source, the `StickerDataSource`. It
takes an array of `Sticker` objects, and handles the rest for you. A `Sticker` object holds the metadata of a sticker, such as the image
for its `thumbnailURL`, or the caption for the menu. The `Sticker` class can handle local and remote resources.
