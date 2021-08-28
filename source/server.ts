
import http from "http";
import express from "express";

import getAllUsersController from './controllers/getAllUsersController';
import productRoute from './api/routes/products';
import orderRoute from './api/routes/orders';

require('dotenv').config();

const app = express();
const server = new http.Server(app);
server.listen(3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
});

app.use('/products', productRoute);
app.use('/orders', orderRoute);
app.get('/users', getAllUsersController);
