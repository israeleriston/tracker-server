FROM mhart/alpine-node:10

# Update
# RUN apk add --update nodejs
# Cria a pasta da app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Instala as dependencias da app
COPY package.json /usr/src/app/
RUN npm install
# copia a app
COPY . /usr/src/app
EXPOSE 8080
CMD ["node", "/usr/src/app/app.js"]
