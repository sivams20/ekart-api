import express from "express";
import * as categoryController from '../controllers/category';

const router = express.Router();

router.get('/', categoryController.fetch_category);

export default router;
