import redis
import json
import os

redis_host = os.environ.get('REDIS_HOST')

r = redis.Redis(
    host=redis_host,
    port=6379)

def get_vacant_parking_spots(areaId):
    data = r.get("spots-" + str(areaId))
    s = data.decode("utf-8")
    vacant_spots = json.loads(s)
    
    return vacant_spots