import express from 'express';
import { authProtect } from '../middleware/authProtect.js';
import {
  addToCart,
  myOrders,
  order,
  removeFromCart,
  saveUserAddress,
} from '../controller/userController.js';

const router = express.Router();

router.post('/add-to-cart', authProtect, addToCart);
router.delete('/remove-from-cart/:id', authProtect, removeFromCart);
router.post('/save-user-address', authProtect, saveUserAddress);
router.post('/order', authProtect, order);
router.get('/orders/me', authProtect, myOrders);

export default router;
