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
			default: 'default.jpg',
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
		// projectOutline: {
		// 	type: String,
		// 	required: true,
		// },
		// colour: {
		// 	type: String,
		// 	required: true,
		// 	default: 'default.jpg',
		// },
		// typeface: {
		// 	type: String,
		// 	required: true,
		// 	default: 'default.jpg',
		// },
	},
	{
		timestamps: true,
	},
);

const Project = mongoose.model('User', projectSchema);

export default Project;
