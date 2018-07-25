from flask import Flask, request
from flask import jsonify
from flask_cors import CORS, cross_origin
import numpy as np
import cv2
import sys
import detector
import redis
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

import os

redis_host = os.environ.get('REDIS_HOST')

r = redis.Redis(
    host=redis_host,
    port=6379)

@app.route("/")
@cross_origin()
def status():
    return "Deep Park Camera Gateway API. Status: Running"

@app.route("/process/<int:area_id>/<string:camera_id>", methods = ['POST'])
@cross_origin()
def process_image(area_id, camera_id):
    print("Received process image request for area " + str(area_id) + " and camera " + str(camera_id))
    
    d = request.form
    for key, value in d.items():
             img = key

    data = detector.get_vacant_spots(img)

    if data['available_spaces'] > 0:
        area_obj = r.get(area_id)
        s = area_obj.decode("utf-8")
        area_json = json.loads(s)
        cameras = area_json['cameras']
        for camera in cameras:
            if camera['id'] == camera_id:
                vacant_spot = {
                    'level': camera['level'],
                    'row': camera['row'],
                    'position': camera['position'],
                    'name': camera['id'],
                    'imageUrl': data['image']
                }

                vacant_spot_json = json.dumps(vacant_spot)
                r.set("spots-" + str(area_id), vacant_spot_json)


    return jsonify({ 'status': 'ok' })
        

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)