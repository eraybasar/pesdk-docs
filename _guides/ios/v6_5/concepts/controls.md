---
layout: guides/ios/v6_5/content
title: &title Controls # title as shown in the menu and 

menuitem: *title
order: 0
platform: ios
version: v6_5
category: 
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool](/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.png){: height="400px" .center-image}

# Controls 

The SDK offers controls for all available tools. The default toolset consists of tools for [Transform](/guides/{{page.platform}}/{{page.version}}/features/transform), [Filters](/guides/{{page.platform}}/{{page.version}}/features/filter), [Adjustments](/guides/{{page.platform}}/{{page.version}}/features/adjustments), [Text](/guides/{{page.platform}}/{{page.version}}/features/text), [Stickers](/guides/{{page.platform}}/{{page.version}}/features/stickers), [Frames](/guides/{{page.platform}}/{{page.version}}/features/frames), [Brush](/guides/{{page.platform}}/{{page.version}}/features/brush), [Focus](/guides/{{page.platform}}/{{page.version}}/features/focus) and [Magic](/guides/{{page.platform}}/{{page.version}}/features/magic).

All available tools are implemented as [`PhotoEditToolController`](https://static.photoeditorsdk.com/docs/ios/Classes/PhotoEditToolController.html) subclasses and
get presented in a stacked layout, starting from the [`PhotoEditViewController`](https://static.photoeditorsdk.com/docs/ios/Classes/PhotoEditViewController.html) as root, which is embedded in a [`ToolbarController`](https://static.photoeditorsdk.com/docs/ios/Classes/ToolbarController.html) for hierarchy and toolbar management. Each tool controller can be configured using its corresponding [`ToolControllerOptions`](https://static.photoeditorsdk.com/docs/ios/Classes/ToolControllerOptions.html) subclass as described in the [configuration](/guides/{{page.platform}}/{{page.version}}/features/configuration) and [customization](/guides/{{page.platform}}/{{page.version}}/ui/customization) sections.

# View hierarchy

![{{page.title}} tool](/assets/images/guides/{{page.platform}}/{{page.version}}/frames_annotated.png){: height="400px" .center-image}

A single tool controller consists of four main views:

1. `workspaceView` - The view showing the image thats currently being edited and any changes, e.g. brush strokes or stickers, that are applied to it
2. `overlays` - A set of buttons that are overlaid on the `workspaceView` and offer functionality like 'Redo', 'Undo' or 'Bring to front'
3. `accessoryView` - The default place for controls, that belong to the current tool
4. `toolbar` - The bottom toolbar, managed by the [`ToolbarController`](https://static.photoeditorsdk.com/docs/ios/Classes/ToolbarController.html). Displays the current tool and allows apply/cancel actions.
