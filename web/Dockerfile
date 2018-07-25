FROM nginx:1.13.3-alpine

## Copy our default nginx config
COPY default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## copy over the artifacts in dist folder to default nginx public folder
COPY dist /usr/share/nginx/html

## startup.sh script is launched at container run
ADD startup.sh /startup.sh
CMD /startup.sh
