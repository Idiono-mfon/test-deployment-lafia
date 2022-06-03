FROM node:14

RUN npm install -g -f yarn

RUN yarn global add pm2 knex

# Create App Directory
WORKDIR /home/lafia-service

COPY package*.json ./

ENV CPPFLAGS -I/usr/local/opt/openssl/include
ENV LDFLAGS -L/usr/local/opt/openssl/lib

RUN yarn

COPY . .

# Set env variables for captainRover
ARG PORT=${PORT}
ARG NODE_ENV=${NODE_ENV}
ARG POSTGRES_PORT=${POSTGRES_PORT}
ARG POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
ARG POSTGRES_HOST=${POSTGRES_HOST}
ARG POSTGRES_DBNAME=${POSTGRES_DBNAME}
ARG POSTGRES_USER=${POSTGRES_USER}
ARG POSTGRES_TEST_PORT=${POSTGRES_TEST_PORT}
ARG POSTGRES_TEST_PASSWORD=${POSTGRES_TEST_PASSWORD}
ARG POSTGRES_TEST_HOST=${POSTGRES_TEST_HOST}
ARG POSTGRES_TEST_DBNAME=${POSTGRES_TEST_DBNAME}
ARG POSTGRES_TEST_USER=${POSTGRES_TEST_USER}
ARG KAFKA_CONNECTION=${KAFKA_CONNECTION}
ARG KAFKA_ERPNEXT_PRODUCER_TOPIC=${KAFKA_ERPNEXT_PRODUCER_TOPIC}
ARG KAFKA_CONSUMER_TOPICS=${KAFKA_CONSUMER_TOPICS}
ARG AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
ARG AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}
ARG AWS_REGION=${AWS_REGION}
ARG AWS_ACCOUNT_ID=${AWS_ACCOUNT_ID}
ARG AWS_CLOUDFRONT=${AWS_CLOUDFRONT}
ARG AWS_BUCKET=${AWS_BUCKET}
ARG EMAIL_ADDRESS=${EMAIL_ADDRESS}
ARG EMAIL_PASSWORD=${EMAIL_PASSWORD}
ARG JWT_SECRETE_KEY=${JWT_SECRETE_KEY}
ARG REDIS_PORT=${REDIS_PORT}
ARG REDIS_HOST=${REDIS_HOST}
ARG REDIS_PASSWORD=${REDIS_PASSWORD}
ARG TWILIO_ACCOUNT_SID=${TWILIO_ACCOUNT_SID}
ARG TWILIO_AUTH_TOKEN=${TWILIO_AUTH_TOKEN}
ARG TWILIO_API_KEY=${TWILIO_API_KEY}
ARG TWILIO_API_SECRET=${TWILIO_API_SECRET}
ARG TWILIO_VERIFY_SID=${TWILIO_VERIFY_SID}
ARG FHIR_SERVER_BASE_URL=${FHIR_SERVER_BASE_URL}
ARG LAFIA_MEDIA_URL=${LAFIA_MEDIA_URL}
ARG SAFHIR_AUTHORIZATION_URL=${SAFHIR_AUTHORIZATION_URL}
ARG SAFHIR_TOKEN_URL=${SAFHIR_TOKEN_URL}
ARG SAFHIR_CLIENT_ID=${SAFHIR_CLIENT_ID}
ARG SAFHIR_CLIENT_SECRET=${SAFHIR_CLIENT_SECRET}
ARG SAFHIR_CALLBACK_URL=${SAFHIR_CALLBACK_URL}
ARG SAFHIR_SCOPE=${SAFHIR_SCOPE}
ARG SAFHIR_BASE_URL=${SAFHIR_BASE_URL}
ARG CAPROVER_GIT_COMMIT_SHA=${CAPROVER_GIT_COMMIT_SHA}
ENV CAPROVER_GIT_COMMIT_SHA=${CAPROVER_GIT_COMMIT_SHA}

RUN yarn tsc

RUN yarn mg:latest && yarn seed:run

EXPOSE 9000

CMD ["node", "dist/src/app/index.js"]
