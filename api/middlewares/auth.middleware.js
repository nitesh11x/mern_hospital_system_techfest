import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/errorHandler.utils.js";

export const isPatientAuth = (req, res, next) => {
    const token = req.cookies.patientToken;

    if (!token) {
        return next(new ErrorHandler("Not authenticated", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
};