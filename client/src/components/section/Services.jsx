import React from "react";
import { motion } from "framer-motion";
import { Heart, Brain, Baby, Activity, Eye, Bone, ArrowRight, Play, CheckCircle } from "lucide-react";


const services = [
  {
    title: "Cardiology",
    desc: "Comprehensive heart health monitoring and advanced diagnostic testing.",
    icon: <Heart size={32} />,
    color: "bg-red-50 text-red-600",
    border: "group-hover:border-red-200"
  },
  {
    title: "Neurology",
    desc: "Expert care for brain, spinal cord, and complex nervous system disorders.",
    icon: <Brain size={32} />,
    color: "bg-purple-50 text-purple-600",
    border: "group-hover:border-purple-200"
  },
  {
    title: "Pediatrics",
    desc: "Specialized medical care for infants, children, and young adolescents.",
    icon: <Baby size={32} />,
    color: "bg-blue-50 text-blue-600",
    border: "group-hover:border-blue-200"
  },
  {
    title: "Orthopedics",
    desc: "Modern solutions for bone, joint, and musculoskeletal rehabilitation.",
    icon: <Bone size={32} />,
    color: "bg-orange-50 text-orange-600",
    border: "group-hover:border-orange-200"
  },
  {
    title: "Ophthalmology",
    desc: "Advanced vision correction and complete eye health management.",
    icon: <Eye size={32} />,
    color: "bg-emerald-50 text-emerald-600",
    border: "group-hover:border-emerald-200"
  },
  {
    title: "Diagnostics",
    desc: "State-of-the-art lab testing and high-resolution imaging services.",
    icon: <Activity size={32} />,
    color: "bg-indigo-50 text-indigo-600",
    border: "group-hover:border-indigo-200"
  }
];

const Services = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
            Our Specialties
          </h2>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            World-class healthcare <br /> tailored for you.
          </h1>
          <p className="text-lg text-gray-500">
            We offer a wide range of medical services designed to provide you with 
            the best possible care through technology and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group p-10 rounded-[2.5rem] border border-gray-100 bg-white transition-all hover:shadow-2xl hover:shadow-gray-200/50 ${service.border}`}
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                {service.desc}
              </p>
              <a href={`/services/${service.title.toLowerCase()}`} className="text-sm font-bold text-primary flex items-center gap-2 group-hover:underline">
                Learn More <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;