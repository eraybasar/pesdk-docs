---
layout: guides/content
title: &title Stickers # title as shown in the menu and

menuitem: *title
order: 5
platform: ios
version: v7
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
