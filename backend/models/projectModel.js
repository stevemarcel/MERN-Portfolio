import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		coverImage: {
			type: String,
			required: true,
			default: 'default.jpg',
		},
		logoPNGImage: {
			type: String,
			required: true,
			default: 'logo.jpg',
		},
		projectType: {
			type: String,
			required: true,
		},
		nameOfBrand: {
			type: String,
			required: true,
		},
		sectionImages: [
			{
				type: String,
				required: true,
				default: 'default.jpg',
			},
		],
		brandImages: [
			{
				type: String,
				required: true,
				default: 'default.jpg',
			},
		],
	},
	{
		timestamps: true,
	},
);

const Project = mongoose.model('Project', projectSchema);

export default Project;
