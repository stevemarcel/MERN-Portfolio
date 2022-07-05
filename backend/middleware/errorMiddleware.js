// Not found middleware
const notFound = (req, res, next) => {
	const error = new Error(`Error: Not Found - ${req.originalUrl}`);
	res.status(404);
	next(error);
};

// Error handling middleware
const errorHandler = (err, req, res, next) => {
	// const statuscode = res.statuscode ? res.statuscode : 500;
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

	res.status(statusCode);

	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack,
	});
};

export { notFound, errorHandler };
