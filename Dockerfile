FROM node:lts-alpine

ENV NODE_ENV=development

RUN mkdir -p /laetis-diner-api
WORKDIR /laetis-diner-api

COPY package.json .
COPY yarn.lock .

RUN yarn

RUN apk add postgresql-client

COPY . /laetis-diner-api

EXPOSE 5000
