---
layout: guides/ios/v6_5/content
title: &title Architecture # title as shown in the menu and 

menuitem: *title
order: 2
platform: ios
version: v6_5
category: 
  - guide
  - introduction

tags: &tags # tags that are necessary
  - photo editor 

---

# Architecture

The PhotoEditor SDK for iOS is structured into two main components:

## Backend

The SDKs backend takes care of all image processing and rendering. This includes live filters, any adjustments made by the user and the final image export. All image modifications, that have currently been applied to the image, are stored in a `PhotoEditModel`. This model is used to determine if a new rendering pass is neccessary and holds all values.

## Frontend

The frontend contains all UI elements including the `StackLayoutToolController`, responsible for layouting all editors and the `CameraViewController` and `PhotoEditViewController` classes, which represent the root view controllers.

All tools described in the `Features` section are implemented as `ToolController` subclasses and are managed by the `StackLayoutToolController`. The UI configuration is implemented using the `Configuration` class and their subclasses, as described in the [configuration]({{ site.baseurl }}/assets/{{page.platform}}/{{page.version}}/introduction/configuration) section.
