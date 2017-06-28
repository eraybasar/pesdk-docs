---
layout: guides/content
title: &title Overlays # title as shown in the menu and

menuitem: *title
order: 1
platform: ios
version: v7
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


For version 7 we added overlays to our PhotoEditor SDK. Said overlays are an easy, yet powerful way to create stunning effects.
To put it simply, overlays are images put on top of the input image.
We provide several blend modes, that determine how exactly the overlay is applied.
Each mode has its own characteristics and will add a unique flavour to the final composition.
Supported asset formats are jpeg and png.

## Adding and removing overlays

To work with overlays we created the [`Overlay`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/Overlay.html) class. It has a static array called `all` that holds all overlays, available within the editor. To add an overlay, just add it to to the `all` array, **before** the editor is presented.
The creation of an `Overlay` instance is pretty straightforward.
The only thing to consider is the `identifier` parameter. It must be unique since it will be used during
the serialization to identify the `Overlay` and store and restore its settings.
All overlay assets provided in the SDK are prefixed with `imgly_overlay` to avoid collisions.
We highly recommend you to prefix your identifiers as well. For more information, take a look at the [`Overlay`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/Overlay.html) API documentation.

Here is an exmple of how to add an overlay.

```
let overlay = Overlay(identifier: "imgly_overlay_golden", displayName: "Golden".localized, url: Bundle.pesdkBundle.url(forResource: "imgly_overlay_golden", withExtension: "jpg"), thumbnailURL: Bundle.pesdkBundle.url(forResource: "imgly_overlay_golden_thumb", withExtension: "jpg"), initialBlendMode: .lighten)
Overlay.all.append(overlay)
```
Please note that you have to set the initial blend mode. That must be one of `normal`, `overlay`, `softLight`, `hardLight`, `multiply`, `darken`, `colorBurn`, `screen`, and `lighten`.
We could show you the math for each of these modes, but that wont help to get a feel for the resulting visual effect. Therefore we encourage you to add your overlay
with any initial mode, and use the UI to play with the blend mode and intensities.
