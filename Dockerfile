FROM node:24.12 as build
WORKDIR /app/src
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build -- --configuration production

FROM node:24.12
WORKDIR /usr/app
COPY --from=build /app/src/dist/Jastfit.Frontend ./
CMD node server/server.mjs
EXPOSE 4000