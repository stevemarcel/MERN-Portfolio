import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/connectDB.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// importing routes
import projectRoutes from './routes/projectRoutes.js';
import userRoutes from './routes/userRoutes.js';

// Load env variables
dotenv.config();

// Database connection
connectDB();

// Initialize express app
const app = express();

app.use(express.json()); // for json data in req.body
app.use(express.urlencoded({ extended: false })); // for form data in req.body

// Routes mounting
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);

// Error middleware mounting
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
const STATUS = process.env.NODE_ENV;
app.listen(PORT, () =>
	console.log(`Server is running in ${STATUS} mode on port ${PORT}`.bgYellow.green),
);
