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
			avatar: user.avatar,
			token: generateToken(user._id), // generate token with user's id
		}); // return user data if user exists and password matches
	} else if (!matchedPassword) {
		res.status(401);
		throw new Error('Password is incorrect'); // throw error if password is incorrect
	}
});

// @desc REGISTER user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
	// register user
	const { name, email, password, avatar } = req.body; // get name, email, password and avatar from req.body

	const userExists = await User.findOne({ email }); // find user with email

	if (userExists) {
		// if user exists
		res.status(400);
		throw new Error('User already exists');
	}

	const user = await User.create({
		// create user
		name,
		email,
		password,
		avatar,
	}); // create user with name, email, password and avatar

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			avatar: user.avatar,
			token: generateToken(user._id), // generate token with user's id
		});
	} else {
		// if user does not exist
		res.status(400);
		throw new Error('User Data is invalid');
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
			avatar: user.avatar,
		}); // return user data if user exists
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

// @desc UPDATE user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
	// update user profile
	const user = await User.findById(req.user._id); // get user with user's id that was decoded from protect middleware

	if (user) {
		// if user exists
		user.name = req.body.name || user.name; // update user's name or keep user's name if no name is provided
		user.email = req.body.email || user.email; // update user's email or keep user's email if no email is provided
		user.avatar = req.body.avatar || user.avatar; // update user's avatar or keep user's avatar if no avatar is provided
		if (req.body.password) {
			// if password is provided
			user.password = req.body.password; // update user's password
		} else {
			// if password is not provided
			user.password = user.password; // keep user's password
		}
		const updatedUser = await user.save(); // save user
		res.json({
			// return user data
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			isAdmin: updatedUser.isAdmin,
			avatar: updatedUser.avatar,
			token: generateToken(updatedUser._id), // generate token with user's id
		});
	} else {
		// if user was not updated
		res.status(400);
		throw new Error('User not found');
	}
});

// @desc Get all users
// @route GET /api/users
// @access Private/admin only
const getUsers = asyncHandler(async (req, res) => {
	const users = await User.find({});
	res.status(200).json(users);
});

// @desc Delete user
// @route DELETE /api/users/:id
// @access Private/admin only
const deleteUser = asyncHandler(async (req, res) => {
	// get user with user's id that was decoded from protect middleware
	const user = await User.findById(req.params.id);
	if (user) {
		await user.remove();
		res.status(200).json({ message: 'User deleted' });
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

export { authUser, registerUser, getUserProfile, updateUserProfile, getUsers, deleteUser };
