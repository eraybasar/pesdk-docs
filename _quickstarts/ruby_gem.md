---
layout: quickstarts/content
title: &title Ruby Gem # title as shown in the menu and 

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
    //= require react
    //= require react-dom
    //= require PhotoEditorSDK.min
    //= require PhotoEditorReactUI.min
    ...
    ```

3. Register stylesheets with the Rails asset pipeline.
Open `/assets/stylesheets/application.css` and insert the following lines
    ```css
    ...
    *= require PhotoEditorReactUI
    ...
    ```

    ### Initialize the editor 
    Create a custom javascript file or modify your `application.js` to initialize the PhotoEditor UI on window load as follows 

    ```javascript
    ...

    window.onload = function () {
      var apiKey = 'your-api-key', // <-- Please replace this with your API key

      var container = document.getElementById('pesdk')  
      var editor = new PhotoEditorSDK.UI.ReactUI({
        container: container,
        apiKey: apiKey,
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
