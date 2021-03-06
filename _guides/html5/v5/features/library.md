---
layout: guides/content
title: &title Library # title as shown in the menu and

menuitem: *title
order: 5
platform: html5
version: v5
category:
  - guide
  - feature
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---
{% capture image_advanced_dark %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/advanced-dark/{{page.title | downcase}}.png
{% endcapture %}
{% capture image_advanced_light %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/advanced-light/{{page.title | downcase}}.png
{% endcapture %}
{% capture image_basic_dark %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/basic-dark/{{page.title | downcase}}.png
{% endcapture %}
{% capture image_basic_light %}
{{ site.baseurl }}/assets/images/guides/{{page.platform | downcase }}/{{page.version | downcase}}/basic-light/{{page.title | downcase}}.png
{% endcapture %}

{% assign images = "" | split: "" | push: image_advanced_dark | push: image_advanced_light | push: image_basic_dark | push: image_basic_light %}
{% include image_carousel.html images=images %}

With our library control, users can upload their own pictures, take photo with their webcam or pick from one of our selected photos. As a developer, you can also make use of our API to provide your own set of photos that the user can pick from.

## Specifying a custom library provider

The provider class is the data manager for our library feature. Extend this class in order to load data from an external source or provide a fixed set of images. Your custom provider needs to implement two categories: `getCategories` and `searchImages(query)` which will be invoked by our UI. Please note that these methods are asynchronous and must return a Promise.


```js
import { LibraryProvider, LibraryCategory, LibraryImage } from 'photoeditorsdk'

class MyProvider extends LibraryProvider {

  /**
   * This is a method explicitly created for this provider. It makes sure our data
   * JSON has been loaded from the server.
   * @return {Promise}
   * @private
   */
   loadData() {
    if (this.data) { return Promise.resolve(this.data) }
  
    return this.loadJSON('http://d3czpaw5gb5xgh.cloudfront.net/v5/unsplash.json')
      .then((data) => {
        this.data = data
        return data
      })
  }

  /**
   * Returns the categories
   * @return {Promise}
   * @resolve {LibraryCategory[]}
   * @abstract
   */
    getCategories() {
    return this.loadData()
      .then((data) => {
        // Create `Category` instances from our data
        return data.categories.map((categoryData) => {
          return new LibraryCategory({
            name: categoryData.name,
            coverImageUrl: categoryData.coverImage
          })
        })
      })
  }

  /**
   * Returns the images for the given search query
   * @param {String} query
   * @return {Promise}
   * @resolve {LibraryImage[]}
   * @abstract
   */
  searchImages (query) {
    return this._loadData()
      .then(data => {
        return data.images.filter(image => {
          // Split query by spaces, make sure all words are present in image title
          var words = query.split(/\s+/)
          for (var i = 0; i < words.length; i++) {
            var word = words[i]
            var regexp = new RegExp(word, 'i')
            if (!regexp.test(image.title)) {
              return false
            }
          }

          return true
        }).map(imageData => {
          return new Image(imageData)
        })
      })
  }
}
```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

The `LibraryCategory` class takes three attributes: `name` of type `string`, `coverImageUrl` of type `string` and `coverImage` of type `string`.

The `LibraryImage` class takes seven attributes, of which two are mandatory: `category` that should point to the corresponding `LibraryCategory` instance and `rawUrl` that should point to the full-sized image. Additional options are: `title`, `thumbUrl` (all of type `string`) and `thumbImage` of type ImageElement.

## Passing the provider to the control

In order to make the UI use your provider, simply pass it as the `provider` option to the `library` control:


{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-06{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

```js
const editor = await PhotoEditorSDKUI.init({
  library: {
    provider: MyProvider,
  }
})
```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-02{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

# Disabling the webcam / upload

By default, your users are able to take photos using their webcam or upload their own photos using a file picker. In order to disable these features, simply set the `enableWebcam` or the `enableUpload` (which also includes the webcam) to `false`.

```js
const editor = await PhotoEditorSDKUI.init({
  library: {
    enableWebcam: false, // Disables the webcam
    enableUpload: false // Disables the upload
  }
})
```


## Localization

You can override all the labels used in library tool using the `custom.languages` object in [configuration]({{ site.baseurl }}/guides/{{page.platform}}/{{page.version}}/introduction/customization/localization), below are the default library localization lables.

```js
await PhotoEditorSDKUI.init({
  // ...,
  custom: {
    languages: {
      en: {
        // ...,
        library: {
          title: 'Library',
          controls: {
            buttonUpload: 'Upload Image',
            buttonWebcamOpen: 'Open Webcam',
            buttonWebcamClose: 'Close Webcam',
            placeholderSearch: 'Search Library',
            noResults: 'No Results',
          },
        }
      }
    }
  }
})
```

{% capture identifier %}{{page.title}}-{{page.version}}-ANALYTICS-03{% endcapture %}
{% include multilingual_code_block.html snippets=snippets identifier=identifier %}

<!--## Interactive Example

Try the conceps above in the interactive editor below. You can edit the source code and see the results by clicking on the 'reload' button.

{% capture code %}
window.onload = function () {

        const { Provider, Category, Image } = PhotoEditorSDK.UI.DesktopUI.Library
        class MyProvider extends Provider {
          constructor (...args) {
            super(...args)

            // Our cache object
            this._data = null
            this._loadData = this._loadData.bind(this)
          }

          _loadData () {
            if (this._data) { return Promise.resolve(this._data) }


            return this._loadJSON('{{ site.baseurl }}/assets/js/provider.json')
              .then(data => {
                this._data = data
                return data
              })
          }

          getCategories () {
            return this._loadData()
              .then(data => {
                return data.categories.map(({ name, coverImage }) =>
                  new Category({
                    name: name + ' (custom) ', coverImage
                  })
                )
              })
          }

          searchImages (query) {
            return this._loadData()
              .then(data => {
                return data.images.filter(image => {
                  var words = query.split(/\s+/)
                  for (var i = 0; i < words.length; i++) {
                    var word = words[i]
                    var regexp = new RegExp(word, 'i')
                    if (!regexp.test(image.title)) {
                      return false
                    }
                  }

                  return true
                }).map(imageData => {
                  return new Image(imageData)
                })
              })
          }
        }

        PhotoEditorSDK.Loaders.ImageLoader.load('{{ site.baseurl }}/assets/images/shared/test.png')
          .then((image) => {
            let container = document.getElementById('editor')
            let options = {
              container: container,
              license: PESDK_LICENSE_STRING,
              editor: {
                image: image,
                controlsOptions: {
                  library: {
                    provider: MyProvider,
                    enableWebcam: false,
                    enableUpload: false
                  }
                }
              },
              assets: {
                baseUrl: PESDK_ASSETS_URL
              }
            }
            let editor = new PhotoEditorSDK.UI.DesktopUI(options)
        })
      }
{% endcapture %}
{% capture identifier %}{{page.title}}-{{page.version}}-EXAMPLE-01{% endcapture %}
{% include pesdk_html5_editor.html code=code identifier=identifier %}
-->