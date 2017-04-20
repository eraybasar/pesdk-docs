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

## EXIF

With version 6 of our SDK we introduced EXIF handling, meaning that the EXIF data of the input image is preserved.
The reason why the EXIF data got lost in the first place, is that the `UIImage` class strips the EXIF data down to a minimal set.
Therefore the input image must be passed in as a `Data` object. The following code sample demonstrates the process,

```swift
let sampleImage = Data(contentsOf: Bundle.main.url(forResource: "exifSample", withExtension: "jpg")!)
let photoEditViewController = PhotoEditViewController(data: sampleImage!)
```

As stated above, to get the edited image with all EXIF informations, use the `data` argument, passed by the `func photoEditViewController(_ photoEditViewController: PhotoEditViewController, didSave image: UIImage, and data: Data)` method defined in the `PhotoEditViewControllerDelegate` protocol.
