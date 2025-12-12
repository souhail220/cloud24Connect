import {type ChangeEvent, type FormEvent, useState} from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Chrome, Github, Check } from 'lucide-react';
import {useNavigate} from "react-router";

export const SignUpForm = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const passwordRequirements = [
        { label: 'At least 8 characters', met: formData.password.length >= 8 },
        { label: 'Contains uppercase letter', met: /[A-Z]/.test(formData.password) },
        { label: 'Contains lowercase letter', met: /[a-z]/.test(formData.password) },
        { label: 'Contains number', met: /[0-9]/.test(formData.password) },
        { label: 'Passwords match', met: formData.password && formData.password === formData.confirmPassword },
    ];

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};

        if (!formData.fullName) {
            newErrors.fullName = 'Full name is required';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        } else if (!/[A-Z]/.test(formData.password)) {
            newErrors.password = 'Password must contain an uppercase letter';
        } else if (!/[a-z]/.test(formData.password)) {
            newErrors.password = 'Password must contain a lowercase letter';
        } else if (!/[0-9]/.test(formData.password)) {
            newErrors.password = 'Password must contain a number';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree to the terms';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Sign up attempt:', formData);
            navigate('/products/dashboard');
        }
    };

    return(
        <div className="min-h-screen max-w-2xl w-full p-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
                <p className="text-gray-400">Join Cloud24Connect today and transform your infrastructure</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-secondary text-start mb-2">
                        Full Name
                    </label>
                    <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${
                            errors.fullName ? 'border-red-500' : 'border-gray-600'
                        }`}
                        placeholder="John Doe"
                    />
                    {errors.fullName && (
                        <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary text-start mb-2">
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
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
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all pr-12 ${
                                errors.password ? 'border-red-500' : 'border-gray-600'
                            }`}
                            placeholder="Create a strong password"
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

                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-secondary text-start mb-2">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all pr-12 ${
                                errors.confirmPassword ? 'border-red-500' : 'border-gray-600'
                            }`}
                            placeholder="Confirm your password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                        >
                            {showConfirmPassword ? (
                                <EyeOff className="w-5 h-5" />
                            ) : (
                                <Eye className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                    {errors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>
                    )}
                </div>

                {formData.password && (
                    <div className="bg-slate-700/30 rounded-lg p-4 space-y-2">
                        {passwordRequirements.map((req, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <Check
                                    className={`w-4 h-4 ${
                                        req.met ? 'text-green-400' : 'text-gray-500'
                                    }`}
                                />
                                <span
                                    className={`text-sm ${
                                        req.met ? 'text-gray-300' : 'text-gray-500'
                                    }`}
                                >
                        {req.label}
                      </span>
                            </div>
                        ))}
                    </div>
                )}
                </div>

                <div>
                    <label className="flex items-start gap-2">
                        <input
                            name="agreeToTerms"
                            type="checkbox"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            className="w-4 h-4 bg-slate-700 border border-gray-600 rounded cursor-pointer accent-cyan-500 mt-1 flex-shrink-0"
                        />
                        <span className="text-sm text-gray-400">
                                I agree to the{' '}
                            <a href="#" className="text-secondary hover:text-secondary hover:underline">Terms of Service</a>
                            {' '}and{' '}
                            <a href="#" className="text-secondary hover:text-secondary hover:underline">Privacy Policy</a>
                            </span>
                    </label>
                    {errors.agreeToTerms && (
                        <p className="mt-1 text-sm text-red-400">{errors.agreeToTerms}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-secondary-light to-secondary hover:from-secondary hover:to-secondary-dark  text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                    Create Account
                </button>
            </form>

            <div className="my-6 relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-slate-800 text-gray-400">Or sign up with</span>
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
                Already have an account?{' '}
                <Link
                    to="/login"
                    className="text-secondary hover:text-secondary-light hover:underline font-medium transition-colors"
                >
                    Sign in
                </Link>
            </p>
        </div>
    )
}