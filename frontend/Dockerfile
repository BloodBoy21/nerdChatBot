FROM node:17-alpine3.15

RUN mkdir -p /app

# Create app directory
WORKDIR /app

COPY package*.json ./

RUN npm install
# Bundle app source
COPY . .

RUN npm run build

EXPOSE $PORT
# Set host to localhost / the docker image
ENV PORT=$PORT 
ENV HOST=0.0.0.0


# Start the app
CMD [ "npm", "start" ]
