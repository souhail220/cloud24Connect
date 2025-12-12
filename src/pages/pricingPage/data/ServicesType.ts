export interface ServiceOption {
    id: string;
    label: string;
    price: number;
}

export interface Service {
    id: string;
    name: string;
    icon: string;
    basePrice: number;
    options: ServiceOption[];
    description: string;
}

export interface SelectedService {
    id: string;
    serviceId: string;
    serviceName: string;
    selectedOptionId: string;
    selectedOptionLabel: string;
    price: number;
}