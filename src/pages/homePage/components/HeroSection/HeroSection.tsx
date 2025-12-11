import { ArrowRight, Sparkles } from 'lucide-react';
import "./HeroSection.css";
import {useScrollAnimation} from "../../../../hooks/useScrollAnimation.ts";

export default function HeroSection() {
    const { ref, isVisible } = useScrollAnimation(0.1);

    return (
        <section className="hero-section bg-gradient-to-br from-primary-dark via-primary to-primary-dark">
            <div ref={ref} className={`max-w-7xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}>
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

                <div className="snippet-container bg-gradient-to-br from-gray-900 to-gray-800">
                    <div className="window-controls">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="terminal-content">
                        <div className="text-gray-400">$ cloud24connect deploy --production</div>
                        <div className="text-emerald-400">✓ Infrastructure provisioned</div>
                        <div className="text-emerald-400">✓ Services deployed successfully</div>
                        <div className="text-cyan-400">→ Your application is live at https://your-app.cloud24connect.com</div>
                    </div>
                </div>
            </div>
        </section>
    );
}