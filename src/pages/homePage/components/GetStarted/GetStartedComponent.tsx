import "./GetStarted.css"
import visaLogo from '../../../../assets/visa.png';
import toyotaLogo from '../../../../assets/toyota.png';
import grokLogo from '../../../../assets/grok.png';


export const GetStartedComponent = () => {
    return (
        <div className="bg-white px-24 py-16 shadow-md">
            <div className="getStarted-container">
                <h2 className="text-3xl font-bold mb-10 text-black">Get Started for free</h2>
                <p className="text-xl">Sign up and get $200 in credit for your first 60 days with Cloud24Connect</p>
                <button className="mt-12 px-4 py-2 bg-primary text-white hover:bg-primary-light rounded-lg transition">Create an Account</button>
            </div>

            {/* Sponsors Section */}
            <div className="flex items-center justify-center min-h-s">
                <div className="sponsors-container p-6 mt-12">
                    <p className="text-gray-500 mb-8">Trusted by companies like</p>
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
        </div>
    );
};