export interface SubOption {
    id: string;
    label: string;
    price: number;
}

export interface ServiceOption {
    id: string;
    label: string;
    subOptions: SubOption[];
}

export interface Service {
    id: string;
    name: string;
    icon: string;
    basePrice: number;
    options: ServiceOption[];
    description: string;
}

export interface SelectedOptions {
    [optionId: string]: string;
}

export interface SelectedService {
    id: string;
    serviceId: string;
    serviceName: string;
    options: ServiceOption[];
    selectedOptions: SelectedOptions;
    price: number;
}
