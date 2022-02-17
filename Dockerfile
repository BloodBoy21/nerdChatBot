FROM node:17-alpine3.15

RUN mkdir -p /app

# Create app directory
WORKDIR /app

COPY package*.json ./

RUN npm install
# Bundle app source
COPY . .


EXPOSE $PORT
# Set host to localhost / the docker image
ENV PORT=$PORT 


# Start the app
CMD [ "npm", "start" ]
