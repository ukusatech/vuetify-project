#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# navigate into the build output directory
cd dist

echo 'LS IN DIST'
ls
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
# git push -u origin master
# if you are deploying to https://ukusatech.github.io
# git push -f git@github.com:ukusatech/ukusatech.github.io.git master

# if you are deploying to https://ukusatech.github.io/vuetify-project
git push -f git@github.com:ukusatech/vuetify-project.git master:gh-pages

cd -