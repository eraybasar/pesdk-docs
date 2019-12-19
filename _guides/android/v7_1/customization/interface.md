---
layout: guides/content
title: &title Interface # title as shown in the menu and

menuitem: *title
order: 1
platform: android
version: v7_1
category:
  - guide
  - customization
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

The user interface can be customized in various ways with increasing complexity.

​All resource and style identifier can be overwritten. They have the prefix: `imgly_` e.g. `Imgly.`
​

### Change Layout

If you want to change the order of the ActionBar Buttons, you can open the `imgly_widget_actionbar.xml` in the layout editor and simply change the order of the xml elements.

> __Warning:__ Do NOT change layout IDs or element types (extensions of a type are fine), otherwise the app will crash with a `NullPointer` or a `TypeCast` exception!

If you want to change the ActionBar Button Style go to the specific Element, hold down the Command Key and click on the style attribute value `@style/Imgly.Editor.Header.Button.AcceptButton`
The Editor now jumps in the specific Style element in the `imgly_style.xml` file.
Now you can edit all style attributes. It's also possible to override the style attributes directly in the element node.

![Edit style]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/imgly_edit_style.png){: width="800px"}

If you want text instead of icons in the `ActionBar`, change the tag name in the button’s XML layout from `ly.img.android.pesdk.ui.widgets.buttons.AcceptButton` to `ly.img.android.pesdk.ui.widgets.buttons.AcceptTextButton`. The same works for the Cancel button, just use `ly.img.android.pesdk.ui.widgets.buttons.CancelTextButton`.
The styling for the buttons may look like the following example.

```xml
<ly.img.android.pesdk.ui.widgets.buttons.AcceptTextButton
    android:id="@+id/acceptButton"
    android:layout_width="wrap_content"
    android:layout_height="match_parent"
    android:gravity="center_vertical"
    android:textSize="12sp"
    android:textColor="@color/imgly_editor_text_color"
    android:background="@drawable/imgly_button"
    android:padding="8dp" />
```
