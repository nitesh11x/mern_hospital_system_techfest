import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
            required: true
        },
        specialization: String,
        experience: Number,
        fees: Number,
        bio: String,
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
                slots: [String] // ["10:00 AM", "11:00 AM"]
            }
        ]
    },
    { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);