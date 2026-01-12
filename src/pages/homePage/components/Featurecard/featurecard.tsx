import "./featureCard.css"
import type {Feature} from "../../../../assets/data/featuresData.ts";
import type {ComponentType, SVGProps} from "react";

interface FeatureCardProps {
    feature: Feature,
    key?: number
}

export const FeatureCard = ({feature}: Readonly<FeatureCardProps>) => {
    const Icon: ComponentType<SVGProps<SVGSVGElement>> = feature.icon;
    return (
        <div
            className="
                card-container
                bg-white
                hover:bg-gradient-to-br
                hover:from-primary hover:via-primary-light hover:to-primary
                dark:hover:from-primary dark:hover:via-primary-light dark:hover:to-primary
                group shadow-lg hover:shadow-2xl
                transform duration-300
                h-32 sm:h-64 md:h-72
            "
        >
        <div className="mt-2 inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:-translate-y-8 sm:group-hover:-translate-y-12">
                <Icon className="w-11 h-11 mb-4 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-secondary dark:group-hover:text-white"/>
                <h3 className="font-bold text-lg lg:text-xl xl:text-2xl text-secondary mt-0 lg:mt-4 dark:group-hover:text-white transition-colors duration-300">
                    {feature.title}
                </h3>
            </div>

            <p className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 text-white text-xs sm:text-sm lg:text-lg xl:text-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-6 transition-all duration-500 w-11/12 text-center leading-4">
                {feature.description}
            </p>
        </div>
    );
}

