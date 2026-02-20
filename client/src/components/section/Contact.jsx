import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Info */}
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl font-black text-gray-900 leading-tight">
                Let's Start a <br /> <span className="text-primary">Conversation.</span>
              </h1>
              <p className="text-gray-500 mt-6 text-lg max-w-md">
                Have questions about our services or need technical help? Our team is here for you.
              </p>
            </div>

            <div className="space-y-6">
              <ContactMethod 
                icon={<Phone />} 
                title="Call us anytime" 
                detail="+1 (555) 000-1234" 
              />
              <ContactMethod 
                icon={<Mail />} 
                title="Email support" 
                detail="support@newcare.com" 
              />
              <ContactMethod 
                icon={<MapPin />} 
                title="Visit our clinic" 
                detail="123 Medical Plaza, New York, NY" 
              />
              <ContactMethod 
                icon={<Clock />} 
                title="Working Hours" 
                detail="Mon - Sat: 9:00 AM - 8:00 PM" 
              />
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#F4F7FE] p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-200/50"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full p-4 bg-white rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all border border-transparent focus:border-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full p-4 bg-white rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all border border-transparent focus:border-primary/50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Subject</label>
                <select className="w-full p-4 bg-white rounded-2xl outline-none appearance-none cursor-pointer">
                  <option>General Inquiry</option>
                  <option>Appointment Issue</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Message</label>
                <textarea rows="4" placeholder="How can we help?" className="w-full p-4 bg-white rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all border border-transparent focus:border-primary/50 resize-none"></textarea>
              </div>

              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 group">
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

const ContactMethod = ({ icon, title, detail }) => (
  <div className="flex items-start gap-5">
    <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center shrink-0">
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <div>
      <h4 className="text-sm font-black text-gray-900 uppercase tracking-tighter">{title}</h4>
      <p className="text-gray-500 font-medium">{detail}</p>
    </div>
  </div>
);

export default Contact;