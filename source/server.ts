
import http from "http";
import express from "express";
import mongoose from "mongoose";

import getAllUsersController from './controllers/getAllUsersController';
import productRoute from './api/routes/products';
import orderRoute from './api/routes/orders';

require('dotenv').config();

const app = express();
const server = new http.Server(app);
server.listen(3000);

mongoose.connect('mongodb+srv://siv_admin:siv_admin@ekartcluster.p8pds.mongodb.net/ekart?retryWrites=true&w=majority').then(() => {
    console.log('Connected to database !!');
}).catch((err) => {
    console.log('Connection failed!' + err.message);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use('/products', productRoute);
app.use('/orders', orderRoute);
app.get('/users', getAllUsersController);
