---
layout: guides/content
title: &title Frames # title as shown in the menu and 

menuitem: *title
order: 7
platform: ios
version: v6
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}


The PhotoEditor SDK includes a versatile frame tool that works with any given photo size or ratio and provides two distinct options to apply frames. For the flexible frames tool that works perfectly for creatives with repeatable or stretchable areas, we abandoned the 9-patch standard and replaced it with a novel and even more flexible 12-patch layout. The static frames tool can be used for complex and irregular creatives.

The tool is implemented in the `FrameToolController` class and can be customized using the [`FrameToolControllerOptions`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/FrameToolControllerOptions.html). For details on how to modify the options, take a look at the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section

## Adding and removing frames

Similar to [stickers]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/stickers), frames are inserted into the SDK using a data source. We provide a ready to use data source, the `FrameDataSource`.
It takes an array of `Frame` objects, and handles the rest for you. A `Frame` object usually holds multiple versions of the same image, each matching
a different crop ratio. That is to prevent distorted results. So if you app supports three different crop ratios, each frame should have an asset for each individual
crop ratio. To add an asset to a `Frame` object, use the `addImage(_ imageURL: URL, thumbnailURL: URL?, forRatio ratio: CGFloat)` function.
Just as the sticker data source, this data source supports local and remote sources.
