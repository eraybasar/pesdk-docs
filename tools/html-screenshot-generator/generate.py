#!/usr/bin/env python

"""
This script takes screenshots from the `screenshots` directory and pastes them into the base image. The resulting images
are stored in the `results` folder and may be used within the docs.

Requirements: Pillow -> "sudo easy_install pip && sudo pip install pillow"
"""

from PIL import Image
import os
import pdb

print("Creating screenshots...")
base_image = Image.open("base.png")
mask_image = Image.open("mask.png")
canvas = Image.new('RGBA', base_image.size)

screenshot_dir = os.path.join(os.getcwd(), 'screenshots')
result_dir = os.path.join(os.getcwd(), 'results')
screenshots = [f for f in os.listdir(screenshot_dir) if os.path.isfile(os.path.join(screenshot_dir, f))]
for file in screenshots:
	if file.lower().endswith(('.png', '.jpg', '.jpeg')):
		filename = os.path.splitext(file)[0]
		result_filename = filename + '.png'
		screenshot = Image.open(os.path.join(screenshot_dir, file))
		resized_screenshot = screenshot.resize((1062, 664), Image.LANCZOS)
		screenshot_on_canvas = canvas.copy()
		screenshot_on_canvas.paste(resized_screenshot, (316, 166, base_image.width - 330, base_image.height - 158))
		result = Image.composite(screenshot_on_canvas, base_image, mask_image)
		result.save(os.path.join(result_dir, result_filename), "PNG")
		print("Saved framed screenshot %s" % result_filename)
