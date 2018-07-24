from pydarknet import Detector, Image

def get_vacant_spots_from_image(image):
    net = Detector(bytes("cfg/yolov3.cfg", encoding="utf-8"), bytes("weights/yolov3.weights", encoding="utf-8"), 0, bytes("cfg/coco.data",encoding="utf-8"))

    img = Image(image)

    results = net.detect(img)
    print(results)

    for cat, score, bounds in results:
        x, y, w, h = bounds
        
    return ""