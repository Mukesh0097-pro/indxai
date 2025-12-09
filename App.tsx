
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, QuantumComputerScene } from './components/QuantumScene';
import { SurfaceCodeDiagram, TransformerDecoderDiagram, PerformanceMetricDiagram } from './components/Diagrams';
import { ArrowDown, Menu, X, BookOpen, Layers, Send, Check, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        setMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            // Account for fixed header offset
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');
        // Simulate network request
        setTimeout(() => {
            setFormState('success');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">

            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <span className="font-serif font-bold text-3xl tracking-widest text-stone-900 transition-colors">
                            INDXAI
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
                        {/* Products Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 hover:text-stone-900 transition-colors cursor-pointer uppercase focus:outline-none py-2">
                                Products
                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                            </button>
                            <div className="absolute top-full left-0 mt-0 w-48 bg-white border border-stone-200 shadow-xl rounded-sm py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                                <div className="w-full h-2 absolute -top-2 left-0 bg-transparent"></div> {/* Bridge for hover */}
                                <a href="#" className="block px-4 py-3 text-sm text-stone-600 hover:bg-stone-100 hover:text-stone-900 transition-colors border-b border-stone-100 last:border-0 text-left">EulerOS</a>
                                <a href="#" className="block px-4 py-3 text-sm text-stone-600 hover:bg-stone-100 hover:text-stone-900 transition-colors text-left">PIL-VAE M1</a>
                            </div>
                        </div>

                        <a href="#science" onClick={scrollToSection('science')} className="hover:text-stone-900 transition-colors cursor-pointer uppercase">Solutions</a>
                        <a href="#impact" onClick={scrollToSection('impact')} className="hover:text-stone-900 transition-colors cursor-pointer uppercase">Enterprise</a>
                        <a href="#contact" onClick={scrollToSection('contact')} className="hover:text-stone-900 transition-colors cursor-pointer uppercase">Contact</a>
                    </div>

                    <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-6 text-xl font-serif animate-fade-in">
                    <div className="flex flex-col items-center gap-4 pb-4 border-b border-stone-300 w-48">
                        <span className="text-stone-400 text-sm uppercase tracking-widest font-sans font-bold">Products</span>
                        <a href="#" className="hover:text-stone-900 transition-colors cursor-pointer">EulerOS</a>
                        <a href="#" className="hover:text-stone-900 transition-colors cursor-pointer">PIL-VAE M1</a>
                    </div>

                    <a href="#science" onClick={scrollToSection('science')} className="hover:text-stone-900 transition-colors cursor-pointer uppercase">Solutions</a>
                    <a href="#impact" onClick={scrollToSection('impact')} className="hover:text-stone-900 transition-colors cursor-pointer uppercase">Enterprise</a>
                    <a href="#contact" onClick={scrollToSection('contact')} className="hover:text-stone-900 transition-colors cursor-pointer uppercase">Contact</a>
                </div>
            )}

            {/* Hero Section */}
            <header className="relative h-screen flex items-center justify-center overflow-hidden">
                <HeroScene />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.92)_0%,rgba(249,248,244,0.6)_50%,rgba(249,248,244,0.3)_100%)]" />

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <div className="inline-block mb-4 px-3 py-1 border border-nobel-gold text-nobel-gold text-xs tracking-[0.2em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/30">
                        Next Gen • Q1 2025
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-medium leading-tight md:leading-[0.9] mb-8 text-stone-900 drop-shadow-sm">
                        Indx AI <br /><span className="italic font-normal text-stone-600 text-3xl md:text-5xl block mt-4">Optimized via Pseudo-Inverse</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-12">
                        A new class of foundational models leveraging the <strong>Pseudoinverse</strong> for analytical learning, instant adaptation, and zero-shot accuracy.
                    </p>

                    <div className="flex flex-col items-center gap-10 justify-center">
                        <a href="#contact" onClick={scrollToSection('contact')} className="px-10 py-4 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                            Get Started
                        </a>

                        <a href="#introduction" onClick={scrollToSection('introduction')} className="group flex flex-col items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">
                            <span>EXPLORE THE MATH</span>
                            <span className="p-2 border border-stone-300 rounded-full group-hover:border-stone-900 transition-colors bg-white/50">
                                <ArrowDown size={16} />
                            </span>
                        </a>
                    </div>
                </div>
            </header>

            <main>
                {/* Introduction */}
                <section id="introduction" className="py-24 bg-white">
                    <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                        <div className="md:col-span-4">
                            <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Our Methodology</div>
                            <h2 className="font-serif text-4xl mb-6 leading-tight text-stone-900">Deterministic Learning</h2>
                            <div className="w-16 h-1 bg-nobel-gold mb-6"></div>
                        </div>
                        <div className="md:col-span-8 text-lg text-stone-600 leading-relaxed space-y-6">
                            <p>
                                <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-nobel-gold">T</span>he era of "black box" approximation is over. Standard LLMs rely on iterative stochastic gradient descent, often converging on suboptimal local minima.
                            </p>
                            <p>
                                Indx AI pioneers the use of **Pseudo-Inverse algorithms** (PINV) to directly compute optimal model states. By solving for weights analytically using matrix inversion, we guarantee the lowest possible error norm for specific reasoning tasks, eliminating the randomness inherent in traditional training.
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Science: Semantic Indexing */}
                <section id="science" className="py-24 bg-white border-t border-stone-100">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200">
                                    <BookOpen size={14} /> THE CORE
                                </div>
                                <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Pseudo-Inverse Projection</h2>
                                <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                                    Traditional vector search is fuzzy and approximate. Indx AI utilizes **Pseudo-Inverse matrix operations** to project complex queries onto an orthogonal basis of verified knowledge.
                                </p>
                                <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                                    This "least squares" approach ensures that the generated response minimizes the error distance in a single computational step, ensuring retrieval is mathematically optimal rather than just statistically likely.
                                </p>
                            </div>
                            <div>
                                <SurfaceCodeDiagram />
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Science: Architecture */}
                <section className="py-24 bg-stone-900 text-stone-100 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        {/* Decorative background pattern - Gold/Stone theme */}
                        <div className="w-96 h-96 rounded-full bg-stone-600 blur-[100px] absolute top-[-100px] left-[-100px]"></div>
                        <div className="w-96 h-96 rounded-full bg-nobel-gold blur-[100px] absolute bottom-[-100px] right-[-100px]"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <TransformerDecoderDiagram />
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800 text-nobel-gold text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-700">
                                    THE INNOVATION
                                </div>
                                <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Direct Weight Resolution</h2>
                                <p className="text-lg text-stone-400 mb-6 leading-relaxed">
                                    Standard models learn slowly through millions of iterations. Our **PINV-Solvers** allow specific adaptation layers to be calculated instantly in a single pass.
                                </p>
                                <p className="text-lg text-stone-400 leading-relaxed">
                                    This enables true **One-Shot Learning** where the model adapts to your enterprise data in real-time by analytically solving the inverse problem, without the risk of catastrophic forgetting common in gradient-based fine-tuning.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Science: Results */}
                <section className="py-24 bg-[#F9F8F4]">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Calculated Superiority</h2>
                            <p className="text-lg text-stone-600 leading-relaxed">
                                By replacing approximation with analytical solutions, Indx AI models achieve higher precision on logic and reasoning tasks. The data speaks for itself.
                            </p>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            <PerformanceMetricDiagram />
                        </div>
                    </div>
                </section>

                {/* Impact */}
                <section id="impact" className="py-24 bg-white border-t border-stone-200">
                    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="md:col-span-5 relative">
                            <div className="aspect-square bg-[#F5F4F0] rounded-xl overflow-hidden relative border border-stone-200 shadow-inner">
                                <QuantumComputerScene />
                                <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-stone-400 font-serif italic">Visualization of the PINV Neural Core</div>
                            </div>
                        </div>
                        <div className="md:col-span-7 flex flex-col justify-center">
                            <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">IMPACT</div>
                            <h2 className="font-serif text-4xl mb-6 text-stone-900">Enterprise Reliability</h2>
                            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                                In business, an incorrect answer is worse than no answer. Indx AI is built with **Confidence Scoring** derived from the condition number of the inverted matrices.
                            </p>
                            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                                Every generation includes a mathematical certainty metric, allowing developers to set rigorous thresholds for automated decision making in regulated industries.
                            </p>

                            <div className="p-6 bg-[#F9F8F4] border border-stone-200 rounded-lg border-l-4 border-l-nobel-gold">
                                <p className="font-serif italic text-xl text-stone-800 mb-4">
                                    "Indx AI represents a fundamental shift from 'probabilistic guessing' to 'verified reasoning'. The pseudo-inverse approach makes it the first model we trust for production code."
                                </p>
                                <span className="text-sm font-bold text-stone-500 tracking-wider uppercase">— CTO, Global FinTech Alliance</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section id="contact" className="py-24 bg-[#F5F4F0] border-t border-stone-300">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-stone-200">

                            {/* Contact Info */}
                            <div className="md:w-5/12 bg-stone-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="inline-block mb-4 px-3 py-1 border border-nobel-gold text-nobel-gold text-xs tracking-[0.2em] uppercase font-bold rounded-full">
                                        PARTNERSHIP
                                    </div>
                                    <h2 className="font-serif text-3xl mb-6">Deploy Indx AI</h2>
                                    <p className="text-stone-400 mb-8 leading-relaxed text-sm">
                                        Ready to transform your enterprise workflow with analytical AI? Request access or schedule a technical demo.
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-stone-800 rounded-lg text-nobel-gold">
                                                <Mail size={18} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-stone-500 font-bold uppercase tracking-wider mb-1">Email Us</p>
                                                <a href="mailto:contact@indxai.tech" className="text-white hover:text-white transition-colors font-medium">
                                                    contact@indxai.tech
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decor */}
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-nobel-gold opacity-10 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2"></div>
                            </div>

                            {/* Form */}
                            <div className="md:w-7/12 p-10 bg-white">
                                {formState === 'success' ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                                            <Check size={32} className="text-green-600" />
                                        </div>
                                        <h3 className="font-serif text-2xl text-stone-900 mb-2">Request Received</h3>
                                        <p className="text-stone-500 max-w-xs">
                                            Thank you for your interest. Our team will contact you at your provided email shortly.
                                        </p>
                                        <button
                                            onClick={() => setFormState('idle')}
                                            className="mt-8 text-sm text-stone-500 underline hover:text-stone-800"
                                        >
                                            Send another request
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                id="name"
                                                className="w-full bg-[#F9F8F4] border border-stone-200 rounded-lg px-4 py-3 text-stone-800 focus:outline-none focus:border-nobel-gold focus:ring-1 focus:ring-nobel-gold transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Work Email</label>
                                            <input
                                                required
                                                type="email"
                                                id="email"
                                                className="w-full bg-[#F9F8F4] border border-stone-200 rounded-lg px-4 py-3 text-stone-800 focus:outline-none focus:border-nobel-gold focus:ring-1 focus:ring-nobel-gold transition-all"
                                                placeholder="john@company.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="company" className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Company / Organization</label>
                                            <input
                                                type="text"
                                                id="company"
                                                className="w-full bg-[#F9F8F4] border border-stone-200 rounded-lg px-4 py-3 text-stone-800 focus:outline-none focus:border-nobel-gold focus:ring-1 focus:ring-nobel-gold transition-all"
                                                placeholder="Acme Inc."
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Inquiry</label>
                                            <textarea
                                                required
                                                id="message"
                                                rows={3}
                                                className="w-full bg-[#F9F8F4] border border-stone-200 rounded-lg px-4 py-3 text-stone-800 focus:outline-none focus:border-nobel-gold focus:ring-1 focus:ring-nobel-gold transition-all resize-none"
                                                placeholder="Tell us about your use case..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={formState === 'submitting'}
                                            className="w-full bg-stone-900 text-white font-bold uppercase tracking-widest text-xs py-4 rounded-lg hover:bg-stone-800 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {formState === 'submitting' ? (
                                                'Processing...'
                                            ) : (
                                                <>Submit Request <Send size={14} /></>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <footer className="bg-stone-900 text-stone-400 py-16">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <div className="text-white font-serif font-bold text-2xl mb-2 flex items-center gap-2 justify-center md:justify-start">
                            <div className="w-6 h-6 bg-stone-800 rounded-sm flex flex-col items-center justify-center gap-[1px] border border-stone-700">
                                <div className="w-full h-1/3 bg-nobel-gold rounded-[1px]"></div>
                                <div className="w-full h-1/3 bg-white/20 rounded-[1px]"></div>
                                <div className="w-full h-1/3 bg-nobel-gold rounded-[1px]"></div>
                            </div>
                            Indx AI
                        </div>
                        <p className="text-sm">Foundational Intelligence for the Future.</p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-6">
                        <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-white hover:text-stone-900 transition-all duration-300">
                            {/* X (Twitter) Logo */}
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-white hover:text-stone-900 transition-all duration-300">
                            <Linkedin size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-white hover:text-stone-900 transition-all duration-300">
                            <Github size={18} />
                        </a>
                    </div>

                    <div className="flex gap-8 text-sm">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Policy</a>
                    </div>
                </div>
                <div className="text-center mt-12 text-xs text-stone-600">
                    © 2025 Indx AI Inc. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default App;
