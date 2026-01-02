import type {ComponentType, SVGProps} from "react";
import {Activity, BarChart3, Cloud, Shield, Zap} from "lucide-react";

export interface SubCategory {
    id: string;
    name: string;
}

export interface Product {
    id: string;
    name: string;
    category: string;
    subCategory: string;
    price: string;
    description: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    label?: string;
    image: string;
}

export interface Category {
    id: string;
    name: string;
    subCategories: SubCategory[];
}

export const CATEGORIES: Category[] = [
    {
        id: 'cloud',
        name: 'Seamless Cloud Integration',
        subCategories: [
            { id: 'multi-cloud', name: 'Multi-Cloud' },
            { id: 'hybrid', name: 'Hybrid' },
            { id: 'migration', name: 'Migration Tools' },
        ],
    },
    {
        id: 'analytics',
        name: 'Data Analytics',
        subCategories: [
            { id: 'real-time', name: 'Real-Time' },
            { id: 'reporting', name: 'Reporting' },
            { id: 'visualization', name: 'Visualization' },
        ],
    },
    {
        id: 'security',
        name: 'Security Suite',
        subCategories: [
            { id: 'threat-detection', name: 'Threat Detection' },
            { id: 'compliance', name: 'Compliance' },
            { id: 'encryption', name: 'Encryption' },
        ],
    },
    {
        id: 'monitoring',
        name: 'Monitoring Tools',
        subCategories: [
            { id: 'infrastructure', name: 'Infrastructure' },
            { id: 'performance', name: 'Performance' },
            { id: 'alerting', name: 'Alerting' },
        ],
    },
    {
        id: 'computing',
        name: 'Computing',
        subCategories: [
            { id: 'containers', name: 'Containers' },
            { id: 'serverless', name: 'Serverless' },
            { id: 'virtual-machines', name: 'Virtual Machines' },
        ],
    },
];

export const PRODUCTS: Product[] = [
    {
        id: 'p1',
        name: 'CloudSync Pro',
        category: 'Seamless Cloud Integration',
        subCategory: 'Multi-Cloud',
        price: '$99/mo',
        description: 'Seamless synchronization across multiple cloud providers with intelligent routing.',
        icon: Cloud,
        image: new URL("../images/productImages/cloudSync.png", import.meta.url).href
    },
    {
        id: 'p2',
        name: 'HybridLink',
        category: 'Seamless Cloud Integration',
        subCategory: 'Hybrid',
        price: '$149/mo',
        description: 'Connect on-premise infrastructure with cloud services effortlessly.',
        icon: Cloud,
        image: new URL("../images/productImages/hybridLink.png", import.meta.url).href
    },
    {
        id: 'p3',
        name: 'MigrateFlow',
        category: 'Seamless Cloud Integration',
        subCategory: 'Migration Tools',
        price: '$199/mo',
        description: 'Automated cloud migration with zero downtime and full data integrity.',
        icon: Cloud,
        image: "gg"
    },
    {
        id: 'p4',
        name: 'InsightLive',
        category: 'Data Analytics',
        subCategory: 'Real-Time',
        price: '$149/mo',
        description: 'Real-time data analytics with instant insights and custom dashboards.',
        icon: BarChart3,
        image: "gg"
    },
    {
        id: 'p5',
        name: 'ReportMax',
        category: 'Data Analytics',
        subCategory: 'Reporting',
        price: '$89/mo',
        description: 'Comprehensive reporting suite with automated schedules and templates.',
        icon: BarChart3,
        image: "gg"
    },
    {
        id: 'p6',
        name: 'VisualData',
        category: 'Data Analytics',
        subCategory: 'Visualization',
        price: '$129/mo',
        description: 'Transform raw data into stunning visual representations.',
        icon: BarChart3,
        image: "gg"
    },
    {
        id: 'p7',
        name: 'ThreatShield',
        category: 'Security Suite',
        subCategory: 'Threat Detection',
        price: '$249/mo',
        description: 'Advanced threat detection with AI-powered anomaly detection.',
        icon: Shield,
        image: "gg"
    },
    {
        id: 'p8',
        name: 'ComplianceHub',
        category: 'Security Suite',
        subCategory: 'Compliance',
        price: '$199/mo',
        description: 'Automated compliance monitoring for GDPR, HIPAA, SOC 2 and more.',
        icon: Shield,
        image: "gg"
    },
    {
        id: 'p9',
        name: 'CryptoGuard',
        category: 'Security Suite',
        subCategory: 'Encryption',
        price: '$79/mo',
        description: 'Enterprise-grade encryption for data at rest and in transit.',
        icon: Shield,
        image: "gg"
    },
    {
        id: 'p10',
        name: 'InfraWatch',
        category: 'Monitoring Tools',
        subCategory: 'Infrastructure',
        price: '$119/mo',
        description: 'Monitor infrastructure health across all your cloud resources.',
        icon: Activity,
        image: "gg"
    },
    {
        id: 'p11',
        name: 'PerfTrace',
        category: 'Monitoring Tools',
        subCategory: 'Performance',
        price: '$139/mo',
        description: 'Deep performance monitoring with automatic issue detection.',
        icon: Activity,
        image: "gg"
    },
    {
        id: 'p12',
        name: 'AlertSystem',
        category: 'Monitoring Tools',
        subCategory: 'Alerting',
        price: '$59/mo',
        description: 'Intelligent alerting system with multi-channel notifications.',
        icon: Activity,
        image: "gg"
    },
    {
        id: 'p13',
        name: 'ContainerOS',
        category: 'Computing',
        subCategory: 'Containers',
        price: '$179/mo',
        description: 'Complete container orchestration and management platform.',
        icon: Zap,
        image: "gg"
    },
    {
        id: 'p14',
        name: 'ServerlessEdge',
        category: 'Computing',
        subCategory: 'Serverless',
        price: '$129/mo',
        description: 'Deploy functions globally with zero server management.',
        icon: Zap,
        image: "gg"
    },
    {
        id: 'p15',
        name: 'VMCluster',
        category: 'Computing',
        subCategory: 'Virtual Machines',
        price: '$159/mo',
        description: 'High-performance virtual machine management and scaling.',
        icon: Zap,
        image: "gg"
    },
];