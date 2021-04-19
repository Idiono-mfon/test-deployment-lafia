FROM ubuntu:18.04

SHELL ["/bin/bash", "-c"]

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y  software-properties-common && \
    apt-get -y install curl && \
    apt-get clean


RUN curl -sL https://deb.nodesource.com/setup_12.x |  bash  -


RUN apt-get install nodejs -y && \
    apt-get install -y libaio1 && \
    apt-get clean

RUN npm install -g yarn

RUN yarn global add pm2 knex
#
RUN mkdir -p /home/lafia-service

# COPY package*.json ./
#
COPY . /home/lafia-service

WORKDIR /home/lafia-service

RUN yarn

RUN yarn tsc

RUN yarn mg:latest && yarn seed:run

EXPOSE 9000

CMD ["node", "dist/src/app/index.js"]
