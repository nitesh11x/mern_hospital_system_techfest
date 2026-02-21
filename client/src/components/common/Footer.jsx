import React from "react";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-gray-300">
      {/* --- TOP SECTION: NEWSLETTER --- */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="bg-primary p-8 md:p-12 rounded-[3rem] flex flex-col lg:flex-row items-center justify-between gap-8 mb-20 shadow-2xl shadow-primary/20">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Stay Updated</h3>
            <p className="text-primary-light/80 font-medium">Get the latest health tips and clinic news.</p>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-white/30 w-full sm:w-80 transition-all"
            />
            <button className="bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
              Subscribe <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* --- MIDDLE SECTION: LINKS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 px-4">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">N</div>
              <span className="text-2xl font-black text-white tracking-tight">NewCare</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Revolutionizing healthcare through digital innovation and compassionate clinical excellence. Your wellness, simplified.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <FooterColumn title="Quick Links" links={[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Our Doctors", href: "/doctors" },
            { name: "Services", href: "/services" },
            { name: "Book Appointment", href: "/appointment" },
          ]} />

          {/* Services */}
          <FooterColumn title="Specialties" links={[
            { name: "Cardiology", href: "#" },
            { name: "Neurology", href: "#" },
            { name: "Pediatrics", href: "#" },
            { name: "Orthopedics", href: "#" },
            { name: "Diagnostics", href: "#" },
          ]} />

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>123 Medical Plaza, Central Park<br />New York, NY 10019</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+1 (555) 000-1234</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <span>support@newcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
          <p>© {currentYear} NewCare Medical Group. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- HELPER COMPONENTS ---

const FooterColumn = ({ title, links }) => (
  <div className="space-y-6">
    <h4 className="text-white font-bold uppercase tracking-widest text-xs">{title}</h4>
    <ul className="space-y-3">
      {links.map((link, i) => (
        <li key={i}>
          <a href={link.href} className="text-sm text-gray-400 hover:text-primary hover:translate-x-1 transition-all inline-block">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400">
    {icon}
  </a>
);

export default Footer;