import express from "express";
import { loginPatientWithPassword } from "../controllers/patient.controller.js";

const router = express.Router();

router.post("/login-password", loginPatientWithPassword);

export default router;
