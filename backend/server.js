import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/connectDB.js';
import { errorHandler } from './middleware/errorMiddleware.js';

import projectRoutes from './routes/projectRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/projects', projectRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const STATUS = process.env.NODE_ENV;
app.listen(PORT, () =>
	console.log(`Server is running in ${STATUS} mode on port ${PORT}`.bgYellow.green),
);
