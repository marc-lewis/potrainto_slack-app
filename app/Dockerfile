FROM node:latest

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

ADD package.json package.json

RUN npm install

# Install pm2 globally to run the app
RUN npm i -g pm2
