import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    LayoutDashboard,
    Calendar,
    FileText,
    Settings,
    LogOut,
    Bell,
    Search,
    Activity,
    Droplets,
    Thermometer,
    Menu,
    User

} from "lucide-react";

// --- Dummy Data ---
const RECENT_VISITS = [
    { id: 1, doctor: "Dr. Sarah Johnson", specialty: "Cardiology", date: "Oct 12, 2025", status: "Completed" },
    { id: 2, doctor: "Dr. Michael Chen", specialty: "General Medicine", date: "Sept 28, 2025", status: "Follow-up" },
    { id: 3, doctor: "Dr. Emily Blunt", specialty: "Dermatology", date: "Aug 15, 2025", status: "Completed" },
];

const HEALTH_STATS = [
    { label: "Heart Rate", value: "72 bpm", icon: <Activity size={20} className="text-red-500" />, color: "bg-red-50" },
    { label: "Glucose", value: "95 mg/dL", icon: <Droplets size={20} className="text-blue-500" />, color: "bg-blue-50" },
    { label: "Body Temp", value: "36.6 °C", icon: <Thermometer size={20} className="text-orange-500" />, color: "bg-orange-50" },
];

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("dashboard");

    return (
        // mt-16 accounts for your fixed navbar height
        <div className="flex min-h-screen bg-[#F4F7FE] pt-16">

            {/* --- SIDEBAR (Desktop) --- */}
            <aside className="w-64 bg-white border-r border-gray-100 hidden lg:flex flex-col p-6 sticky top-16 h-[calc(100vh-64px)]">
                <nav className="flex-1 space-y-2">
                    <SidebarItem
                        icon={<LayoutDashboard size={20} />}
                        label="Dashboard"
                        active={activeTab === "dashboard"}
                        onClick={() => setActiveTab("dashboard")}
                    />
                    <SidebarItem
                        icon={<Calendar size={20} />}
                        label="Appointments"
                        active={activeTab === "visits"}
                        onClick={() => setActiveTab("visits")}
                    />
                    <SidebarItem icon={<FileText size={20} />} label="Health Records" />
                    <SidebarItem icon={<Settings size={20} />} label="Settings" />
                </nav>

                <button className="flex items-center gap-3 p-3 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all mt-auto font-medium">
                    <LogOut size={20} /> Logout
                </button>
            </aside>

            {/* --- MOBILE BOTTOM NAV --- */}
            <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center z-40 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
                <MobileNavItem icon={<LayoutDashboard size={20} />} active={activeTab === "dashboard"} onClick={() => setActiveTab("dashboard")} />
                <MobileNavItem icon={<Calendar size={20} />} active={activeTab === "visits"} onClick={() => setActiveTab("visits")} />
                <MobileNavItem icon={<FileText size={20} />} />
                <MobileNavItem icon={<User size={20} />} />
            </div>

            {/* --- MAIN CONTENT --- */}
            <main className="flex-1 p-4 md:p-8 lg:p-12 pb-24 lg:pb-12">
                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Welcome back, Alex! 👋</h1>
                        <p className="text-gray-500 text-sm md:text-base">Your health overview is ready.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative flex-1 md:flex-none">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full md:w-64 pl-10 pr-4 py-2.5 bg-white border border-gray-100 rounded-xl shadow-sm focus:ring-2 focus:ring-primary/20 outline-none"
                            />
                        </div>
                        <button className="p-2.5 bg-white border border-gray-100 rounded-xl shadow-sm text-gray-500 relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                        </button>
                    </div>
                </header>

                {/* Health Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10">
                    {HEALTH_STATS.map((stat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-white p-5 rounded-3xl shadow-sm border border-gray-50 flex items-center gap-4"
                        >
                            <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center shrink-0`}>
                                {stat.icon}
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{stat.label}</p>
                                <p className="text-xl font-black text-gray-900">{stat.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Visit History */}
                    <section className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 md:p-8 border-b border-gray-50 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-gray-900">Recent Visits</h3>
                            <button className="text-primary font-bold text-xs uppercase tracking-widest hover:underline">View All</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <tbody className="divide-y divide-gray-50">
                                    {RECENT_VISITS.map((visit) => (
                                        <tr key={visit.id} className="hover:bg-gray-50/50 transition-colors group">
                                            <td className="px-6 md:px-8 py-5">
                                                <p className="font-bold text-gray-900">{visit.doctor}</p>
                                                <p className="text-xs text-gray-400">{visit.specialty}</p>
                                            </td>
                                            <td className="px-6 md:px-8 py-5 text-sm text-gray-500 hidden sm:table-cell">{visit.date}</td>
                                            <td className="px-6 md:px-8 py-5 text-right">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${visit.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                                                    }`}>
                                                    {visit.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Quick Actions */}
                    <section className="space-y-6">
                        <div className="bg-primary rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
                            <h4 className="text-xl font-bold mb-2 relative z-10">Instant Booking</h4>
                            <p className="text-primary-light/80 text-sm mb-6 relative z-10">Available specialists ready to help you now.</p>
                            <button className="w-full bg-white text-primary py-3.5 rounded-2xl font-black text-sm uppercase tracking-wider hover:shadow-lg transition-all relative z-10">
                                Book Now
                            </button>
                        </div>

                        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
                            <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Next Appointment</h4>
                            <div className="flex gap-4 items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <div className="bg-white p-3 rounded-xl text-primary shadow-sm">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Dr. Emily Blunt</p>
                                    <p className="text-xs text-gray-500 font-medium tracking-tight">24 Oct • 10:00 AM</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

const SidebarItem = ({ icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold transition-all ${active
            ? "bg-primary text-white shadow-xl shadow-primary/20"
            : "text-gray-400 hover:bg-gray-50 hover:text-gray-900"
            }`}
    >
        {icon}
        <span className="text-sm">{label}</span>
    </button>
);

const MobileNavItem = ({ icon, active, onClick }) => (
    <button
        onClick={onClick}
        className={`p-3 rounded-xl transition-all ${active ? "bg-primary/10 text-primary" : "text-gray-400"}`}
    >
        {icon}
    </button>
);

export default Dashboard;