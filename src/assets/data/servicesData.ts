import type {Service} from "../../pages/pricingPage/data/ServicesType.ts";

export const AVAILABLE_SERVICES: Service[] = [
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