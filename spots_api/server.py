from flask import Flask
from flask import jsonify
app = Flask(__name__)

import spots

@app.route("/")
def status():
    return "Deep Park API. Status: Running"
 
@app.route("/spots/<int:area_id>")
def get_spots(area_id):
    data = spots.get_vacant_parking_spots(area_id)
    return jsonify({ 'status': 'ok', 'results': data })

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)