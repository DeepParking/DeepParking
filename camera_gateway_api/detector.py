from pydarknet import Detector, Image
import PIL.Image
import base64
import io
import numpy as np
import cv2

net = Detector(bytes("cfg/yolov3.cfg", encoding="utf-8"), bytes("weights/yolov3.weights", encoding="utf-8"), 0, bytes("cfg/coco.data", encoding="utf-8"))
categories = ['car', 'truck']

def get_vacant_spots(img_base64):
	starter = img_base64.find(',')
	image_data = img_base64[starter+1:]
	image_data = bytes(image_data, encoding="ascii")
	im = PIL.Image.open(io.BytesIO(base64.b64decode(image_data)))
	rgb_img = cv2.cvtColor(np.array(im), cv2.COLOR_BGR2RGB)
	img_darknet = Image(rgb_img)
	
	results = net.detect(img_darknet)
	inferred_bounding_boxes = []

	for cat, score, bounds in results:
		if cat in categories and bounds[3] > 400:
			inferred_bounding_boxes.append(bounds)

	if 4 - len(inferred_bounding_boxes) > 0:
		return {'available_spaces': 4 - len(inferred_bounding_boxes),
			'image' : img_base64}
	else: 
		return {'available_spaces': 0,
			'image' : img_base64}
