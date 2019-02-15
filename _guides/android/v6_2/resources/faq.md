---
layout: guides/content
title: &title FAQ # title as shown in the menu and 
description: A collection of frequently asked questions for the PhotoEditor SDK for Android including build exceptions, camera permission and known issues.
menuitem: *title
order: 0
platform: android
version: v6_2
platform: android
category: 
  - guide
  - resource
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

### We get this build exception `Error:Failed to resolve: ly.img.android:authorization:6.0.0+`

Unfortunately, this is a bug in gradle and java

1. You have to trust both certificates with this command line commands
```
wget https://raw.githubusercontent.com/escline/InstallCert/master/InstallCert.java
javac InstallCert.java
java InstallCert artifactory.9elements.com
```

2. Navigate in the Console to your project folder and clear the gradle cache.
```
# On Mac & Linux
./gradlew cleanBuildCache
# On Windows
gradlew cleanBuildCache
```

3. Do a rebuild in Android Studio (Do it twice if the first build fails)

### I just use the editor, why does the app request permission to use the camera?

If this happen in v6 and above you have to remote the camera module in your gradle config

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
