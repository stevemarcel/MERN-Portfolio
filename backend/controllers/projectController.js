import asyncHandler from 'express-async-handler';
import Projects from '../models/projectModel.js';

// @desc Create project
// @route POST /api/projects
// @access Private
const createProject = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error('Please add a text field');
	}

	res.status(200).json({ message: 'Create Project' });
});

// @desc Get all projects
// @route GET /api/projects
// @access Public
const getProjects = asyncHandler(async (req, res) => {
	const projects = await Projects.find({});
	res.status(200).json(projects);
});

// @desc Get single project
// @route GET /api/projects/id
// @access Public
const getProjectById = asyncHandler(async (req, res) => {
	const project = await Projects.findById(req.params.id);

	if (project) {
		res.status(200).json(project);
	} else {
		res.status(404);
		throw new Error('Project not found');
	}
});

// @desc Update project
// @route PUT /api/projects/:id
// @access Private
const updateProject = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Update Project ${req.params.id}` });
});

// @desc Delete project
// @route DELETE /api/projects/:id
// @access Private
const deleteProjects = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Delete Project ${req.params.id}` });
});

export { createProject, getProjects, getProjectById, updateProject, deleteProjects };
