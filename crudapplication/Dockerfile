FROM  node:latest

RUN mkdir -p /crud

WORKDIR /crud

COPY ./ ./

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]

