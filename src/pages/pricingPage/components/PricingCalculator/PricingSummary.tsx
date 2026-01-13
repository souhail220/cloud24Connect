import type {SelectedService} from "../../data/ServicesType.ts";

interface PricingSummaryProps {
    selectedServices: SelectedService[],
    monthlyPrice: number,
    annualPrice: number,
    annualSavings: number
}

export const PricingSummary = ({selectedServices, monthlyPrice, annualPrice, annualSavings}: PricingSummaryProps) => {
    const annualDiscounted = Math.round(annualPrice - annualSavings)
    return (
        <div className="lg:col-span-1">
            <div
                className="sticky top-24 bg-gradient-to-br to-[#60a5fa] from-primary-light dark:from-cyan-500/10 dark:to-blue-500/10 border-2 border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white">Pricing Summary</h3>

                <div className="space-y-4 mb-8 pb-8 border-b border-gray-300 dark:border-cyan-500/20">
                    {selectedServices.length === 0 ? (
                        <p className="text-gray-700 dark:text-gray-400 text-center mt-4">
                            Add services to see pricing
                        </p>
                    ) : (
                        <>
                            {selectedServices.map((service) => (
                                <div
                                    key={service.id}
                                    className="flex items-center justify-between text-sm mt-8"
                                >
                                    <span className="text-gray-200">{service.serviceName}</span>
                                    <span className="text-white font-semibold">
                                                  ${service.price}
                                              </span>
                                </div>
                            ))}
                        </>
                    )}
                </div>

                <div className="space-y-3 mb-8">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-200">Monthly</span>
                        <span className="text-2xl font-bold text-white">${monthlyPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-700 dark:text-gray-400">Annual (16% off)</span>
                        <span className="text-lg font-semibold text-secondary-light">
                            ${annualDiscounted}/year
                        </span>
                    </div>
                    {annualSavings > 0 && (
                        <div className="text-xs text-green-600 dark:text-green-400 text-right">
                            Save ${Math.round(annualSavings)} annually
                        </div>
                    )}
                </div>

                <button
                    className="w-full py-3 px-4 bg-gradient-to-r from-secondary-light to-secondary-dark hover:from-secondary hover:to-secondary-dark text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                    Get Started
                </button>

                <p className="text-xs text-black dark:text-gray-400 text-center hover:cursor-pointer hover:underline mt-4">
                    Start your 14-day free trial today
                </p>
            </div>
        </div>
    )
}