import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import { Plus, ChevronDown } from 'lucide-react';
import type {SelectedOptions, SelectedService, Service} from "../../data/ServicesType.ts";
import {useScrollAnimation} from "../../../../hooks/useScrollAnimation.ts";
import {ServiceCard} from "./ServiceCard.tsx";
import {PricingSummary} from "./PricingSummary.tsx";
import {AVAILABLE_SERVICES} from "../../../../assets/data/servicesData.ts";

export const PricingCalculator = () => {
    const { ref, isVisible } = useScrollAnimation(0.1);
    const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };

        if (openDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [openDropdown]);

    // Close dropdown on Escape key
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpenDropdown(null);
            }
        };

        if (openDropdown) {
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [openDropdown]);

    const addService = useCallback((serviceId: string) => {
        const service = AVAILABLE_SERVICES.find((s) => s.id === serviceId);
        if (!service) return;

        const initialSelectedOptions: SelectedOptions = {};
        service.options.forEach(option => {
            initialSelectedOptions[option.id] = option.subOptions[0]?.id || "";
        });

        const initialPrice =
            service.basePrice +
            service.options.reduce((sum, option) => {
                const defaultSub = option.subOptions[0];
                return sum + (defaultSub ? defaultSub.price : 0);
            }, 0);

        const newService: SelectedService = {
            id: `${serviceId}-${Date.now()}`,
            serviceId: service.id,
            serviceName: service.name,
            options: service.options,
            selectedOptions: initialSelectedOptions,
            price: initialPrice,
        };

        setSelectedServices((prev) => [...prev, newService]);
        setOpenDropdown(null);
    }, []);

    const removeService = useCallback((id: string) => {
        setSelectedServices((prev) => prev.filter((s) => s.id !== id));
    }, []);

    const updateServiceOption = useCallback((serviceId: string, optionId: string, subOptionId: string) => {
        setSelectedServices(prev => prev.map(service => {
            if (service.id !== serviceId) return service;

            const serviceConfig = AVAILABLE_SERVICES.find(s => s.id === service.serviceId);
            if (!serviceConfig) return service;

            // Update selected sub-option for this option group
                const updatedSelectedOptions = {
                    ...service.selectedOptions,
                    [optionId]: subOptionId,
                };

                // Recalculate the total price of the service
                const newPrice = serviceConfig.options.reduce((sum, option) => {
                    const selectedSubId = updatedSelectedOptions[option.id];
                    const sub = option.subOptions.find(s => s.id === selectedSubId);

                    return sum + (sub ? sub.price : 0);
                    }, serviceConfig.basePrice);

                return {
                    ...service,
                    selectedOptions: updatedSelectedOptions,
                    price: newPrice,
                };
        }));
        }, []
    );

    // Memoized calculations
    const { monthlyPrice, annualPrice, annualSavings } = useMemo(() => {
        const total = selectedServices.reduce((sum, service) => sum + service.price, 0);
        const monthly = total;
        const annual = total * 12;
        const savings = annual * 0.16;

        return {
            totalPrice: total,
            monthlyPrice: monthly,
            annualPrice: annual,
            annualSavings: savings,
        };
    }, [selectedServices]);

    const availableServicesToAdd: Service[] = useMemo((): Service[] => AVAILABLE_SERVICES.filter(
        (service) =>
            !selectedServices.some((selected) => selected.serviceId === service.id)
        ),
        [selectedServices]
    );

  return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div ref={ref} className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              {/* Calculator Header */}
              <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-secondary-dark mb-4">
                      Custom Pricing Calculator
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                      Build your perfect plan by selecting the services you need
                  </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Services Selection */}
                  <div className="lg:col-span-2">
                      {/* Add Service Button */}
                      <div className="relative mb-8 flex justify-start">
                          <button
                              onClick={() => setOpenDropdown(openDropdown === 'add-service' ? null : 'add-service')}
                              className="w-full md:w-auto inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary-light to-secondary-dark hover:from-secondary hover:to-secondary-dark text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                          >
                              <Plus className="w-5 h-5" />
                              Add Service
                              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'add-service' ? 'rotate-180' : ''}`}/>
                          </button>

                          {openDropdown === 'add-service' && availableServicesToAdd.length > 0 && (
                              <div className="absolute top-full left-0 mt-2 w-full md:w-96 bg-white dark:bg-slate-800 border border-gray-200 dark:border-cyan-500/30 rounded-lg shadow-2xl z-10">
                                  <div className="p-2 max-h-96 overflow-y-auto space-y-1">
                                      {availableServicesToAdd.map((service) => (
                                          <button
                                              key={service.id}
                                              onClick={() => addService(service.id)}
                                              className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700/50 transition-colors group"
                                          >
                                              <div className="flex items-center gap-3">
                                                  <span className="text-2xl">{service.icon}</span>
                                                  <div>
                                                      <p className="text-gray-900 dark:text-white font-semibold group-hover:text-secondary dark:group-hover:text-cyan-400 transition-colors">
                                                          {service.name}
                                                      </p>
                                                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                                                          {service.description}
                                                      </p>
                                                  </div>
                                              </div>
                                          </button>
                                      ))}
                                  </div>
                              </div>
                          )}

                          {openDropdown === 'add-service' && availableServicesToAdd.length === 0 && (
                              <div className="absolute top-full left-0 mt-2 w-full md:w-96 bg-white dark:bg-slate-800 border border-gray-200 dark:border-cyan-500/30 rounded-lg shadow-2xl z-10 p-4">
                                  <p className="text-gray-600 dark:text-gray-400 text-center">All services added!</p>
                              </div>
                          )}
                      </div>

                      {/* Selected Services */}
                      {selectedServices.length === 0 ? (
                          <div className="bg-gray-50 dark:bg-slate-800/50 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-12 text-center">
                              <p className="text-gray-600 dark:text-gray-400 text-lg">
                                  No services selected yet. Click "Add Service" to get started.
                              </p>
                          </div>
                      ) : (
                          <div className="space-y-4">
                              {selectedServices.map((service) => {
                                  const serviceConfig = AVAILABLE_SERVICES.find(
                                      (s) => s.id === service.serviceId
                                  );
                                  return (
                                      <ServiceCard
                                          key={service.id}
                                          service={service}
                                          serviceConfig={serviceConfig}
                                          onRemove={removeService}
                                          onUpdateOption={updateServiceOption}
                                      />
                                  );
                              })}
                          </div>
                      )}
                  </div>

                  {/* Pricing Summary */}
                  <PricingSummary
                      selectedServices={selectedServices}
                      monthlyPrice={monthlyPrice}
                      annualPrice={annualPrice}
                      annualSavings={annualSavings}
                  />
              </div>
          </div>
          <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
      </section>
  );
};
