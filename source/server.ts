
import http from "http";
import express from "express";
import mongoose from "mongoose";

import getAllUsersController from './controllers/getAllUsersController';
import productRoute from './api/routes/products';
import orderRoute from './api/routes/orders';
import userRoute from './api/routes/users';
import categoryRoute from './api/routes/category';

require('dotenv').config();

const cors = require('cors');
const app = express();
app.use(cors());
const server = new http.Server(app);
server.listen(5000);

mongoose.connect('mongodb+srv://siv_admin:siv_admin@ekartcluster.p8pds.mongodb.net/ekart?retryWrites=true&w=majority').then(() => {
    console.log('Connected to database !!');
}).catch((err) => {
    console.log('Connection failed!' + err.message);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use('/user', userRoute);
app.use('/products', productRoute);
app.use('/orders', orderRoute);
app.use('/categories', categoryRoute);
app.get('/users', getAllUsersController);
