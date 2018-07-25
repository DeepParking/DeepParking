import redis
import json
import os
from math import sin, cos, sqrt, atan2, radians

redis_host = os.environ.get('REDIS_HOST')

r = redis.Redis(
    host=redis_host,
    port=6379)

def get_vacant_parking_spots_by_location(latitude, longitude):
    for key in r.scan_iter("area-*"):
        data = r.get(key)
        s = data.decode("utf-8")
        area = json.loads(s)

        area_lat = area['coordinates']['latitude']
        area_lng = area['coordinates']['longitude']

        distance = find_distance(latitude, longitude, area_lat, area_lng)

        if distance < 50:
            area_id = area['id']
            spots = get_vacant_parking_spots(area_id)
            return spots


def get_vacant_parking_spots(areaId):
    data = r.get("spots-" + str(areaId))

    if data is not None:
        s = data.decode("utf-8")
        vacant_spots = json.loads(s)
        
        return vacant_spots

def find_distance(lat1, lng1, lat2, lng2):
    R = 6373.0

    lat1 = radians(52.2296756)
    lon1 = radians(21.0122287)
    lat2 = radians(52.406374)
    lon2 = radians(16.9251681)

    dlon = lon2 - lon1
    dlat = lat2 - lat1

    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = (R * c) / 1000
    return distance