import express from 'express';
import { authProtect } from '../middleware/authProtect.js';
import { addToCart, removeFromCart } from '../controller/userController.js';

const router = express.Router();

router.post('/add-to-cart', authProtect, addToCart);
router.delete('/remove-from-cart/:id', authProtect, removeFromCart);

export default router;
