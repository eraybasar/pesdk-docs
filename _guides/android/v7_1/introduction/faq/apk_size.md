---
layout: guides/content
collection: guides
category:
  - guide
  - introduction
platform: android
version: v7_1
tags: &tags # tags that are necessary
  - photo editor
published: true
faq_v7_1: true
faq-category: general
order: 0
title: Reduce the file size of the SDK
---

To reduce your app's apk size you can delete modules from the pesdkConfig in your module's build.gralde file.
Make sure you only using that ones which are included in your license and you want to use. If you don't need to save current settings of changes made in the editor, you can delete the serializer module.
Furthermore there are asset packs like stickers or filters which you can use but you don't have to.

If you want to use our provided user interface or parts of it, you have to add the following:
```
include 'ly.img.android.pesdk.ui.mobile_ui:core'
```

If you want to use the `Text` feature with our provided user interface and our font pack, you have to add the following:
```
include 'ui:text'
include 'assets:font-basic'
```

If you want to use the `Frame` feature with our provided user interface and our frame pack, you have to add the following:
```
include 'ui:frame'
include 'assets:frame-basic'
```

If you want to use the `Focus` feature with our provided user interface, you have to add the following:
```
include 'ui:focus'
```

If you want to use the `Brush` feature with our provided user interface, you have to add the following:
```
include 'ui:brush'
```

If you want to use the `Filter` feature with our provided user interface and our Filter pack, you have to add the following:
```
include 'ui:filter'
include 'assets:filter-basic'
```

If you want to use the `Sticker` feature with our provided user interface and our sticker packs, you have to add the following:
```
include 'ui:sticker'
include 'assets:sticker-shapes'
include 'assets:sticker-emoticons'
```

If you want to use the `Overlay` feature with our provided user interface and our overlay pack, you have to add the following:
```
include 'ui:overlay'
include 'assets:overlay-basic'
```

If you want to use the `Adjustment` feature with our provided user interface, you have to add the following:
```
include 'ui:adjustment'
```

If you want to use the `Text-Design` feature with our provided user interface, you have to add the following:
```
include 'ui:text-design'
```

If you want to use the `Transform` feature with our provided user interface, you only have to add the following because the operations are included in the core module:
```
include 'ui:transform'
```
