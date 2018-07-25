#!/bin/bash

echo "Starting application..."
echo "API_URL = ${API_URL}"
echo "AREA_ID = ${AREA_ID}"
envsubst < "/usr/share/nginx/html/assets/json/config.json" > "/usr/share/nginx/html/assets/json/config.json"
nginx -g 'daemon off;'