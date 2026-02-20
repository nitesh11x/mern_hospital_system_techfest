import React from "react";
import { motion } from "framer-motion";
import { Star, MessageCircle, Calendar, ArrowUpRight } from "lucide-react";

const DOCTORS = [
    {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialty: "Cardiology",
        experience: "12+ Years",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1559839734-2b71f153678e?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 2,
        name: "Dr. Michael Chen",
        specialty: "Neurology",
        experience: "10+ Years",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400"
    },
    {
        id: 3,
        name: "Dr. Emily Blunt",
        specialty: "Dermatology",
        experience: "8+ Years",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400"
    }
];

const Doctors = () => {
    return (
        <div className="min-h-screen bg-[#F4F7FE] pt-16 pb-20 px-6">
            <div className="max-w-7xl mx-auto py-12">
                <header className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-primary font-bold uppercase tracking-[0.2em] text-xs"
                    >
                        Expert Team
                    </motion.span>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">Meet Our Specialists</h1>
                    <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                        Our doctors are world-class professionals dedicated to providing you with the highest level of care.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DOCTORS.map((doc, i) => (
                        <motion.div
                            key={doc.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2.5rem] p-4 shadow-sm border border-gray-100 group hover:shadow-xl transition-all"
                        >
                            <div className="relative overflow-hidden rounded-[2rem] h-64 mb-6">
                                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                                    <span className="text-xs font-black">{doc.rating}</span>
                                </div>
                            </div>

                            <div className="px-4 pb-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{doc.name}</h3>
                                        <p className="text-primary text-sm font-semibold">{doc.specialty}</p>
                                    </div>
                                    <div className="bg-gray-50 p-2 rounded-xl text-gray-400 group-hover:text-primary transition-colors">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>

                                <div className="flex gap-4 border-y border-gray-50 py-4 my-4">
                                    <div>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase">Experience</p>
                                        <p className="text-sm font-bold text-gray-700">{doc.experience}</p>
                                    </div>
                                    <div className="w-px bg-gray-100" />
                                    <div>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase">Patients</p>
                                        <p className="text-sm font-bold text-gray-700">1,200+</p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button className="flex-1 bg-primary text-white py-3 rounded-2xl font-bold text-sm hover:bg-primary-dark transition-all flex items-center justify-center gap-2">
                                        <Calendar size={16} /> Book
                                    </button>
                                    <button className="p-3 border border-gray-100 rounded-2xl text-gray-400 hover:text-primary hover:bg-primary/5 transition-all">
                                        <MessageCircle size={20} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctors;