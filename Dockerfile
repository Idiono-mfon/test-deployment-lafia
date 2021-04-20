FROM node:14

RUN npm install -g -f yarn

RUN yarn global add pm2 knex

# Create App Directory
WORKDIR /home/lafia-service

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn tsc

RUN yarn mg:latest && yarn seed:run

# Set env variables for captainRover
ARG PORT=${PORT}
ARG NODE_ENV=${NODE_ENV}
ARG POSTGRES_PORT=${POSTGRES_PORT}
ARG POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
ARG POSTGRES_HOST=api.lafia.io
ARG POSTGRES_DBNAME=${POSTGRES_DBNAME}
ARG POSTGRES_USER=${POSTGRES_USER}
ARG POSTGRES_TEST_PORT=${POSTGRES_TEST_PORT}
ARG POSTGRES_TEST_PASSWORD=${POSTGRES_TEST_PASSWORD}
ARG POSTGRES_TEST_HOST=${POSTGRES_TEST_HOST}
ARG POSTGRES_TEST_DBNAME=${POSTGRES_TEST_DBNAME}
ARG POSTGRES_TEST_USER=${POSTGRES_TEST_USER}
ARG RMQ_CONNECTION=${RMQ_CONNECTION}
ARG RMQ_PUB_QUEUE=${RMQ_PUB_QUEUE}
ARG RMQ_SUB_QUEUE=${RMQ_SUB_QUEUE}
ARG AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
ARG AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}
ARG AWS_REGION=${AWS_REGION}
ARG AWS_BUCKET=${AWS_BUCKET}
ARG JWT_SECRETE_KEY=${JWT_SECRETE_KEY}
ARG PLATFORM_ADMIN_KEY=${PLATFORM_ADMIN_KEY}
ARG PLATFORM_APP_NAMESPACE=${PLATFORM_APP_NAMESPACE}
ARG CAPROVER_GIT_COMMIT_SHA=${CAPROVER_GIT_COMMIT_SHA}
ENV CAPROVER_GIT_COMMIT_SHA=${CAPROVER_GIT_COMMIT_SHA}

EXPOSE 9000

CMD ["node", "dist/src/app/index.js"]
