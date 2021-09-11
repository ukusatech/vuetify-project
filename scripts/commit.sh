#!/usr/bin/env sh

# abort on errors
set -e

git add .
echo "TRACK ALL TO MASTER >> WRITE YOUR MESSAGE:"
read message
git commit -m message
git push origin master
