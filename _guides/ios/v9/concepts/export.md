---
layout: guides/content
title: &title Export # title as shown in the menu and
description: By default, the PhotoEditor SDK for iOS exports to your user's device. Learn how to disable the automatic download and export to a server instead.
menuitem: *title
order: 0
platform: ios
version: v9
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


The PhotoEditor SDK exports edited images in the same resolution, as they were originally loaded into the editor, as long as no cropping operation was carried out. You can immediately display the received data or save the result to a file. The final image is **not** stored in the camera roll or the filesystem. Instead, a delegate method gets called with the resulting image and any further processing has to be handled there.

## EXIF

With version 6 of our SDK, we introduced EXIF handling, meaning that all EXIF data of the input image are preserved.
The reason why the EXIF data got lost in the first place, is that the `UIImage` class strips the EXIF data down to a minimal set.
Therefore the `Photo` object that you pass to the editor must be created from a `Data` or `URL` object to preserve all existing EXIF data. The following code sample demonstrates the process:

```swift
let photo = Photo(url: Bundle.main.url(forResource: "exifSample", withExtension: "jpg")!)
let photoEditViewController = PhotoEditViewController(photoAsset: photo)
```

Upon export, you have to use the `data` argument passed to the `func photoEditViewController(_ photoEditViewController: PhotoEditViewController, didSave image: UIImage, and data: Data)` method defined in the `PhotoEditViewControllerDelegate` protocol in order to preserve all EXIF data, because as described above, the `UIImage` object does not contain the EXIF data anymore.
