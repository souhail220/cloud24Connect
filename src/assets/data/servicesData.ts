import type {Service} from "../../pages/pricingPage/data/ServicesType.ts";

export const AVAILABLE_SERVICES: Service[] = [
    {
        id: 'backup',
        name: 'Cloud Backup',
        icon: '💾',
        basePrice: 0,
        description: 'Automated backups for your cloud data',
        options: [
            {
                id: 'storage',
                label: 'Backup Storage',
                subOptions: [
                    { id: '0gb', label: '50GB', price: 0 },
                    { id: '200gb', label: '200GB', price: 19 },
                    { id: '1tb', label: '1TB', price: 49 },
                ],
            },
            {
                id: 'frequency',
                label: 'Backup Frequency',
                subOptions: [
                    { id: 'daily', label: 'Daily', price: 0 },
                    { id: 'hourly', label: 'Hourly', price: 29 },
                    { id: 'realtime', label: 'Real-time', price: 79 },
                ],
            },
        ],
    },
    {
        id: 'cdn',
        name: 'Content Delivery Network',
        icon: '🌐',
        basePrice: 0,
        description: 'Accelerate your content globally',
        options: [
            {
                id: 'bandwidth',
                label: 'Monthly Bandwidth',
                subOptions: [
                    { id: '1tb', label: '1TB', price: 29 },
                    { id: '5tb', label: '5TB', price: 99 },
                    { id: '10tb', label: '10TB', price: 199 },
                ],
            },
            {
                id: 'ssl',
                label: 'SSL Support',
                subOptions: [
                    { id: 'basic', label: 'Basic SSL', price: 0 },
                    { id: 'premium', label: 'Premium SSL', price: 49 },
                ],
            },
        ],
    },
    {
        id: 'database',
        name: 'Managed Database',
        icon: '🗄️',
        basePrice: 0,
        description: 'Managed SQL & NoSQL databases',
        options: [
            {
                id: 'db-type',
                label: 'Database Type',
                subOptions: [
                    { id: 'mysql', label: 'MySQL', price: 0 },
                    { id: 'postgres', label: 'PostgreSQL', price: 10 },
                    { id: 'mongodb', label: 'MongoDB', price: 15 },
                ],
            },
            {
                id: 'instance-size',
                label: 'Instance Size',
                subOptions: [
                    { id: 'small', label: 'Small', price: 29 },
                    { id: 'medium', label: 'Medium', price: 79 },
                    { id: 'large', label: 'Large', price: 199 },
                ],
            },
        ],
    },
    {
        id: 'ai-tools',
        name: 'AI Tools & Automation',
        icon: '🤖',
        basePrice: 0,
        description: 'Machine learning models and automation tools',
        options: [
            {
                id: 'plan',
                label: 'Plan Level',
                subOptions: [
                    { id: 'starter', label: 'Starter', price: 49 },
                    { id: 'pro', label: 'Pro', price: 149 },
                    { id: 'enterprise', label: 'Enterprise', price: 399 },
                ],
            },
            {
                id: 'automation',
                label: 'Automation Tasks',
                subOptions: [
                    { id: '10-tasks', label: '10 Tasks/Month', price: 0 },
                    { id: '50-tasks', label: '50 Tasks/Month', price: 79 },
                    { id: 'unlimited', label: 'Unlimited Tasks', price: 199 },
                ],
            },
        ],
    },
    {
        id: 'dev-tools',
        name: 'Developer Tools',
        icon: '🛠️',
        basePrice: 0,
        description: 'Tools and environments for developers',
        options: [
            {
                id: 'environments',
                label: 'Dev Environments',
                subOptions: [
                    { id: '1', label: '1 Environment', price: 0 },
                    { id: '3', label: '3 Environments', price: 49 },
                    { id: 'unlimited', label: 'Unlimited', price: 149 },
                ],
            },
            {
                id: 'ci-cd',
                label: 'CI/CD Pipelines',
                subOptions: [
                    { id: 'basic', label: 'Basic', price: 0 },
                    { id: 'pro', label: 'Pro', price: 79 },
                    { id: 'enterprise', label: 'Enterprise', price: 199 },
                ],
            },
        ],
    },
    {
        id: 'monitoring',
        name: 'Cloud Monitoring',
        icon: '📊',
        basePrice: 0,
        description: 'Track your cloud infrastructure',
        options: [
            {
                id: 'plan',
                label: 'Plan Type',
                subOptions: [
                    { id: 'basic', label: 'Basic (3 accounts)', price: 0 },
                    { id: 'pro', label: 'Pro (Unlimited accounts)', price: 99 },
                    { id: 'enterprise', label: 'Enterprise (Custom)', price: 299 },
                ],
            },
            {
                id: 'retention',
                label: 'Data Retention',
                subOptions: [
                    { id: '30days', label: '30 Days', price: 0 },
                    { id: '90days', label: '90 Days', price: 29 },
                    { id: '1year', label: '1 Year', price: 99 },
                ],
            }
        ],
    },
    {
        id: 'analytics',
        name: 'Advanced Analytics',
        icon: '📈',
        basePrice: 0,
        description: 'Deep insights into your infrastructure',
        options: [
            {
                id: 'tier',
                label: 'Analytics Tier',
                subOptions: [
                    { id: 'standard', label: 'Standard', price: 49 },
                    { id: 'advanced', label: 'Advanced', price: 99 },
                    { id: 'premium', label: 'Premium', price: 199 },
                ],
            },
            {
                id: 'reports',
                label: 'Custom Reports',
                subOptions: [
                    { id: 'none', label: 'None', price: 0 },
                    { id: 'basic-reports', label: 'Basic (10 reports)', price: 19 },
                    { id: 'unlimited-reports', label: 'Unlimited', price: 49 },
                ],
            },
        ],
    },
    {
        id: 'logging',
        name: 'Log Analysis',
        icon: '📝',
        basePrice: 0,
        description: 'Centralized log management',
        options: [
            {
                id: 'storage',
                label: 'Log Storage',
                subOptions: [
                    { id: 'small', label: '100GB/month', price: 39 },
                    { id: 'medium', label: '500GB/month', price: 79 },
                    { id: 'large', label: '2TB/month', price: 199 },
                ],
            },
            {
                id: 'search',
                label: 'Search & Query',
                subOptions: [
                    { id: 'basic-search', label: 'Basic Search', price: 0 },
                    { id: 'advanced-search', label: 'Advanced Search', price: 29 },
                    { id: 'ai-search', label: 'AI-Powered Search', price: 79 },
                ],
            },
        ],
    },
    {
        id: 'security',
        name: 'Security Scanning',
        icon: '🔒',
        basePrice: 0,
        description: 'Vulnerability and compliance scanning',
        options: [
            {
                id: 'scanning',
                label: 'Scan Type',
                subOptions: [
                    { id: 'basic-sec', label: 'Basic Scanning', price: 59 },
                    { id: 'advanced-sec', label: 'Advanced Scanning', price: 129 },
                    { id: 'compliance', label: 'Compliance + Scanning', price: 249 },
                ],
            },
            {
                id: 'frequency',
                label: 'Scan Frequency',
                subOptions: [
                    { id: 'weekly', label: 'Weekly', price: 0 },
                    { id: 'daily', label: 'Daily', price: 39 },
                    { id: 'realtime', label: 'Real-time', price: 99 },
                ],
            },
        ],
    },
    {
        id: 'integrations',
        name: 'Custom Integrations',
        icon: '🔗',
        basePrice: 0,
        description: 'Connect with your favorite tools',
        options: [
            {
                id: 'count',
                label: 'Integration Count',
                subOptions: [
                    { id: 'starter-int', label: 'Starter (5 integrations)', price: 49 },
                    { id: 'pro-int', label: 'Pro (Unlimited)', price: 129 },
                    { id: 'enterprise-int', label: 'Enterprise (Custom)', price: 399 },
                ],
            },
            {
                id: 'webhooks',
                label: 'Webhooks',
                subOptions: [
                    { id: 'no-webhooks', label: 'None', price: 0 },
                    { id: 'basic-webhooks', label: 'Basic (100/month)', price: 19 },
                    { id: 'unlimited-webhooks', label: 'Unlimited', price: 49 },
                ],
            },
        ],
    },
    {
        id: 'support',
        name: 'Premium Support',
        icon: '💬',
        basePrice: 0,
        description: 'Priority support options',
        options: [
            {
                id: 'level',
                label: 'Support Level',
                subOptions: [
                    { id: 'email', label: 'Email Support', price: 0 },
                    { id: 'priority', label: 'Priority (24h response)', price: 79 },
                    { id: '247', label: '24/7 Phone & Chat', price: 299 },
                ],
            },
            {
                id: 'dedicated',
                label: 'Account Manager',
                subOptions: [
                    { id: 'no-manager', label: 'None', price: 0 },
                    { id: 'shared-manager', label: 'Shared Manager', price: 149 },
                    { id: 'dedicated-manager', label: 'Dedicated Manager', price: 399 },
                ],
            },
        ],
    },
];