import React, { useState, useRef, useEffect } from 'react';
import DashboardLayout from './DashboardLayout';
import { Send, Terminal, Cpu, Play, Trash2, Save, Download, Settings } from 'lucide-react';

/* 
 * A simple visualizer that simulates a "Matrix" calculation effect 
 * to represent the pinned pseudo-inverse operation.
 */
const MatrixVisualizer = ({ active }: { active: boolean }) => {
    return (
        <div className={`w-full h-full bg-stone-950 rounded-lg overflow-hidden relative border border-stone-800 font-mono text-xs ${active ? 'animate-pulse-slow' : ''}`}>
            <div className="absolute top-2 left-4 text-stone-500 select-none">Live Matrix State</div>
            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                <div className="grid grid-cols-8 gap-2 text-green-500/50">
                    {Array.from({ length: 64 }).map((_, i) => (
                        <span key={i} className="animate-pulse" style={{ animationDelay: `${Math.random() * 2}s` }}>
                            {(Math.random()).toFixed(2)}
                        </span>
                    ))}
                </div>
            </div>
            {active && (
                <div className="absolute inset-0 bg-stone-900/10 backdrop-blur-[1px] flex items-center justify-center">
                    <div className="bg-stone-900 border border-nobel-gold/50 text-nobel-gold px-4 py-2 rounded shadow-[0_0_15px_rgba(235,180,65,0.2)] animate-float">
                        Computing SVD...
                    </div>
                </div>
            )}
        </div>
    );
};

const PlaygroundPage: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState<string | null>(null);
    const [isComputing, setIsComputing] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([]);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleRun = () => {
        if (!prompt.trim()) return;

        // Add user message
        const newMessages = [...messages, { role: 'user' as const, text: prompt }];
        setMessages(newMessages);
        setPrompt('');
        setIsComputing(true);

        // Simulate calculation delay
        setTimeout(() => {
            const mockResponse = "Based on the projection onto the verified subspace, the optimal solution indicates a convergence at rate α = 0.045. The pseudo-inverse method eliminates the stochastic error found in your control group.";
            setMessages([...newMessages, { role: 'assistant' as const, text: mockResponse }]);
            setIsComputing(false);
        }, 2000);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleRun();
        }
    };

    return (
        <DashboardLayout>
            <div className="h-[calc(100vh-140px)] flex gap-6">

                {/* Left: Chat / Input Console */}
                <div className="flex-1 flex flex-col bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
                    {/* Header */}
                    <div className="p-4 border-b border-stone-100 flex justify-between items-center bg-stone-50/50">
                        <div className="flex items-center gap-2 text-stone-600">
                            <Terminal size={18} />
                            <span className="font-bold text-sm uppercase tracking-wider">Console</span>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-2 text-stone-400 hover:text-stone-800 transition-colors" title="Clear History" onClick={() => setMessages([])}>
                                <Trash2 size={16} />
                            </button>
                            <button className="p-2 text-stone-400 hover:text-stone-800 transition-colors" title="Save Session">
                                <Save size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-stone-50/30">
                        {messages.length === 0 && (
                            <div className="h-full flex flex-col items-center justify-center text-stone-400 opacity-60">
                                <Cpu size={48} className="mb-4" />
                                <p>Ready for input...</p>
                            </div>
                        )}

                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-2xl px-5 py-4 text-sm leading-relaxed ${msg.role === 'user'
                                    ? 'bg-stone-900 text-white rounded-br-none'
                                    : 'bg-white border border-stone-200 text-stone-700 rounded-bl-none shadow-sm'
                                    }`}>
                                    {msg.text}
                                    {msg.role === 'assistant' && (
                                        <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-400">
                                            <span>Confidence: 99.8% (Condition #: 1.2e-4)</span>
                                            <span className="flex items-center gap-1"><Download size={10} /> JSON</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        {isComputing && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-stone-200 rounded-2xl rounded-bl-none px-5 py-4 shadow-sm flex items-center gap-3">
                                    <div className="w-2 h-2 bg-nobel-gold rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-nobel-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="w-2 h-2 bg-nobel-gold rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-stone-200">
                        <div className="relative">
                            <textarea
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Enter a command or analytical query..."
                                className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-4 pr-14 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-stone-200 resize-none h-[60px]"
                            />
                            <button
                                onClick={handleRun}
                                disabled={!prompt.trim() || isComputing}
                                className="absolute right-2 top-2 bottom-2 aspect-square bg-stone-900 text-white rounded-lg flex items-center justify-center hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                        <div className="mt-2 flex justify-between items-center text-[10px] text-stone-400 uppercase font-bold tracking-widest px-1">
                            <span>EulerLM v1.2</span>
                            <span>Tokens: 0 / 4096</span>
                        </div>
                    </div>
                </div>

                {/* Right: Visualization / Settings Panel */}
                <div className="w-96 flex flex-col gap-6">
                    {/* Visualizer Card */}
                    <div className="bg-stone-900 rounded-xl p-1 h-64 shadow-lg flex flex-col">
                        <MatrixVisualizer active={isComputing} />
                    </div>

                    {/* Parameters Card */}
                    <div className="flex-1 bg-white border border-stone-200 rounded-xl shadow-sm p-6 overflow-y-auto">
                        <h3 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                            <Settings size={16} /> Parameters
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <label className="flex justify-between text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                                    <span>Temperature</span>
                                    <span>0.0</span>
                                </label>
                                <input type="range" className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer" min="0" max="100" defaultValue="0" />
                                <p className="text-[10px] text-stone-400 mt-1">Strictly deterministic (0.0)</p>
                            </div>

                            <div>
                                <label className="flex justify-between text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                                    <span>Dimensionality</span>
                                    <span>512</span>
                                </label>
                                <div className="flex gap-2">
                                    {[128, 256, 512, 1024].map(dim => (
                                        <button key={dim} className={`flex-1 py-2 text-xs border rounded ${dim === 512 ? 'bg-stone-900 text-white border-stone-900' : 'text-stone-600 border-stone-200 hover:bg-stone-50'}`}>
                                            {dim}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="flex justify-between text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                                    <span>Output Format</span>
                                </label>
                                <select className="w-full p-2 bg-stone-50 border border-stone-200 rounded text-sm text-stone-700 focus:outline-none">
                                    <option>Natural Language</option>
                                    <option>JSON Object</option>
                                    <option>NumPy Array</option>
                                    <option>LaTeX Proof</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-stone-100">
                            <div className="flex items-start gap-3 p-3 bg-blue-50 text-blue-800 rounded-lg text-xs leading-relaxed">
                                <div className="min-w-[16px] pt-0.5"><div className="w-4 h-4 bg-blue-200 rounded-full flex items-center justify-center font-bold">i</div></div>
                                Using PINV mode guarantees exact recall for indexed datasets.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
};

export default PlaygroundPage;
