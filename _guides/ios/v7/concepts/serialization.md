---
layout: guides/content
title: &title Serialization # title as shown in the menu and 
description: The PhotoEditor SDK for iOS provides an option for serialization and deserialization, allowing your users to save and revise their work anytime.
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


Our serialization functionality empowers you to save the current settings of the UI and recover it the next time the editor is opened again. The settings will be stored in a plain JSON file.
For details on the JSON structure you can [download]({{ site.baseurl }}/assets/downloads/serialization/schema-2.0.0.json){: download="schema-2.0.0.json" } our schema.

## Saving the UI settings
When the editor is about to be closed, the according delegate method will be called.
In that method you can retrieve the serialized settings by calling the `serializedSettings` method on the `PhotoEditViewController` class
and save these to a file. Here is some example code to get you started:

```swift
func photoEditViewController(_ photoEditViewController: PhotoEditViewController, didSave image: UIImage, and data: Data) {
    if ViewController.writeSettings {
        let data = photoEditViewController.serializedSettings
        do {
            try data?.write(to: dataFileURL, options: .atomic)
        } catch {
            print(error)
        }
    }

    dismiss(animated: true, completion: nil)
}
```

## Restoring the UI settings

To set the initial editor settings, load the saved settings as `NSData` object and set them via the `initialSerializedSettings` property of
the `PhotoEditViewController`. This has to be done **before** the editor is presented. Here is an example, to demonstrate the process:

```swift
let photoEditViewController = PhotoEditViewController(photo: UIImage(named: "sample_image")!)
photoEditViewController.delegate = self
if let serializedData = NSData(contentsOf: dataFileURL) {
    photoEditViewController.initialSerializedSettings = initialSerializedSettings
}
let toolbarController = ToolbarController()
toolbarController.push(photoEditViewController, animated: false)

present(toolbarController, animated: true, completion: nil)
```


