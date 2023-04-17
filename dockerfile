FROM node:14-alpine3.17

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

# CMD ["npm","run","start-dev"]