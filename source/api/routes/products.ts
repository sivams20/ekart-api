import express from "express";
import checkAuth from "../middleware/check-auth";
import * as productController from '../controllers/products';

const router = express.Router();

router.get('/', productController.fetch_products);

router.post('/', checkAuth, productController.create_product);

router.get('/:productId', productController.fetch_product);

router.delete("/:productId", productController.delete_product);

router.patch("/:productId", productController.update_product);

export default router;