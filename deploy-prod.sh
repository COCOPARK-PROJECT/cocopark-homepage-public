#!/bin/bash
git pull
yarn build:prod
pm2 restart Cocopark-FE-Prod
