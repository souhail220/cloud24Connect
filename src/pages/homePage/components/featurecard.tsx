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
      <Zap className="text-[#2b39cf] w-10 h-10 mb-4 group-hover:text-white" />
    ),
    title: "Accelerate website performance",
    description:
      "Speed up load times and optimize delivery across global networks.",
  },
  {
    icon: (
      <ShieldCheck className="text-[#2b39cf] w-10 h-10 mb-4 group-hover:text-white" />
    ),
    title: "Block bot traffic",
    description:
      "Protect your website from malicious bots and automated attacks.",
  },
  {
    icon: (
      <Video className="text-[#2b39cf] w-10 h-10 mb-4 group-hover:text-white" />
    ),
    title: "Optimize video experiences",
    description:
      "Deliver high-quality, fast video streaming with lower bandwidth usage.",
  },
  {
    icon: (
      <Cloud className="text-[#2b39cf] w-10 h-10 mb-4 group-hover:text-white" />
    ),
    title: "Deploy serverless code",
    description:
      "Run code globally without managing infrastructure using Cloudflare Workers.",
  },
  {
    icon: (
      <Network className="text-[#2b39cf] w-10 h-10 mb-4 group-hover:text-white" />
    ),
    title: "Deploy AI on the edge",
    description: "Use AI models close to users to minimize latency and cost.",
  },
  {
    icon: (
      <Database className="text-[#2b39cf] w-10 h-10 mb-4 group-hover:text-white" />
    ),
    title: "Eliminate egress fees for object storage",
    description:
      "Store and serve data without worrying about data transfer costs.",
  },
];

export default function Featurecard() {
  return (
    <div className="text-center px-6">
      <h2 className="text-3xl font-bold mb-10 text-orange-500">
        Our Service Benefits
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
        {features.map((feature, i) => (
          <div
            key={i}
            className="card group bg-gradient-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform duration-300 hover:bg-[#2b39cf]"
          >
            <div className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="font-bold text-lg text-orange-500 mb-2 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="text-white text-sm opacity-0 group-hover:opacity-100 group-hover:mt-2 transition-all duration-300 max-w-xs">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
