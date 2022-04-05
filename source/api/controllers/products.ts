import mongoose from "mongoose";
import Product from "../models/products";

const fetch_products = (req, res, next) => {
    Product.find()
        .select('name price _id')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                products: docs
            }
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        })
}

const create_product = (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save()
        .then(result => {
            res.status(200).json({
                message: 'Product created successfully.',
                product: product
            })
        }).catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

const fetch_product=  (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({ message: "No valid entry found for provided id" })
            }
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

const delete_product = (req, res, next) => {
    const id = req.params.productId;
    Product.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

const update_product = (req, res, next) => {
    const id = req.params.productId;
    Product.updateOne({ _id: id }, { $set: { name: req.body.newName, price: req.body.newPrice } })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });
}

export {fetch_products, fetch_product, create_product, delete_product, update_product};
