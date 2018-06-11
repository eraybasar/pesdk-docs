---
layout: guides/content
title: &title AWS EC2 Deployment
description: The PhotoEditor SDK for server can be deployed to AWS EC2 instances and make use of GPU instances.

menuitem: AWS EC2
order: 2
platform: server
version: v4
category:
  - guide
  - introduction
tags: &tags # tags that are necessary
  - photo editor

published: true # Either published or not
---

This guide describes how to setup an Amazon AWS EC2 instance to run the PhotoEditor SDK Server. The server supports GPU (WebGL) and CPU (Canvas) based rendering.

> **Tested on April 26th 2018, PESDK Master on commit 5ac69eddf07da2a9ab573f3436be223a1ec01b75**

## CPU Based Setup

Just use any AWS instance you prefer (the more memory, the better) and specify `canvas` as the `preferredRenderer` in the `PesdkServer.editor`s options. This will limit rendering to the CPU and doesn't require a GPU, but will probably yield lower performance compared to WebGL in the future. Once you created your instance, just follow the steps in 'PESDK Server Setup'.

## GPU Based Setup to use WebGL Renderer

Running a headless WebGL server requires some upfront setup work, but will pay off with increased performance in the future. To run the PESDKServer on AWS EC2, follow these steps:

**Recommended Instance Type: g2.2xlarge**

Choose an Ubuntu 16.04 LTS AMI that's compatible with the g2.2xlarge instance (`ami-f90a4880` in `eu-west-1`).

### Nvidia Driver Installation
```bash
sudo apt-add-repository ppa:ubuntu-x-swat/updates
sudo apt-get update
sudo apt-get install nvidia-current
```

### Reboot after driver installation
```bash
sudo reboot now
```

### Configure X Server with a virtual display :0
```bash
sudo apt-get install xserver-xorg libglu1-mesa-dev freeglut3-dev mesa-common-dev libxmu-dev libxi-dev
sudo nvidia-xconfig -a --use-display-device=None --virtual=1280x1024
```

`$ nvidia-smi` should already show the K520 GPU.

### Connect the GPU to the virtual display

Modify `/etc/X11/xorg.conf` adding `BusID "0:3:0" in the `Section "Device"` section:
```
Section "Device"
    Identifier     "Device0"
    Driver         "nvidia"
    VendorName     "NVIDIA Corporation"
    BoardName      "GRID K520"
    BusID          "0:3:0"
EndSection
```

### Launch X Server
```bash
sudo /usr/bin/X :0 &
```

# PESDK Server Setup

1. Clone repository / install npm package
```bash
scp -i "AWS.pem" /path/to/folder ubuntu@<address>:/home/ubuntu/pesdk
cd /home/ubuntu/pesdk
```

2. Install NodeJS
```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo bash
sudo apt-get install -y nodejs
```

3. Install required dependencies and build PhotoEditorSDK
```bash
sudo apt-get install libcairo2-dev libjpeg-dev libpango1.0-dev \
                     libgif-dev build-essential g++
npm install
npm run-script build
```

4. To run the Server you'll need a valid license files. You may upload this using scp and just store it within the instance. The file is then passed to the SDK using the `-l license.json` parameter or the files contents are .

# Known Errors

## Missing Display

> `TypeError: Cannot set property 'id' of null`

Export the currently attached virtual display: 
```bash
export DISPLAY=:0
```

## Borked WebGL.node

> `node: symbol lookup error: /home/ubuntu/pesdk/node_modules/gl/build/Release/webgl.node: undefined symbol: _Z15XextFindDisplayP15_XExtensionInfoP9_XDisplay`

This seems to be caused by a hardcoded display within `webgl.node`. To fix it, you'll have to manually rebuild `webgl.node` as described in steps 1-6 of the [packages repository](https://github.com/stackgl/headless-gl#how-should-i-set-up-a-development-environment-for-headless-gl):

1. Switch to home directory: `cd ~/`
2. Clone the repository: `git clone https://github.com/stackgl/headless-gl.git`
3. Switch to the headless gl directory: `cd headless-gl`
4. Initialize the angle submodule: `git submodule init`
5. Update the angle submodule: `git submodule update`
6. Install npm dependencies: `npm install`
7. Run node-gyp to generate build scripts: `npm run rebuild`

You've now built a 'working' `webgl.node` version for your current setup. Replace the prebuilt one installed in the `gl` module with the following command:

```bash
cp ~/headless-gl/build/Release/webgl.node ~/pesdk/node_modules/gl/build/Release/webgl.node
```

For more details on this issue, take a look at the [discussion on GitHub](https://github.com/stackgl/headless-gl/issues/65#issuecomment-252742795).
