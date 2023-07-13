FROM node:16

WORKDIR /app

COPY package*.json  ./

RUN npm install --silent

RUN npm install react-scripts@3.4.1 -g --silent

COPY . .

ARG ENVIRONMENT

ENV ENV_ENVIRONMENT=$ENVIRONMENT

RUN npm run ${ENV_ENVIRONMENT} --if-present

EXPOSE 3500

CMD [ "npm", "start" ]
