---
layout: guides/content
title: &title Frames # title as shown in the menu and 
description: The PhotoEditor SDK for Android provides a quick and easy way for adding frames to any creative. Learn how to add custom frame assets to the library.
menuitem: *title
order: 9
platform: android
version: v5
category: 
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

![{{page.title}} tool]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/{{page.title | downcase}}.jpg){: height="400px" .center-image}

The PhotoEditor SDK includes a versatile frame tool that works with any given photo size or ratio and provides two distinct options to apply frames. For the dynamic frames tool that works perfectly for creatives with repeatable or stretchable areas, we abandoned the 9-patch standard and replaced it with a novel and even more flexible 12-patch layout. The static frames tool can be used for complex and irregular creatives.

The tool is implemented in the [`FrameEditorTool`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/sdk/tools/FrameEditorTool.html) class and displayed using the [`FrameToolPanel`]({{site.baseurl}}/apidocs/{{page.platform}}/{{page.version}}/ly/img/android/ui/panels/FrameToolPanel.html). If you want to customize the appearance of this tool, take a look at the [styling]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/concepts/styling) section.

## Dynamic frames

Dynamic frames consist of four groups. Each group has a start, middle and end image. The start and end images are optional,
and for the middle image there are two modes, `FrameTileMode.repeat` and `FrameTileMode.stretch`. These determine whether the asset should be stretched over the area,
or if they should be repeated to fill up space. Please note that in our implementation the middle asset will never be cut, when `.repeat` is set
as its mode, but rather squeeze or stretch the single tiles a bit, to fit in only complete copies of the asset.
The four groups can be laid out in two ways. Horizontal inside or vertical inside, see the images below.


![frame inside]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/frame_inside.png){: height="150px" .center-image }

The idea behind the naming is, that if you imagine a box that covers the right and left groups and the top and bottom groups surrounding it,
the horizontal box is inside the groups, as illustrated by the following image.

![frame horizontal]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/horizontalFrame.png){: height="150px" .center-image }

Finally, let's have a look at a real-world example.

![dia sample]({{ site.baseurl }}/assets/images/guides/{{page.platform}}/{{page.version}}/dia_sample.png){: height="300px" .center-image }

The layout mode here is horizontal inside. The top and bottom group just have a middle image, containing the film strip pattern.
The left and right group consist of a stretched border texture, and a start and end image to create a nice transition between the two sides of the film strip.

## Adding dynamic frames

In order to change the available frames, rearrange or add new frames, start with a default `PESDKConfig` as described in the [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/configuration) section. Then use the `setFrameConfig()` method to update the configuration.

> Please make sure you put the PNG files into the `res/raw` **or** the `res/drawable-nodpi` folder, otherwise the frame is scaled by Android.

For dynamic frames each `FrameConfig` takes the following five parameters:

1. Frame identifier, this should be unique. It is currently used for serialization only
2. Resource identifier of the frame name, which should be unique. Will not be displayed in the default layout, but is used for accessibility
3. `Drawable` resource or `ImageSource` of the icon
4. Custom patch model, which describes the 12-patch layout
5. Frame thickness, which is between > 0 and 1 \(100%\) 

Each `CustomPatchFrameConfig` takes the following 5 parameters:

1. `FrameLayoutMode`, which describes the orientation \(`HorizontalInside` or `VerticalInside`\)
2. Top `FrameImagGroup`
3. Left `FrameImagGroup`
4. Right `FrameImagGroup`
5. Bottom `FrameImagGroup`

Each `FrameImageGroup` takes the following 4 parameters:

1. \(Optional\) Start image tile `ImageSource`
2. Middle tile `ImageSource`
3. `FrameTileMode` of the middle tile \(`Stretch` or `Repeat`\)
4. \(Optional\) End image tile `ImageSource`

A dynamic frame configuration could then look like this:

```java
//Internal frame
config.setFrameLists (
  FrameConfig.createNonFrameConfig(R.string.imgly_frame_name_none, R.drawable.imgly_icon_option_frame_none),
  new FrameConfig(
    "your_unique_frame_ID_1",
    R.string.imgly_frame_name_dia,
    R.drawable.imgly_frame_dia_thumb,
    new CustomPatchFrameConfig(
      FrameLayoutMode.HorizontalInside,
      new FrameImageGroup(ImageSource.create(R.drawable.imgly_frame_dia_top), FrameTileMode.Repeat),
      new FrameImageGroup(
        ImageSource.create(R.drawable.imgly_frame_dia_top_left),
        ImageSource.create(R.drawable.imgly_frame_dia_left), FrameTileMode.Stretch,
        ImageSource.create(R.drawable.imgly_frame_dia_bottom_left)
      ),
      new FrameImageGroup(
        ImageSource.create(R.drawable.imgly_frame_dia_top_right),
        ImageSource.create(R.drawable.imgly_frame_dia_right), FrameTileMode.Stretch,
        ImageSource.create(R.drawable.imgly_frame_dia_bottom_right)
      ),
      new FrameImageGroup(ImageSource.create(R.drawable.imgly_frame_dia_bottom), FrameTileMode.Repeat)
    ),
    0.075f
));

//External frame
config.setFrameLists (
  FrameConfig.createNonFrameConfig(R.string.imgly_frame_name_none, R.drawable.imgly_icon_option_frame_none),
  new FrameConfig(
    "your_unique_frame_ID_2",
    "Your external frame PNG",
    "Your external frame thumb PNG",
      new CustomPatchFrameConfig(
        FrameLayoutMode.VerticalInside,
        new FrameImageGroup(ImageSource.create(Uri.parse("https://content.mydomain/frames/flower_top.png")), FrameTileMode.Repeat),
        new FrameImageGroup(
          ImageSource.create(Uri.parse("https://content.mydomain/frames/flower_top_left.png")),
          ImageSource.create(Uri.parse("https://content.mydomain/frames/flower_left.png")), FrameTileMode.Stretch,
          ImageSource.create(Uri.parse("https://content.mydomain/frames/flower_bottom_left.png"))
        ),
        new FrameImageGroup(
          ImageSource.create(Uri.parse("https://content.mydomain/frames/flower_top_right.png")),
          ImageSource.create(Uri.parse("https://content.mydomain/frames/flower_right.png")), FrameTileMode.Stretch,
          ImageSource.create(Uri.parse("https://content.mydomain/frames/flower_bottom_right.png"))
        ),
        new FrameImageGroup(ImageSource.create(Uri.parse("https://content.mydomain/frames/flower_bottom.png")), FrameTileMode.Repeat)
    ),
    0.1f
));
```

## Static frames

Static frames hold several versions of the assets, i.e. one for each supported ratio. During the rendering process, the best fitting asset will be selected and used by the backend. Also, the tolerance can be used to determine how close the ratio of the asset has to be to the current image ratio. Setting a higher tolerance can lead to a deformation of the frame asset since it will be simply scaled to match the image dimensions. In the frame tool UI, only static frames with a matching asset for the current image ratio will be listed. The static frames can be used for complex and irregular creatives.

## Adding static frames

For static frames each `FrameConfig` takes the following six parameters:

1. Frame identifier, this should be unique. It is currently used for serialization only
2. Resource identifier of the frame name, which should be unique. Will not be displayed in the default layout, but is used for accessibility
3. `Drawable` resource of the icon
4. `Drawable` resource of the frame
5. Aspect ratio to which the frame corresponds
6. Group number to identifiy an equal frame with different aspect ratios. If the crop aspect changed the unfitting frame are replaced with a frame that fit the aspect and has the same group id.

A static frame configuration could then look like this:

```java
config.setFrameLists (
  FrameConfig.createNonFrameConfig(R.string.imgly_frame_name_none, R.drawable.imgly_icon_option_frame_none),
  new FrameConfig(
    "your_unique_frame_ID_1",
    R.string.imgly_frame_name_dia,
    R.drawable.imgly_frame_dia_thumb,
    R.drawable.imgly_frame_dia,
    new CropAspectConfig(16, 9),
    1
  ),
  ...
);
```