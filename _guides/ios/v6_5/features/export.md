---
layout: guides/ios/v6_5/content
title: &title Export # title as shown in the menu and 

menuitem: *title
order: 0
platform:
  - ios
version:
  - v6_5
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

# Exporting

The PhotoEditor SDK exports edited images in the same resolution, as they were originally loaded, as long as no cropping occured. You can immediately display the received data or save the result to a file. The final image is **not** stored in the camera roll or the filesystem. Instead a delegate method gets called with the resulting image and any further processing has to be handled there.

## EXIF

With version 6 of our SDK we introduced EXIF handling, meaning that all EXIF data of the input image are preserved.
The reason why the EXIF data got lost in the first place, is that the `UIImage` class strips the EXIF data down to a minimal set.
Therefore the input image must be passed in as a `Data` object to preserve all existing EXIF data. The following code sample demonstrates the process:

```swift
let sampleImage = Data(contentsOf: Bundle.main.url(forResource: "exifSample", withExtension: "jpg")!)
let photoEditViewController = PhotoEditViewController(data: sampleImage!)
```

Upon export, you need to use the `data` argument, passed by the `func photoEditViewController(_ photoEditViewController: PhotoEditViewController, didSave image: UIImage, and data: Data)` method defined in the `PhotoEditViewControllerDelegate` protocol in order to preserve all EXIF data.
