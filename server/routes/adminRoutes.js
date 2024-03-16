import express from 'express';
import { adminProtect } from '../middleware/adminProduct.js';
import {
  addProduct,
  analytics,
  changeOrderStatus,
  deleteProduct,
  getAllOrders,
  getAllProducts,
} from '../controller/adminController.js';

const router = express.Router();

router.post('/add-product', adminProtect, addProduct);
router.get('/get-products', adminProtect, getAllProducts);
router.delete('/delete', adminProtect, deleteProduct);
router.get('/get-orders', adminProtect, getAllOrders);
router.post('/change-order-status', adminProtect, changeOrderStatus);
router.get('/analytics', adminProtect, analytics);

export default router;
