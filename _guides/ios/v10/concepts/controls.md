---
layout: guides/content
title: &title Controls # title as shown in the menu and
description: The PhotoEditor SDK for iOS offers controls for all tools available. Learn how to present or dismiss and configure the tool controls.
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

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}


The SDK offers controls for all available tools. The default toolset consists of the following tools: [Transform]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/transform), [Filters]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/filters), [Adjustments]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/adjustments), [Stickers]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/stickers), [Text]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/text), [Overlays]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/overlays), [Frames]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/frames), [Brush]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/brush), [Focus]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/features/focus) and Magic.

All available tools are implemented as [`PhotoEditToolController`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/PhotoEditToolController.html) subclasses. Most tools subclass [`MenuToolController`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/MenuToolController.html) though, which is a `PhotoEditToolController` subclass which contains a [`MenuViewController`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/MenuViewController.html) to present the menu at the bottom and a contained view controller above the menu. The [`PhotoEditViewController`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/PhotoEditViewController.html) is responsible for presenting and dismissing `PhotoEditToolController`s.

Each tool controller can be configured using its corresponding [`ToolControllerOptions`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/ToolControllerOptions.html) subclass as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) and [customization]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/customization/introduction) sections.
