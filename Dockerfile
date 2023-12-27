FROM node:19

WORKDIR /combogic-official-website

COPY . .

RUN npm ci

RUN npm run generate

EXPOSE 3000

CMD [ "npm" , "run" , "preview" ]