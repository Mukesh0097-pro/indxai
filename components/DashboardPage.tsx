import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';
import {
    Cpu,
    Clock,
    ArrowUpRight,
    MoreHorizontal,
    Zap,
    Brain,
    Database,
    Cloud
} from 'lucide-react';

const StatCard = ({ title, value, change, icon: Icon, trend }: any) => (
    <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-stone-100 rounded-lg text-stone-600">
                <Icon size={20} />
            </div>
            <span className={`text-xs font-bold px-2 py-1 rounded-full ${trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-stone-100 text-stone-500'}`}>
                {change}
            </span>
        </div>
        <h3 className="text-stone-500 text-sm font-medium uppercase tracking-wide">{title}</h3>
        <p className="text-2xl font-serif text-stone-900 mt-1">{value}</p>
    </div>
);

const ProjectCard = ({ name, model, lastActive, status }: any) => (
    <div className="group bg-white border border-stone-200 rounded-xl p-5 hover:border-stone-400 transition-all cursor-pointer">
        <div className="flex justify-between items-start mb-3">
            <div className="w-10 h-10 rounded-lg bg-stone-900 text-white flex items-center justify-center font-serif text-lg">
                {name.charAt(0)}
            </div>
            <button className="text-stone-400 hover:text-stone-800">
                <MoreHorizontal size={18} />
            </button>
        </div>
        <h4 className="font-bold text-stone-900 mb-1">{name}</h4>
        <p className="text-xs text-stone-500 mb-4">Model: {model}</p>

        <div className="flex items-center justify-between pt-4 border-t border-stone-100 text-xs">
            <span className="text-stone-400">Edited {lastActive}</span>
            <span className={`flex items-center gap-1 font-medium ${status === 'Active' ? 'text-green-600' : 'text-stone-400'
                }`}>
                <div className={`w-1.5 h-1.5 rounded-full ${status === 'Active' ? 'bg-green-500' : 'bg-stone-300'}`}></div>
                {status}
            </span>
        </div>
    </div>
);

const DashboardPage: React.FC = () => {
    return (
        <DashboardLayout>
            <div className="max-w-7xl mx-auto">
                {/* Welcome Section */}
                <div className="mb-8 flex justify-between items-end">
                    <div>
                        <h1 className="font-serif text-3xl text-stone-900 mb-2">Welcome back, John</h1>
                        <p className="text-stone-500">Your research workspace is ready. Logic cores operating at 99.9% efficiency.</p>
                    </div>
                    <button className="px-5 py-2.5 bg-stone-900 text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-stone-800 transition-all shadow-lg flex items-center gap-2">
                        <Zap size={16} /> New Project
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <StatCard
                        title="API Calls"
                        value="124,592"
                        change="+12.5%"
                        trend="up"
                        icon={Cloud}
                    />
                    <StatCard
                        title="Compute Hours"
                        value="48.2h"
                        change="Running"
                        trend="neutral"
                        icon={Cpu}
                    />
                    <StatCard
                        title="Knowledge Index"
                        value="14.2 GB"
                        change="+850 MB"
                        trend="up"
                        icon={Database}
                    />
                    <StatCard
                        title="Avg. Confidence"
                        value="99.4%"
                        change="+0.2%"
                        trend="up"
                        icon={Brain}
                    />
                </div>

                {/* Section Title */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-stone-800">Recent Projects</h2>
                    <button className="text-sm text-stone-500 hover:text-stone-900 flex items-center gap-1">
                        View All <ArrowUpRight size={14} />
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <ProjectCard
                        name="FinTech Risk Analysis"
                        model="EulerLM v1.2 (Safe)"
                        lastActive="2 mins ago"
                        status="Active"
                    />
                    <ProjectCard
                        name="Semantic Search Core"
                        model="Indx-Embed-004"
                        lastActive="4 hours ago"
                        status="Idle"
                    />
                    <ProjectCard
                        name="Legal Document Parse"
                        model="EulerLM v1.0"
                        lastActive="1 day ago"
                        status="Idle"
                    />
                </div>

                {/* Usage Graph Placeholder (Visual flair) */}
                <div className="bg-white rounded-xl border border-stone-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-bold text-stone-800">Inference Latency (ms)</h3>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 text-xs font-bold text-white bg-stone-900 rounded-md">24h</span>
                            <span className="px-3 py-1 text-xs font-bold text-stone-500 bg-stone-100 hover:bg-stone-200 rounded-md cursor-pointer">7d</span>
                            <span className="px-3 py-1 text-xs font-bold text-stone-500 bg-stone-100 hover:bg-stone-200 rounded-md cursor-pointer">30d</span>
                        </div>
                    </div>

                    {/* CSS-only Bar Chart visualization */}
                    <div className="h-48 flex items-end gap-2">
                        {[40, 65, 45, 80, 55, 30, 70, 45, 60, 50, 75, 55, 65, 40, 85, 60, 50, 70, 55, 45, 35, 60, 80, 65].map((h, i) => (
                            <div
                                key={i}
                                className="flex-1 bg-stone-100 hover:bg-nobel-gold transition-colors rounded-t-sm relative group"
                                style={{ height: `${h}%` }}
                            >
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-stone-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                    {h}ms
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex justify-between text-xs text-stone-400 font-mono">
                        <span>00:00</span>
                        <span>06:00</span>
                        <span>12:00</span>
                        <span>18:00</span>
                        <span>Now</span>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
};

export default DashboardPage;
