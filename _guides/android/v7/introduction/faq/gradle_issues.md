---
layout: guides/content
collection: guides
category:
  - guide
  - introduction
platform: android
version: v7
tags: &tags # tags that are necessary
  - photo editor
published: true
faq_v7: true
faq-category: errors
order: 1
title: Issue with Gradle plugin 3.4.0 and gradle 5.1.1
---

```
A problem was found with the configuration of task ':app:processEditorDisabledDebugAndroidTestManifest'.
> No value has been specified for property 'manifestOutputDirectory'.
```

Disabling the Gradle feature "Only sync the active variant".

In Android Studio: File > Settings > Experimental > Gradle => uncheck "Only sync the active variant" checkbox.