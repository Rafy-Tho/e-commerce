import express from 'express';
import {
  createUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/user.js';
import { authenticate } from '../middlewares/auth.js';
import { upload } from '../middlewares/multer.js';

const authRoutes = express.Router();

authRoutes.post('/register', createUser);
authRoutes.post('/login', loginUser);
authRoutes.post('/logout', logoutUser);
authRoutes.get('/profile', authenticate, getUserProfile);
authRoutes.patch(
  '/profile/update',
  authenticate,
  upload.single('image'),
  updateUserProfile,
);

export default authRoutes;
