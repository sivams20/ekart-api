import express from "express";
import Product from "../models/products";
import mongoose from "mongoose";

const router = express.Router();

router.get('/', (req, res, next) => {
    Product.find()
    .exec()
    .then(docs=>{
        res.status(200).json(docs);
    })
    .catch(err=>{
        res.status(500).json({error: err});
    })
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    console.log(product);
    product.save()
    .then(result => {
            console.log(result);
            res.status(200).json({
            message: 'Product Added',
            product: product
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
    .exec()
    .then(doc=>{
        console.log(doc);
        if(doc){
            res.status(200).json(doc);
        }else{
            res.status(404).json({message: "No valid entry found for provided id"})
        }
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.delete("/:productId",(req, res, next)=>{
    const id = req.params.productId;
    Product.remove({_id: id})
    .exec()
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(err=>{
         res.status(500).json({
             error: err
         })
    })
});

export default router;