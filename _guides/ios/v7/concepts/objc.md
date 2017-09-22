---
layout: guides/content
title: &title Objective-C # title as shown in the menu and

menuitem: *title
order: 0
platform: ios
version: v7
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

All public classes, methods and enums can be mixed and matched with Objective-C. If you installed PhotoEditor SDK with CocoaPods or embedded the framework directly all you have to do is import the framework:

```objc
@import PhotoEditorSDK;
```

For more information about Swift and Objective-C interoperability please refer to [Using Swift with Cocoa and Objective-C](https://developer.apple.com/library/ios/documentation/Swift/Conceptual/BuildingCocoaApps/MixandMatch.html).

#### Prefixes

With the introduction of modules in Swift, there is no need for class prefixes anymore, therefore we removed
all class prefixes in Swift. For Objective-C we added prefixed declarations. For example the `CameraViewController` can be used from Objective-C and can be found under its alias `PESDKCameraViewController`.
