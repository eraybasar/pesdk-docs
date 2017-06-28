---
layout: guides/content
title: &title Camera # title as shown in the menu and

menuitem: *title
order: 0
platform: ios
version: v6
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}


The PhotoEditor SDK offers a lightning fast camera implementation for iOS to complement your editor, featuring all essential camera components as well as live filters.

In order to use our camera, you need to instantiate a `CameraViewController` and present it. You can configure the camera to fit your needs using the `CameraViewControllerOptions`. To do so, you need to pass a `Configuration` object to the `CameraViewControllers` initializer. If no configuration is passed, the default configuration is used.

> __Warning__: When adding a camera to your app, don't forget to set the required `NSCameraUsageDescription` in the `Info.plist` file of your app. This is forced by iOS and allows your app to access the devices camera. If you want to allow photo roll access, you need to set the `NSPhotoLibraryUsageDescription` as well.

The options allow you to configure the available flash modes, a forced square crop, tap to focus, allowed flash modes and much more. Furthermore you may disable camera roll access or live filters. Presenting the default camera editor can be done using the following code:

```swift
let cameraViewController = CameraViewController()
present(cameraViewController, animated: true, completion: nil)
```

A more complex configuration, e.g. a camera without flash and filters, and limited to the front camera, could be created like this:

```swift
let configuration = Configuration { builder in
    builder.configureCameraViewController { options in
        // Disable filters
        options.showFilters = false

        // Force a selfie camera
        options.allowedCameraPositions = [ .front ]

        // Disable flash
        options.allowedFlashModes = [ .off ]
    }
}
```

To see an example implementation take a look at the {% include guides/ios/demo-repository.md %} and to see our camera in action, check out our {% include guides/ios/example-app.md %}.

## Live filter preview

The live filter preview allows your users to test different filters on the current image. The available filters may be configured using the `PhotoEffect.allEffects` array as described in the [filters]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/filters) section or disabled as shown in the example above.
