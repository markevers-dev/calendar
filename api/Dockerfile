# Stage 1: Build
FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Runtime
FROM node:24-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY .env ./

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

CMD ["node", "dist/main.js"]
