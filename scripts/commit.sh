#!/usr/bin/env sh

# abort on errors
set -e

git add .
echo "-m: "
read message
git commit -m message
git push origin master
