---
layout: guides/content
title: &title Getting started
description: A quick guide on how to easily get started with the PhotoEditor SDK for HTML5. Your kick-off to delight your users with top-notch editing capabilities.
order: 1
menuitem: Getting Started
platform: html5
version: v4
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---


Integrating our editor into your web application is easy as pie. However, if you can't wait  to see the editor in action you can find a working demo integration [here](https://www.photoeditorsdk.com).


First, download the [latest release](https://github.com/imgly/pesdk-html5-build/releases/latest) from our public GitHub repository and extract it.
Afterwards, you will be left with the following folder structure

```bash
├── assets
│   ├── brushes
│   ├── filters
│   ├── fonts
│   ├── frames
│   ├── overlays
│   ├── stickers
│   └── ui
├── css
└── js
    └── vendor
```

The package contains three folders that you need to integrate to your project.
1. `assets` folder: It contains all assets required for the PhotoEditor, this includes for example assets for *frames*, *stickers* and the *ui*.
1. `css` folder: It contains all *stylesheets* for the PhotoEditor SDK UI.
1. `js` folder: It contains all *javascript* sources of the PhotoEditor and its dependencies.

In order to get started, copy the folders `assets`, `css` and `js` into your project.
Then include the SDK and the UI JavaScript files in your as well as the CSS files inside your `<head>` tag:

{% capture first_snippet %}
DesktopUI
---
```html
<head>
  <!-- React Dependencies for the SDK UI -->
  <script src="js/vendor/react.production.min.js"></script>
  <script src="js/vendor/react-dom.production.min.js"></script>
  <!-- PhotoEditor SDK-->
  <script src="js/PhotoEditorSDK.min.js"></script>
  <!-- PhotoEditor SDK UI -->
  <script src="js/PhotoEditorSDK.UI.DesktopUI.min.js"></script>
  <link rel="stylesheet" href="css/PhotoEditorSDK.UI.DesktopUI.min.css" />
</head>
```
{% endcapture %}

{% capture second_snippet %}
ReactUI
---
```html
<head>
  <!-- React Dependencies for the SDK UI -->
  <script src="js/vendor/react.min.js"></script>
  <script src="js/vendor/react-dom.min.js"></script>
  <!-- PhotoEditor SDK-->
  <script src="js/PhotoEditorSDK.min.js"></script>
  <!-- PhotoEditor SDK UI -->
  <script src="js/PhotoEditorReactUI.min.js"></script>
  <link rel="stylesheet" href="css/PhotoEditorReactUI.min.css" />
</head>
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

Now, create a `<div>` tag as a container for the editor. The editor will adapt its size according to the dimensions of the container.
For the sake of simplicity, specify the dimensions using inline styles:

```html
<div id="editor" style="width: 100vw; height: 100vh;"></div>
```

Finally, in order to initialize the editor, instantiate the UI using JavaScript. Add the following code right below our containing `<div>` element:


{% capture first_snippet %}
DesktopUI
---
```html
<script>
  window.onload = function () {
    var image = new Image()
    image.onload = function () {
        var container = document.getElementById('editor')
        var editor = new PhotoEditorSDK.UI.DesktopUI({
        container: container,
        // Please replace this with your license: https://www.photoeditorsdk.com/dashboard/subscriptions
        license: '{"owner":"Imgly Inc.","version":"2.1", ...}',
        editor: {
          image: image
        },
        assets: {
          // This should be the absolute path to your `assets` directory
          baseUrl: '/assets'
        }
      })
    }
    // image.crossOrigin = 'Anonymous'  // Setup CORS accordingly if needed
    image.src = './example.jpg'
  }
</script>
```
{% endcapture %}

{% capture second_snippet %}
ReactUI
---
```html
<script>
  window.onload = function () {
    var container = document.getElementById('editor')
    var editor = new PhotoEditorSDK.UI.ReactUI({
      container: container,
      // Please replace this with your license; https://www.photoeditorsdk.com/dashboard/subscriptions
      license: '{"owner":"Imgly Inc.","version":"2.1", ...}',
      assets: {
        // This should be the absolute path to your `assets` directory
        baseUrl: '/assets'
      }
    })
  }
</script>
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-02{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

<div class="important-notice">
<h4 id="cors">CORS</h4> 
If you are loading images from external sources (e.g. from an AWS bucket), you need to first configure <b>Cross-Origin Resource Sharing</b> for both the server and the image. <br><br>
Otherwise, you will see errors such as <br>
<b><em>Failed to execute 'texImage2D' on 'WebGLRenderingContext': The cross-origin image at [...] may not be loaded.</em></b> <br>
or <br>
<b><em> Unable to get image data from canvas because the canvas has been tainted. </em></b> <br>
<br>
Please follow the instructions on how to properly configure CORS <a href="https://docs.photoeditorsdk.com/guides/html5/v4/introduction/faq/how-do-i-setup-cors">here</a>.
</div>

This was all required to get the PhotoEditor SDK up and running. For simplicity here is the whole source code of  the *html* file:

{% capture first_snippet %}
DesktopUI
---
```html
<!DOCTYPE html>
<html>
  <head>
    <!-- React Dependencies for the SDK UI -->
    <script src="js/vendor/react.production.min.js"></script>
    <script src="js/vendor/react-dom.production.min.js"></script>
    <!-- PhotoEditor SDK-->
    <script src="js/PhotoEditorSDK.min.js"></script>
    <!-- PhotoEditor SDK UI -->
    <script src="js/PhotoEditorSDK.UI.DesktopUI.min.js"></script>
    <link rel="stylesheet" href="css/PhotoEditorSDK.UI.DesktopUI.min.css" />
  </head>

  <body>
    <div id="editor" style="width: 100vw; height: 100vh;"></div>
    <script>
      window.onload = function () {
        var image = new Image()
        image.onload = function () {
            var container = document.getElementById('editor')
            var editor = new PhotoEditorSDK.UI.DesktopUI({
            container: container,
            // Please replace this with your license: https://www.photoeditorsdk.com/dashboard/subscriptions
            license: '{"owner":"Imgly Inc.","version":"2.1", ...}',
            editor: {
              image: image
            },
            assets: {
              // This should be the absolute path to your `assets` directory
              baseUrl: '/assets'
            }
          })
        }
        // image.crossOrigin = 'Anonymous'  // Setup CORS accordingly if needed
        image.src = './example.jpg'
      }
    </script>
  </body>
</html>
```
{% endcapture %}

{% capture second_snippet %}
ReactUI
---
```html
<!DOCTYPE html>
<html>
  <head>
    <!-- React Dependencies for the SDK UI -->
    <script src="js/vendor/react.production.min.js"></script>
    <script src="js/vendor/react-dom.production.min.js"></script>
    <!-- PhotoEditor SDK-->
    <script src="js/PhotoEditorSDK.min.js"></script>
    <!-- PhotoEditor SDK UI -->
    <script src="js/PhotoEditor.UI.ReactUI.min.js"></script>
    <link rel="stylesheet" href="css/PhotoEditorSDK.UI.ReactUI.min.css" />
  </head>

  <body>
    <div id="editor" style="width: 100vw; height: 100vh;"></div>
    <script>
      window.onload = function () {
        var container = document.getElementById('editor')
        var editor = new PhotoEditorSDK.UI.ReactUI({
          container: container,
            // Please replace this with your license: https://www.photoeditorsdk.com/dashboard/subscriptions
            license: '{"owner":"Imgly Inc.","version":"2.1", ...}',
          assets: {
            // This should be the absolute path to your `assets` directory
            baseUrl: '/assets'
          }
        })
      }
    </script>
  </body>
</html>
```
{% endcapture %}

{% assign snippets = "" | split: "" | push: first_snippet | push: second_snippet %}
{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-03{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

Launch your favorite webserver and enjoy our editor. If you don't know which webserver to use, give `python -m SimpleHTTPServer 8000`` a try.


In any case, you can find a working demo integration [here](https://www.photoeditorsdk.com).
