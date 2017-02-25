FROM node:latest

WORKDIR ./app
RUN npm install

# Install pm2 globally to run the app
RUN npm i -g pm2

CMD ["pm2", "start", "processes.json", "--no-daemon"]
