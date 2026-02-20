import crypto from "crypto";
import { asyncHandler } from "./asyncHandler.util.js";
export const generateOtp = asyncHandler(async () => {
    const userOtp = crypto.randomInt(100000, 1000000);
    return userOtp;
});
