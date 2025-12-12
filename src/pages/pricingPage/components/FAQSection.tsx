export const FAQSection = () => {
    return(
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center bg-slate-800/50 border border-gray-600 rounded-2xl p-12 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4">Have questions?</h3>
                <p className="text-gray-300 mb-8">
                    Check our FAQ or contact our sales team for more information about custom plans.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 border border-gray-600 rounded-lg text-white font-semibold transition-all duration-300">
                        View FAQ
                    </button>
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105">
                        Contact Sales
                    </button>
                </div>
            </div>
        </section>
    )
}