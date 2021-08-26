import express from "express";

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
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