import Jwt  from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
	let token;

	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {  // if token is in header and starts with Bearer
		token = req.headers.authorization.split(' ')[1];  // get only token from header

		try {
			const decodedToken = await Jwt.verify(token, process.env.JWT_SECRET); // verify token with JWT_SECRET
			req.user = await User.findById(decodedToken.id).select('-password');  //get user details with user's id decoded from token except password

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

export { protect };
