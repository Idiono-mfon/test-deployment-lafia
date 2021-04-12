FROM node:10.16-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git curl openssh make python \
    busybox-extras yarn

RUN yarn global add pm2 knex
#
RUN mkdir -p /home/lafia-service

# COPY package*.json ./
#
COPY . /home/lafia-service

WORKDIR /home/lafia-service

EXPOSE 9000
#
ADD docker-entrypoint.sh /usr/local/bin/
#
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
#
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
