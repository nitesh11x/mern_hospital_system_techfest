import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    const token = req.cookies.patientToken;
    if (!token) return next(new errorHandler("Not authenticated", 401));

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
};