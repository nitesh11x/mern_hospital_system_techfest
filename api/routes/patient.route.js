import express from "express";
import {
  registerPatient,
  loginPatientWithPassword,
  logoutPatient,
} from "../controllers/patient.controller.js";
import { isPatientAuth } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", registerPatient);
router.post("/login", loginPatientWithPassword);
router.post("/logout", logoutPatient);
router.post("/profile/me", isPatientAuth, logoutPatient);

export default router;