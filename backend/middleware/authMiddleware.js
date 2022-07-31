import Jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
	let token;

	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		// if token is in header and starts with Bearer
		token = req.headers.authorization.split(' ')[1]; // get only token from header

		try {
			const decodedToken = await Jwt.verify(token, process.env.JWT_SECRET); // verify token with JWT_SECRET
			req.user = await User.findById(decodedToken.id).select('-password'); //get user details with user's id decoded from token except password

			next();
		} catch (error) {
			console.error(error);
			res.status(401);
			throw new Error('Not authorized, token is not valid');
		}
	}

	if (!token) {
		res.status(401);
		throw new Error('Not authorized, no token provided');
	}
});

const encryptPassword = async function (next) {
	// encrypt password before saving user
	if (this.isModified('password')) {
		// if password is modified
		const salt = await bcrypt.genSalt(10); // generate salt with 10 rounds
		this.password = await bcrypt.hash(this.password, salt); // hash password with salt
	} else {
		// if password is not modified
		next(); // do not encrypt password and move to next middleware
	}
};

export { protect, encryptPassword };
