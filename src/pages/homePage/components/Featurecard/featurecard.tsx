import "./featureCard.css"
import type {ReactNode} from "react";

interface FeatureCardProps {
    key?: number;
    icon: ReactNode;
    title: string;
    description: string;
}

export default function FeatureCard({key, icon, title, description} : FeatureCardProps) {
  return (
      <div
          key={key}
          className="card-container group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transform duration-300 hover:bg-[#2b39cf] border border-transparent hover:border-white overflow-hidden h-32 sm:h-64 md:h-72"
      >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:-translate-y-6 sm:group-hover:-translate-y-8">
              <div className="text-3xl sm:text-4xl mb-2">{icon}</div>
              <h3 className="font-bold text-xl sm:text-2xl text-secondary-dark mt-3 group-hover:text-white transition-colors duration-300">
                  {title}
              </h3>
          </div>

          <p className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 text-white text-xs sm:text-sm opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-6 transition-all duration-500 w-10/12 sm:w-10/12 text-center leading-relaxed">
              {description}
          </p>
      </div>
  );
}

