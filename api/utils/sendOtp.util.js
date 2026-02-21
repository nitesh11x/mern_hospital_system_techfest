import nodemailer from "nodemailer";
import { asyncHandler } from "./asyncHandler.util.js";

export const sendMail = asyncHandler(async (to, otp) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: to,
    subject: "Email Verification - New Care",
    html: `
      <div style="font-family: Arial, sans-serif; padding:20px;">
        <h2 style="color:#1a73e8;">Nmedia Verification</h2>
        <p>Hello,</p>
        <p>Your OTP code is:</p>
        <h1 style="letter-spacing:5px; color:#1a73e8;">${otp}</h1>
        <p>This code is valid for 5 minutes.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
});
