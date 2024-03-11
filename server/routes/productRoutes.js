import express from 'express';
import { authProtect } from '../middleware/authProtect.js';
import {
  dealOfTheDay,
  productCategory,
  rateProduct,
  searchProduct,
} from '../controller/productController.js';

const router = express.Router();

router.get('/products', authProtect, productCategory);
router.get('/search/:productName', authProtect, searchProduct);
router.post('/rate-product', authProtect, rateProduct);
router.get('/deal-of-the-day', authProtect, dealOfTheDay);

export default router;
