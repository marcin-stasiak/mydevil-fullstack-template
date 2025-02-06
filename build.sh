#!/bin/bash
export PATH=/usr/local/bin:$PATH
export CC=gcc
export CXX=g++

echo "Install modules..."
yarn22 install

echo "Build application..."
yarn22 run build
