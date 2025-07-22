# Automation Challenge

## Setup Instructions

```bash
# Backend
cd backend
npm install
node index.js

# Frontend
cd ../frontend
npm install
npm run dev
```

## Running Tests

```bash
# UI tests (Cypress)
cd frontend
npx cypress open

# API tests (Newman)
newman run ../postman/collection.json
```