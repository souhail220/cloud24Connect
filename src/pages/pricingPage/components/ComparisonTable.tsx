import {Check, X} from "lucide-react";
import {useScrollAnimation} from "../../../hooks/useScrollAnimation.ts";

export const ComparisonTable = () => {
    const { ref, isVisible } = useScrollAnimation(0.1);
    return(
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
           <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
               {/*Page's title*/}
               <div className="text-center mb-12">
                   <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                       Compare All Plans
                   </h2>
                   <p className="text-gray-300 text-lg">
                       See exactly what's included in each tier
                   </p>
               </div>
               {/* Comparison Table */}
               <div className="overflow-x-auto">
                   <table className="w-full">
                       <thead>
                       <tr className="border-b border-gray-600">
                           <th className="text-left py-4 px-4 font-semibold text-white w-48">
                               Feature
                           </th>
                           <th className="text-center py-4 px-4 font-semibold text-white">
                               Starter
                           </th>
                           <th className="text-center py-4 px-4 font-semibold text-white">
                               Professional
                           </th>
                           <th className="text-center py-4 px-4 font-semibold text-white">
                               Enterprise
                           </th>
                       </tr>
                       </thead>
                       <tbody>
                       <tr className="border-b border-gray-600/50 hover:bg-slate-800/30 transition-colors">
                           <td className="py-4 px-4 text-gray-300">Cloud accounts</td>
                           <td className="py-4 px-4 text-center">
                               <span className="text-white font-semibold">3</span>
                           </td>
                           <td className="py-4 px-4 text-center">
                               <Check className="w-5 h-5 text-green-400 mx-auto" />
                           </td>
                           <td className="py-4 px-4 text-center">
                               <Check className="w-5 h-5 text-green-400 mx-auto" />
                           </td>
                       </tr>

                       <tr className="border-b border-gray-600/50 hover:bg-slate-800/30 transition-colors">
                           <td className="py-4 px-4 text-gray-300">Data retention</td>
                           <td className="py-4 px-4 text-center">
                               <span className="text-white font-semibold">7 days</span>
                           </td>
                           <td className="py-4 px-4 text-center">
                               <span className="text-white font-semibold">90 days</span>
                           </td>
                           <td className="py-4 px-4 text-center">
                               <span className="text-white font-semibold">Unlimited</span>
                           </td>
                       </tr>

                       <tr className="border-b border-gray-600/50 hover:bg-slate-800/30 transition-colors">
                           <td className="py-4 px-4 text-gray-300">Monitoring</td>
                           <td className="py-4 px-4 text-center">
                               <span className="text-white font-semibold">Basic</span>
                           </td>
                           <td className="py-4 px-4 text-center">
                               <span className="text-white font-semibold">Advanced</span>
                           </td>
                           <td className="py-4 px-4 text-center">
                               <span className="text-white font-semibold">Custom</span>
                           </td>
                       </tr>

                       <tr className="border-b border-gray-600/50 hover:bg-slate-800/30 transition-colors">
                           <td className="py-4 px-4 text-gray-300">Alerts & notifications</td>
                           <td className="py-4 px-4 text-center">
                               <X className="w-5 h-5 text-secondary mx-auto" />
                           </td>
                           <td className="py-4 px-4 text-center">
                               <Check className="w-5 h-5 text-green-400 mx-auto" />
                           </td>
                           <td className="py-4 px-4 text-center">
                               <Check className="w-5 h-5 text-green-400 mx-auto" />
                           </td>
                       </tr>

                       <tr className="border-b border-gray-600/50 hover:bg-slate-800/30 transition-colors">
                           <td className="py-4 px-4 text-gray-300">Advanced analytics</td>
                           <td className="py-4 px-4 text-center">
                               <X className="w-5 h-5 text-secondary mx-auto" />
                           </td>
                           <td className="py-4 px-4 text-center">
                               <Check className="w-5 h-5 text-green-400 mx-auto" />
                           </td>
                           <td className="py-4 px-4 text-center">
                               <Check className="w-5 h-5 text-green-400 mx-auto" />
                           </td>
                       </tr>

                       <tr className="border-b border-gray-600/50 hover:bg-slate-800/30 transition-colors">
                           <td className="py-4 px-4 text-gray-300">API access</td>
                           <td className="py-4 px-4 text-center">
                               <X className="w-5 h-5 text-secondary mx-auto" />
                           </td>
                           <td className="py-4 px-4 text-center">
                               <Check className="w-5 h-5 text-green-400 mx-auto" />
                           </td>
                           <td className="py-4 px-4 text-center">
                               <Check className="w-5 h-5 text-green-400 mx-auto" />
                           </td>
                       </tr>

                       <tr className="border-b border-gray-600/50 hover:bg-slate-800/30 transition-colors">
                           <td className="py-4 px-4 text-gray-300">Support</td>
                           <td className="py-4 px-4 text-center">
                               <span className="text-white font-semibold">Email</span>
                           </td>
                           <td className="py-4 px-4 text-center">
                               <span className="text-white font-semibold">Priority</span>
                           </td>
                           <td className="py-4 px-4 text-center">
                               <span className="text-white font-semibold">24/7</span>
                           </td>
                       </tr>

                       <tr className="border-b border-gray-600/50 hover:bg-slate-800/30 transition-colors">
                           <td className="py-4 px-4 text-gray-300">Team members</td>
                           <td className="py-4 px-4 text-center">
                               <span className="text-white font-semibold">1</span>
                           </td>
                           <td className="py-4 px-4 text-center">
                               <span className="text-white font-semibold">Up to 10</span>
                           </td>
                           <td className="py-4 px-4 text-center">
                               <span className="text-white font-semibold">Unlimited</span>
                           </td>
                       </tr>

                       <tr className="border-b border-gray-600/50 hover:bg-slate-800/30 transition-colors">
                           <td className="py-4 px-4 text-gray-300">Custom integrations</td>
                           <td className="py-4 px-4 text-center">
                               <X className="w-5 h-5 text-secondary mx-auto" />
                           </td>
                           <td className="py-4 px-4 text-center">
                               <X className="w-5 h-5 text-secondary mx-auto" />
                           </td>
                           <td className="py-4 px-4 text-center">
                               <Check className="w-5 h-5 text-green-400 mx-auto" />
                           </td>
                       </tr>

                       <tr className="hover:bg-slate-800/30 transition-colors">
                           <td className="py-4 px-4 text-gray-300">SLA guarantee</td>
                           <td className="py-4 px-4 text-center">
                               <X className="w-5 h-5 text-secondary mx-auto" />
                           </td>
                           <td className="py-4 px-4 text-center">
                               <span className="text-white font-semibold">99.5%</span>
                           </td>
                           <td className="py-4 px-4 text-center">
                               <span className="text-white font-semibold">99.99%</span>
                           </td>
                       </tr>
                       </tbody>
                   </table>
               </div>
           </div>
        </section>
    )
}