---
layout: guides/content
title: &title Demos # title as shown in the menu and

menuitem: *title
order: 4
platform: ios
version: v7_1
category:
  - guide
  - introduction

tags: &tags # tags that are necessary
  - photo editor

published: true
---

# Demos

Wether you want to learn how to use the PhotoEditor SDK or just want to see what can be built with it, we are providing some example integrations for various frameworks.

## Example app

We offer an {% include guides/ios/example-app.md %} on the App Store, that demonstrates the PhotoEditor SDK's interface and our default configuration.

## Demo repository
For code examples take a look at the {% include guides/ios/demo-repository.md %}. Said repository demonstrates how to integrate the SDK from Swift and Objective-C and shows how to configure it to suit your needs. There are examples for Swift and Objective-C, presenting the camera and editor, and extensive customization.

## Example Integrations

Check out our GitHub Repositories [here](https://github.com/imgly/) for up to date example integrations of our HTML and Native SDKs.
All example integrations repositories are tagged with the suffix `-demo`. In general these examples are a good place to start with:

 * Quickly testing out our SDK without the need to write code
 * Tinker with the code to understand how it works and
 * Starting templates for specific web frameworks.

 Currently, we are providing example integrations for:

  * [React Native](https://github.com/imgly/pesdk-react-native-demo)
  * [Ionic](https://github.com/imgly/pesdk-ionic-demo)
  * [Cordova](https://github.com/imgly/pesdk-cordova-demo)

We are also providing the corresponding tutorials in our quickstart section [here]({{ site.baseurl }}/quickstarts), if you want to learn how to integrate the SDK yourself:

  * [React Native]({{ site.baseurl }}/quickstarts/react_native)
