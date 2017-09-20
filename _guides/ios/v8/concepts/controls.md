---
layout: guides/content
title: &title Controls # title as shown in the menu and

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

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}


The SDK offers controls for all available tools. The default toolset consists of the following tools: [Transform]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/transform), [Filters]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/filter), [Adjustments]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/adjustments), [Text]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/text), [Stickers]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/stickers), [Frames]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/frames), [Brush]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/brush), [Focus]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/focus) and [Magic]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/magic).

All available tools are implemented as [`PhotoEditToolController`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/PhotoEditToolController.html) subclasses and
get presented in a stacked layout, starting from the [`PhotoEditViewController`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/PhotoEditViewController.html) as root, which is embedded in a [`ToolbarController`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/ToolbarController.html) for hierarchy and toolbar management. Each tool controller can be configured using its corresponding [`ToolControllerOptions`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/ToolControllerOptions.html) subclass as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) and [customization]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/ui/customization) sections.


![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/frames_annotated.jpg){: height="400px" .center-image}

A single tool controller consists of four main views:

1. `workspaceView` - The view showing the image thats currently being edited and any changes, e.g. brush strokes or stickers, that are applied to it
2. `overlays` - A set of buttons that are overlaid on the `workspaceView` and offer functionality like 'Redo', 'Undo' or 'Bring to front'
3. `accessoryView` - The default place for controls, that belong to the current tool
4. `toolbar` - The bottom toolbar, managed by the [`ToolbarController`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/ToolbarController.html) displays the current tool and allows apply/cancel actions.
