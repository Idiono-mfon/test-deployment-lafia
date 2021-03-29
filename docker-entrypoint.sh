#!/bin/bash

cd /home/lafia-service || exit

yarn

yarn tsc

pm2-runtime start ecosystem.config.js
