import express from 'express';
import {
  createUser,
  getProfile,
  loginUser,
  logoutUser,
  updateProfile,
} from '../controllers/user.js';
import { authenticate } from '../middlewares/auth.js';
import { upload } from '../middlewares/multer.js';

const authRoutes = express.Router();
// Public routes
authRoutes.post('/register', createUser);
authRoutes.post('/login', loginUser);
authRoutes.post('/logout', logoutUser);
// All routes after this middleware require authentication
authRoutes.use(authenticate);
authRoutes.get('/profile', getProfile);
authRoutes.patch('/profile/update', upload.single('image'), updateProfile);

export default authRoutes;
