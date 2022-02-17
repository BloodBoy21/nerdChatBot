
# Nerd chatbot
Simple chatbot made with express and svelte :)



## Installation
Local installation

```bash
  git clone https://github.com/BloodBoy21/nerdChatBot.git nerdChatBot
```

```bash
  cd ~/nerdChatBot
  npm install 
  npm run start
```
```bash
  cd ~/nerdChatBot/frontend
  npm install
  npm run start
```


You can find a docker image for frontend and backend to be used in docker-compose.

Build backend image
```bash
  cd ~/nerdChatBot
  docker build -t nerdbot-backend .
```
Build frontend image
```bash
  cd ~/nerdChatBot/frontend
  docker build -t nerdbot-frontend .
```
Run docker compose
```bash
  cd ~/nerdChatBot
  docker-compose -f docker-compose.yml up
```
URL's
frontend - localhost:8080
backend - localhost:3000

## Test
To run the unit tests 

```bash
  cd ~/nerdChatBot
  npm run test
```

To run end to end tests

```bash
  cd ~/nerdChatBot
  npm run cypress:open
```