---
layout: guides/content
title: &title FAQ # title as shown in the menu and 

menuitem: *title
order: 0
platform: android
version: v3_1
platform: android
category: 
  - guide
  - resource
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

### We get this build exception `Error:Failed to resolve: ly.img.android:authorization:3.0.0.12+`

Unfortunatly, this is a bug in gradle and java

1. You have to trust both certificates with this commandline commands

```wget https://raw.githubusercontent.com/escline/InstallCert/master/InstallCert.java```

```javac InstallCert.java````

```java InstallCert artifactory.9elements.com```````

2. Navigate in the Console to you project folder and clear the gradle cache.

On Mac & Linux
`./gradlew cleanBuildCache`

On Windows
`gradlew cleanBuildCache`

3. Do a rebuild an Android Studio (Do it twice if the first build fail)

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
