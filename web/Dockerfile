FROM nginx:1.10.3-alpine
RUN apk add --update bash && rm -rf /var/cache/apk/*

## Copy our default nginx config
COPY default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## copy over the artifacts in dist folder to default nginx public folder
COPY dist/web /usr/share/nginx/html

## startup.sh script is launched at container run
WORKDIR /
ADD startup.sh /startup.sh
RUN chmod +x /startup.sh
CMD ["/bin/bash", "/startup.sh"]
