---
layout: guides/content
title: &title Getting Started
description: A quick guide on how to easily get started with PhotoEditor SDK for HTML5. Your kick-off to delight your users with top-notch editing capabilities.
order: 0
menuitem: *title
platform: html5
version: v5
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

## Integration

Integrating our editor into your web application is easy as pie. However, if you can't wait to see the editor in action you can find a working demo integration [here](https://www.photoeditorsdk.com/html5-demo).

<div class="documentation__disclaimer">
<h4 id="license-terms">Using a Trial License</h4>
Make sure you have a standard license before adding it properly to your running project. A trial license is valid for only 30 days and will afterwards disable the export function for your customers. Your trial license should therefore be removed and substituted by a standard license. More information can be found <a href="{{site.baseUrl}}/guides/html5/v5/introduction/faq/standard_or_trial_license">here</a>.
</div>

__Note:__ Since we're working with the latest web technologies, all code samples are using the
ECMAScript 6 standard. If you're using an older ECMAScript / JavaScript standard, please use
[Babel](http://babeljs.io/) to compile the examples to ES5.

PhotoEditor SDK can be integrated with just a few lines of code, any it comes with rich API, which allows for complete customization.

```js
import { UIEvent, PhotoEditorSDKUI } from 'photoeditorsdk'

const editor = await PhotoEditorSDKUI.init({
  container: '#editor',
  image: 'example.png', // relative to assets directory
  license: '<your_license_key>'
})
console.log('PhotoEditorSDK for Web is ready!')

```


Check out following guides for more examples.

1. [Parcel JS]({{site.baseurl}}/guides/html5/v5/guides/parcel-js)
2. [React JS]({{site.baseurl}}/guides/html5/v5/guides/react-js)
3. [Vue JS]({{site.baseurl}}/guides/html5/v5/guides/vue-js)
4. [Angular JS]({{site.baseurl}}/guides/html5/v5/guides/angular-js)
4. [Rails]({{site.baseurl}}/guides/html5/v5/guides/rails)

## Questions ?

This guide shows you how to integrate our editor into your own application. If you run into any error messages or other problems during this process or should you have further questions about the editor itself, then please take a look at our [FAQ]({{site.baseurl}}/guides/html5/v5/introduction/faq/overview) page, which offers answers to the most common questions and errors you might run into.

If the [FAQ]({{site.baseurl}}/guides/html5/v5/introduction/faq/overview) page doesn't answer your questions, please [contact us](https://support.photoeditorsdk.com) and we will be more than happy to help!

Moreover, if you are looking for examples with other JavaScript frameworks, visit the [demo]({{ site.baseurl }}/guides/{{page.platform | downcase }}/{{page.version | downcase}}/introduction/demos) listing page.