#!/bin/bash
export PATH=/usr/local/bin:$PATH
export CC=gcc
export CXX=g++

echo "Install modules..."
yarn22 --cwd "$(dirname "$0")" install

echo "Build application..."
yarn22 --cwd "$(dirname "$0")" run build
