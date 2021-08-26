import express from "express";

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /orders'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(200).json({
        message: 'Order created',
        order
    });
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    if (id) {
        res.status(200).json({
            message: 'Passed some order ID',
            id
        });
    }
});

export default router;