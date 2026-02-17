import express from 'express';
import {
  createUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/user.js';
import { authenticate } from '../middlewares/auth.js';

const authRoutes = express.Router();

authRoutes.post('/register', createUser);
authRoutes.post('/login', loginUser);
authRoutes.post('/logout', logoutUser);
authRoutes.get('/profile', authenticate, getUserProfile);
authRoutes.patch('/profile/update', authenticate, updateUserProfile);

export default authRoutes;
