FROM node:23
WORKDIR /app
# Install pnpm
# RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start"]   