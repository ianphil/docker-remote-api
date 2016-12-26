FROM node:alpine

COPY . /src
WORKDIR /src

RUN npm install

CMD ["node", "app.js"]

# docker run -it --rm -v /var/run/docker.sock:/var/run/docker.sock dockerode