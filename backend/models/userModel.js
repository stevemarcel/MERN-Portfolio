import mongoose from 'mongoose';

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
			default: 'default.jpg',
		},
	},
	{
		timestamps: true,
	},
);

const User = mongoose.model('User', userSchema);

export default User;