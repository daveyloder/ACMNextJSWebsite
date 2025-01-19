# Use Node.js as base image
FROM node:18-alpine

#Setting the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Expose the Next.js port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]