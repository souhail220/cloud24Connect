import {
    Zap,
    ShieldCheck,
    Video,
    Cloud,
    Network,
    Database,
} from "lucide-react";
import FeatureCard from "./featurecard.tsx";
import "./featureCard.css"

const features = [
    {
        icon: (
            <Zap className="text-secondary-dark w-20 h-20  mb-4 group-hover:text-white" />
        ),
        title: "Accelerate website performance",
        description:"Speed up load times and optimize delivery across global networks.",
    },
    {
        icon: (
            <ShieldCheck className="text-secondary-dark w-20 h-20 mb-4 group-hover:text-white" />
        ),
        title: "Block bot traffic",
        description:
            "Protect your website from malicious bots and automated attacks.",
    },
    {
        icon: (
            <Video className="text-secondary-dark w-20 h-20 mb-4 group-hover:text-white" />
        ),
        title: "Optimize video experiences",
        description:
            "Deliver high-quality, fast video streaming with lower bandwidth usage.",
    },
    {
        icon: (
            <Cloud className="text-secondary-dark w-20 h-20 mb-4 group-hover:text-white" />
        ),
        title: "Deploy serverless code",
        description:
            "Run code globally without managing infrastructure using Cloudflare Workers.",
    },
    {
        icon: (
            <Network className="text-secondary-dark w-20 h-20 mb-4 group-hover:text-white" />
        ),
        title: "Deploy AI on the edge",
        description: "Use AI models close to users to minimize latency and cost.",
    },
    {
        icon: (
            <Database className="text-secondary-dark w-20 h-20 mb-4 group-hover:text-white" />
        ),
        title: "Eliminate egress fees for object storage",
        description:
            "Store and serve data without worrying about data transfer costs.",
    },
];

export const Features = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary to-primary-dark">
            <div className="text-center px-6">
                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-secondary-dark to-secondary-light bg-clip-text text-transparent">
                    Our Service Benefits
                </h2>
                <p className="text-lg mt-2 mb-10">Comprehensive cloud solutions designed to accelerate your digital transformation journey.</p>
                <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
                    {features.map((feature, i) => (
                        <FeatureCard key={i} icon={feature.icon} title={feature.title} description={feature.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};