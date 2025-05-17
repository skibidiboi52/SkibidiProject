# Backend Dockerfile
FROM node:18

WORKDIR /app
COPY server ./server
COPY client ./client
COPY package*.json ./
RUN cd server && npm install

EXPOSE 5000
CMD ["node", "server/index.js"]