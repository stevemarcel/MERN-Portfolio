import asyncHandler from 'express-async-handler';
import Projects from '../models/Projects.js';

// @desc Get all projects
// @route GET /api/projects
// @access Public
const getProjects = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Get Projects' });
});

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

export { getProjects, createProject, updateProject, deleteProjects };
