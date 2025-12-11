import {Zap, ShieldCheck, Video, Cloud, Network, Database} from "lucide-react";
import FeatureCard from "./featurecard.tsx";
import "./featureCard.css"
import {useScrollAnimation} from "../../../../hooks/useScrollAnimation.ts";

const features = [
    {
        icon: (
            <Zap className="m-0 w-11 h-11 mb-4 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-secondary-dark group-hover:text-white" />
        ),
        title: "Accelerate website performance",
        description:"Speed up load times and optimize delivery across global networks.",
    },
    {
        icon: (
            <ShieldCheck className="w-11 h-11 mb-4 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-secondary-dark group-hover:text-white" />
        ),
        title: "Block bot traffic",
        description:
            "Protect your website from malicious bots and automated attacks.",
    },
    {
        icon: (
            <Video className="w-11 h-11 mb-4 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-secondary-dark group-hover:text-white" />
        ),
        title: "Optimize video experiences",
        description:
            "Deliver high-quality, fast video streaming with lower bandwidth usage.",
    },
    {
        icon: (
            <Cloud className="w-11 h-11 mb-4 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-secondary-dark group-hover:text-white" />
        ),
        title: "Deploy serverless code",
        description:
            "Run code globally without managing infrastructure using Cloudflare Workers.",
    },
    {
        icon: (
            <Network className="w-11 h-11 mb-4 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-secondary-dark group-hover:text-white" />
        ),
        title: "Deploy AI on the edge",
        description: "Use AI models close to users to minimize latency and cost.",
    },
    {
        icon: (
            <Database className="w-11 h-11 mb-4 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-secondary-dark group-hover:text-white" />
        ),
        title: "Eliminate egress fees for object storage",
        description:
            "Store and serve data without worrying about data transfer costs.",
    },
];

export const Features = () => {
    const { ref, isVisible } = useScrollAnimation(0.1);
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary to-primary-dark">
            <div ref={ref} className={`text-center px-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-secondary-dark to-secondary-light bg-clip-text text-transparent">
                    Our Service Benefits
                </h2>
                <p className="text-xs sm:sm lg:text-base xl:text-lg w-8/12 mx-auto mt-2 mb-10">Comprehensive cloud solutions designed to accelerate your digital transformation journey.</p>
                <div className="grid-container">
                    {features.map((feature, i) => (
                        <FeatureCard key={i} icon={feature.icon} title={feature.title} description={feature.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};