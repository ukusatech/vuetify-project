#!/usr/bin/env sh

# abort on errors
set -e

git add .
git commit -m 'script commit master'
git push origin master

cd -