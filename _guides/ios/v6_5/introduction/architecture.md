---
layout: guides/ios/v6_5/content
title: &title Architecture # title as shown in the menu and 

menuitem: *title
order: 2
platform:
  - ios
version:
  - v6_5
category: 
  - guide
  - introduction

tags: &tags # tags that are necessary
  - photo editor 

status: draft
---

# Architecture

Our SDK provides two main view controllers. One to work with the camera and one to edit an image.
In the following section we will first explain how the licensing works 
and then how the basic view controllers are set up. We will also demonstrate how they can be embedded into a `UINavigationController`.

## License file

Before using any components of the Photo Editor SDK, you have to unlock the SDK using your license key file. It is important that you set the license key before using any of the SDK classes.

```swift
func application(_ application: UIApplication, willFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey : Any]? = nil) -> Bool {
  if let licenseURL = Bundle.main.url(forResource: "license", withExtension: "") {
    PESDK.unlockWithLicense(at: licenseURL)
  }

  return true
}
```

The license is digitally signed so it can not be altered without becoming invalid. 
Our sample app comes with its own license, so you can try that right away. 
To try our SDK in your own app, you need to request a trial license because a license is bound to a bundle identifier. You can request a demo license at [https://www.photoeditorsdk.com/pricing](https://www.photoeditorsdk.com/pricing).

Once you have the license file it can be used to unlock the view controller.
The following example demonstrates the unlock the SDK.

## Add Import Statement
You need to add an import statement like this:

```swift
import imglyKit
```

## Add a CameraViewController

The `CameraViewController` class is responsible for displaying an interface to interact with the camera. It provides user interface elements among others to enable the flash, toggle the camera and choose a filter. All you have to do is the following:

```swift
let cameraViewController = CameraViewController()
present(cameraViewController, animated: true, completion: nil)
```

The `CameraViewController` has a `completionBlock` property. When it is set to `nil`, the taken photo is passed to the `PhotoEditViewController`, which is then presented modally.

## Add a PhotoEditViewController

The `PhotoEditViewController` class is responsible for presenting and rendering an image. It is designed to work together with a `ToolbarController`, which is responsible to presenting and dismissing the various tool controllers.

To present an `PhotoEditViewController` just add these few lines:

```swift
let sampleImage = UIImage(named: "sample_image")

let photoEditViewController = PhotoEditViewController(photo: sampleImage!)
photoEditViewController.delegate = self
        
let toolbarController = ToolbarController()
toolbarController.push(photoEditViewController, animated: false)

present(toolbarController, animated: true, completion: nil)
```

Here we set the `delegate` of the `photoEditViewController` instance to `self`.
That means that the presenting view controller must implement the `PhotoEditViewControllerDelegate` protocol.
The methods of the `PhotoEditViewControllerDelegate` protocol are designed to inform the delegate about the result of the editing process (for example cancelation).
 
The method that gets called when the user confirms the changes is 
`func photoEditViewController(_ photoEditViewController: PhotoEditViewController, didSave image: UIImage, and data: Data)`.
It provides the resulting image as an `UIImage` and a `Data` object. Please note that the EXIF data of the input image, is only fully contained within the `Data` object. Please refer to the next section for more information about EXIF handling.

## Embed in an UINavigationController

The controllers provided with the SDK can be embedded in an `UINavigationController`. The following code demonstrates how.

```swift
let sampleImage = UIImage(named: "sample_image")
        
let photoEditViewController = PhotoEditViewController(photo: sampleImage!)
photoEditViewController.delegate = self

let toolbarController = ToolbarController()
toolbarController.push(photoEditViewController, animated: false)

let navigationController = UINavigationController(rootViewController: toolbarController)
navigationController.navigationBar.barStyle = .black
navigationController.navigationBar.isTranslucent = false

present(navigationController, animated: true, completion: nil)
```

To try these examples, and find out about more options please take a look at the sample project provided [here](https://github.com/imgly/imgly-sdk-ios).
