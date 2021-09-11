#!/usr/bin/env sh

# abort on errors
set -e

git add .
#PRA ADIANTAR O LADO COMMITA SEM MENSAGEM CAPTURADA
#echo "TRACK ALL TO MASTER >> WRITE YOUR MESSAGE:"
#read message
#git commit -m message
git commit -m "AUTO COMMIT"
git push origin master
