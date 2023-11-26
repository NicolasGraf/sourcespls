FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .

ENV NODE_ENV production
ENV PORT 3000
ENV HOSTNAME 0.0.0.0

EXPOSE 3000
CMD ["node", "app.js"]
