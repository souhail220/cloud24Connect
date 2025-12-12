import {useScrollAnimation} from "../../../hooks/useScrollAnimation.ts";

export const FreeTrialCTA = () => {
    const { ref, isVisible } = useScrollAnimation(0.1);
    return(
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div 
                ref={ref}
                className={`bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30 rounded-2xl p-12 text-center backdrop-blur-sm
                transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
                `}>
                <h2 className="text-3xl font-bold text-white mb-4">
                    Not sure which plan is right for you?
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Start with a 14-day free trial. No credit card required. Full access to all Pro features.
                </p>
                <button className="bg-gradient-to-r from-secondary-light to-secondary hover:from-secondary hover:to-secondary-dark text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block">
                    Claim Your Free Trial
                </button>
            </div>
        </section>
    )
}