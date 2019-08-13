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
faq-category: general
order: 5
title: Activity transition animation
---

To add a transition animation between activities you have to define an animation style:
```
<style name="MyAnimation.Window" parent="@android:style/Animation.Dialog">
   <item name="android:windowEnterAnimation">@anim/transition_animation</item>
   <item name="android:windowExitAnimation">@anim/transition_animation</item>
</style>
```

This style uses a custom animation like the following (`transition_animation.xml`):
```
<?xml version="1.0" encoding="utf-8"?>
<set xmlns:android="http://schemas.android.com/apk/res/android">
    <alpha
        android:fromAlpha="0.1"
        android:toAlpha="1.0"
        android:duration="500"/>
</set>
```

Now you have to add the animation style to the theme you are using:
```
<item name="android:windowAnimationStyle">@style/MyAnimation.Window</item>
```
