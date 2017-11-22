#!/usr/bin/env bash

npm run build:client:prod
node scripts/dropGzExt.js
aws s3 rm --recursive s3://topkekkle.com
aws s3 cp --recursive --content-encoding gzip dist s3://topkekkle.com

