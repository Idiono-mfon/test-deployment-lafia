FROM node:10.16-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache --virtual .build-deps \
    ca-certificates \
    bash git curl openssh make python \
    busybox-extras \
    wget \
    tar && \
    cd /usr/local/bin && \
    wget https://yarnpkg.com/latest.tar.gz && \
    tar zvxf latest.tar.gz && \
    ln -s /usr/local/bin/dist/bin/yarn.js /usr/local/bin/yarn.js && \
    apk del .build-deps


RUN yarn global add pm2 knex
#
RUN mkdir -p /home/lafia-service

# COPY package*.json ./
#
COPY . /home/lafia-service

WORKDIR /home/lafia-service

RUN yarn

RUN yarn tsc

EXPOSE 9000

CMD ['node', 'dist/src/app/index.js']
