import { useState } from 'react';
import { Plus, Trash2, ChevronDown } from 'lucide-react';

interface ServiceOption {
  id: string;
  label: string;
  price: number;
}

interface Service {
  id: string;
  name: string;
  icon: string;
  basePrice: number;
  options: ServiceOption[];
  description: string;
}

interface SelectedService {
  id: string;
  serviceId: string;
  serviceName: string;
  selectedOptionId: string;
  selectedOptionLabel: string;
  price: number;
}

const AVAILABLE_SERVICES: Service[] = [
  {
    id: 'monitoring',
    name: 'Cloud Monitoring',
    icon: '📊',
    basePrice: 0,
    description: 'Track your cloud infrastructure',
    options: [
      { id: 'basic', label: 'Basic (3 accounts)', price: 0 },
      { id: 'pro', label: 'Pro (Unlimited accounts)', price: 99 },
      { id: 'enterprise', label: 'Enterprise (Custom)', price: 299 },
    ],
  },
  {
    id: 'analytics',
    name: 'Advanced Analytics',
    icon: '📈',
    basePrice: 0,
    description: 'Deep insights into your infrastructure',
    options: [
      { id: 'standard', label: 'Standard', price: 49 },
      { id: 'advanced', label: 'Advanced', price: 99 },
      { id: 'premium', label: 'Premium', price: 199 },
    ],
  },
  {
    id: 'logging',
    name: 'Log Analysis',
    icon: '📝',
    basePrice: 0,
    description: 'Centralized log management',
    options: [
      { id: 'small', label: '100GB/month', price: 39 },
      { id: 'medium', label: '500GB/month', price: 79 },
      { id: 'large', label: '2TB/month', price: 199 },
    ],
  },
  {
    id: 'security',
    name: 'Security Scanning',
    icon: '🔒',
    basePrice: 0,
    description: 'Vulnerability and compliance scanning',
    options: [
      { id: 'basic-sec', label: 'Basic Scanning', price: 59 },
      { id: 'advanced-sec', label: 'Advanced Scanning', price: 129 },
      { id: 'compliance', label: 'Compliance + Scanning', price: 249 },
    ],
  },
  {
    id: 'integrations',
    name: 'Custom Integrations',
    icon: '🔗',
    basePrice: 0,
    description: 'Connect with your favorite tools',
    options: [
      { id: 'starter-int', label: 'Starter (5 integrations)', price: 49 },
      { id: 'pro-int', label: 'Pro (Unlimited)', price: 129 },
      { id: 'enterprise-int', label: 'Enterprise (Custom)', price: 399 },
    ],
  },
  {
    id: 'support',
    name: 'Premium Support',
    icon: '💬',
    basePrice: 0,
    description: 'Priority support options',
    options: [
      { id: 'email', label: 'Email Support', price: 0 },
      { id: 'priority', label: 'Priority (24h response)', price: 79 },
      { id: '247', label: '24/7 Phone & Chat', price: 299 },
    ],
  },
];

export const PricingCalculator = () => {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const addService = (serviceId: string) => {
    const service = AVAILABLE_SERVICES.find((s) => s.id === serviceId);
    if (!service) return;

    const defaultOption = service.options[0];
    const newService: SelectedService = {
      id: `${serviceId}-${Date.now()}`,
      serviceId: service.id,
      serviceName: service.name,
      selectedOptionId: defaultOption.id,
      selectedOptionLabel: defaultOption.label,
      price: defaultOption.price,
    };

    setSelectedServices([...selectedServices, newService]);
    setOpenDropdown(null);
  };

  const removeService = (id: string) => {
    setSelectedServices(selectedServices.filter((s) => s.id !== id));
  };

  const updateServiceOption = (id: string, optionId: string) => {
    setSelectedServices((prev) =>
      prev.map((service) => {
        if (service.id === id) {
          const serviceConfig = AVAILABLE_SERVICES.find(
            (s) => s.id === service.serviceId
          );
          const option = serviceConfig?.options.find((o) => o.id === optionId);
          if (option) {
            return {
              ...service,
              selectedOptionId: optionId,
              selectedOptionLabel: option.label,
              price: option.price,
            };
          }
        }
        return service;
      })
    );
  };

  const totalPrice = selectedServices.reduce((sum, service) => sum + service.price, 0);
  const monthlyPrice = totalPrice;
  const annualPrice = totalPrice * 12;
  const annualSavings = totalPrice * 12 * 0.16;

  const availableServicesToAdd = AVAILABLE_SERVICES.filter(
    (service) =>
      !selectedServices.some((selected) => selected.serviceId === service.id)
  );

  return (
    <div className="space-y-8">
      {/* Calculator Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Custom Pricing Calculator
        </h2>
        <p className="text-gray-300 text-lg">
          Build your perfect plan by selecting the services you need
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Services Selection */}
        <div className="lg:col-span-2">
          {/* Add Service Button */}
          <div className="relative mb-8">
            <button
              onClick={() =>
                setOpenDropdown(
                  openDropdown === 'add-service' ? null : 'add-service'
                )
              }
              className="w-full md:w-auto inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary-light to-secondary-dark hover:from-secondary hover:to-secondary-dark text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Plus className="w-5 h-5" />
              Add Service
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openDropdown === 'add-service' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openDropdown === 'add-service' && availableServicesToAdd.length > 0 && (
              <div className="absolute top-full left-0 mt-2 w-full md:w-96 bg-slate-800 border border-cyan-500/30 rounded-lg shadow-2xl z-10">
                <div className="p-2 max-h-96 overflow-y-auto space-y-1">
                  {availableServicesToAdd.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => addService(service.id)}
                      className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-700/50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{service.icon}</span>
                        <div>
                          <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </p>
                          <p className="text-gray-400 text-sm">
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
              <div className="absolute top-full left-0 mt-2 w-full md:w-96 bg-slate-800 border border-cyan-500/30 rounded-lg shadow-2xl z-10 p-4">
                <p className="text-gray-400 text-center">All services added!</p>
              </div>
            )}
          </div>

          {/* Selected Services */}
          {selectedServices.length === 0 ? (
            <div className="bg-slate-800/50 border-2 border-dashed border-gray-600 rounded-xl p-12 text-center">
              <p className="text-gray-400 text-lg">
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
                  <div
                    key={service.id}
                    className="bg-slate-800/50 border border-gray-600 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                  >
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
                          <label className="text-gray-400 text-sm">Option:</label>
                          <select
                            value={service.selectedOptionId}
                            onChange={(e) =>
                              updateServiceOption(service.id, e.target.value)
                            }
                            className="bg-slate-700 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
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
                        <p className="text-2xl font-bold text-secondary-light">
                          ${service.price}
                        </p>
                        <button
                          onClick={() => removeService(service.id)}
                          className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                          title="Remove service"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Pricing Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-6">Pricing Summary</h3>

            <div className="space-y-4 mb-8 pb-8 border-b border-cyan-500/20">
              {selectedServices.length === 0 ? (
                <p className="text-gray-400 text-center py-4">
                  Add services to see pricing
                </p>
              ) : (
                <>
                  {selectedServices.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-gray-300">{service.serviceName}</span>
                      <span className="text-white font-semibold">
                        ${service.price}
                      </span>
                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Monthly</span>
                <span className="text-2xl font-bold text-white">${monthlyPrice}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Annual (16% off)</span>
                <span className="text-lg font-semibold text-secondary-light">
                  ${annualPrice - annualSavings}/year
                </span>
              </div>
              {annualSavings > 0 && (
                <div className="text-xs text-green-400 text-right">
                  Save ${Math.round(annualSavings)} annually
                </div>
              )}
            </div>

            <button className="w-full py-3 px-4 bg-gradient-to-r from-secondary-light to-secondary-dark hover:from-secondary hover:to-secondary-dark text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>

            <p className="text-xs text-gray-400 text-center mt-4">
              Start your 14-day free trial today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
