#FROM node:6

FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# COPY sdsmain.js .
# COPY sdsmodules.js .
# COPY app.log .

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .
COPY ./app.log /data/app.log

EXPOSE 3000

# CMD node sdsmain.js
CMD [ "npm", "start" ]