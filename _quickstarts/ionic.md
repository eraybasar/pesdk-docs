---
layout: quickstarts/content
title: &title Ionic # title as shown in the menu and 
description: Learn how to get started with the PhotoEditor SDK and Ionic and how to swiftly integrate the SDK into an Ionic application with this Quick Start.
menuitem: *title
order: 0
category: 
  - quickstart
tags: &tags # tags that are necessary
  - photo editor 
  - ios
  - android
published: true
---

![Logo]({{ site.baseurl }}/assets/images/quickstarts/ionic/logo.png){: height="150px" .center-image}

# Getting Started with Ionic

We created a [demo repository](https://github.com/imgly/pesdk-ionic-demo), that uses our [Cordova demo](https://github.com/imgly/pesdk-cordova-demo) to integrate the PhotoEditor SDK into an Ionic application. Make sure to check out our [accompanying blog post](https://blog.photoeditorsdk.com/photoeditor-sdk-cordova-dabe146e6c13) as well.

>**WARNING**: The repository is not meant as a fully fledged Ionic plugin, but as a base for further development instead. See the [Cordova plugin repository](https://github.com/imgly/pesdk-cordova-demo) for more details on how to implement a full plugin for your use case.

**Updated to use `Cordova 8.0.0` and `Ionic CLI 3.20`**

## Example App
The example app, included in the repository, demonstrates how to open the PhotoEditor SDK's camera and pass any taken or selected images to the editor. When an edited image is saved, its filepath is sent back to Ionic and displayed using a JavaScript alert. An app could then display this image in Ionic or send it to a backend. To open an existing image instead, you can pass a filepath to the `present` method, but will need to handle the different ways both platforms manage filepaths. To launch the example app, take a look at the *Launch Example* section below.

## Setup Process
The example app was created using the following commands:

To begin, clone the PESDK Cordova plugin demo to your root directory and add it as a submodule:

```bash
$ git init
$ git submodule add git@github.com:imgly/pesdk-cordova-demo.git
```

Move on with creating a new Ionic app and adding the iOS and Android platforms:

```bash
$ ionic start PESDKDemo blank
# Select yes, when asked about integrating Cordova to target native iOS and Android.
$ cd PESDKDemo
$ ionic cordova platform add android
$ ionic cordova platform add ios
```

You can then add our `pesdk-cordova-demo` as a plugin to the Ionic app:

```bash
$ ionic cordova plugin add ../pesdk-cordova-demo --nofetch
```

This will use the plugin source files from the submodule you created before to add the PESDK plugin to both platforms.

## Licensing and further customizations
For iOS you need to manually add your PESDK license file as `LICENSE_IOS` to the Xcode project. On Android, the license file just needs to be added to the `/app/main/assets` directory as `LICENSE_ANDROID`. Take a look at our [cordova demo](https://github.com/imgly/pesdk-cordova-demo) for more details on how to modify the native plugins to match your requirements.

:warning: **You'll need to make sure the Ionic ID/iOS Bundle ID/Android App ID matches your license file**

## Launch Example
Once you cloned this repository, you need to run the following commands in order to launch the example app on devices or emulators:
```bash
$ git submodule update
$ cd PESDKDemo
$ npm install
$ ionic cordova build ios
$ ionic cordova build android
$ cp LICENSE_ANDROID platforms/android/assets
$ cordova plugin add ../pesdk-cordova-demo --nofetch
```

This builds the app for both platforms and copies the Android license file to the corresponding directory. Afterwards you need to add the `LICENSE_IOS` file to the iOS app by opening [PESDKDemo.xcworkspace](/example/platforms/ios/PESDKDemo.xcworkspace) using Xcode and dragging the license file into the sidebar.

Once all license copying is done and both platforms have been built, the app can be run using the following commands:
```
$ ionic cordova emulate ios
$ ionic cordova emulate android
```

## Running in the Browser

The app will run in your browser using ```ionic serve```, but will throw an error upon clicking the 'Open PhotoEditor SDK' button, as there is no browser implementation.

