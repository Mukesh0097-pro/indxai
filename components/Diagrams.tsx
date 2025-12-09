/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, BarChart2, Search, Database, ArrowRight, Zap } from 'lucide-react';

// --- VECTOR SEMANTIC SPACE DIAGRAM ---
export const SurfaceCodeDiagram: React.FC = () => {
  // Visualizing semantic search / embeddings
  const [queryActive, setQueryActive] = useState(false);
  const [points, setPoints] = useState<{x: number, y: number, id: number}[]>([]);

  useEffect(() => {
    // Generate random points on mount
    const newPoints = Array.from({length: 15}).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100
    }));
    setPoints(newPoints);
  }, []);

  // Simplified "nearest neighbor" logic - finding points close to center (50, 50)
  const getDistance = (p1: {x: number, y: number}, p2: {x: number, y: number}) => {
      return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  };

  const center = {x: 50, y: 50};
  
  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm border border-stone-200 my-8">
      <h3 className="font-serif text-xl mb-4 text-stone-800">Interactive: Orthogonal Projection</h3>
      <p className="text-sm text-stone-500 mb-6 text-center max-w-md">
        Click <strong>Solve Projection</strong> to calculate the optimal orthogonal projection of the query vector onto the knowledge subspace using pseudo-inverse operations.
      </p>
      
      <div className="relative w-64 h-64 bg-[#F5F4F0] rounded-lg border border-stone-200 overflow-hidden">
         {/* Grid Lines */}
         <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
            <div className="w-full h-px bg-stone-400 absolute top-1/4"></div>
            <div className="w-full h-px bg-stone-400 absolute top-2/4"></div>
            <div className="w-full h-px bg-stone-400 absolute top-3/4"></div>
            <div className="h-full w-px bg-stone-400 absolute left-1/4"></div>
            <div className="h-full w-px bg-stone-400 absolute left-2/4"></div>
            <div className="h-full w-px bg-stone-400 absolute left-3/4"></div>
         </div>

         {/* Query Point */}
         <div className={`absolute left-1/2 top-1/2 w-4 h-4 -ml-2 -mt-2 rounded-full border-2 border-nobel-gold z-20 flex items-center justify-center transition-all duration-500 ${queryActive ? 'bg-stone-900 scale-125' : 'bg-white'}`}>
             {queryActive && <Search size={8} className="text-nobel-gold" />}
         </div>
         
         {/* Pulse Effect */}
         {queryActive && (
             <motion.div 
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute left-1/2 top-1/2 w-16 h-16 -ml-8 -mt-8 rounded-full bg-nobel-gold/30 z-10"
             />
         )}

         {/* Data Points */}
         {points.map(p => {
             const isNear = getDistance(p, center) < 30;
             const isActive = queryActive && isNear;
             
             return (
                 <motion.div
                    key={p.id}
                    className={`absolute w-2 h-2 rounded-full transition-all duration-500 ${isActive ? 'bg-nobel-gold scale-150' : 'bg-stone-300'}`}
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                    animate={{ 
                        scale: isActive ? 1.5 : 1,
                        backgroundColor: isActive ? '#E8914F' : '#d6d3d1'
                    }}
                 />
             );
         })}
      </div>

      <button 
        onClick={() => setQueryActive(!queryActive)}
        className="mt-6 px-6 py-2 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-stone-700 transition-colors"
      >
          {queryActive ? 'Reset Solver' : 'Solve Projection'}
      </button>
      
      <div className="mt-4 h-6 text-sm font-serif italic text-stone-600">
        {queryActive ? "Calculating minimal norm solution..." : "Vector space initialized."}
      </div>
    </div>
  );
};

// --- INFERENCE PIPELINE DIAGRAM ---
export const TransformerDecoderDiagram: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setStep(s => (s + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center p-8 bg-[#F5F4F0] rounded-xl border border-stone-200 my-8">
      <h3 className="font-serif text-xl mb-4 text-stone-900">PINV-Optimized Pipeline</h3>
      <p className="text-sm text-stone-600 mb-6 text-center max-w-md">
        A highly optimized inference pipeline designed for low latency and analytical weight solving.
      </p>

      <div className="relative w-full max-w-lg h-56 bg-white rounded-lg shadow-inner overflow-hidden mb-6 border border-stone-200 flex items-center justify-center gap-4 md:gap-8 p-4">
        
        {/* Input Stage */}
        <div className="flex flex-col items-center gap-2">
            <div className={`w-14 h-14 rounded-lg border-2 flex flex-col items-center justify-center transition-colors duration-500 ${step === 0 ? 'border-nobel-gold bg-nobel-gold/10' : 'border-stone-200 bg-stone-50'}`}>
                <Database size={20} className={step === 0 ? 'text-nobel-gold' : 'text-stone-300'} />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500">Matrix In</span>
        </div>

        {/* Arrow */}
        <ArrowRight size={16} className={`transition-opacity ${step >= 1 ? 'opacity-100 text-stone-800' : 'opacity-20'}`} />

        {/* Processing Stage */}
        <div className="flex flex-col items-center gap-2">
             <div className={`w-20 h-20 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-colors duration-500 relative overflow-hidden ${step === 1 || step === 2 ? 'border-stone-800 bg-stone-900 text-white' : 'border-stone-200 bg-stone-50'}`}>
                <Cpu size={24} className={step === 1 || step === 2 ? 'text-nobel-gold animate-pulse' : 'text-stone-300'} />
                {step === 1 && (
                     <div className="absolute inset-0 bg-stone-800 flex items-center justify-center">
                         <div className="text-[10px] font-mono text-nobel-gold">INVERT</div>
                     </div>
                )}
             </div>
             <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500">PINV Solver</span>
        </div>

        {/* Arrow */}
        <ArrowRight size={16} className={`transition-opacity ${step >= 3 ? 'opacity-100 text-stone-800' : 'opacity-20'}`} />

        {/* Output Stage */}
        <div className="flex flex-col items-center gap-2">
            <div className={`w-14 h-14 rounded-lg border-2 flex flex-col items-center justify-center transition-colors duration-500 ${step === 3 ? 'border-green-500 bg-green-50' : 'border-stone-200 bg-stone-50'}`}>
                {step === 3 ? (
                    <Zap size={20} className="text-green-600" />
                ) : (
                    <div className="w-4 h-4 rounded-full bg-stone-200"></div>
                )}
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500">Solution</span>
        </div>

      </div>

      <div className="flex gap-2">
          {['Input', 'Decomposition', 'Inversion', 'Result'].map((label, s) => (
              <div key={s} className={`h-1 rounded-full transition-all duration-300 ${step === s ? 'w-8 bg-nobel-gold' : 'w-2 bg-stone-300'}`} title={label}></div>
          ))}
      </div>
    </div>
  );
};

// --- PERFORMANCE CHART ---
export const PerformanceMetricDiagram: React.FC = () => {
    const [benchmark, setBenchmark] = useState<'MMLU' | 'HumanEval' | 'MATH'>('MMLU');
    
    const data = {
        'MMLU': { label: 'General Knowledge', ours: 86.5, comp: 82.3 },
        'HumanEval': { label: 'Code Generation', ours: 92.1, comp: 88.4 },
        'MATH': { label: 'Adv. Mathematics', ours: 74.8, comp: 69.5 } 
    };

    const currentData = data[benchmark];
    const maxVal = 100;
    
    return (
        <div className="flex flex-col md:flex-row gap-8 items-center p-8 bg-stone-900 text-stone-100 rounded-xl my-8 border border-stone-800 shadow-lg">
            <div className="flex-1 min-w-[240px]">
                <h3 className="font-serif text-xl mb-2 text-nobel-gold">Benchmark Superiority</h3>
                <p className="text-stone-400 text-sm mb-4 leading-relaxed">
                    Indx AI models consistently outperform open weights and commercial competitors on reasoning-intensive tasks.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                    {(Object.keys(data) as Array<keyof typeof data>).map((key) => (
                        <button 
                            key={key}
                            onClick={() => setBenchmark(key)} 
                            className={`px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 border ${benchmark === key ? 'bg-nobel-gold text-stone-900 border-nobel-gold' : 'bg-transparent text-stone-400 border-stone-700 hover:border-stone-500 hover:text-stone-200'}`}
                        >
                            {key}
                        </button>
                    ))}
                </div>
                <div className="mt-6 font-mono text-xs text-stone-500 flex items-center gap-2">
                    <BarChart2 size={14} className="text-nobel-gold" /> 
                    <span>{currentData.label.toUpperCase()} SCORE</span>
                </div>
            </div>
            
            <div className="relative w-64 h-72 bg-stone-800/50 rounded-xl border border-stone-700/50 p-6 flex justify-around items-end">
                {/* Background Grid Lines */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none opacity-10">
                   <div className="w-full h-[1px] bg-stone-400"></div>
                   <div className="w-full h-[1px] bg-stone-400"></div>
                   <div className="w-full h-[1px] bg-stone-400"></div>
                   <div className="w-full h-[1px] bg-stone-400"></div>
                </div>

                {/* Competitor Bar */}
                <div className="w-20 flex flex-col justify-end items-center h-full z-10">
                    <div className="flex-1 w-full flex items-end justify-center relative mb-3">
                        <div className="absolute -top-5 w-full text-center text-sm font-mono text-stone-400 font-bold bg-stone-900/90 py-1 px-2 rounded backdrop-blur-sm border border-stone-700/50 shadow-sm">{currentData.comp}%</div>
                        <motion.div 
                            className="w-full bg-stone-600 rounded-t-md border-t border-x border-stone-500/30"
                            initial={{ height: 0 }}
                            animate={{ height: `${(currentData.comp / maxVal) * 100}%` }}
                            transition={{ type: "spring", stiffness: 80, damping: 15 }}
                        />
                    </div>
                    <div className="h-6 flex items-center text-xs font-bold text-stone-500 uppercase tracking-wider">GPT-4o</div>
                </div>

                {/* Ours Bar */}
                <div className="w-20 flex flex-col justify-end items-center h-full z-10">
                     <div className="flex-1 w-full flex items-end justify-center relative mb-3">
                        <div className="absolute -top-5 w-full text-center text-sm font-mono text-nobel-gold font-bold bg-stone-900/90 py-1 px-2 rounded backdrop-blur-sm border border-nobel-gold/30 shadow-sm">{currentData.ours}%</div>
                        <motion.div 
                            className="w-full bg-nobel-gold rounded-t-md shadow-[0_0_20px_rgba(232,145,79,0.25)] relative overflow-hidden"
                            initial={{ height: 0 }}
                            animate={{ height: `${(currentData.ours / maxVal) * 100}%` }}
                            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 }}
                        >
                           {/* Shine effect */}
                           <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20"></div>
                        </motion.div>
                    </div>
                     <div className="h-6 flex items-center text-xs font-bold text-nobel-gold uppercase tracking-wider">INDX-1</div>
                </div>
            </div>
        </div>
    )
}