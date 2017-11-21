#!/bin/bash

aws s3 cp --recursive enumerated-thumbnails s3://top-kekkle/enumerated-thumbnails
aws s3 cp --recursive enumerated s3://top-kekkle/enumerated
