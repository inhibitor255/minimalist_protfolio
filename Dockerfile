# Base Image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the CSS using the Tailwind configuration
RUN npm run build

# Expose the desired port (e.g., 1111)
EXPOSE 9000

# Start the application
CMD ["node", "./dist/index.js"]
