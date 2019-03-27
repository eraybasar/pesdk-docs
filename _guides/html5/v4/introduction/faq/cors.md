---
layout: guides/content
collection: guides
category:
  - guide
  - introduction
platform: html5
version: v4
tags: &tags # tags that are necessary
  - photo editor
published: true
faq: true
faq-category: errors
order: 0
title: CORS Setup
---

The following error messages indicate that the image you have passed to the SDK could not be loaded
due to Cross-Origin Resource Sharing (CORS):

* `Failed to execute 'texImage2D' on 'WebGLRenderingContext': The cross-origin image at [...] may not be loaded.`
* `SECURITY_ERR: DOM Exception 18`
* `Unable to get image data from canvas because the canvas has been tainted by cross-origin data.`

If you are loading images from external sources (e.g. from an AWS bucket), you need to first configure Cross-Origin Resource Sharing for __both__ the server and the image:

* If you're loading images from S3, make sure you created a CORS policy for your S3 bucket (More information [here](http://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html))
* If you're loading images from your own server, make sure the CORS header is set (More information [here](http://enable-cors.org/server.html))
* Make sure you enable CORS for the loaded image (More information [here](http://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html))