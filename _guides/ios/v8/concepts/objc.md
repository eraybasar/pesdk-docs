---
layout: guides/content
title: &title Objective-C # title as shown in the menu and

menuitem: *title
order: 0
platform: ios
version: v8
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

Most public classes, methods and enums can be mixed and matched with Objective-C. If you installed PhotoEditor SDK with CocoaPods or embedded the framework directly all you have to do is import the framework:

```objc
@import PhotoEditorSDK;
```

However, if you want full control over the SDK and the possibility to subclass certain classes of the SDK and replace them, you will have to use Swift. Because of that we highly recommend that the parts of your code that interact with the SDK are written in Swift.

For more information about Swift and Objective-C interoperability please refer to [Using Swift with Cocoa and Objective-C](https://developer.apple.com/library/ios/documentation/Swift/Conceptual/BuildingCocoaApps/MixandMatch.html).

#### Prefixes

With the introduction of modules in Swift, there is no need for class prefixes anymore, therefore we removed
all class prefixes in Swift. For Objective-C, we added prefixed declarations. For example, the `CameraViewController` can be used from Objective-C and can be found under its alias `PESDKCameraViewController`.
