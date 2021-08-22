import express from "express";

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /orders'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request to /orders'
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