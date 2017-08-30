#!/usr/bin/env python

"""
This script takes screenshots from the `screenshots` directory and pastes them into the base image. The resulting images
are stored in the `results` folder and may be used within the docs.

Requirements: Pillow -> "sudo easy_install pip && sudo pip install pillow"
"""

from PIL import Image
import os

print("Creating screenshots...")
base_image = Image.open("base.png")

screenshot_dir = os.path.join(os.getcwd(), 'screenshots')
result_dir = os.path.join(os.getcwd(), 'results')
screenshots = [f for f in os.listdir(screenshot_dir) if os.path.isfile(os.path.join(screenshot_dir, f))]
for file in screenshots:
	filename = os.path.splitext(file)[0]
	result_filename = filename + '.png'
	screenshot = Image.open(os.path.join(screenshot_dir, file))
	resized_screenshot = screenshot.resize((1062, 658), Image.LANCZOS)

	result = base_image.copy()
	result.paste(resized_screenshot, (316, 166, base_image.width - 330, base_image.height - 164))
	result.save(os.path.join(result_dir, result_filename), "PNG")
	print("Saved framed screenshot %s" % result_filename)

