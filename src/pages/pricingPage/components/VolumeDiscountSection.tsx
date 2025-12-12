import type {VolumeDiscount} from "../data/VolumeDiscount.ts";
import {useScrollAnimation} from "../../../hooks/useScrollAnimation.ts";

const volumeDiscounts: VolumeDiscount[] = [
    { usage: '0-100K requests/month', monthly: '$99', savings: 'Baseline' },
    { usage: '100K-500K requests/month', monthly: '$89', savings: '10% off' },
    { usage: '500K-2M requests/month', monthly: '$79', savings: '20% off' },
    { usage: '2M-5M requests/month', monthly: '$69', savings: '30% off' },
    { usage: '5M+ requests/month', monthly: 'Contact us', savings: '40%+ off' },
];

export const VolumeDiscountSection = () => {
    const { ref, isVisible } = useScrollAnimation(0.1);
    return(
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                {/*Page's title*/}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-secondary-dark mb-4">
                        Volume Discounts
                    </h2>
                    <p className="text-gray-300 text-lg">
                        The more you use, the more you save. Pricing shown is for Professional plan.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {volumeDiscounts.map((discount, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-800/50 border border-gray-600 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 text-center"
                        >
                            <p className="text-gray-400 text-sm mb-3">{discount.usage}</p>
                            <p className="text-2xl font-bold text-white mb-2">{discount.monthly}</p>
                            <p className="text-secondary font-semibold text-sm">{discount.savings}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}