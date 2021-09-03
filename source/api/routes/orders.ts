import express from "express";
import Order from '../models/orders';
import mongoose from "mongoose";

const router = express.Router();

router.get('/', (req, res, next) => {
    Order.find()
        .select('product quantity _id')
        .populate('product')
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

router.post('/', (req, res, next) => {
    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.productId
    });
    order.save()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        });
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    Order.findById(id)
        .populate('product')
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json();
        });
});

router.delete('/:orderId', (req, res, next)=>{
    Order.remove({_id: req.params.orderId})
    .exec()
    .then((result)=>{
        res.status(200).json({
            message: "Order deleted"
        });
    })
    .catch((err=>{
        res.status(500).json({error: err});
    }));
});

export default router;