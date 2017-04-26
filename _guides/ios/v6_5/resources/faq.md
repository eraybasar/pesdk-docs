---
layout: guides/ios/v6_5/content
title: &title FAQ # title as shown in the menu and 

menuitem: *title
order: 0
platform: ios
version: v6_5
category: 
  - guide
  - resource
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

# Frequently Asked Questions

## Library not loaded
If you see an issue like this one:
```bash
dyld: Library not loaded: @rpath/libswiftAVFoundation.dylib
  Referenced from: /Users/newmetl/Library/Developer/CoreSimulator/Devices/E2DE480D-05E4-47F7-9266-9598C787AA1F/data/Containers/Bundle/Application/7CA0CE63-7952-4EE5-92A4-81E85FCB7695/Test Integration.app/Frameworks/imglyKit.framework/imglyKit
  Reason: image not found
```
Then make sure, that the build setting `Embedded Content Contains Swift Code` is set to `YES`.


## How do I get the source-code ?
We have a full-source license. Please [contact us](https://www.photoeditorsdk.com/pricing#contact) for details.

## Framework Size

You might be wondering why the `imglyKit.framework` folder is over 60 MB large. This can be irritating at first, however this is not the size that your users will get.

The PhotoEditor SDK includes many UI components, lookup tables and fonts. This results in a lot of code and thus a sizable binary, although there are certain factors that make it appear larger than it actually is. We’re working hard to ensure the framework size stays as low as possible.

### Architectures

The SDK binary includes slices for i386, x64, armv7 and arm64. For armv7 and arm64, bitcode is included as well — which basically results in 6 different slices. ([Learn more about bitcode here](https://www.photoeditorsdk.com/documentation/ios/faq#bitcode)) Each slice is a full and complete copy of the SDK, and only one slice is required for your users. During archiving Xcode ensures that the Simulator slices (i386, x64) are stripped away from our SDK, resulting in a significant size reduction.

Bitcode is a large size contributor. As bitcode is unoptimized code in a generic format, it takes up a lot of space. Since Bitcode is not architecture independent, slices are emitted for both armv7 and arm64. These slices are rather large, more than 8MB per slice, so support for bitcode alone is about 16 MB.

### App Thinning

Apple also actively works on reducing app binary size, and added [App Thinning](https://developer.apple.com/library/tvos/documentation/IDEs/Conceptual/AppDistributionGuide/AppThinning/AppThinning.html) in iOS 9. This creates optimized versions of your app and the user only downloads the architecture that is required for the current device. This also strips away bitcode, resulting in a total SDK footprint of about 10-20 MB.

Caveat: This only works for iOS 9. Your iOS 8 users will get the binary with both architectures and bitcode. This is a temporary problem that will go away once iOS 8 is no longer supported. We can provide a variant of the framework without bitcode on request.

### imglyKit.bundle

The PhotoEditor SDK needs various images and localization files, which are distributed in the imglyKit.bundle folder. This adds about 10 MB to your application. Images are highly optimized to take up as little space as possible. You could remove images that are not needed, but there is a risk you might delete too much.

### Swift

Because the Swift ABI is not yet stable, each app that includes Swift bundles a version of the current Swift runtime. The PhotoEditor SDK is written in Swift and thus requires said Swift runtime to be included, even if you only use Objective-C in your own code. Unfortunately the runtime adds roughly another 10 MB to the App Store size. When the Swift binary interface stabilizes, the Swift runtime will become part of the host OS and this size increase of apps will no longer exist.

### Delta Updates

Since iOS 7, Apple has been using [delta updates on the App Store](https://developer.apple.com/library/ios/qa/qa1779/_index.html) so updates don’t download files in the application bundle that have not changed. The PhotoEditor SDK is a dynamic framework, which means our framework will not be downloaded again if your app update does not update the PhotoEditor SDK itself.

### Reducing the Size of Your App

Apple has a [Q&A article with various ways to reduce the size of your application](https://developer.apple.com/library/ios/qa/qa1795/_index.html). Most noticeable is the Fastest, Smallest [-Os] Optimization Level and enabling Strip Debug Symbols During Copy.

We recommend using [ImageOptim](https://imageoptim.com/) to reduce the size of your images. Applications like Adobe Photoshop save a lot of additional metadata in file formats such as PNG, and ImageOptim is very good for both removing such metadata and reducing image size by up to 90%. There is an [interesting case study](https://imageoptim.com/tweetbot.html) where using ImageOptim halved the size of Tweetbot.

We recommend archiving your app then [inspecting the final .ipa](http://osxdaily.com/2011/04/07/extract-and-explore-an-ios-app-in-mac-os-x/). Sometimes files end up in the application that should not be there, and a simple check can find files that are being accidentally copied for release.

You can [view the .ipa contents sorted by compressed size](http://clearquot.es/blog/slimming-down-your-app) using

```bash
zipinfo -l path/to/app.ipa | sort -nr -k 6
```

which allows you to quickly identify which files take up the most space in the compressed .ipa.

## Bitcode

Bitcode is an intermediate representation of a compiled binary. Including bitcode will allow Apple to re-optimize your app binary in the future without the need to submit a new version of your app to the store. The PhotoEditor SDK contains bitcode slices since version 3. Bitcode is also one of the largest factors in the [size of our SDK](https://www.photoeditorsdk.com/documentation/ios/faq#framework-size).

### Checking for Bitcode

Open a terminal and navigate into the `imglyKit.framework` folder.

Here is how to check what architectures are available:

```bash
$ lipo -info imglyKit
Architectures in the fat file: imglyKit are: x86_64 i386 armv7 arm64
```

Check if bitcode exists for a particular slice:

```bash
$ otool -arch arm64 -l imglyKit | grep LLVM
  segname __LLVM
  segname __LLVM

$ otool -arch armv7 -l imglyKit | grep LLVM
  segname __LLVM
  segname __LLVM
```
Some articles will recommend searching for `bitcode`. However, LLVM is a much better indicator for the existance of bitcode.

### Stripping Bitcode
Xcode 7.2 added a new tool called `bitcode_strip` that allows to remove bitcode chunks from binaries:

```bash
$ xcrun bitcode_strip -r imglyKit -o imglyKit
```

Removing bitcode will disallow Apple to run binary optimizations on your behalf. You can verify that it worked by checking the file size, which should be significantly smaller than the original file, or use `otool` as listed above.

### Learn More
* [Apple Documentation on App Thinning and Bitcode](https://developer.apple.com/library/tvos/documentation/IDEs/Conceptual/AppDistributionGuide/AppThinning/AppThinning.html)
* [Bitcode Demystified](http://lowlevelbits.org/bitcode-demystified/)
* [Why I’m not enabling Bitcode](https://medium.com/@FredericJacobs/why-i-m-not-enabling-bitcode-f35cd8fbfcc5#.u7lci0car)
