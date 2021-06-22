FROM node:15

WORKDIR /usr/srv/app

COPY . .

EXPOSE 3000

CMD [ "npm", "test"]
