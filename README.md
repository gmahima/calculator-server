# Calculator Server

A simple calculator API with add and subtract operations.

## Features

- Addition endpoint: Adds two numbers
- Subtraction endpoint: Subtracts two numbers
- OpenAPI specification with Swagger UI
- Input validation
- Error handling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
```
git clone <repository-url>
cd calculator-server
```

2. Install dependencies
```
npm install
```

3. Start the server
```
npm start
```

For development with auto-reload:
```
npm run dev
```

The server will run on http://localhost:3000 by default. You can change the port by setting the PORT environment variable.

## API Documentation

Access the Swagger UI documentation at http://localhost:3000/api-docs

## API Endpoints

### Add two numbers
```
POST /api/calculate/add
```

Request body:
```json
{
  "num1": 10,
  "num2": 5
}
```

Response:
```json
{
  "result": 15,
  "operation": "add",
  "input": {
    "num1": 10,
    "num2": 5
  }
}
```

### Subtract two numbers
```
POST /api/calculate/subtract
```

Request body:
```json
{
  "num1": 10,
  "num2": 5
}
```

Response:
```json
{
  "result": 5,
  "operation": "subtract",
  "input": {
    "num1": 10,
    "num2": 5
  }
}
```

## Deployment

See the [Deployment Guide](DEPLOYMENT.md) for instructions on how to deploy this API to various free hosting providers. 