FROM node:18-alpine3.18
WORKDIR /usr/app
COPY package.json .
RUN npm install

LABEL org.opencontainers.image.source="https://github.com/do3-2023/res-kube"

COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]
