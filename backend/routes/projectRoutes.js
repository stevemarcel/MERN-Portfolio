import express from 'express';
import {
	createProject,
	getProjects,
	getProjectById,
	updateProject,
	deleteProjects,
} from '../controllers/projectController.js';
const router = express.Router(); // for routing

// get all projects
// create a new project (protected)
router.route('/').get(getProjects).post(createProject); 

// get single project
// update project (protected)
// delete project (protected)
router.route('/:id').get(getProjectById).put(updateProject).delete(deleteProjects); 

export default router;
