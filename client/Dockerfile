FROM node:8.9
LABEL maintainer="Plup <plup@plup.io>"

# define app folder
WORKDIR /data/app

# add source in app folder
ADD . /data/app/

# add node_modules binaries to PATH (nodejs look for node_modules in parent directories)
ENV PATH /data/node_modules/.bin:$PATH

# install and cache app dependencies
ADD package.json /data/
RUN cd /data/ && npm cache clean --force && npm install


CMD ["yarn", "start"]
