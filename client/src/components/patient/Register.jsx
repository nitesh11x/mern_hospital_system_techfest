import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock, Phone, Calendar, IdCard, Camera, ArrowRight } from "lucide-react";

const Register = () => {
  const [profilePreview, setProfilePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePreview(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 pb-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100"
      >
        <div className="flex flex-col md:flex-row">
          
          {/* Left Side: Info & Profile Pic */}
          <div className="md:w-1/3 bg-primary p-12 text-white flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-6">Join NewCare</h2>
            <p className="text-primary-light/80 mb-10 text-sm">
              Create your patient profile to start booking appointments and managing your health.
            </p>

            {/* Profile Upload Section */}
            <div className="relative group">
              <div className="w-32 h-32 rounded-full border-4 border-white/20 overflow-hidden bg-white/10 flex items-center justify-center">
                {profilePreview ? (
                  <img src={profilePreview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <User size={48} className="text-white/40" />
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-white text-primary p-2 rounded-full cursor-pointer shadow-lg hover:scale-110 transition-transform">
                <Camera size={18} />
                <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
              </label>
            </div>
            <p className="mt-4 text-xs font-medium uppercase tracking-widest opacity-60">Upload Photo</p>
          </div>

          {/* Right Side: Form */}
          <div className="md:w-2/3 p-8 lg:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Patient ID (Read Only / Defined) */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Patient ID</label>
                  <div className="relative">
                    <IdCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      value="PT-88293" 
                      readOnly 
                      className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-gray-100 rounded-2xl text-gray-500 cursor-not-allowed outline-none font-mono"
                    />
                  </div>
                </div>

                {/* Role (Fixed) */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Account Role</label>
                  <div className="w-full px-4 py-3 bg-primary/5 border border-primary/20 rounded-2xl text-primary font-bold text-sm">
                    Patient
                  </div>
                </div>

                {/* Names */}
                <InputField label="First Name" placeholder="John" icon={<User size={18}/>} />
                <InputField label="Last Name" placeholder="Doe" icon={<User size={18}/>} />

                {/* Contact */}
                <InputField label="Email" type="email" placeholder="john@example.com" icon={<Mail size={18}/>} />
                <InputField label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" icon={<Phone size={18}/>} />

                {/* DOB & Gender */}
                <InputField label="Date of Birth" type="date" icon={<Calendar size={18}/>} />
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Gender</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Password */}
                <div className="md:col-span-2">
                  <InputField label="Password" type="password" placeholder="••••••••" icon={<Lock size={18}/>} />
                </div>
              </div>

              <div className="pt-4">
                <button className="w-full bg-primary cursor-pointer text-white py-4 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all flex items-center justify-center gap-2 group">
                  Create Account 
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

// Internal Helper Component for Inputs
const InputField = ({ label, type = "text", placeholder, icon, value, readOnly }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold text-gray-700 ml-1">{label}</label>
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
        {icon}
      </div>
      <input 
        type={type} 
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all text-gray-900"
      />
    </div>
  </div>
);

export default Register;