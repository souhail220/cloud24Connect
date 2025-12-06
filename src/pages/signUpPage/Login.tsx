import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Chrome, Eye, EyeOff, Github} from 'lucide-react';
import {Navbar} from "../../shared/navbar/navbar.tsx";
import Footer from "../../shared/footer/footer.tsx";

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { email?: string; password?: string } = {};

        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Login attempt:', { email, password });
        }
    };

    return (
        <div className="min-h-screen mt-8 bg-gradient-to-br from-primary-dark via-primary to-primary-dark flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
                <div className="w-full max-w-md">
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-cyan-500/20">
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                            <p className="text-gray-400">Sign in to your Cloud24Connect account</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-start text-secondary mb-2">
                                    Email Address
                                </label>
                                <input id="email" type="email" value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (errors.email) setErrors({ ...errors, email: undefined });
                                    }}
                                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                                        errors.email ? 'border-red-500' : 'border-gray-600'
                                    }`}
                                    placeholder="you@example.com"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-secondary text-start mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            if (errors.password) setErrors({ ...errors, password: undefined });
                                        }}
                                        className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all pr-12 ${
                                            errors.password ? 'border-red-500' : 'border-gray-600'
                                        }`}
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-400">{errors.password}</p>
                                )}
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 bg-slate-700 border border-gray-600 rounded cursor-pointer accent-cyan-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-400">Remember me</span>
                                </label>
                                <a href="#" className="text-sm text-secondary-dark hover:text-secondary transition-colors">
                                    Forgot password?
                                </a>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-secondary-light to-secondary hover:from-secondary hover:to-secondary-dark text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
                            >
                                Sign In
                            </button>
                        </form>

                        <div className="my-6 relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-600"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-slate-800 text-gray-400">Or continue with</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-700/50 hover:bg-slate-600/50 border border-gray-600 hover:border-gray-500 rounded-lg text-white font-medium transition-all duration-200 group"
                            >
                                <Chrome className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Google
                            </button>

                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-700/50 hover:bg-slate-600/50 border border-gray-600 hover:border-gray-500 rounded-lg text-white font-medium transition-all duration-200 group"
                            >
                                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                GitHub
                            </button>
                        </div>

                        <p className="mt-6 text-center text-gray-400">
                            Don't have an account?{' '}
                            <Link
                                to="/signup"
                                className="text-secondary hover:text-secondary-light font-medium transition-colors"
                            >
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
