import type {SelectedService, Service} from "../../data/ServicesType.ts";
import {Trash2} from "lucide-react";

interface ServiceCardProps {
    service: SelectedService,
    serviceConfig: Service | undefined,
    onRemove: (id: string) => void,
    onUpdateOption: (serviceId: string, optionId: string, subOptionId: string) => void,
    key?: string
}

export const ServiceCard = ({service, serviceConfig, onRemove, onUpdateOption}: ServiceCardProps) => {
    return (
        <div
            className="bg-white dark:bg-slate-800/50 border border-gray-600 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 animate-fadeIn">
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">{serviceConfig?.icon}</span>
                        <div>
                            <h3 className="text-gray-800 dark:text-white font-semibold">
                                {service.serviceName}
                            </h3>
                        </div>
                    </div>

                    <div className="flex items-center justify-start flex-wrap gap-5">
                        {service.options.map(option => {
                            const selectedSubOptionId = service.selectedOptions?.[option.id] || "";

                            return (
                                <div key={option.id} className="flex items-center gap-2">
                                    <label
                                        className="text-gray-800 dark:text-gray-400 text-sm"
                                        htmlFor={`option-${service.id}-${option.id}`}
                                    >
                                        {option.label}:
                                    </label>

                                    <select
                                        id={`option-${service.id}-${option.id}`}
                                        value={selectedSubOptionId}
                                        onChange={(e) =>
                                            onUpdateOption(service.id, option.id, e.target.value)
                                        }
                                        className="bg-white dark:bg-slate-700 border border-gray-600 text-gray-800 dark:text-white rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                                    >
                                        <option value="" disabled>Select an option</option>
                                        {option.subOptions.map((subOption) => (
                                            <option key={subOption.id} value={subOption.id}>
                                                {subOption.label} - ${subOption.price}/mo
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="text-right flex flex-col items-end gap-3">
                    <p className="text-2xl font-bold text-secondary-light">
                        ${service.price}
                    </p>
                    <button
                        onClick={() => onRemove(service.id)}
                        className="p-2 text-red-500 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-500/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
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