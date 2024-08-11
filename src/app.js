const express = require('express');
const orderRoutes = require('./routes/orderRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger');

const app = express();
const baseURL = '/api';

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(`${baseURL}/order`, orderRoutes);


module.exports = app;
