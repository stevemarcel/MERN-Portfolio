import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 5,
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
		avatar: {
			type: String,
			default: 'defaultAvatar.gif',
		},
	},
	{
		timestamps: true,
	},
);

// Match entered password to hashed password in database
userSchema.methods.matchPassword = function (enteredPassword) {
	return bcrypt.compare(enteredPassword, this.password); // compare enteredPassword with this user's password
};

const User = mongoose.model('User', userSchema); // create User model from userSchema

export default User;
