import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin',
		email: 'admin@amin.com',
		password: bcrypt.hashSync('admin1234', 10),
		isAdmin: true,
		avatar: 'admin.png',
	},
	{
		name: 'Steve Smith',
		email: 'steve@user.com',
		password: bcrypt.hashSync('user1234', 10),
		avatar: 'male.png'
	},
	{
		name: 'Zita Smith',
		email: 'Zita@user.com',
		password: bcrypt.hashSync('user1234', 10),
		avatar: 'female.png'
	},
];

export default users;
