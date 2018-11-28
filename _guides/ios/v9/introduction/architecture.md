---
layout: guides/content
title: &title Architecture # title as shown in the menu and

menuitem: *title
order: 2
platform: ios
version: v9
category:
  - guide
  - introduction

description: The PhotoEditor SDK for iOS provides a fully customizable UI, a versatile image processing section as well as a powerful rendering engine.

tags: &tags # tags that are necessary
  - photo editor

---


The PhotoEditor SDK for iOS consists of two main components:

## Backend

The SDK's backend is in charge of all image processing and rendering. That includes live filters, any adjustments made by the user and the final image export. All image modifications, that have been applied to the image, are stored in a `PhotoEditModel`. This model is used to determine if a new rendering pass is necessary and holds all values.

## Frontend

The frontend contains all UI elements including the `PhotoEditToolController`, which is the base class for all tools, the `MenuToolController`, which is a subclass of `PhotoEditToolController` and provides a collection view at the bottom of the view, which acts as the menu.
It also contains the `CameraViewController` and `PhotoEditViewController` classes, which represent the root view controllers.

All tools described in the `Features` section are implemented as `PhotoEditToolController` subclasses and managed by the `PhotoEditViewController`. The UI configuration is implemented using the `Configuration` class and their subclasses, as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section.
