---
layout: guides/content
title: &title Config Converter
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
Enter the DesktopUI or ReactUI config in the input box and the converter will provide you with v5 config.
<br/>
<div style="text-align: center;">
  <textarea style="font-family: 'Open Sans'; font-size: 13px;" id="configarea" name="message" rows="20" cols="90" onchange="convertConfig(this)">
    var editor = new PhotoEditorSDK.UI.DesktopUI({
        container: container,
        license: '{"owner":"Imgly","version":"2.1", ...}',
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
</div>

<br/>

<div style="position: relative;">
  <div style="padding: 25px 150px; background-color: #f7f7f7; border-radius: 3px;" id="output_config"></div>
  <button style="position: absolute; right: 0; top: 0; font-family: 'Open Sans'; background: transparent; height: 32px; font-size: 13px;" onclick="copyToClipboard()">Copy to clipboard</button>
</div>

<br/>

<div class="documentation__disclaimer">
<h4 id="cors">Warning</h4> 
  1. Please check the structure of your old configuration and the correctness of the generated configuration.<br/> 
  2. If anything is wrong, please contact the support.<br/>
  3. Please make sure you are using a modern browser.
</div>

<script> window.onload = () => convertConfig(document.getElementById('configarea')) </script>
