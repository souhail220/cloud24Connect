import "./featureCard.css"
import {useScrollAnimation} from "../../../../hooks/useScrollAnimation.ts";
import {features} from "../../../../assets/data/featuresData.ts";
import FeatureCard from "./Featurecard.tsx";

export const Features = () => {
    const { ref, isVisible } = useScrollAnimation(0.1);
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-primary dark:to-primary-dark">
            <div ref={ref} className={`text-center px-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary-light dark:from-secondary-dark dark:to-secondary-light bg-clip-text text-transparent">
                    Our Service Benefits
                </h2>
                <p className="text-xs sm:sm lg:text-base xl:text-lg w-8/12 mx-auto mt-2 mb-10">Comprehensive cloud solutions designed to accelerate your digital transformation journey.</p>
                <div className="grid-container">
                    {features.map(feature => {
                        return (
                            <FeatureCard key={feature.id} feature={feature}/>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};