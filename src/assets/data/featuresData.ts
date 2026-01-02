import {Cloud, Database, Network, ShieldCheck, Video, Zap} from "lucide-react";

export const features = [
    {
        id: 1,
        icon: Zap,
        title: "Accelerate website performance",
        description:"Speed up load times and optimize delivery across global networks.",
    },
    {
        id: 2,
        icon: ShieldCheck,
        title: "Block bot traffic",
        description: "Protect your website from malicious bots and automated attacks.",
    },
    {
        id: 3,
        icon: Video,
        title: "Optimize video experiences",
        description: "Deliver high-quality, fast video streaming with lower bandwidth usage.",
    },
    {
        id: 4,
        icon: Cloud,
        title: "Deploy serverless code",
        description: "Run code globally without managing infrastructure using Cloudflare Workers.",
    },
    {
        id: 5,
        icon: Network,
        title: "Deploy AI on the edge",
        description: "Use AI models close to users to minimize latency and cost.",
    },
    {
        id: 6,
        icon: Database,
        title: "Eliminate egress fees for object storage",
        description: "Store and serve data without worrying about data transfer costs.",
    },
];