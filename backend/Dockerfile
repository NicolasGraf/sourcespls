FROM node:18

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# extra dependencies for running chromium inside a container
RUN apt-get update && apt-get install gnupg wget -y && \
  wget --quiet --output-document=- https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/google-archive.gpg && \
  sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
  apt-get update && \
  apt-get install google-chrome-stable -y --no-install-recommends && \
  rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm ci
COPY . .

# run as separate user we dont have to use --no-sandbox
RUN groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
   && mkdir -p /home/pptruser/Downloads \
   && chown -R pptruser:pptruser /home/pptruser \
   && chown -R pptruser:pptruser /node_modules \
   && chown -R pptruser:pptruser /package.json \
   && chown -R pptruser:pptruser /package-lock.json

USER pptruser

ENV NODE_ENV production
ENV PORT 3000
ENV HOSTNAME 0.0.0.0

EXPOSE 3000
CMD ["node", "app.js"]
