---
layout: guides/content
title: &title FAQ # title as shown in the menu and
description: A collection of frequently asked questions for the PhotoEditor SDK for iOS including framework size, Swift, Delta updates, Bitcode and app thinning.
menuitem: *title
order: 0
platform: ios
version: v10
category:
  - guide
  - resource
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


## Library not loaded
If you see an issue like this one:
```bash
dyld: Library not loaded: @rpath/libswiftAVFoundation.dylib
  Referenced from: /Users/newmetl/Library/Developer/CoreSimulator/Devices/E2DE480D-05E4-47F7-9266-9598C787AA1F/data/Containers/Bundle/Application/7CA0CE63-7952-4EE5-92A4-81E85FCB7695/Test Integration.app/Frameworks/PhotoEditorSDK.framework/PhotoEditorSDK
  Reason: image not found
```
Please make sure, that the build setting `Always Embed Swift Standard Libraries` is set to `YES`.

## Framework size

At first sight the framework's size might seem very excessive with the `PhotoEditorSDK.framework` folder being more than 150 MB in size and the complete uncompressed `PhotoEditorSDK.zip` file being more than 230 MB in size. Of course it is true, that the PhotoEditor SDK adds quite a few MB to your app's size, due to the amount of features and assets it offers. However the actual size that your users will get differs a lot from what the above numbers might suggest. The following section explains what's included in the SDK and why it seems to be so large in size.

**tl;dr** In the average case the PhotoEditor SDK will add around 25 MB to your app.

### Architectures

The binary file of the PhotoEditor SDK includes slices for multiple architectures, namely i386, x64, armv7, and arm64. The slices for i386 and x64 are only used during development when you run your app in the iPhone simulator. When submitting your app to the App Store those slices will be removed from the binary automatically if you're using CocoaPods or followed our [manual integration guide]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/getting_started). Since each slice is a complete copy of the SDK's compiled source code, this step alone removes around 25 percent from the SDK's binary.

The remaining 75 percent are made up of the armv7 and arm64 slices, which also contain bitcode. Bitcode is a large, unoptimized, intermediate representation of a compiled binary. While you should in general upload the bitcode slices to Apple, your users will not have to download them when installing your app.

### Bitcode

Bitcode enables Apple to recompile your application on their servers, thus applying the best and latest compiler optimizations, without requiring you to resubmit or even maintain your app. Apple also uses bitcode to generate device specific, optimized versions of your app, so that your users only download what is actually necessary for their device. This process is called [App Thinning](https://help.apple.com/xcode/mac/current/#/devbbdc5ce4f) and has been available since iOS 9.

The actual final download and install size for each specific device can be seen in App Store Connect, if you click on "App Store File Sizes" after you selected a build in the "Activity" tab.

![App Store File Sizes]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/file-sizes.jpg)

If you do not want to include bitcode, you can remove bitcode from the compiled binary with the following command:

```bash
xcrun bitcode_strip -r PhotoEditorSDK -o PhotoEditorSDK
```

### Swift

Because the Swift ABI is not yet stable, each app that includes Swift bundles a version of the current Swift runtime. The PhotoEditor SDK is written in Swift and thus requires said Swift runtime to be included, even if you only use Objective-C in your own code. Unfortunately, the runtime adds a couple of megabytes to the App Store size. When the Swift binary interface stabilizes, the Swift runtime will become part of the host OS and this size increase of apps will no longer exist. Additionally Xcode 9 offers a new option to 'Strip Swift Symbols' when uploading a build to App Store Connect. This step will get rid of a few MB. 

Swift 4.1 also introduced a new compiler optimization mode called `-Osize`, which optimizes the generated binary for size with a minor speed tradeoff. Unfortunately there currently is a bug that leads to App Store Connect not accepting builds that include binaries built with that optimization mode when they also include bitcode. We've filed a bug report with Apple and will continue to build the binary with `-O` in the meantime.

### PhotoEditorSDK.bundle

All assets that are shipped with the SDK, including shaders, fonts, stickers, frames and overlays, are contained within the `PhotoEditorSDK.bundle`. The size of all assets is optimized as much as possible, but the bundle is still around 15 MB in size. If you do not require all assets that we ship with the SDK, you can delete those resources from the `PhotoEditorSDK.bundle` folder. Please note that those changes might be undone with an update of the SDK though and the SDK might not work as expected if you delete too much.

### dSYM and BCSymbolMaps

The `PhotoEditorSDK.zip` file also contains dSYM files and BCSymbolMaps. These files are very large and needed for crash log symbolication, but they will not be part of your application.

### GitHub

Because GitHub has a maximum file size limit of 100 MB, the PhotoEditor SDK binary can't be pushed to a GitHub hosted repository. To get around this issue, we suggest the following solutions, ordered from most to least preferred:

1. Use CocoaPods to integrate the SDK with the `Pods` folder added to your `.gitignore`. This way you don't commit the SDK to git, but engineers will have to run `pod install` before running the project.
2. Use [GitHub LFS](https://git-lfs.github.com) to commit the SDK.
3. Remove bitcode from the SDK's binary and commit the SDK.
4. (Advanced) Split the SDK's binary into multiple binaries for each architecture and combine them again as needed in a custom `Build Phase`.

## Swift compatibility

Swift's ABI is not yet stable, which means that a specific build of the SDK is bound to a specific build of Xcode. **In general the latest stable release of the PhotoEditor SDK requires the latest stable release of Xcode.** If you are required to use an older version of Xcode, you will unfortunately have to use an older version of the PhotoEditor SDK as well.

We update the SDK very quickly after a new release of Xcode, so that a matching build is usually available within a couple of days at most. In most cases we also offer prereleases of the SDK, which can be used with prereleases of Xcode. Those prereleases are then available on [GitHub](http://github.com/imgly/pesdk-ios-build/releases) and named after the Xcode prerelease they were built with. Unfortunately we can't distribute prereleases via CocoaPods.

## How do I get the source-code?
We have a full-source license. Please [contact us](https://www.photoeditorsdk.com/pricing#contact) for details.
