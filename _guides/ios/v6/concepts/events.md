---
layout: guides/content
title: &title Events # title as shown in the menu and
description: Understanding how users engage with a product is critical to every business. Learn how to track how your users interact with the PhotoEditor SDK for iOS.
menuitem: *title
order: 0
platform: ios
version: v6
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

The PhotoEditor SDK allows you to register an object that's notified about events and screen views in real-time. You can then send these events to an analytics service of your choice.

To receive events you need to prepare an object that conforms to the [`AnalyticsClient`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Protocols/AnalyticsClient.html) protocol and register it with the Analytics service using `Analytics.addAnalyticsClient(_:)`. The corresponding methods of the protocol are called for screen views and events that are defined in the `IMGLYAnalyticsScreenViewName` and `IMGLYAnalyticsEventName` constants.

This is a sample implementation for a Google Analytics tracker:

```swift
class AnalyticsClient: imglyKit.AnalyticsClient {
  public func logScreenView(_ screenView: IMGLYAnalyticsScreenViewName) {
    func parameters(forScreenName screenName: String) -> [NSObject: AnyObject] {
      return GAIDictionaryBuilder.createScreenView().set(screenName, forKey: kGAIScreenName).build() as [NSObject: AnyObject]
    }

    let tracker = GAI.sharedInstance().defaultTracker

    switch screenView {
    case IMGLYAnalyticsScreenViewName.camera:
      tracker?.send(parameters(forScreenName: "camera"))
    case IMGLYAnalyticsScreenViewName.editor:
      tracker?.send(parameters(forScreenName: "editor"))
    case IMGLYAnalyticsScreenViewName.transform:
      tracker?.send(parameters(forScreenName: "transform"))
    case IMGLYAnalyticsScreenViewName.filter:
      tracker?.send(parameters(forScreenName: "filter"))
    case IMGLYAnalyticsScreenViewName.adjust:
      tracker?.send(parameters(forScreenName: "adjust"))
    case IMGLYAnalyticsScreenViewName.textAdd:
      tracker?.send(parameters(forScreenName: "text add"))
    case IMGLYAnalyticsScreenViewName.text:
      tracker?.send(parameters(forScreenName: "text"))
    case IMGLYAnalyticsScreenViewName.textFont:
      tracker?.send(parameters(forScreenName: "text font"))
    case IMGLYAnalyticsScreenViewName.textFontColor:
      tracker?.send(parameters(forScreenName: "text font color"))
    case IMGLYAnalyticsScreenViewName.textBackgroundColor:
      tracker?.send(parameters(forScreenName: "text background color"))
    case IMGLYAnalyticsScreenViewName.stickerAdd:
      tracker?.send(parameters(forScreenName: "sticker add"))
    case IMGLYAnalyticsScreenViewName.sticker:
      tracker?.send(parameters(forScreenName: "sticker"))
    case IMGLYAnalyticsScreenViewName.stickerColor:
      tracker?.send(parameters(forScreenName: "sticker color"))
    case IMGLYAnalyticsScreenViewName.frame:
      tracker?.send(parameters(forScreenName: "frame"))
    case IMGLYAnalyticsScreenViewName.brush:
      tracker?.send(parameters(forScreenName: "brush"))
    case IMGLYAnalyticsScreenViewName.brushColor:
      tracker?.send(parameters(forScreenName: "brush color"))
    case IMGLYAnalyticsScreenViewName.focus:
      tracker?.send(parameters(forScreenName: "focus"))
    default:
      break
    }
  }

  public func logEvent(_ event: IMGLYAnalyticsEventName, attributes: [IMGLYAnalyticsEventAttributeName : Any]?) {
  }
}
```

Prior to presenting any PhotoEditor SDK related view controllers, you would then call

```swift
PESDK.shared.analytics.isEnabled = true
PESDK.shared.analytics.addAnalyticsClient(AnalyticsClient())
```

to enable analytics and add your custom tracker to receive events.
