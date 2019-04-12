---
layout: quickstarts/content
title: &title Ruby Gem # title as shown in the menu and 
description: Learn how to get started with the PhotoEditor SDK for HTML5 and Ruby on Rails and how to swiftly integrate the SDK into a Ruby on Rails project.
menuitem: *title
order: 0
category: 
  - quickstart
tags: &tags # tags that are necessary
  - photo editor 
  - html5
published: true
---

![Logo]({{ site.baseurl }}/assets/images/quickstarts/ruby_gem/logo.png){: height="150px" .center-image}

# Getting Started with our Ruby Gem

We created a Ruby gem for easily integrating the PhotoEditor SDK for HTML5 in any Ruby on Rails project. Just follow the steps and you'll get a fully fledged photo editor in your rails app.

>**WARNING**: The repository is not meant as a fully fledged Ruby Gem, but as a base for further development instead. 

### Setup the Rails asset pipeline

1. Reference Gem in your bundlers Gemfile. Open your `Gemfile` and insert
    ```ruby
    ...
    gem 'pesdk-html5-rails', :git => 'https://github.com/imgly/pesdk-ruby-gem-demo.git'
    ...
    ```

2. Register javascript with the Rails asset pipeline. Open `/assets/javascripts/application.js` and insert the following lines 
    ```javascript
    ...
    //= require react.production.min
    //= require react-dom.production.min
    //= require PhotoEditorSDK.min
    //= require PhotoEditorSDK.UI.ReactUI.min
    ...
    ```

3. Register stylesheets with the Rails asset pipeline.
Open `/assets/stylesheets/application.css` and insert the following lines
    ```css
    ...
    *= require PhotoEditorSDK.UI.ReactUI.min
    ...
    ```

    ### Initialize the editor 
    Create a custom javascript file or modify your `application.js` to initialize the PhotoEditor UI on window load as follows 

    ```javascript
    ...

    window.onload = function () {
      var license = 'license-string' // <- replace this with the content of your license file. The JSON-object needs to be in string format

      var container = document.getElementById('pesdk')  
      var editor = new PhotoEditorSDK.UI.ReactUI({
        container: container,
        license: license,
        assets: {
            baseUrl: '/assets', 
            resolver: function (path) { return path }
        }
      })
    }
    ...

    ```

    Now, put a `<div/>` element in the view 
    ```html
    ...
    <div id="pesdk"  style="width: 1024px; height: 768px;">
    ...
    ```

## Switch between React- and DesktopUI
In order to use the DesktopUI instead of the ReactUI, you need to make some changes to your setup. Replace in point ...

2.  `//= require PhotoEditorSDK.UI.ReactUI.min` with `//= require PhotoEditorSDK.UI.DesktopUI.min`
3.  `*= require PhotoEditorSDK.UI.ReactUI.min` with `*= require PhotoEditorSDK.UI.DesktopUI.min`
4.  `var editor = new PhotoEditorSDK.UI.ReactUI` with `var editor = new PhotoEditorSDK.UI.DesktopUI` in `home.js`
