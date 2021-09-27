import express from "express";
import * as ordersController from '../controllers/orders';

const router = express.Router();

router.get('/', ordersController.fetch_orders);

router.post('/', ordersController.create_order);

router.get('/:orderId', ordersController.fetch_order);

router.delete('/:orderId', ordersController.delete_order);

export default router;
