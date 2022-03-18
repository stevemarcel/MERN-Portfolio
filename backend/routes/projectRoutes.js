import express from 'express';
import {
	getProjects,
	createProject,
	updateProject,
	deleteProjects,
} from '../controllers/projectController.js';
const router = express.Router();

router.route('/').get(getProjects).post(createProject);
router.route('/:id').put(updateProject).delete(deleteProjects);

export default router;
