/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

// --- HERO SCENE: Static Mathematical Architecture ---
export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Base Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.6]"
             style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(214, 211, 209, 0.4) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(214, 211, 209, 0.4) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
             }}>
        </div>

        {/* Geometric Structure (Concentric Circles) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] border border-stone-200 rounded-full opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] border border-stone-200 rounded-full opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border border-dashed border-stone-200 rounded-full opacity-30"></div>

        {/* Mathematical Annotations */}
        {/* Top Left - Pseudo Inverse Notation */}
        <div className="absolute top-[15%] left-[10%] font-serif text-stone-300 text-7xl md:text-9xl opacity-20 select-none rotate-12">
            A<sup>†</sup>
        </div>

        {/* Bottom Right - Summation */}
        <div className="absolute bottom-[10%] right-[5%] font-serif text-stone-300 text-8xl md:text-[10rem] opacity-20 select-none -rotate-6">
            &Sigma;
        </div>

        {/* Top Right - Matrix Hint */}
        <div className="hidden md:block absolute top-[20%] right-[15%] font-mono text-xs text-stone-400 opacity-60">
            <div className="flex gap-4">
                <div className="flex flex-col gap-1">
                    <span>[ 0.002, 1.414 ]</span>
                    <span>[ 1.000, 0.000 ]</span>
                    <span>[ 0.707, 0.707 ]</span>
                </div>
            </div>
        </div>

        {/* Bottom Left - Linear Algebra Element */}
        <div className="hidden md:block absolute bottom-[25%] left-[15%] font-serif text-4xl text-stone-300 italic opacity-40">
            ||Ax - b||<sub>2</sub>
        </div>

        {/* Connecting Construction Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
             {/* Diagonal Guide */}
            <line x1="0" y1="100%" x2="100%" y2="0" stroke="#E8914F" strokeWidth="1" strokeDasharray="10,10" />
            {/* Vertical Axis Guide */}
            <line x1="15%" y1="0" x2="15%" y2="100%" stroke="#A8A29E" strokeWidth="1" />
        </svg>
    </div>
  );
};

// --- FEATURE SCENE: Abstract Matrix Layer Schematic ---
// Visualizing stacked matrices in a 2D graphical style
export const QuantumComputerScene: React.FC = () => {
  return (
    <div className="w-full h-full relative bg-[#F5F4F0] overflow-hidden flex items-center justify-center">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10" 
             style={{
                 backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)',
                 backgroundSize: '40px 40px'
             }}>
        </div>

        {/* Abstract Matrix Stack Animation */}
        <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Base Layer */}
            <div className="absolute w-40 h-40 border border-stone-300 bg-white shadow-sm transform translate-y-4 translate-x-4 rotate-6 transition-all duration-[3000ms] hover:rotate-3 hover:translate-y-2"></div>
            
            {/* Middle Layer (Data) */}
            <div className="absolute w-40 h-40 border border-stone-400 bg-stone-50 shadow-md transform rotate-3 transition-all duration-[3000ms] hover:rotate-1 hover:scale-105 flex items-center justify-center overflow-hidden">
                <div className="w-full h-[1px] bg-stone-200 mb-2"></div>
                <div className="w-full h-[1px] bg-stone-200 mb-2"></div>
                <div className="w-full h-[1px] bg-stone-200"></div>
            </div>

            {/* Top Layer (Gold/Solution) */}
            <div className="absolute w-40 h-40 border-2 border-nobel-gold bg-white/90 backdrop-blur-sm shadow-xl transform -rotate-3 transition-all duration-[3000ms] hover:rotate-0 flex flex-col items-center justify-center gap-2 group">
                <div className="flex gap-1">
                    <div className="w-2 h-2 bg-nobel-gold rounded-full opacity-40 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-2 h-2 bg-nobel-gold rounded-full opacity-40 group-hover:opacity-100 transition-opacity delay-75"></div>
                    <div className="w-2 h-2 bg-nobel-gold rounded-full opacity-40 group-hover:opacity-100 transition-opacity delay-150"></div>
                </div>
                <div className="text-[10px] font-mono text-stone-500 tracking-widest uppercase">PINV-SOLVED</div>
            </div>

            {/* Connecting decorative lines */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-nobel-gold opacity-30 -z-10"></div>
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-nobel-gold opacity-30 -z-10"></div>
        </div>
    </div>
  );
};