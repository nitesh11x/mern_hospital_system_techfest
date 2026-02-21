// models/Prescription.js
import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema(
    {
        appointment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Appointment",
            required: true
        },
        diagnosis: String,
        medicines: [
            {
                name: String,
                dosage: String,
                frequency: String, // "2 times a day"
                duration: Number,  // in days
                instructions: String
            }
        ],
        notes: String,
        followUpDate: Date
    },
    { timestamps: true }
);

export const Prescription = mongoose.model("Prescription", prescriptionSchema);