from pydarknet import Detector, Image
from PIL import Image as Img
import numpy as np
import cv2

def get_vacant_spots(image_path):
	# Hash map of vehicle spaces and cropped picture location.
	net = Detector(bytes("cfg/yolov3.cfg", encoding="utf-8"), bytes("weights/yolov3.weights", encoding="utf-8"), 0, bytes("cfg/coco.data", encoding="utf-8"))

	# Path to image.
	img = cv2.imread(image_path)
	img_darknet = Image(img)
	results = net.detect(img_darknet)
	inferred_bounding_boxes = []

	for cat, score, bounds in results:
		if bounds[3] > 400:
			inferred_bounding_boxes.append(bounds)

	if 4 - len(inferred_bounding_boxes) > 0:
		return {'AVAILABLE_SPACES': 4 - len(inferred_bounding_boxes),
			'IMAGE_PATH' : image_path}
	else: 
		return {'AVAILABLE SPACES': 0,
			'IMAGE_PATH' : image_path}
		

# Test call
#print(get_vacant_spots('cars1.jpg'))
