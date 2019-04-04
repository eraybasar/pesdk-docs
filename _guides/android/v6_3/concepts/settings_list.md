---
layout: guides/content
title: &title Settings List # title as shown in the menu and 
description: Understanding the SettingsList and StateHandler
menuitem: *title
order: 0
platform: android
version: v6_3
category: 
  - guide
  - concept
tags: &tags # tags that are necessary
  - photo editor 
published: true # Either published or not 
---
The PhotoEditor SDK allows you to change all settings before starting or running the editor.
For this, there are two different Models the SettingsList and the StateHandler. Booth has internally a HashMaps that hold Settings and States (only the StateHandler)

Before you can start the Editor or Camera, you have to pass a [`SettingsList`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/backend/model/state/manager/SettingsList.html) to the [`PhotoEditorBuilder`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/activity/PhotoEditorBuilder.html) or the [`CameraPreviewBuilder`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/ui/activity/CameraPreviewBuilder.html) calling the method `setSettingsList(SettingsList settingsList)`.
While starting the Editor this [`SettingsList`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/backend/model/state/manager/SettingsList.html) and all holded settings classes are [parceled](https://developer.android.com/reference/android/os/Parcelable.html) into a bytestream.
After starting the Editor the parceled SettingsList is readed into a StateHandler.

The StateHandler is used internaly to modifying all settings and states. Modifiying settings on a [`Settings`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/backend/model/state/manager/Settings.html) class contained in the [`StateHandler`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/backend/model/state/manager/StateHandler.html) then trigger events to update the preview and change export.

To modify Settings you have to obtain a [`Settings`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/index.html?ly/img/android/pesdk/backend/model/state/manager/Settings.html) class by `getSettingsModel(Class<StateClass> stateClass)` the StateHandler avaliable while runtime has also a methode `getStateModel(@NonNull Class<StateClass> stateClass)` to get state classes (states are not parceld and only available while runtime)