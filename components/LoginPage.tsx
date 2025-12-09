import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { supabase } from '../lib/supabase';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;
            navigate('/');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleOAuthLogin = async (provider: 'google' | 'facebook' | 'azure') => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider,
                options: {
                    redirectTo: window.location.origin,
                }
            });
            if (error) throw error;
        } catch (err: any) {
            setError(err.message);
        }
    };

    const SocialButton = ({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick?: () => void }) => (
        <button
            type="button"
            onClick={onClick}
            className="flex items-center justify-center gap-3 w-full bg-white border border-stone-200 text-stone-600 font-medium py-3 px-4 rounded-lg hover:bg-stone-50 hover:border-stone-300 transition-all shadow-sm"
        >
            {icon}
            <span className="text-sm">{label}</span>
        </button>
    );

    return (
        <div className="min-h-screen bg-[#F9F8F4] flex flex-col items-center justify-center p-6 relative">
            {/* Back Button */}
            <button
                onClick={() => navigate('/')}
                className="absolute top-8 left-8 flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors text-sm font-medium uppercase tracking-wider"
            >
                <ArrowLeft size={16} /> Back to Home
            </button>

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-200">
                <div className="p-10">
                    <div className="text-center mb-8">
                        <h2 className="font-serif text-3xl font-medium text-stone-900">Welcome Back</h2>
                        <p className="text-stone-500 text-sm mt-2">Sign in to access your dashboard</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg">
                            {error}
                        </div>
                    )}

                    <div className="space-y-4 mb-8">
                        <SocialButton
                            onClick={() => handleOAuthLogin('google')}
                            icon={
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                            }
                            label="Continue with Google"
                        />
                        <SocialButton
                            onClick={() => handleOAuthLogin('facebook')}
                            icon={
                                <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            }
                            label="Continue with Facebook"
                        />
                        <SocialButton
                            onClick={() => handleOAuthLogin('azure')}
                            icon={
                                <svg className="w-5 h-5" viewBox="0 0 23 23">
                                    <path fill="#f35325" d="M1 1h10v10H1z" />
                                    <path fill="#81bc06" d="M12 1h10v10H12z" />
                                    <path fill="#05a6f0" d="M1 12h10v10H1z" />
                                    <path fill="#ffba08" d="M12 12h10v10H12z" />
                                </svg>
                            }
                            label="Continue with Microsoft"
                        />
                    </div>

                    <div className="relative flex items-center justify-center mb-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-stone-200"></div>
                        </div>
                        <span className="relative z-10 bg-white px-4 text-xs font-bold text-stone-400 uppercase tracking-widest">or login with email</span>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Email Address</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">
                                    <Mail size={18} />
                                </span>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-[#F9F8F4] border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:border-nobel-gold focus:ring-1 focus:ring-nobel-gold transition-all"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Password</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">
                                    <Lock size={18} />
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-12 pr-12 py-3 bg-[#F9F8F4] border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:border-nobel-gold focus:ring-1 focus:ring-nobel-gold transition-all"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 focus:outline-none"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="rounded border-stone-300 text-stone-900 focus:ring-nobel-gold" />
                                <span className="text-stone-500">Remember me</span>
                            </label>
                            <a href="#" className="text-stone-900 font-medium hover:underline">Forgot password?</a>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-stone-900 text-white font-bold uppercase tracking-widest text-xs py-4 rounded-lg hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                </div>

                <div className="bg-stone-50 p-6 text-center border-t border-stone-200">
                    <p className="text-stone-600 text-sm">
                        Don't have an account? {' '}
                        <button onClick={() => navigate('/signup')} className="text-stone-900 font-bold hover:underline">
                            Sign up
                        </button>
                    </p>
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-stone-400 text-xs text-center max-w-sm px-6">
                    By logging in, you agree to Indx AI's Terms of Service and Privacy Policy.
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
