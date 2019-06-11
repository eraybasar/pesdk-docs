---
layout: guides/content
title: &title FAQ # title as shown in the menu and 
description: A collection of frequently asked questions for the PhotoEditor SDK for Android including build exceptions, camera permission and known issues.
menuitem: *title
order: 0
platform: android
version: v6_5
platform: android
category: 
  - guide
  - resource
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

### App crash after install & launch of release build

This is most likely a proguard issue.
Please check your proguardFiles configuration to make sure you use the proguard-rules.pro delivered by your dependancies (also PESDK)

This is the most common way to prevent bugs!
For example
```
android {
    buildTypes {
        release {
            useProguard true
            minifyEnabled true
            shrinkResources true
            zipAlignEnabled true
            signingConfig android.signingConfigs.release
            proguardFiles getDefaultProguardFile('proguard-android'), 'proguard-rules.pro'
        }
    }
}
```
 
If this is not possible for any reason, you can see our configuration here. Make sure that you update them with every version, even with bugfix versions. 
```
# Keep Renderscript classes
-keep class android.support.v8.renderscript.** { *; }
-keep class androidx.renderscript.** { *; }

# Keep names for event class, otherwise the processor can't referance the classes.
-keepclasseswithmembers,allowshrinking class * { @ly.img.sdk.android.annotations.StateEvents *; }

# Keep names for event methods, otherwise the processor can't referance the methods.
-keepclassmembers class * { ly.img.android.pesdk.annotations.OnEvent <methods>; }

# Keep Annotaion, because of an issue with multiple processor rounds.
-keep class ly.img.android.pesdk.annotations.OnEvent { *; }

# Keep classes instantiated by reflactions using Class.forName(classNameString).
-keep public class * extends ly.img.android.pesdk.backend.operator.export.Operation
-keep public class * extends ly.img.android.pesdk.backend.operator.preview.GlOperation
-keep public class * extends ly.img.android.pesdk.backend.model.state.manager.StateObservable

# Keep decoder classes instantiated by reflection.
-keep class ly.img.android.pesdk.backend.decoder.** { *; }
-keepnames class ly.img.android.pesdk.backend.decoder.** { *; }

# Keep ThreadUtils class because of some wrong proaguard optimisations.
-keep class ly.img.android.pesdk.utils.ThreadUtils.** { *; }

# Keep annotaions accessed by reflections.
-keep class ly.img.android.pesdk.backend.model.constant.RevertStrategy { *; }

# Keep PESDKInit, accessed over reflections.
-keep class ly.img.android.PESDKInit { *; }

 # ----------------------------------------------------------------------------- #
# --- We need this roules to workaround a memory issue in the support libary. --- #
 # ----------------------------------------------------------------------------- #
-keep class android.support.graphics.drawable.VectorDrawableCompat {
    private android.support.graphics.drawable.VectorDrawableCompat$VectorDrawableCompatState mVectorState;
}
-keep class android.support.graphics.drawable.VectorDrawableCompat$VectorDrawableCompatState {
    android.graphics.Bitmap mCachedBitmap;
}

# Keep EventDispatcher classes. We need this because of multiple processor rounds.
# Otherwise proguard may optimize it to early, results in events not firing, which can lead to strange behavior.
-keep @ly.img.android.pesdk.annotations.EventDispatcher public class *
-keepnames @ly.img.android.pesdk.annotations.EventDispatcher public class *
-keepclassmembers @ly.img.android.pesdk.annotations.EventDispatcher public class * {
    public *;
}
```

### We get this build exception `Error:Failed to resolve: ly.img.android:authorization:6.0.0+`

Unfortunately, this is a bug in gradle and java

1. You have to trust both certificates with this command line commands
```
wget https://raw.githubusercontent.com/escline/InstallCert/master/InstallCert.java
javac InstallCert.java
java InstallCert artifactory.img.ly
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
