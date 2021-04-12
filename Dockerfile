FROM ubuntu:18.04
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y  software-properties-common && \
    apt-get -y install curl && \
    apt-get clean


RUN curl -sL https://deb.nodesource.com/setup_8.x |  bash  -


RUN apt-get install nodejs -y && \
    apt-get install -y libaio1 && \
    apt-get clean

RUN npm install -g yarn

RUN curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash

RUN /bin/bash -c "source ~/.profile"

RUN nvm install 12 && nvm use 12

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
