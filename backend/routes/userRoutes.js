const router = express.Router(); // for routing
import express from 'express';
import {
	authUser,
	registerUser,
	getUserProfile,
	updateUserProfile,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

// register user
router.route('/').post(registerUser);

// login user
router.post('/login', authUser);

// get user profile (protected)
// update user profile (protected)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;
