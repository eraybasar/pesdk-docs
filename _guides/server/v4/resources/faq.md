---
layout: guides/content
title: &title FAQ # title as shown in the menu and
description: A collection of frequently asked questions for the PhotoEditor SDK for server including browser support, known CORS issues and supported file formats.
menuitem: *title
order: 0
platform: server
version: v4
category:
  - guide
  - resource
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

## CORS / Cross Origin Policy issues

The following error messages indicate that the image you have passed to the SDK could not be loaded
due to Cross-Origin Resource Sharing (CORS):

* `Failed to execute 'texImage2D' on 'WebGLRenderingContext': The cross-origin image at [...] may not be loaded.`
* `SECURITY_ERR: DOM Exception 18`
* `Unable to get image data from canvas because the canvas as been tainted by cross-origin data.`

In this case:

* If you're loading images from S3, make sure you created a CORS policy for your S3 bucket (More information [here](http://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html))
* If you're loading images from your own server, make sure the CORS header is set (More information [here](http://enable-cors.org/server.html))
* Make sure you enable CORS for the loaded image (More information [here](http://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html))



## Supported file formats

For stickers, frames and overlays as well as uploaded files, the supported file formats vary per browser. There's
a good and up-to-date list of supported file formats on [Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_web_browsers#Image_format_support).
Basically, the best formats to use are JPEG and PNG.

Due to browser limitations, PhotoEditorSDK for server can only export to JPEG and PNG.
