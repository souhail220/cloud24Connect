export interface DropdownItem {
    title: string;
    description: string;
    icon?: string;
    link: string;
}

export interface NavItem {
    id: number;
    label: string;
    link: string;
    dropdownItems?: DropdownItem[];
}

export interface Language {
    code: string;
    name: string;
    flag: string;
}

export const NAV_ITEMS: NavItem[] = [
    {
        id: 1,
        label: 'Docs',
        link: '/pricing',
        dropdownItems: [
            {
                title: 'Getting Started',
                description: 'Quick setup and installation guide',
                icon: '📚',
                link: '/docs/getting-started'
            },
            {
                title: 'API Reference',
                description: 'Complete API documentation',
                icon: '⚙️',
                link: '/docs/api'
            },
            {
                title: 'Tutorials',
                description: 'Step-by-step learning guides',
                icon: '🎓',
                link: '/docs/tutorials'
            },
            {
                title: 'Best Practices',
                description: 'Learn from experts',
                icon: '✨',
                link: '/docs/best-practices'
            }
        ]
    },
    {
        id: 2,
        label: 'Support',
        link: '/pricing',
        dropdownItems: [
            {
                title: 'Help Center',
                description: 'Find answers to common questions',
                icon: '❓',
                link: '/support/help-center'
            },
            {
                title: 'Community Forum',
                description: 'Connect with other users',
                icon: '💬',
                link: '/support/forum'
            },
            {
                title: 'Contact Support',
                description: 'Get help from our team',
                icon: '📧',
                link: '/support/contact'
            },
            {
                title: 'Status Page',
                description: 'Check system status',
                icon: '🟢',
                link: '/support/status'
            }
        ]
    },
    {
        id: 3,
        label: 'Contact Sales',
        link: '/pricing',
        dropdownItems: [
            {
                title: 'Request Demo',
                description: 'See our platform in action',
                icon: '🎬',
                link: '/sales/demo'
            },
            {
                title: 'Get Quote',
                description: 'Custom pricing for your needs',
                icon: '💰',
                link: '/sales/quote'
            },
            {
                title: 'Enterprise Solutions',
                description: 'Tailored for large organizations',
                icon: '🏢',
                link: '/sales/enterprise'
            },
            {
                title: 'Talk to Sales',
                description: 'Speak with our sales team',
                icon: '📞',
                link: '/sales/contact'
            }
        ]
    },
    {
        id: 4,
        label: 'Products',
        link: '/products/dashboard',
        dropdownItems: [
            {
                title: 'Cloud Connect',
                description: 'Seamless cloud integration',
                icon: '☁️',
                link: '/products/dashboard'
            },
            {
                title: 'Data Analytics',
                description: 'Powerful insights from your data',
                icon: '📊',
                link: '/products/dashboard'
            },
            {
                title: 'Security Suite',
                description: 'Enterprise-grade protection',
                icon: '🔒',
                link: '/products/dashboard'
            },
            {
                title: 'API Gateway',
                description: 'Manage and secure your APIs',
                icon: '🌐',
                link: '/products/dashboard'
            },
            {
                title: 'Monitoring Tools',
                description: 'Real-time system monitoring',
                icon: '📈',
                link: '/products/dashboard'
            }
        ]
    },
    {
        id: 5,
        label: 'Company',
        link: '/pricing',
        dropdownItems: [
            {
                title: 'About Us',
                description: 'Learn about our mission',
                icon: '🏛️',
                link: '/company/about'
            },
            {
                title: 'Careers',
                description: 'Join our team',
                icon: '💼',
                link: '/company/careers'
            },
            {
                title: 'Blog',
                description: 'Latest news and updates',
                icon: '📝',
                link: '/company/blog'
            },
            {
                title: 'Press Kit',
                description: 'Media resources',
                icon: '📰',
                link: '/company/press'
            },
            {
                title: 'Partners',
                description: 'Our partner ecosystem',
                icon: '🤝',
                link: '/company/partners'
            }
        ]
    },
    {
        id: 6,
        label: 'Pricing',
        link: '/pricing',
        dropdownItems: [
            {
                title: 'Plans & Pricing',
                description: 'Choose the right plan for you',
                icon: '💳',
                link: 'plans'
            },
            {
                title: 'Free Trial',
                description: 'Try free for 14 days',
                icon: '🎁',
                link: 'trial'
            },
            {
                title: 'Pricing Calculator',
                description: 'Estimate better. Build smarter. Decide faster',
                icon: '🧮',
                link: 'calculator'
            },
            {
                title: 'Compare Plans',
                description: 'See all features side-by-side',
                icon: '⚖️',
                link: 'comparison'
            },
            {
                title: 'Volume Discounts',
                description: 'Save with higher usage',
                icon: '📦',
                link: 'discounts'
            }
        ]
    }
];

export const LANGUAGES: Language[] = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "zh", name: "中文", flag: "🇨🇳" }
];