#!/bin/bash

echo 'Installing server...'
echo $server_install
server_install=$(cd ./server && npm install)

echo 'Installing client...'
echo $client_install
client_install=$(cd ./client && npm install)