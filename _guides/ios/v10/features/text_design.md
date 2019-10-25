---
layout: guides/content
title: &title Text Design # title as shown in the menu and
description: The PhotoEditor SDK for iOS ships with a robust Text Design Tool that merges input text with typography, creating stunning designs for a multitude of use-cases. 
menuitem: *title
order: 9
platform: ios
version: v10
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/text_design.jpg){: height="400px" .center-image}

The Text Design Tool merges input text with typography, creating stunning designs for a multitude of use-cases. The tool lays out input text according to recipes crafted by professional designers upon a single tap. Furthermore, the creative can then be fine-tuned by choosing from 15 different text colors or by using the randomize functionality that shuffles the fonts, alignments and decorations. It’s even possible to create a mask that lets the background image shine through.

The tool is implemented in the `TextDesignToolController` class for adding a text design and in the `TextDesignOptionsToolController` class for modifying and updating an added text design. It can be configured using the [`TextDesignToolControllerOptions`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/TextDesignToolControllerOptions.html) and [`TextDesignOptionsToolControllerOptions`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/TextDesignOptionsToolControllerOptions.html). For more details take a look at the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section.

## Adding and removing available Text Designs

Version 8 of the SDK currently does not support creating custom text design layouts. However you can choose which text design layouts are available to your users and their ordering by updating the `TextDesign.all` array. The default implementation contains all available layouts, i.e.:

{% capture first_snippet %}
Swift
---
```swift
let textDesigns: [TextDesign] = [
  TextDesignBlocks(),
  TextDesignRotated(),
  TextDesignBlocksLight(),
  TextDesignEqualWidth(),
  TextDesignMasked(),
  TextDesignCelebrate(),
  TextDesignSunshine(),
  TextDesignMaskedBadge(),
  TextDesignBlocksCondensed(),
  TextDesignCelebrateSimple(),
  TextDesignEqualWidthFat(),
  TextDesignWatercolor(),
  TextDesignParticles(),
  TextDesignMaskedSpeechBubble(),
  TextDesignMaskedSpeechBubbleComic(),
  TextDesignMultiline()
]

TextDesign.all = textDesigns
```
{% endcapture %}

{% capture second_snippet %}
Objective-C
---
```objc
NSArray<PESDKTextDesign *> *textDesigns = @[
  [[PESDKTextDesignBlocks alloc] init],
  [[PESDKTextDesignRotated alloc] init],
  [[PESDKTextDesignBlocksLight alloc] init],
  [[PESDKTextDesignEqualWidth alloc] init],
  [[PESDKTextDesignMasked alloc] init],
  [[PESDKTextDesignCelebrate alloc] init],
  [[PESDKTextDesignSunshine alloc] init],
  [[PESDKTextDesignMaskedBadge alloc] init],
  [[PESDKTextDesignBlocksCondensed alloc] init],
  [[PESDKTextDesignCelebrateSimple alloc] init],
  [[PESDKTextDesignEqualWidthFat alloc] init],
  [[PESDKTextDesignWatercolor alloc] init],
  [[PESDKTextDesignParticles alloc] init],
  [[PESDKTextDesignMaskedSpeechBubble alloc] init],
  [[PESDKTextDesignMaskedSpeechBubbleComic alloc] init],
  [[PESDKTextDesignMultiline alloc] init]
];

PESDKTextDesign.all = [textDesigns copy];
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-TEXTDESIGN{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}
