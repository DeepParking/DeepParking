import redis
import json
import os
from argparse import ArgumentParser

parser = ArgumentParser()
parser.add_argument("--redis-host", dest="host",
                    help="Redis Host Address")
parser.add_argument("--reset", help="Delete all environments and cameras")

args = parser.parse_args()

r = redis.Redis(
    host=args.host,
    port=6379)

with open('area.json', 'r') as f:
        area = json.load(f)

area_id = area['id']
json_str = json.dumps(area)

r.set("area-" + str(area_id), json_str)

print("Parking area set up successfully!")
