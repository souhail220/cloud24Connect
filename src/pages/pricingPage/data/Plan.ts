export type PlanType = 'free' | 'pro' | 'enterprise';

export interface Plan {
    id: PlanType;
    name: string;
    description: string;
    price: string;
    period?: string;
    cta: string;
    highlight?: boolean;
    features: Array<{
        name: string;
        included: boolean;
    }>;
}