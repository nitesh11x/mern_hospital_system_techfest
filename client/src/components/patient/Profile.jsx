import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    User,
    Mail,
    Phone,
    MapPin,
    Calendar,
    ShieldCheck,
    Edit3,
    Camera,
    Fingerprint,
    HeartPulse
} from "lucide-react";

const Profile = () => {
    // Dummy Patient State
    const [patient, setPatient] = useState({
        firstName: "Alex",
        lastName: "Doe",
        email: "alex.doe@example.com",
        phone: "+1 (555) 123-4567",
        dob: "1992-08-24",
        gender: "Male",
        patientId: "PT-88293",
        bloodGroup: "O+",
        address: "123 Healthcare Way, New York, NY",
        emergencyContact: "Jane Doe (+1 555-999-0000)"
    });

    return (
        <div className="min-h-screen bg-[#F4F7FE] mt-16 pb-20">
            <div className="max-w-5xl mx-auto px-6 py-10">

                {/* --- PROFILE HEADER CARD --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 mb-8 relative overflow-hidden"
                >
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                        <div className="relative group">
                            <div className="w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-primary overflow-hidden">
                                <User size={64} />
                            </div>
                            <button className="absolute bottom-2 right-2 p-2.5 bg-primary text-white rounded-full shadow-lg hover:scale-110 transition-transform">
                                <Camera size={18} />
                            </button>
                        </div>

                        <div className="text-center md:text-left flex-1">
                            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                                <h1 className="text-4xl font-black text-gray-900">{patient.firstName} {patient.lastName}</h1>
                                <span className="w-fit mx-auto md:mx-0 px-3 py-1 bg-green-100 text-green-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                                    Verified Account
                                </span>
                            </div>
                            <p className="text-gray-500 font-medium mb-6 flex items-center justify-center md:justify-start gap-2">
                                <Fingerprint size={16} /> Patient ID: {patient.patientId}
                            </p>

                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <button className="bg-primary text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-primary-dark transition-all">
                                    <Edit3 size={18} /> Edit Profile
                                </button>
                                <button className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-2xl font-bold hover:bg-gray-50 transition-all">
                                    Security Settings
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* --- INFORMATION GRID --- */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Left Column: Personal Details */}
                    <div className="md:col-span-2 space-y-8">
                        <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                                <User size={20} className="text-primary" /> Personal Information
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-y-8 gap-x-12">
                                <InfoItem label="First Name" value={patient.firstName} icon={<User />} />
                                <InfoItem label="Last Name" value={patient.lastName} icon={<User />} />
                                <InfoItem label="Email Address" value={patient.email} icon={<Mail />} />
                                <InfoItem label="Phone Number" value={patient.phone} icon={<Phone />} />
                                <InfoItem label="Date of Birth" value={patient.dob} icon={<Calendar />} />
                                <InfoItem label="Gender" value={patient.gender} icon={<User />} />
                            </div>
                        </section>

                        <section className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                                <MapPin size={20} className="text-primary" /> Contact & Location
                            </h3>
                            <div className="space-y-6">
                                <InfoItem label="Home Address" value={patient.address} icon={<MapPin />} fullWidth />
                                <InfoItem label="Emergency Contact" value={patient.emergencyContact} icon={<ShieldCheck />} fullWidth />
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Health Quick Look */}
                    <aside className="space-y-8">
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2.5rem] p-8 text-white shadow-xl shadow-gray-200">
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                <HeartPulse size={20} className="text-primary" /> Medical Brief
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Blood Group</p>
                                    <p className="text-3xl font-black">{patient.bloodGroup}</p>
                                </div>
                                <div className="h-px bg-white/10 w-full" />
                                <div>
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Allergies</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {["Peanuts", "Penicillin"].map(item => (
                                            <span key={item} className="px-3 py-1 bg-white/10 rounded-lg text-xs font-bold">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-4 text-sm">Download My Data</h4>
                            <p className="text-gray-500 text-xs mb-6 leading-relaxed">
                                Export your medical records and profile details in a secure PDF format.
                            </p>
                            <button className="w-full py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-100 transition-all">
                                Generate Health Report
                            </button>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
};

// --- HELPER COMPONENT ---
const InfoItem = ({ label, value, icon, fullWidth = false }) => (
    <div className={`${fullWidth ? "w-full" : ""}`}>
        <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-2 ml-1">
            {label}
        </p>
        <div className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-100 rounded-2xl">
            <div className="text-primary/50 shrink-0">
                {React.cloneElement(icon, { size: 18 })}
            </div>
            <p className="text-gray-900 font-bold text-sm truncate">{value}</p>
        </div>
    </div>
);

export default Profile;