FROM node

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3003

CMD [ "node", "./app.js" ]
