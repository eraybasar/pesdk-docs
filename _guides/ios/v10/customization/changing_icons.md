---
published: true # Either published or not
layout: guides/content
title: &title Changing Icons # title as shown in the menu and

menuitem: *title
order: 2
platform: ios
version: v10
category:
  - guide
  - customization
description: The PhotoEditor SDK for iOS can easily be tailored to meet your business needs. Learn how to swiftly create the editor your use-case requires.

tags: &tags # tags that are necessary
  - photo editor
---

You can register a block using the `PESDK.bundleImageBlock` property which gets called once for each icon that is used by the SDK. The block is passed with the name of the image and within the block, you should return your desired icon for the given name. Please note that the icons that you return should have the same dimensions as the default icons to ensure the best user experience. The block is called exactly once for each icon, afterwards the image will be loaded from cache, so make sure to set a block early, ideally before presenting or even initializing the editor. Returning `nil` will result in the default icon being used.

{% capture first_snippet %}
Swift
---
```swift
PESDK.bundleImageBlock = { imageName in
  switch imageName {
  case "imgly_icon_save":
    return UIImage(named: "a_different_image")
  default:
    return nil
  }
}
```
{% endcapture %}

{% capture second_snippet %}
Objective-C
---
```objc
[PESDK setBundleImageBlock:^UIImage * _Nullable(NSString * _Nonnull imageName) {
  if ([imageName isEqualToString:@"imgly_icon_save"]) {
    return [UIImage imageNamed:@"a_different_image"];
  }

  return nil;
}];
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ICONS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}
