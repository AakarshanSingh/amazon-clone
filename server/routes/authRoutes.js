import express from 'express';
import {
  getUserData,
  signIn,
  signUp,
  tokenIsValid,
} from '../controller/authController.js';
import { authProtect } from '../middleware/authProtect.js';

const router = express.Router();

router.post('/api/signup', signUp);
router.post('/api/signin', signIn);
router.post('/tokenIsValid', tokenIsValid);
router.get('/', authProtect, getUserData);

export default router;
