const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Load Swagger document
const swaggerDocument = YAML.load(path.join(__dirname, './openapi.yaml'));

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Calculator endpoints
app.post('/api/calculate/add', (req, res) => {
  try {
    const { num1, num2 } = req.body;
    
    // Validate input
    if (num1 === undefined || num2 === undefined) {
      return res.status(400).json({ 
        error: 'Both num1 and num2 are required' 
      });
    }
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return res.status(400).json({ 
        error: 'num1 and num2 must be numbers' 
      });
    }
    
    const result = num1 + num2;
    
    return res.status(200).json({
      result,
      operation: 'add',
      input: { num1, num2 }
    });
  } catch (error) {
    console.error('Add operation error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/calculate/subtract', (req, res) => {
  try {
    const { num1, num2 } = req.body;
    
    // Validate input
    if (num1 === undefined || num2 === undefined) {
      return res.status(400).json({ 
        error: 'Both num1 and num2 are required' 
      });
    }
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return res.status(400).json({ 
        error: 'num1 and num2 must be numbers' 
      });
    }
    
    const result = num1 - num2;
    
    return res.status(200).json({
      result,
      operation: 'subtract',
      input: { num1, num2 }
    });
  } catch (error) {
    console.error('Subtract operation error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Root endpoint to redirect to API docs
app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Calculator server running on port ${PORT}`);
  console.log(`API documentation available at http://localhost:${PORT}/api-docs`);
}); 