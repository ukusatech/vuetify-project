#!/usr/bin/env sh

# abort on errors
set -e

git add .
echo "TRACK ALL >> WRITE YOUR MESSAGE:"
read message
git commit -m message
read branch
echo "PUSH TO :" + branch
git push origin branch
