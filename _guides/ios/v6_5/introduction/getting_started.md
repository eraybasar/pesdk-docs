---
layout: guides/ios/v6_5/content
title: &title Getting Started # title as shown in the menu and 
order: 1
menuitem: *title
platform:
  - ios
version:
  - v6_5
category: 
  - guide
  - introduction

tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

# Getting Started with the PhotoEditor SDK for iOS

## Requirements

* Major Version 3 of the SDK is compatible with Xcode 7.x and Swift 2.2 and iOS 8 and above.
* Major Version 4 of the SDK is compatible with Xcode 8.x and Swift 2.3 and iOS 8 and above.
* Major Version 5 of the SDK is compatible with Xcode 8.x and Swift 3.0 and iOS 8 and above.
* Major Version 6 of the SDK is compatible with Xcode 8.x and Swift 3.0 and iOS 9 and above.

The major version number change from 3.x to 4.x and 5.x was required to provide a release for each Swift version. Version 3.3.12, 4.0.7 and 5.0.7 all have the same features and only differ in the version of Swift used. Major version 6 is the first version with new and updated features and is written in Swift 3.0.

## CocoaPods

PhotoEditor SDK is available via CocoaPods. If you're new to CocoaPods, [this Getting Started Guide will help you](https://guides.cocoapods.org/using/getting-started.html). CocoaPods is the preferred and simplest way to use the PhotoEditor SDK.

**Important:** Please make sure that you have a CocoaPods version >= 0.39.0 installed. You can check your version of CocoaPods with `pod --version`.

Here's what you have to add to your `Podfile`:

```ruby
use_frameworks!

pod 'imglyKit', '~> 6.5'
```

Then run `pod install`.

## Manually

If you prefer not to use either of the aforementioned dependency manager, you can integrate
PhotoEditor SDK into your project manually via a dynamic framework.

1) Download the SDK [here](https://github.com/imgly/pesdk-ios-build/releases/latest), then just drag `imglyKit.framework` into the `Embedded Binaries` section of your target:

![Embedded Binaries](/assets/images/ios/embedded-binaries.png)

2) Add a new `Run Script Phase` in your target’s `Build Phases`.

**IMPORTANT:** Make sure this `Run Script Phase` is below the `Embed Frameworks` build phase.
You can drag and drop build phases to rearrange them.
Paste the following line in this `Run Script Phase`'s script text field:

```bash
bash "$BUILT_PRODUCTS_DIR/$FRAMEWORKS_FOLDER_PATH/imglyKit.framework/strip-framework.sh"
```

This script works around an [App Store submission bug](http://www.openradar.me/radar?id=6409498411401216) triggered by universal binaries.

![Run Script Phase](/assets/images/ios/run-script-phase.png)
