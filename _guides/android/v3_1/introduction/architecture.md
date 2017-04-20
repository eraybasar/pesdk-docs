---
layout: guides/android/v3_1/content
title: &title Architecture # title as shown in the menu and 

menuitem: *title
order: 2
platform:
  - android
version:
  - v3_1
category: 
  - guide
  - introduction

tags: &tags # tags that are necessary
  - photo editor 

status: draft
---

# Architecture

Our photo editor consists of two parts:

## Framework
  The SDK handles the image processing. 
  It provides many powerful operations like cropping, image
  orientation, beautiful filters, adjustments, text and sticker overlays and much more. It's the
  heart of our editor and it's easily extensible with custom filters or even custom operations.
  The engine handles image rendering at the lowest level. With a simple scene graph based API, it
  combines and abstracts the complicated WebGL and Canvas2D APIs. Its highly performant architecture
  even allows you to do real-time rendering. 
  The engine is not covered in this documentation. Go to
  our [API documentation](http://static.photoeditorsdk.com/docs/android/PhotoEditorSDK.Engine.html) to
  learn more about it.

## User Interface

  Our beautiful and fully customizable UI is based on React.JS. It's the top level of our SDK
  and it's incredibly easy to integrate into your website or web application - no matter if you're
  already using React.JS or not. A few lines of JavaScript and you're ready to go.
