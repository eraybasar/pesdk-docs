---
layout: guides/ios/v6_5/content
title: &title Stickers # title as shown in the menu and 

menuitem: *title
order: 5
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

![{{page.title}} tool](/assets/images/ios//features/{{page.title | downcase}}_framed.png){: height="400px" .center-image}

# Stickers

## Adding stickers

Stickers are inserted into the SDK using a data source. The basic idea is taken from other components of
UIKit such as collection views. We provide a ready to use data source, the `StickerDataSource`. It just
takes an array of `Sticker` objects, and handles the rest for you. A `Sticker` object holds the metadata of a sticker, such as the image
for its `thumbnailURL`, or the caption for the menu. The `Sticker` class can handle local and remote resources.
