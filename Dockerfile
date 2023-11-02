FROM node:18-buster as builder

# make the directory where the project files will be stored
RUN mkdir -p /usr/src/next-nginx
# set it as the working directory so that we don't need to keep referencing it
WORKDIR /usr/src/next-nginx

# install project dependencies
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install --force

# copy project files
# make sure to set up .dockerignore to copy only necessary files
COPY . .

RUN apt update && apt install -y vim

# run the build command which will build and export html files
RUN npm run build

EXPOSE 3000

# start
CMD ["npm", "run", "start"]

