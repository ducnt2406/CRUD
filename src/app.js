const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/product.routes');

const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 CRUD API is running!',
    endpoints: {
      'GET /api/products': 'Get all products',
      'GET /api/products/:id': 'Get product by ID',
      'POST /api/products': 'Create product',
      'PUT /api/products/:id': 'Update product',
      'DELETE /api/products/:id': 'Delete product'
    }
  });
});
app.use('/api/products', productRoutes);
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});
module.exports = app;
