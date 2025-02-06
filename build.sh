#!/bin/bash
export PATH=/usr/local/bin:$PATH
export CC=gcc
export CXX=g++

echo "Install modules..."
yarn22 install --cwd "$(dirname "$0")"

echo "Build application..."
yarn22 run build --cwd "$(dirname "$0")"
