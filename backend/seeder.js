import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import projects from './data/projects.js';
import User from './models/userModel.js';
import Project from './models/projectModel.js';
import connectDB from './config/connectDB.js';

dotenv.config();
await connectDB();

const importData = async () => {
	try {
		await User.deleteMany();
		await Project.deleteMany();

		const allUsers = await User.insertMany(users);

		const adminUser = allUsers[0]._id;

		const allProjects = projects.map((project) => {
			return { ...project, user: adminUser };
		});

		await Project.insertMany(allProjects);

		console.log('Data imported successfully!'.green);
		process.exit();
	} catch (error) {
		console.error(`Error: ${error}`.red.bold);
		process.exit(1);
	}
};
const destroyData = async () => {
	try {
		await User.deleteMany();
		await Project.deleteMany();

		console.log('Data destroyed successfully!'.red.inverse);
		process.exit();
	} catch (error) {
		console.error(`Error: ${error}`.red.bold);
		process.exit(1);
	}
};

process.argv[2] === '-d' ? destroyData() : importData();
