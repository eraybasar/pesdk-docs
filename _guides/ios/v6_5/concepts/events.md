---
layout: guides/ios/v6_5/content
title: &title Events # title as shown in the menu and 

menuitem: *title
order: 0
platform:
  - ios
version:
  - v6_5
category: 
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---
# Events

The PhotoEditor SDK allows you to register an object thats notified about events and screen views in real-time. You can then send these events to an analytics service of your choice.

To receive events you need to prepare an object that conforms to the [`AnalyticsClient`](https://static.photoeditorsdk.com/docs/ios/Protocols/AnalyticsClient.html) protocol and register it with the Analytics service using `Analytics.addAnalyticsClient(_:)`. The corresponding methods of the protocol are called for screen views and events that are defined in the `IMGLYAnalyticsScreenViewName` and `IMGLYAnalyticsEventName` constants.
