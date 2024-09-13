#!/bin/bash
git pull
yarn build:dev
pm2 restart Cocopark-FE-Dev
