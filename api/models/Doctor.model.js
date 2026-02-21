import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
    {
        profile: {
            type: String, 
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient", 
            required: true,
            unique: true // usually one doctor profile per user
        },
        specialization: {
            type: String,
            trim: true
        },
        experience: {
            type: Number, 
            default: 0
        },
        fees: {
            type: Number,
            default: 0
        },
        bio: {
            type: String,
            trim: true
        },
        rating: {
            type: Number,
            default: 0
        },
        totalReviews: {
            type: Number,
            default: 0
        },
        availableSlots: [
            {
                date: Date,
                slots: [String] // e.g. ["10:00 AM", "11:00 AM"]
            }
        ]
    },
    { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);