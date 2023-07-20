FROM node:16-alpine AS build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run start

EXPOSE 4200
