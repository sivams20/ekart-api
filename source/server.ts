
import http from "http";
import express from "express";

import getAllUsersController from './controllers/getAllUsersController';
import productRoute from './api/routes/products';
import orderRoute from './api/routes/orders';

require('dotenv').config();

const app = express();
const server = new http.Server(app);
console.log('HIii');
server.listen(3000);

app.use('/products', productRoute);
app.use('/orders', orderRoute);
app.get('/users', getAllUsersController);
