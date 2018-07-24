from flask import Flask, request
from flask import jsonify
import numpy as np
import cv2
app = Flask(__name__)

import detector

@app.route("/")
def status():
    return "Deep Park Camera Gateway API. Status: Running"
 
@app.route("/camera/<int:camera_id>", methods = ['POST'])
def process_image(camera_id):
    r = request
    nparr = np.fromstring(r.data, np.uint8)
    img = cv2.imdecode(nparr, cv2.COLOR_BGR2RGB)
    data = detector.get_vacant_spots_from_image(img)
    return jsonify({ 'status': 'ok', 'results': data })

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)