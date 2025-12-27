FROM node:24.11.1-alpine3.22

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy source files
COPY . .

# Run tests
CMD ["npm", "run", "test", "run"]
