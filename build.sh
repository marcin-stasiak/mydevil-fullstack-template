#!/bin/bash

export CC=gcc
export CXX=g++

echo "Install modules..."
npm22 install --prefix "$(dirname "$0")"

echo "Build application..."
npm22 run build --prefix "$(dirname "$0")"
