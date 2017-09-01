---
layout: guides/content
title: &title FAQ # title as shown in the menu and 

menuitem: *title
order: 0
platform: android
version: v5-beta
platform: android
category: 
  - guide
  - resource
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---


### I just use the editor, why does the app request permission to use the camera?

For an easier integration, our SDK has got its own `AndroidManifest.xml` which enables the camera
permission. This file will be merged with your `AndroidManifest.xml` where you can remove the
permission:

```xml
<manifest
   xmlns:android="http://schemas.android.com/apk/res/android"
   xmlns:tools="http://schemas.android.com/tools"
   ...>
    <uses-permission tools:node="remove" android:name="android.permission.CAMERA"/>
    <uses-feature tools:node="remove" android:name="android.hardware.camera"/>
    <uses-feature tools:node="remove" android:name="android.hardware.camera.autofocus"/>
    ...
```

### The App crashes with "Exception Renderscript V8 Class not found"

You probably forgot to enable RenderScript support (`renderscriptSupportModeEnabled true`). Please
take a look at the [getting started guide]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/getting_started) for more information.

### The App crashes with a "Permission Exception"

Please make sure that you delegate `onRequestPermissionsResult` to
`PermissionRequest.onRequestPermissionsResult`:

```java
@Override
public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
   PermissionRequest.onRequestPermissionsResult(requestCode, permissions, grantResults);
   super.onRequestPermissionsResult(requestCode, permissions, grantResults);
}
```

### App crashed on Android 6.0

This is probably happening due to a `Permission Exception` as explained above.
