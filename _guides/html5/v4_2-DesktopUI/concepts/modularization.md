---
layout: guides/content
title: &title Modularization
description: Learn how to only load specific modules of PhotoEditorSDK for HTML5 in order to reduce traffic

menuitem: *title
order: 0
platform: html5
version: v4_2-DesktopUI
category:
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


PhotoEditorSDK provides "full" packages that provide all feature the Editor can provide. If you
decide to only use a couple of features instead of the whole feature set, our modularization feature
can help you reduce traffic by only loading the code that is necessary.

## Loading specific controls / operations

Our DesktopUI consists of multiple controls. Each control requires one or more operations to work
properly. In order to load the DesktopUI with a specific control, please follow the following steps.
In this example, we're loading the `transform` control which depends on both the `transform` and the
`orientation` operations. To see which control depends on which operations, see the table below.

* Load the PhotoEditorSDK core package and the required operation package(s):

```html
<script src="js/PhotoEditorSDK.js"></script>
<script src="js/operations/TransformOperation.js"></script>
<script src="js/operations/OrientationOperation.js"></script>
```

* Load the DesktopUI core package and the required control package:

```html
<script src="js/PhotoEditorSDK.UI.DesktopUI.js"></script>
<script src="js/desktop-ui/controls/TransformControls.js"></script>
```

## Controls / operations dependency list

| Control             | Operations                               |
|---------------------|------------------------------------------|
| AdjustmentsControls | AdjustmentsOperation                     |
| BrushControls       | SpriteOperation                          |
| FilterControls      | FilterOperation                          |
| FrameControls       | FrameOperation                           |
| LibraryControls     | No operation dependency                  |
| OverlayControls     | OverlayOperation                         |
| StickerControls     | SpriteOperation                          |
| TextControls        | SpriteOperation                          |
| TransformControls   | TransformOperation, OrientationOperation |
