---
layout: guides/content
title: &title Config Converter - DesktopUI
description: Convert the old config to the new config

platform: html5
version: v5
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---
<script src="/assets/js/configConverter.js"></script>

<div class="documentation__disclaimer">
<h4 id="cors">Warning</h4> 
Please check the structure of your old configuration and the correctness of the generated configuration.<br/> 
If anything is wrong, please contact the support<br/>
Please make sure you are using a modern browser.
</div>
<br/>
<textarea id="configarea" name="message" rows="20" cols="90" onchange="convertConfig(this)">
          var editor = new PhotoEditorSDK.UI.DesktopUI({
              container: container,
              // Please replace this with your license: https://www.photoeditorsdk.com/dashboard/subscriptions
              license: '{"owner":"Imgly Inc.","version":"2.1", ...}',
              editor: {
                image: image,
                enableZoom: true,
                snappingOptions: { 
                  position: {           
                      threshold: 4,
                  },
                },
              },
              logLevel: 'trace',
              language: 'de',
              assets: {
                // This should be the absolute path to your `assets` directory
                baseUrl: '/assets',
              },
            })
</textarea>
<br/>
<div id="output_config"></div>
<button onclick="copyToClipboard()">Copy to clipboard</button>

<script> window.onload = () => convertConfig(document.getElementById('configarea')) </script>
