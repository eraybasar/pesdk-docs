---
layout: guides/content
title: &title Events # title as shown in the menu and
description: Understanding how users engage with a product is critical to every business. Learn how to track how your users interact with the PhotoEditor SDK for iOS.
menuitem: *title
order: 0
platform: ios
version: v7_1
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---
# Events

The PhotoEditor SDK allows you to register an object that's notified about events and screen views in real-time. You can then send these events to an analytics service of your choice.

To receive events you have to prepare an object that conforms to the [`AnalyticsClient`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Protocols/AnalyticsClient.html) protocol and register it with the Analytics service using `Analytics.addAnalyticsClient(_:)`. The corresponding methods of the protocol are called for screen views and events that are defined in the `PESDKAnalyticsScreenViewName` and `PESDKAnalyticsEventName` constants.

This is a sample implementation for a Google Analytics tracker:

```swift
class AnalyticsClient: PhotoEditorSDK.AnalyticsClient {
  public func logScreenView(_ screenView: PESDKAnalyticsScreenViewName) {
    func parameters(forScreenName screenName: String) -> [NSObject: AnyObject] {
      return GAIDictionaryBuilder.createScreenView().set(screenName, forKey: kGAIScreenName).build() as [NSObject: AnyObject]
    }

    let tracker = GAI.sharedInstance().defaultTracker

    switch screenView {
    case PESDKAnalyticsScreenViewName.camera:
      tracker?.send(parameters(forScreenName: "camera"))
    case PESDKAnalyticsScreenViewName.editor:
      tracker?.send(parameters(forScreenName: "editor"))
    case PESDKAnalyticsScreenViewName.transform:
      tracker?.send(parameters(forScreenName: "transform"))
    case PESDKAnalyticsScreenViewName.filter:
      tracker?.send(parameters(forScreenName: "filter"))
    case PESDKAnalyticsScreenViewName.adjust:
      tracker?.send(parameters(forScreenName: "adjust"))
    case PESDKAnalyticsScreenViewName.textAdd:
      tracker?.send(parameters(forScreenName: "text add"))
    case PESDKAnalyticsScreenViewName.text:
      tracker?.send(parameters(forScreenName: "text"))
    case PESDKAnalyticsScreenViewName.textFont:
      tracker?.send(parameters(forScreenName: "text font"))
    case PESDKAnalyticsScreenViewName.textFontColor:
      tracker?.send(parameters(forScreenName: "text font color"))
    case PESDKAnalyticsScreenViewName.textBackgroundColor:
      tracker?.send(parameters(forScreenName: "text background color"))
    case PESDKAnalyticsScreenViewName.stickerAdd:
      tracker?.send(parameters(forScreenName: "sticker add"))
    case PESDKAnalyticsScreenViewName.sticker:
      tracker?.send(parameters(forScreenName: "sticker"))
    case PESDKAnalyticsScreenViewName.stickerColor:
      tracker?.send(parameters(forScreenName: "sticker color"))
    case PESDKAnalyticsScreenViewName.frame:
      tracker?.send(parameters(forScreenName: "frame"))
    case PESDKAnalyticsScreenViewName.brush:
      tracker?.send(parameters(forScreenName: "brush"))
    case PESDKAnalyticsScreenViewName.brushColor:
      tracker?.send(parameters(forScreenName: "brush color"))
    case PESDKAnalyticsScreenViewName.focus:
      tracker?.send(parameters(forScreenName: "focus"))
    case PESDKAnalyticsScreenViewName.overlay:
      tracker?.send(parameters(forScreenName: "overlay"))
    default:
      break
    }
  }

  public func logEvent(_ event: PESDKAnalyticsEventName, attributes: [PESDKAnalyticsEventAttributeName : Any]?) {
  }
}
```

Prior to presenting any PhotoEditor SDK related view controllers, you would then call

{% capture first_snippet %}
Swift
---
```swift
PESDK.analytics.isEnabled = true
PESDK.analytics.addAnalyticsClient(AnalyticsClient())
```
{% endcapture %}

{% capture second_snippet %}
Objective-C
---
```objc
PESDK.analytics.isEnabled = YES;
[PESDK.analytics addAnalyticsClient:[PESDKAnalyticsClient new]];
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

to enable analytics and add your custom tracker to receive events.
