---
layout: guides/content
title: &title Architecture # title as shown in the menu and 
description: The PhotoEditor SDK for Android provides all the tools necessary to enhance your App with state-of-the-art photo editing features, effects, and assets.
menuitem: *title
order: 3
platform: android
version: v6_6
category: 
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

The PhotoEditor SDK for Android is structured into three component groups:

> __HINT__: Each of the three component groups is structured in different modules which representing the different tools.

### Operation
The SDKs backend takes care of all image processing and rendering.
This includes live filters, any adjustments made by the user and the final image export. All image modifications, that have currently been applied to the image, are stored in models and then used to determine if a new rendering pass is necessary. The processing engine is able to handle high-resolution images and may be extended with more filters and other assets.

### Mobile-UI
The UI package holds all classes needed to create the editors UI. These are constructed around the two main activities, which act as the root building blocks for all our UI. Each tool's user interface is implemented in its corresponding panel and is responsible for displaying the specific UI elements on the screen. You can adjust and tweak the UI to match your needs, by disabling specific elements or changing colors and styles, as described in our [configuration]({{site.baseurl}}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) and [customization]({{site.baseurl}}/guides/{{page.platform}}/{{page.version}}/customization/introduction) sections.

### Assets
Some assets are wrapped into a separate package to enable a small sdk size.


