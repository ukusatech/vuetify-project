#!/usr/bin/env sh

# abort on errors
set -e

git add .
echo "COMMIT TO MASTER >> WRITE YOUR MESSAGE: "
read message
git commit -m message
git push origin master
