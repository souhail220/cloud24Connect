import { ArrowRight, Sparkles } from 'lucide-react';
import "./HeroSection.css";

export default function HeroSection() {
    return (
        <section className="hero-section bg-gradient-to-br from-primary-dark via-primary to-primary-dark">
            <div className="max-w-7xl mx-auto">
                <div className="hero-section-container">
                    <div className="badge-container bg-cyan-500/20 border border-cyan-400/50">
                        <Sparkles className="w-4 h-4 text-secondary-light" />
                        <span className="text-sm font-semibold text-secondary-light">Enterprise Cloud Solutions</span>
                    </div>

                    <h1 className="heading-title">
                        Transform Your Business
                        <br />
                        <span className="bg-gradient-to-r from-secondary via-blue-400 to-secondary-light bg-clip-text text-transparent">
                        With Cloud Excellence
                    </span>
                    </h1>

                    <p className="heading-description">
                        Empower your organization with cutting-edge cloud infrastructure.
                        Scalable, secure, and available 24/7 to keep your business connected.
                    </p>

                    <div className="button-container">
                        <button className="button button-primary">
                            <span>Start Free Trial</span>
                            <ArrowRight className="w-5 h-5 arrow-right" />
                        </button>
                        <button className="button button-secondary text-secondary border-secondary">
                            Watch Demo
                        </button>
                    </div>
                </div>

                <div className="mt-20 relative animate-fade-in-up animation-delay-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-3xl opacity-20 animate-pulse-slow"></div>
                    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700 text-start">
                        <div className="flex space-x-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="space-y-3 font-mono text-sm">
                            <div className="text-gray-400">$ cloud24connect deploy --production</div>
                            <div className="text-emerald-400">✓ Infrastructure provisioned</div>
                            <div className="text-emerald-400">✓ Services deployed successfully</div>
                            <div className="text-cyan-400">→ Your application is live at https://your-app.cloud24connect.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}