import express from 'express';
import {
	createProject,
	getProjects,
	getProjectById,
	updateProject,
	deleteProjects,
} from '../controllers/projectController.js';
const router = express.Router();

router.route('/').get(getProjects).post(createProject);
router.route('/:id').get(getProjectById).put(updateProject).delete(deleteProjects);

export default router;
