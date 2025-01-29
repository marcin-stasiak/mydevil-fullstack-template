#!/bin/bash

export CC=gcc
export CXX=g++

echo "Install modules..."
npm22 install --prefix "$(dirname "$0")"

echo "Build client application..."
npm22 run build:client --prefix "$(dirname "$0")"

echo "Build client application..."
npm22 run build:server --prefix "$(dirname "$0")"
