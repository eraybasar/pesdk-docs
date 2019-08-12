---
layout: guides/content
title: &title Serialization # title as shown in the menu and
description: The PhotoEditor SDK for iOS provides an option for serialization and deserialization, allowing your users to save and revise their work anytime.
menuitem: *title
order: 0
platform: ios
version: v10
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


Our serialization functionality empowers you to save the current operations that have been applied to the image and the image itself. It also allows you to recover such settings the next time the editor is opened again. The settings will be stored in a plain JSON file.
For details on the JSON structure you can [download]({{ site.baseurl }}/assets/downloads/serialization/schema-3.4.0.json){: download="schema-3.4.0.json" } our schema.

## Saving the current settings
When the editor is about to be closed, the according delegate method will be called.
In that method, you can retrieve the serialized settings by calling the `serializedSettings` method on the `PhotoEditViewController` class
and save these to a file. Here is some example code to get you started:

```swift
func photoEditViewController(_ photoEditViewController: PhotoEditViewController, didSave image: UIImage, and data: Data) {
  if let data = photoEditViewController.serializedSettings(withImageData: true) {
    do {
      try data.write(to: dataFileURL, options: .atomic)
    } catch {
      print(error)
    }
  }

  dismiss(animated: true, completion: nil)
}
```

## Restoring a settings file

To set the initial editor settings, you can deserialize a `Data` object containing a previously serialized settings file using the `Deserializer` class. A settings file contains the serialized `PhotoEditModel` and the original input image as a `UIImage` object. After a successful deserialization, both of these are returned in a `DeserializationResult` object and may be used to fully restore the previous editing state. This can be done by using the deserialized image and model to initialize and present a new `PhotoEditViewController` instance:

```swift
let deserializationResult = Deserializer.deserialize(data: data, imageDimensions: nil)
if let model = deserializationResult.model, let photo = deserializationResult.photo {
  let photoEditViewController = PhotoEditViewController(photoAsset: photo, configuration: Configuration(), menuItems: PhotoEditMenuItem.defaultItems, photoEditModel: model)

  present(photoEditViewController, animated: true, completion: nil)
}
```

To apply existing settings to a different image, you need to pass the new images dimensions to the deserializer. This ensures that all dimensions and positions are matched as expected. Dimensions passed to `Deserializer.deserialize(data:, imageDimensions:)` always take precedence over the image dimensions contained in the serialized settings. Once you deserialized with the desired dimensions, you can once again present the `PhotoEditViewController` with the deserialized `PhotoEditModel` and the image:

```swift
if let inputImage = UIImage(named: "example_image"), let data = loadPredefinedSettingsData() {
  let photo = Photo(image: inputImage)
  let deserializationResult = Deserializer.deserialize(data: data, imageDimensions: inputImage.size)
  if let model = deserializationResult.model {
    let photoEditViewController = PhotoEditViewController(photoAsset: photo, configuration: Configuration(), menuItems: PhotoEditMenuItem.defaultItems, photoEditModel: model)

    present(photoEditViewController, animated: true, completion: nil)
  }
}
```
