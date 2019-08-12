---
published: true # Either published or not
layout: guides/content
title: &title Interface # title as shown in the menu and

menuitem: *title
order: 2
platform: ios
version: v10
description: The PhotoEditor SDK for iOS can easily be tailored to meet your business needs. Learn how to swiftly create the editor your use-case requires.

category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor
---

The user interface can be customized in various ways with increasing complexity.


## Theming

The recommend way to change the appearance of the UI elements is by configuring the [`Theme`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Structs/Theme.html). The default is a dark color theme but there is also a predefined light color theme which can be applied as follows:

{% capture first_snippet %}
Swift
---
```swift
let configuration = Configuration { builder in
  builder.theme = .light
}
```
{% endcapture %}

{% capture second_snippet %}
Objective-C
---
```objc
PESDKConfiguration *configuration = [[PESDKConfiguration alloc] initWithBuilder:^(PESDKConfigurationBuilder * _Nonnull builder) {
  builder.theme = PESDKTheme.light;
}];
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-LIGHTTHEME{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

The color of specific UI elements can be customized at a central place by modifying the properties of the theme:

{% capture first_snippet %}
Swift
---
```swift
let configuration = Configuration { builder in
  builder.theme.backgroundColor = .darkGray
  builder.theme.menuBackgroundColor = .black
  builder.theme.toolbarBackgroundColor = .black
  builder.theme.primaryColor = .green
  builder.theme.tintColor = .red
}
```
{% endcapture %}

{% capture second_snippet %}
Objective-C
---
```objc
PESDKConfiguration *configuration = [[PESDKConfiguration alloc] initWithBuilder:^(PESDKConfigurationBuilder * _Nonnull builder) {
  builder.theme.backgroundColor = UIColor.darkGrayColor;
  builder.theme.menuBackgroundColor = UIColor.blackColor;
  builder.theme.toolbarBackgroundColor = UIColor.blackColor;
  builder.theme.primaryColor = UIColor.greenColor;
  builder.theme.tintColor = UIColor.redColor;
}];
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-MODIFYTHEME{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}


## Appearance proxies

The theming itself makes heavy use of `UIAppearance` proxies. The defined colors are applied to most UI elements via `UIAppearance` proxies during the initialization of a `CameraViewController` or a `PhotoEditViewController`. If you need to use `UIAppearance` proxies yourself you need to issue your calls after the initialization of a `CameraViewController` or a `PhotoEditViewController` in order to override the properties set by the theming.


## Configuration precedence

The editor UI is divided into different sections. Some members like `menuBackgroundColor` can be set globally, and if needed locally.
That means, that if you set the `theme.menuBackgroundColor` of the `Configuration` to black, all tools have that `menuBackgroundColor`,
unless you set another `menuBackgroundColor` in the specific tool configuration.
The following image annotates the most common configuration members.
Please note that the background color of the toolbar,
which sits at the bottom, is set through a property of the `PhotoEditViewController` or by `theme.toolbarBackgroundColor`.

Modifying UI elements via [closures]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/customization/introduction#using-the-closures) takes precedence over the configuration of the theme or the custom use of `UIAppearance` proxies. 

![Common members]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/commonMembers.jpg)
