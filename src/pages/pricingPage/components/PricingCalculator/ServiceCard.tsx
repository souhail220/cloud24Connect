import type {SelectedService, Service} from "../../data/ServicesType.ts";
import {Trash2} from "lucide-react";

interface ServiceCardProps {
    service: SelectedService,
    serviceConfig: Service | undefined,
    onRemove: (id: string) => void,
    onUpdateOption: (id: string, optionId: string) => void
}

export const ServiceCard = ({service, serviceConfig, onRemove, onUpdateOption}: ServiceCardProps) => {
    return (
        <div
            className="bg-slate-800/50 border border-gray-600 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 animate-fadeIn">
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">{serviceConfig?.icon}</span>
                        <div>
                            <h3 className="text-white font-semibold">
                                {service.serviceName}
                            </h3>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <label className="text-gray-400 text-sm" htmlFor={`option-${service.id}`}>
                            Option:
                        </label>
                        <select
                            id={`option-${service.id}`}
                            value={service.selectedOptionId}
                            onChange={(e) => onUpdateOption(service.id, e.target.value)}
                            className="bg-slate-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        >
                            {serviceConfig?.options.map((option) => (
                                <option key={option.id} value={option.id}>
                                    {option.label} - ${option.price}/mo
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="text-right flex flex-col items-end gap-3">
                    <p className="text-2xl font-bold text-cyan-400">
                        ${service.price}
                    </p>
                    <button
                        onClick={() => onRemove(service.id)}
                        className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                        title="Remove service"
                        aria-label={`Remove ${service.serviceName}`}
                    >
                        <Trash2 className="w-5 h-5"/>
                    </button>
                </div>
            </div>
        </div>
    );
}