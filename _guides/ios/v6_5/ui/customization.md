---
layout: guides/ios/v6_5/content
title: &title Customization # title as shown in the menu and 

menuitem: *title
order: 0
platform:
  - ios
version:
  - v6_5
category: 
  - guide
  - ui
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

# Customization

The PhotoEditor SDK can be customized to fit your needs. There are global settings to set things like
the background color of the app, but also closures that allow a in-depth customization.
Please note that by default the tint color determines the color of the icons.
Of course you are free to override that behaviour.

## Overview

The editor UI is divided in different sections. These can be customized using the `Configuration` class,
and its subsequent members as documented in the [configuration](/guides/ios/v6_5/features/configuration) section.

Some members like `backgroundColor` can be set globally, and if needed locally.
That means, that if you set the `backgroundColor` of the `Configuration` to black, all tools have that `backgroundColor`,
unless you set another `backgroundColor` in the specific tool configuration.
The following image annotates the most common configuration members.
Please note that the background color of tool bar,
which sits on the bottom, is set through a property of the `toolbarController`.

![Common members](/assets/images/ios/commonMembers.png)

## Using the closures

Most configuration objects offer closures to setup UI elements individually.
In that case they usually come with an array of actions that determines the available actions.
These closures will also have a `cell` and an `action` as parameters.
This is due that fact that most of our controllers use `UICollectionViews`.
For example, the main tool bar, presents all available actions, like filters, crop, orientation.
The closure is than called for each of these actions. So if you wish to change the crop button icon
you check the action type and set the image accordingly.

```swift
builder.configurePhotoEditorViewController { options in
    options.actionButtonConfigurationClosure = { cell, action in
        if action == .Crop {
            cell.imageView.image = ...
        }
    }

    options.actionButtonConfigurationClosure = { cell, action in
      cell.captionTintColor = UIColor.red
    }
}
```

## Changing icons

You can register a block using the `PESDK.bundleImageBlock` property which gets called once for each icon that is used by the SDK. The block is passed the name of the image and within the block you should return your desired icon for the given name. Please note that the icons that you return should have the same dimensions as the default icons to ensure the best user experience.
