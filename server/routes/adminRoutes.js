import express from 'express';
import { adminProtect } from '../middleware/adminProduct.js';
import {
  addProduct,
  deleteProduct,
  getAllProducts,
} from '../controller/adminController.js';
const router = express.Router();

router.post('/add-product', adminProtect, addProduct);
router.get('/get-products', adminProtect, getAllProducts);
router.delete('/delete', adminProtect, deleteProduct);

export default router;
