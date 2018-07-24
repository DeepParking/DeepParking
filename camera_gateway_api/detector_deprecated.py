from pydarknet import Detector, Image
from PIL import Image as Img
import numpy as np
import cv2

# Known parking spot locations.
bounding_boxes = [(354, 1115, 734, 567),
                  (1000, 1160, 650, 550),
                  (1515, 1160, 616, 417),
                  (1824, 1164, 381, 482)]

# Helper function for cropping images.
def crop(image_path, coords, saved_location):
	image_obj = Img.fromarray(image_path)
	coords_new = (int(coords[0] - coords[2]/2), int(coords[1]-coords[3]/2), int(coords[0]+coords[2]/2), int(coords[1]+coords[3]/2))
	cropped_image = image_obj.crop(coords_new)
	cropped_image.save(saved_location)

def get_vacant_spots(image_path):
    # Hash map of vehicle spaces and cropped picture location.
	empty_spaces = {'0': 'empty_spaces/0.jpg',
					'1': 'empty_spaces/1.jpg',
					'2': 'empty_spaces/2.jpg',
					'3': 'empty_spaces/3.jpg'}
    
	net = Detector(bytes("cfg/yolov3.cfg", encoding="utf-8"), bytes("weights/yolov3.weights", encoding="utf-8"), 0, bytes("cfg/coco.data", encoding="utf-8"))
	
	# Path to image.
	img = cv2.imread(image_path)
	img_darknet = Image(img)
	results = net.detect(img_darknet)

	# Creates cropped images of each known parking space.
	for i in range(len(bounding_boxes)):
		crop(img, bounding_boxes[i], 'empty_spaces/' + str(i) + '.jpg')

	# Pops occupied spots from our hash map.
	for cat, score, bounds in results:
		if bounds[3] > 400:
			if bounds[0] > 50 and bounds[0] < 800:
				del(empty_spaces['0'])
				continue
			if bounds[0] < 1400 and bounds[0] > 800:
				del(empty_spaces['1'])
				continue
			if bounds[0] < 1700 and bounds[0] > 1400:
				del(empty_spaces['2'])
				continue
			if bounds[0] > 1700:
				del(empty_spaces['3'])
				continue
		return empty_spaces
	
