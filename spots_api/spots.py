import redis

r = redis.Redis(
    host='localhost',
    port=6379)

def get_free_parking_spots(areaId):
    data = r.get(areaId)
    return data