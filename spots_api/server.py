from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

import spots

@app.route("/")
@cross_origin()
def status():
    return "Deep Park API. Status: Running"
 
@app.route("/spots/<int:area_id>")
@cross_origin()
def get_spots(area_id):
    vacant_spots = spots.get_vacant_parking_spots(area_id)
    return jsonify(vacant_spots)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000)