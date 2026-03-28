# frontend/Dockerfile

# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install --production=true

# Copy project files
COPY . .

# Build Next.js
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app

# Copy built assets + deps
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]
