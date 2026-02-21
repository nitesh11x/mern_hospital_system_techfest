import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ShieldCheck, ArrowRight, X, RefreshCcw } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { sendOtpThunk, verifyOtpThunk } from "../../redux/slices/otp.slice";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


const OtpForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading } = useSelector((state) => state.otp || { loading: false });

    const [email, setEmail] = useState(localStorage.getItem("patientEmail") || "");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputsRef = useRef([]);

    /* ================= SEND OTP ================= */
    const handleSendOtp = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please enter an email");
            return;
        }

        try {
            await dispatch(sendOtpThunk(email)).unwrap();
            toast.success("OTP sent successfully 📩");
            setIsModalOpen(true);
            localStorage.setItem("patientEmail", email);
            // focus first otp input after modal open
            setTimeout(() => inputsRef.current[0]?.focus(), 120);
        } catch (err) {
            toast.error(err || "Failed to send OTP");
        }
    };

    /* ================= OTP INPUT ================= */
    const handleOtpChange = (value, index) => {
        if (!/^\d?$/.test(value)) return; // allow empty or single digit

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && inputsRef.current[index + 1]) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleOtpKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && inputsRef.current[index - 1]) {
            inputsRef.current[index - 1].focus();
        }
        if (e.key === "ArrowLeft" && inputsRef.current[index - 1]) {
            inputsRef.current[index - 1].focus();
        }
        if (e.key === "ArrowRight" && inputsRef.current[index + 1]) {
            inputsRef.current[index + 1].focus();
        }
    };

    /* ================= VERIFY OTP ================= */
    const verifyOtp = async () => {
        const finalOtp = otp.join("");
        if (finalOtp.length !== 6) {
            toast.error("Enter complete 6-digit OTP");
            return;
        }

        const storedEmail = localStorage.getItem("patientEmail");
        if (!storedEmail) {
            toast.error("Email lost — please resend OTP");
            setIsModalOpen(false);
            return;
        }

        try {
            await dispatch(verifyOtpThunk({ email: storedEmail, otp: finalOtp })).unwrap();
            toast.success("OTP verified 🎉");
            // clear otp inputs
            setOtp(["", "", "", "", "", ""]);
            setIsModalOpen(false);
            // redirect to register (replace so user can't go back)
            navigate("/patient/register", { replace: true });
        } catch (err) {
            toast.error(err || "Invalid OTP");
        }
    };

    /* ================= RESEND OTP ================= */
    const handleResend = async () => {
        const storedEmail = localStorage.getItem("patientEmail") || email;
        if (!storedEmail) {
            toast.error("No email to resend to");
            return;
        }
        try {
            await dispatch(sendOtpThunk(storedEmail)).unwrap();
            toast.success("OTP resent 📩");
            setIsModalOpen(true);
            setTimeout(() => inputsRef.current[0]?.focus(), 120);
        } catch (err) {
            toast.error(err || "Resend failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F4F7FE] px-6">
            {/* EMAIL STEP */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100"
            >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                    <Mail size={32} />
                </div>

                <h2 className="text-3xl font-black text-gray-900 mb-2">Enter Email</h2>
                <p className="text-gray-500 mb-8 font-medium">Enter your email and we'll send a 6-digit code.</p>

                <form onSubmit={handleSendOtp} className="space-y-6">
                    <input
                        required
                        type="email"
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 outline-none"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2"
                    >
                        {loading ? "Sending..." : "Send OTP"}
                        {!loading && <ArrowRight size={20} />}
                    </button>
                    <div className="text-center mt-4 text-sm">
                        Already have an account?
                        <Link
                            to="/patient/login"
                            className="text-primary font-bold ml-1 hover:underline"
                        >
                            Login
                        </Link>
                    </div>
                    
                </form>
            </motion.div>

            {/* OTP MODAL */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 50, scale: 0.9 }}
                            className="relative w-full max-w-sm bg-white rounded-[3rem] p-10 shadow-2xl"
                        >
                            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-gray-400">
                                <X size={20} />
                            </button>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <ShieldCheck size={32} />
                                </div>

                                <h3 className="text-2xl font-black mb-6">Verify OTP</h3>

                                <div className="flex justify-center gap-3 mb-8">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            ref={(el) => (inputsRef.current[index] = el)}
                                            type="text"
                                            inputMode="numeric"
                                            pattern="\d*"
                                            maxLength="1"
                                            value={digit}
                                            onChange={(e) => handleOtpChange(e.target.value, index)}
                                            onKeyDown={(e) => handleOtpKeyDown(e, index)}
                                            className="w-14 h-16 text-2xl font-black text-center bg-gray-50 border rounded-2xl focus:ring-4 focus:ring-primary/10 outline-none"
                                        />
                                    ))}
                                </div>

                                <button onClick={verifyOtp} disabled={loading} className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold mb-4">
                                    {loading ? "Verifying..." : "Verify & Proceed"}
                                </button>

                                <button onClick={handleResend} className="flex items-center justify-center gap-2 mx-auto text-sm font-bold text-primary hover:underline">
                                    <RefreshCcw size={14} /> Resend Code
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default OtpForm;