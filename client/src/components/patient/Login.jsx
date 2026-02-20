import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Github } from "lucide-react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-stretch bg-white">
            {/* Left Side: Visual/Branding (Hidden on Mobile) */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden lg:flex w-1/2 bg-primary relative items-center justify-center p-12 overflow-hidden"
            >
                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-[-10%] right-[-10%] w-96 h-96 rounded-full bg-white blur-3xl" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 rounded-full bg-black blur-3xl" />
                </div>

                <div className="relative z-10 max-w-md text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Welcome Back to <br /> NewCare Portal
                    </h2>
                    <p className="text-primary-light/80 text-lg leading-relaxed mb-8">
                        "The best way to find yourself is to lose yourself in the service of others."
                    </p>
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-left">
                        <p className="text-white font-medium italic">
                            "Accessing my health records has never been easier. The security and speed are top-notch."
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                            <div className="w-10 h-10 bg-white/20 rounded-full" />
                            <div>
                                <p className="text-white text-sm font-bold">Sarah Jenkins</p>
                                <p className="text-white/60 text-xs">Patient since 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Side: Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md space-y-8"
                >
                    {/* Header */}
                    <div>
                        <h3 className="text-3xl font-extrabold text-gray-900">Sign In</h3>
                        <p className="text-gray-500 mt-2">
                            Don't have an account?
                            <a href="/patient/register" className="text-primary font-bold ml-1 hover:underline">Create one</a>
                        </p>
                    </div>

                    {/* Social Login */}
                    <button className="w-full flex cursor-pointer items-center justify-center gap-3 border border-gray-200 py-3 rounded-2xl font-semibold text-gray-700 hover:bg-gray-50 transition-all">
                        <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
                        Continue with Google
                    </button>

                    <div className="relative flex items-center justify-center">
                        <hr className="w-full border-gray-100" />
                        <span className="absolute bg-white px-4 text-xs text-gray-400 uppercase tracking-widest">Or email</span>
                    </div>

                    {/* Form */}
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all text-gray-900"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between px-1">
                                <label className="text-sm font-bold text-gray-700">Password</label>
                                <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot?</a>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all text-gray-900"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <button className="w-full bg-primary text-white cursor-pointer py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                            Sign In <ArrowRight size={20} />
                        </button>
                    </form>

                    <p className="text-center text-xs text-gray-400 px-8">
                        By signing in, you agree to our
                        <a href="#" className="underline mx-1">Terms of Service</a> and
                        <a href="#" className="underline mx-1">Privacy Policy</a>.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Login;