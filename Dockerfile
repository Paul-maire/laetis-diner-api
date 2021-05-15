FROM node:12.18-alpine

RUN mkdir -p /laetis-diner-api
COPY . /laetis-diner-api
WORKDIR /laetis-diner-api

RUN set -ex; \
	apk add postgresql-client; \
	yarn global add knex pg;

RUN yarn install

ENV NODE_ENV=development

COPY . /laetis-diner-api

EXPOSE 5000
