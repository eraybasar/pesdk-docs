---
layout: guides/content
title: &title Transform # title as shown in the menu and 

menuitem: *title
order: 3
platform: ios
version: v6
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}


Our transform tool unifies cropping, flipping and rotation operations in one feature. The PhotoEditor SDK holds various preset crop ratios (e.g. 16:9) that can easily be complemented by any crop ratio you deem necessary.

The tool is implemented in the `TransformToolController` class and can be customized using the [`TransformToolControllerOptions`]({{ site.baseurl }}/apidocs/{{page.platform}}/{{page.version}}/Classes/TransformToolControllerOptions.html) as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section. By modifying these options, you may customize the available transform actions and crop aspect ratios by adding or removing `CropAspect` and `TransformAction` objects from or to the corresponding arrays. All sliders and buttons can be customized as well. In order to disable free cropping and force the use of one of the available aspect ratios, set the `allowFreeCrop` property to `true`.


In order to force your users to crop their image to one of the available crop ratios, you can use the `PhotoEditViewControllerOptions` to configure the editor accordingly:

```swift
let configuration = Configuration { builder in
    builder.configureTransformToolController { options in
        options.allowFreeCrop = false
        options.allowedCropRatios = [
            CropAspect(width: 1, height: 1, localizedName: "Square", rotatable: false),
            CropAspect(width: 3, height: 2, localizedName: "Landscape", rotatable: false),
            CropAspect(width: 2, height: 3, localizedName: "Portrait", rotatable: false),
        ]
    }
    builder.configurePhotoEditorViewController { options in
        options.forceCropMode = true
    }
}
let sampleImage = UIImage(named: "sample_image")
let photoEditViewController =  PhotoEditViewController(photo: sampleImage!, configuration: configuration)
```

