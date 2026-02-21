import mongoose from "mongoose";
const appointmentSchema = new mongoose.Schema(
    {
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
            required: true
        },
        appointmentDate: {
            type: Date,
            required: true
        },
        timeSlot: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["pending", "approved", "completed", "cancelled"],
            default: "pending"
        },
        paymentMode: {
            type: String,
            enum: ["Online", "Offline"],
            required: true
        },
        paymentStatus: {
            type: String,
            enum: ["Pending", "Paid", "Failed"],
            default: "Pending"
        },
        isRecheck: {
            type: Boolean,
            default: false
        },
        recheckEligible: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

export const Appointment = mongoose.model("Appointment", appointmentSchema);