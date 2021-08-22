
import http from "http";
import express from "express";

import getAllUsersController from './controllers/getAllUsersController';
import productRoute from './api/routes/products';

require('dotenv').config();

const app = express();
const server = new http.Server(app);
console.log('HIii');
server.listen(3000);

app.use('/products', productRoute);

app.get('/users', getAllUsersController);
