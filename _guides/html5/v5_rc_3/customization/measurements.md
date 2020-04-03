---
layout: guides/content
title: &title Measurements

description: Learn how to align the editor with your current application.

menuitem: *title
order: 4
platform: html5
version: v5_rc_3
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

To integrate the PhotoEditor SDK UI seamlessly into your application we provide the option to change the height and width of the different components 

Following are the available customizations:

The values will accept the pixel amount as a `number` 

* `advancedUIToolbar`: Customizations for Advanced UI toolbar.
  * `width`: Changes the width of Advanced UI toolbar.
* `basicUIToolbar`: Customizations for Basic UI toolbar.
  * `openHeight`: Changes the height of Basic UI toolbar, in when a tool is selected.
  * `closeHeight`: Changes the height of Basic UI toolbar, in when no tool is selected.
* `mainCanvasActionBar`: Customizations for Main canvas action bar in both UIs.
  * `height`: Changes the height of main canvas action bar.
* `canvas`: Customization for the Canvas
  * `marginTop`: This value can be used in combination with an opaque `mainCanvasActionBar.background` color to prevent canvas elements to be hidden behind the MainCanvasActionBar