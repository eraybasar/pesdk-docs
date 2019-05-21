---
published: true # Either published or not
layout: guides/content
title: &title Interface # title as shown in the menu and

menuitem: *title
order: 2
platform: ios
version: v9
description: The PhotoEditor SDK for iOS can easily be tailored to meet your business needs. Learn how to swiftly create the editor your use-case requires.

category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor
---

The editor UI is divided into different sections. Some members like `backgroundColor` can be set globally, and if needed locally.
That means, that if you set the `backgroundColor` of the `Configuration` to black, all tools have that `backgroundColor`,
unless you set another `backgroundColor` in the specific tool configuration.
The following image annotates the most common configuration members.
Please note that the background color of the toolbar,
which sits at the bottom, is set through a property of the `PhotoEditViewController`.

![Common members]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/commonMembers.jpg)
