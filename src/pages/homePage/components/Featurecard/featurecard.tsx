import {
  Zap,
  ShieldCheck,
  Video,
  Cloud,
  Network,
  Database,
} from "lucide-react";

const features = [
  {
    icon: (
      <Zap className="text-orange-500 w-14 h-14  mb-4 group-hover:text-white" />
    ),
    title: "Accelerate website performance",
    description:
      "Speed up load times and optimize delivery across global networks.",
  },
  {
    icon: (
      <ShieldCheck className="text-orange-500 w-14 h-14 mb-4 group-hover:text-white" />
    ),
    title: "Block bot traffic",
    description:
      "Protect your website from malicious bots and automated attacks.",
  },
  {
    icon: (
      <Video className="text-orange-500 w-14 h-14 mb-4 group-hover:text-white" />
    ),
    title: "Optimize video experiences",
    description:
      "Deliver high-quality, fast video streaming with lower bandwidth usage.",
  },
  {
    icon: (
      <Cloud className="text-orange-500 w-14 h-14 mb-4 group-hover:text-white" />
    ),
    title: "Deploy serverless code",
    description:
      "Run code globally without managing infrastructure using Cloudflare Workers.",
  },
  {
    icon: (
      <Network className="text-orange-500 w-14 h-14 mb-4 group-hover:text-white" />
    ),
    title: "Deploy AI on the edge",
    description: "Use AI models close to users to minimize latency and cost.",
  },
  {
    icon: (
      <Database className="text-orange-500 w-14 h-14 mb-4 group-hover:text-white" />
    ),
    title: "Eliminate egress fees for object storage",
    description:
      "Store and serve data without worrying about data transfer costs.",
  },
];

export default function Featurecard() {
  return (
    <div className="text-center px-6 mt-10">
      <h2 className="text-3xl font-bold mb-10 text-secondary">
        Our Service Benefits
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
        {features.map((feature, i) => (
          <div
            key={i}
            className="card group relative bg-gradient-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform duration-300 hover:bg-[#2b39cf] overflow-hidden h-64"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:-translate-y-8">
              {feature.icon}
              <h3 className="font-bold text-2xl text-orange-500 mt-3 group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>
            </div>

            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-6 transition-all duration-500 max-w-xs text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
