import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

// @desc AUTH user & get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body; // get email and password from req.body

	const user = await User.findOne({ email }); // find user with email

	if (!user) {
		res.status(401);
		throw new Error('User does not exist'); // throw error if user does not exist
	}

	const matchedPassword = await user.matchPassword(password); // matched password with hashed password in database

	if (user && matchedPassword) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id), // generate token with user's id
		}); // return user data if user exists and password matches
	} else if (!matchedPassword) {
		res.status(401);
		throw new Error('Password is incorrect'); // throw error if password is incorrect
	}
});

// @desc GET user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id); // get user with user's id that was decoded from protect middleware
	if (user) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		}); // return user data if user exists
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

export { authUser, getUserProfile };
