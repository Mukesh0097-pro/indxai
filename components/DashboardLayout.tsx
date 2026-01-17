import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Terminal,
    Settings,
    LogOut,
    Database,
    Activity,
    Search,
    Bell,
    User
} from 'lucide-react';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: Terminal, label: 'EulerLM Playground', path: '/dashboard/playground' },
        { icon: Database, label: 'Knowledge Base', path: '/dashboard/knowledge' },
        { icon: Activity, label: 'Usage & Billing', path: '/dashboard/usage' },
        { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
    ];

    return (
        <div className="min-h-screen bg-[#F9F8F4] flex font-sans text-stone-800">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 h-screen w-64 bg-stone-900 text-stone-400 flex flex-col border-r border-stone-800 z-20">
                {/* Logo Area */}
                <div className="p-6 border-b border-stone-800 flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
                    <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain bg-white rounded-md" />
                    <div>
                        <h1 className="text-white font-serif tracking-wide text-lg">INDXAI</h1>
                        <p className="text-[10px] uppercase tracking-widest text-nobel-gold font-bold">Enterprise</p>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 py-6 px-3 space-y-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                            <button
                                key={item.path}
                                onClick={() => navigate(item.path)}
                                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group ${isActive
                                    ? 'bg-stone-800 text-white shadow-md'
                                    : 'hover:bg-stone-800/50 hover:text-stone-200'
                                    }`}
                            >
                                <Icon size={18} className={isActive ? 'text-nobel-gold' : 'text-stone-500 group-hover:text-stone-300'} />
                                {item.label}
                            </button>
                        );
                    })}
                </nav>

                {/* User Profile / Logout */}
                <div className="p-4 border-t border-stone-800">
                    <button
                        onClick={() => navigate('/login')}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-stone-400 hover:text-white hover:bg-red-900/20 rounded-lg transition-all"
                    >
                        <LogOut size={18} />
                        Sign Out
                    </button>

                    <div className="mt-4 flex items-center gap-3 px-4">
                        <div className="w-8 h-8 rounded-full bg-nobel-gold text-stone-900 flex items-center justify-center font-bold text-xs">
                            JS
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm text-white truncate">John Smith</p>
                            <p className="text-xs text-stone-500 truncate">Acme Corp</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 ml-64 min-h-screen flex flex-col">
                {/* Top Header */}
                <header className="h-16 bg-white border-b border-stone-200 sticky top-0 z-10 px-8 flex items-center justify-between">
                    {/* Search Bar */}
                    <div className="relative w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search projects, logs, or documentation..."
                            className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-stone-400 focus:bg-white transition-all"
                        />
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-6">
                        <button className="relative text-stone-500 hover:text-stone-800 transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="h-6 w-px bg-stone-200"></div>
                        <button className="flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            System Operational
                        </button>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
