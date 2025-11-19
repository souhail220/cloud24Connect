import "./GetStarted.css"
import visaLogo from '../../../../assets/images/visa.png';
import toyotaLogo from '../../../../assets/images/toyota.png';
import grokLogo from '../../../../assets/images/grok.png';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const benefits = [
    '14-day free trial',
    'No credit card required',
    'Cancel anytime',
    'Expert onboarding support',
];


export const GetStartedComponent = () => {
    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-dark via-primary to-primary-dark overflow-hidden">
            {/*<div className="absolute inset-0 bg-grid-pattern opacity-5"></div>*/}
            {/*<div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>*/}
            {/*<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse-slow animation-delay-1000"></div>*/}

            <div className="max-w-4xl mx-auto text-center relative z-10 transform transition-all duration-1000">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                    Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Join thousands of companies already leveraging Cloud24Connect to scale their operations and achieve more.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <div
                            key={benefit}
                            className="flex items-center justify-center space-x-2 text-white transform transition-all duration-700"
                            style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                        >
                            <CheckCircle2 className="w-5 h-5 text-secondary-light flex-shrink-0" />
                            <span className="text-sm sm:text-base">{benefit}</span>
                        </div>
                    ))}
                </div>

                <div
                    className="flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-700"
                    style={{ transitionDelay: '600ms' }}
                >
                    <button className="group px-8 py-4 bg-secondary text-slate-900 rounded-lg hover:bg-secondary-light transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 font-semibold text-lg">
                        <span>Start Free Trial</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 bg-transparent text-white rounded-lg border-2 border-secondary-light hover:border-secondary-dark hover:bg-cyan-500/10 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-semibold text-lg">
                        Schedule Demo
                    </button>
                </div>
            </div>

            {/* Sponsors Section */}
            <div className="flex items-center justify-center min-h-s">
                <div className="sponsors-container p-6 mt-12">
                    <p className="text-white mb-6">Trusted by companies like</p>
                    <div className="scroller-container">
                        <div className="scroller">
                            <img src={toyotaLogo} alt="Nobid" />
                            <img src={visaLogo} alt="Aquazeel" />
                            <img src={grokLogo} alt="Scraperapi" />
                            <img src={toyotaLogo} alt="Nobid" />
                            <img src={visaLogo} alt="Aquazeel" />
                            {/* Duplicate for seamless scroll */}
                            <img src={toyotaLogo} alt="Nobid" />
                            <img src={visaLogo} alt="Aquazeel" />
                            <img src={grokLogo} alt="Scraperapi" />
                            <img src={toyotaLogo} alt="Nobid" />
                            <img src={visaLogo} alt="Aquazeel" />
                            {/* Duplicate for seamless scroll */}
                            <img src={toyotaLogo} alt="Nobid" />
                            <img src={visaLogo} alt="Aquazeel" />
                            <img src={grokLogo} alt="Scraperapi" />
                            <img src={toyotaLogo} alt="Nobid" />
                            <img src={visaLogo} alt="Aquazeel" />
                            {/* Duplicate for seamless scroll */}
                            <img src={toyotaLogo} alt="Nobid" />
                            <img src={visaLogo} alt="Aquazeel" />
                            <img src={grokLogo} alt="Scraperapi" />
                            <img src={toyotaLogo} alt="Nobid" />
                            <img src={visaLogo} alt="Aquazeel" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};