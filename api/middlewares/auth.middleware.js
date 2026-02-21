import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/errorHandler.utils.js";

export const isPatientAuth = (req, res, next) => {
    const token = req.cookies.patientToken;
    if (!token) {
        return next(new ErrorHandler("Not authenticated", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.patient = decoded;
    next();
};
export const isDoctorAuth = (req, res, next) => {
    const token = req.cookies.doctorToken;
    if (!token) {
        return next(new ErrorHandler("Not authenticated", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.doctor = decoded;
    next();
};
export const isAdminAuth = (req, res, next) => {
    const token = req.cookies.adminToken;
    if (!token) {
        return next(new ErrorHandler("Not authenticated", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    next();
};