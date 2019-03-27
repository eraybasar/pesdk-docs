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
published: false
faq: true
faq-category: general
order: 4
title: 
---

Unlike all other features, within the transform tool, saving will not apply automatically. The saving will only apply once the customer has decided for the right crop ratio and goes back or exports the image.

The reason behind this is simple: If the customer clicks on the first crop ratio option and wants to change the radius to a smaller one and it automatically saves, the original image is gone and only the little excerpt is left. 

If the customer then decides he'd actually like to have another crop ratio, he has to reset everything and reload the image and start from the beginning. Customers often try out until they reach the result they want and with the transform this only works if the chosen option is applied at the very end. Therefore, this action has to be triggered by the customer ending his trying out by pressing the going back button in the ReactUI. Here, one can decide to add the apply button to emphasize the "saving aspect" or simply use the current UI.