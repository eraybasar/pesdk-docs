---
layout: guides/ios/v3_6/content
title: &title Getting Started # title as shown in the menu and 
order: 1
menuitem: *title
platform:
  - ios
version:
  - v3_6
category: 
  - guide
  - introduction

tags: &tags # tags that are necessary
  - photo editor 

published: true # Either published or not 
---

# Gettings Started with the PhotoEditorSDK for ios

## Prerequisites

  * A text editor
  * Basic HTML / JavaScript knowledge
  * A web server

## Integrating the editor into your website

Integrating our editor into your web application is easy as pie:

  * Download the [latest release](https://github.com/imgly/pesdk-ios-build/releases/latest) from
    our public GitHub repository, extract it and copy the folders `assets`, `css` and `js` into your
    project folder.

  * In your HTML file, include the SDK and the UI JavaScript files as well as the editor's CSS files
    inside your `<head>` tag

    ```html
    <head>
      <script src="js/vendor/react.min.js"></script>
      <script src="js/vendor/react-dom.min.js"></script>
      <script src="js/PhotoEditorSDK.min.js"></script>
      <script src="js/PhotoEditorReactUI.min.js"></script>
      <link rel="stylesheet" href="css/PhotoEditorReactUI.min.css" />
    </head>
    ```

  * Now create a `<div>` that should contain the editor and give it a unique `id` so we can access
    it using JavaScript. The editor will take the size of the containing `<div>`. We're gonna specify
    the dimensions using inline styles, for the sake of simplicity:

    ```html
    <div id="editor" style="width: 640px; height: 480px;"></div>
    ```

  * To initialize the editor, instantiate the UI using JavaScript. Add the following code
    right below our containing `<div>` element:

    ```html
    <script>
      window.onload = function () {
        var container = document.getElementById('editor')
        var editor = new PhotoEditorSDK.UI.ReactUI({
          container: container,
          apiKey: 'YOUR_API_KEY, // <-- Please replace this with your API key
          assets: {
            baseUrl: '/assets' // <-- This should be the absolute path to your `assets` directory
          }
        })
      }
    </script>
    ```
  * Now run your webserver and open up your HTML file. You should see something like this:

    ![The Editor](http://static.photoeditorsdk.com/editor.png)

You can find a working demo integration [here](http://static.photoeditorsdk.com/demo/).
