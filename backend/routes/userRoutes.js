const router = express.Router(); // for routing
import express from 'express';
import {
	authUser,
	registerUser,
	getUserProfile,
	updateUserProfile,
	getUsers,
  deleteUser,
} from '../controllers/userController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

// register user
// get users (protected and admin only)
router.route('/').post(registerUser).get(protect, adminOnly, getUsers);

// login user
router.post('/login', authUser);

// get user profile (protected)
// update user profile (protected)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

// delete user (protected and admin only)
router.route('/:id').delete(protect, adminOnly, deleteUser);

export default router;
