import redis

r = redis.Redis(
    host='localhost',
    port=6379)

def get_vacant_parking_spots(areaId):
    data = r.get("spots-" + areaId)
    return data