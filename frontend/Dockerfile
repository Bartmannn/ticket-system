
FROM node:22-alpine AS builder

RUN mkdir /app
WORKDIR /app

ENV NG_CLI_ANALYTICS=false

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4200

CMD ["npx", "ng", "serve", "--host", "0.0.0.0"]
