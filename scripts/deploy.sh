#!/usr/bin/env bash

npm run build:client:prod
node scripts/dropGzExt.js
aws s3 rm s3://topkekkle.com/index*
aws s3 rm s3://topkekkle.com/manifest*
aws s3 rm s3://topkekkle.com/bundle*
rm dist/vendor*
aws s3 cp --recursive --content-encoding gzip dist s3://topkekkle.com

