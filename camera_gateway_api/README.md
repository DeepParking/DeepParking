## DeepParking: Open Space Detector

* `detector.py`: Python script to detect locations of empty parking spaces, using [YOLO](https://pjreddie.com/darknet/yolo/) object detection.
* `download_models.sh`: Downloads weights to be used for model inferencing.
* `\empty_spaces`: Cropped images of all parking spots.
* `\cfg`: Data and logs from YOLO model.

### Prerequisites

_Note_: This sample code requires **OpenCV** with python bindings installed. (`pip3 install opencv-python==3.4.0`). You must execute `download_models.sh` to download model files prior to inferencing.

* Python 3.5+
* Linux x86-64 Operating System

### Python Libraries

* `pydarknet`
* `Pillow`
* `numpy`
* `cv2`
