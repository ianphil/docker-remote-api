FROM node:alpine

COPY . /src
WORKDIR /src

RUN npm install

CMD ["node", "app.js"]

# docker build -t tdr/api .
# docker run -it --rm -v /var/run/docker.sock:/var/run/docker.sock tdr/api