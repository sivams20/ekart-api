import express from "express";
import Product from "../models/products";
import mongoose from "mongoose";

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    console.log(product);
    product.save().then(result => {

    }).catch(err => {

    });
    res.status(200).json({
        message: 'Product Added',
        product: product
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id) {
        res.status(200).json({
            message: 'Passed some ID',
            id
        });
    }
});

export default router;