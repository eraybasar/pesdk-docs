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

# {{page.title}}

For version 7 we added overlays to our PhotoEditor SDK. Said overlays are an easy, yet powerful way to create stunning effects.
To put it simply, overlays are images put on top of the input image.
We provide several blend modes, that determine how exactly the overlay is applied.
Each mode has its own characteristics and will add a unique flavour to the final composition.

## Adding and removing overlays

To work with overlays we created the [`Overlay`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/Overlay.html) class. It has a static array called `all` that holds all overlays, available within the editor. To add an overlay, just add it to to the `all` array, **before** the editor is presented. 
The creation of an `Overlay` instance is pretty straightforward.
The only thing to consider is the `identifier` parameter. It must be unique since it will be used during 
the serialization to identify the `Overlay` and store and restore its settings.
All overlay assets provided in the SDK are prefixed with `imgly_overlay` to avoid collisions.
We highly recommend you to prefix your identifiers as well. For more information, take a look at the [`Overlay`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/Overlay.html) API documentation.
