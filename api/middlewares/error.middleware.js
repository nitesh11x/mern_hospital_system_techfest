export const errrorMiddleware = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500
    error.message = error.message || "internal Server Error "
    res.status(error.statusCode).json({
        success: false,
        message: error.message
    })
}