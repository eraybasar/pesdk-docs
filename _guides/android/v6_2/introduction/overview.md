---
layout: guides/content
title: &title Overview # title as shown in the menu and 
description: The PhotoEditor SDK for Android provides all the tools necessary to enhance your App with state-of-the-art photo editing features, effects, and assets.
menuitem: *title
order: 0
platform: android
version: v6_2
category: 
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---


The PhotoEditor SDK for Android provides tools for creating high fidelity photo editing applications with a big variety of filters that can be previewed in high quality and real-time. Unlike other Android apps, the PhotoEditor Android SDK allows a fast live preview of filters even when using high-resolution images up to the hardware limitations. It is written in high-level Java with Renderscript and allows for easy customization with your own XML based Layouts, Styles and Drawables.

<div class="documentation__disclaimer">
<h4>License Terms</h4>
Make sure you have a commercial license before releasing your app.
A commercial license is required for any app or service that has any form of monetization: This includes free apps with in-app purchases or ad-supported applications as well. Please contact us if you'd like to purchase the commercial license.
</div>

### Features

* __Android API Level 16+__. Covers nearly 95% of all Android devices.
* __Default UI__ for camera preview and editing. Based on Intents and Activities.
* __Tablet support__. Works great on tablets.
* __Fast image export up to 4294 Megapixels__! Even with large images and slow devices with low memory, the export is done in an adequate time with an intelligent unrivaled background processing technology.
* __Low memory footprint__, even with high-resolution images.
* __Generic camera support__. Integrated and featureful on most Android phones.
* __Crop__, __Rotate__, __Stickers__, __Text Placement__, and __Colorize__. All essential photo editing functions wrapped into a simple, beautiful and customizable UI.
* __60 Stunning filters__ which are builtin and work out of the box.
* __Photoshop LUT__. Design color filters in Photoshop. With this feature, it is possible to generate LUT (Look Up Table) color filters easily from different photo editing tools. Export and integrate them in minutes!
* __Live Preview__. Filters can be previewed in high quality at realtime.
* __No native code__. Our backend is Renderscript based with high-level OpenGL ES 2.0 support, therefore we dodge all the nasty native library problems other frameworks face.
* __Extensible and customizable toolset interface__. Add your own customized filters with [Renderscript](https://developer.android.com/guide/topics/renderscript/index.html) and OpenGL ES 2.0 modify tool properties yourself.

### Demo App

<a href="https://github.com/imgly/imgly-sdk-android-demo">Get the source for our demo application from our public GitHub repository.</a>

## Architecture
The PhotoEditor SDK for Android is structured into three component groups:

### Operation
The SDKs backend takes care of all image processing and rendering.

### Operation
This includes live filters, any adjustments made by the user and the final image export. All image modifications, that have currently been applied to the image, are stored in models and then used to determine if a new rendering pass is necessary. The processing engine is able to handle high-resolution images and may be extended with more filters and other assets.

### Mobile-UI
The UI package holds all classes needed to create the editors UI. These are constructed around the two main activities, which act as the root building blocks for all our UI. Each tool's user interface is implemented in its corresponding panel and is responsible for displaying the specific UI elements on the screen. You can adjust and tweak the UI to match your needs, by disabling specific elements or changing colors and styles, as described in our [configuration]({{site.baseurl}}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) and [styling]({{site.baseurl}}/guides/{{page.platform}}/{{page.version}}/customization/styling) sections.

### Assets
Some assets are wrapped into a separate package to enable a small sdk size.
