import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
    {
        appointment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Appointment"
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        message: String
    },
    { timestamps: true }
);

export const Chat = mongoose.model("Chat", chatSchema);