---
layout: guides/content
title: &title Overview # title as shown in the menu and
description: The PhotoEditor SDK for iOS provides all the tools necessary to enhance your App with state-of-the-art photo editing features, effects, and assets.
menuitem: *title
order: 0
platform: ios
version: v9
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


Our SDK provides all the tools necessary for adding photo editing capabilities to your iOS application with a large variety of filters that can be previewed in real-time. Unlike other apps that allow a live preview of filters, the PhotoEditor SDK provides a live preview even when using high-resolution images. The framework is written in Swift and allows for easy customization.
Additionally, we support adding stickers and text in a non-destructive manner, which means that you can change the position, size, scale and order at any given time, even after applying other effects or cropping the photo.

<div class="documentation__disclaimer">
<h4 id="license-terms">Using a Trial License</h4>
Make sure you have a standard license before releasing your app. A trial license is valid for only 30 days and will crash your app afterward. Your trial license should be removed before releasing your app.
</div>

## Features

* 62 stunningly beautiful built-in filters to choose from.
* Native code: Our rendering engine is based on Apple's Core Image, therefore we dodge all the nasty OpenGL problems other frameworks are facing.
* iPad support: The PhotoEditor SDK uses auto layout for its views and adapts to each screen size - iPhone or iPad.
* Design filters in Photoshop: With most photo editing frameworks you have to tweak values in code or copy & paste them from Photoshop or your favorite image editor. With our response technology this becomes a thing of the past. Design your filter in Photoshop and apply it to the provided identity image afterward. Said image will 'record' the filter response - save it and add it as a new filter, done!
* Swift: To keep up with the time, we chose Swift as the main development language for the PhotoEditor SDK, resulting in lean and straightforward code.
* Live preview: Filters can be previewed directly in the camera preview.
* Low memory footprint: We were able to reduce our memory footprint significantly.
* Non-destructive: Don't like your changes to the picture? No problem, just undo or even discard them. Of course you can redo them afterward as well!
* Highly customizable: Style the UI as you wish to meet your requirements.
* Objective-C support: All of our public API is Objective-C compatible.
* Fast: Our renderer uses hardware acceleration and the GPU, which makes it lightning fast.

### New in Version 8.0

* Written in Swift 4.0.
* Cross-platform serialization and deserialization support.
* More stable and uses less memory while generating better-looking images.
* More customization options.
* Undo and redo support across all tools.

### New in Version 7.0

* New stickers, frames and fonts.
* The SDK has been rebranded to `PhotoEditorSDK`.
* We now include the dSYM and bcsymbolmap files in the SDK for better debugging.
* Faster and better-looking adjustments.
* Faster and better-looking filters.

![Product]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/product.jpg)
