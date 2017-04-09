---
layout: article
title: &title Example Article # title as shown in the menu and 
order: 0 # the order of the
categories: 
  - html5
  - android 
  - ios # One of the categories
tags: &tags # tags that are necessary
  - photo editor 
  - creative editor
meta: 
  title: *title      title for the meta tags,
  image: /assets/meta_image.jpg
  description: &description "blub blub"
  keywords: *tags   
  og: 
    title: *title,
    description: *description,
    type: 'website',
    image: *image
published: false # Either published or not 
---


# Search and Select (see layer)
- Searchbar 
- Platform select
- Version select 

# PhotoEditor SDK Index

- [Guides](/guides)
   - [Html5](/guides/html5/latest)
   - [iOs](/guides/ios/latest)
   - [Android](/guides/android/latest)

-  [Api Docs](/api)
   - [Html5](/api/html5/latest)
   - [iOs](/api/ios/latest)
   - [Android](/api/android/latest)
   
- [Quickstarts](/quickstarts)
  - [React Native](/quickstarts/react-native)
  - [Ruby on Rails](/quickstarts/ruby-on-rails)
  - [Reacts](/quickstarts/react)
  - [Cordova](/quickstarts/cordova)
  - [ionic](/quickstarts/ionic)

- [Features](/features)
   - [Adjustments](/features/adjustments)
   - [Filters](/features/filter)
   - [Transform](/features/transform)
   - [Text](/features/text)
   - [Stickers](/features/stickers)
   - [Frames](/features/frames)
   - [Overlay](/features/overlay)
   - [Blur](/features/blur)
   - [Brush](/features/brush)
   - [Serialization](/features/serialization)
   - [Localization](/features/localization)

