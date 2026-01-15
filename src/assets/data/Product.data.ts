import type {ComponentType, SVGProps} from "react";
import {Activity, Cloud, Copy, Database, Mail, Network, Settings, Shield, Wrench, Zap} from "lucide-react";

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
        id: 'hosting',
        name: 'Hosting Services',
        subCategories: [
            { id: 'vps', name: 'VPS' },
            { id: 'email', name: 'Email Hosting' },
        ],
    },
    {
        id: 'control-panel',
        name: 'Control Panel',
        subCategories: [
            { id: 'cpanel', name: 'cPanel' },
            { id: 'plesk', name: 'Plesk' },
            { id: 'cloudlinux', name: 'CloudLinux' },
        ],
    },
    {
        id: 'backup',
        name: 'Backup & Disaster Recovery',
        subCategories: [
            { id: 'backup-service', name: 'Backup As A Service' },
            { id: 'disaster-recovery', name: 'Disaster Recovery' },
        ],
    },
    {
        id: 'security',
        name: 'Security',
        subCategories: [
            { id: 'ssl', name: 'SSL Certificates' },
            { id: 'waf', name: 'WAF' },
            { id: 'antivirus', name: 'Antivirus' },
            { id: 'vpn', name: 'VPN' },
        ],
    },
    {
        id: 'licenses',
        name: 'Licences',
        subCategories: [
            { id: 'microsoft', name: 'Microsoft' },
        ],
    },
    {
        id: 'managed-services',
        name: 'Managed Services',
        subCategories: [
            { id: 'network-design', name: 'Network Design' },
            { id: 'infrastructure', name: 'Infrastructure Management' },
            { id: 'migration', name: 'Migration Services' },
            { id: 'monitoring', name: 'Monitoring' },
        ],
    },
];

export const PRODUCTS: Product[] = [
    {
        id: 'p1',
        name: 'VPS Hosting',
        category: 'Hosting Services',
        subCategory: 'VPS',
        price: '$29/mo',
        description: 'High-performance virtual private servers with full root access and dedicated resources.',
        icon: Cloud,
        image: new URL("../images/productImages/vps_transparent.webp", import.meta.url).href
    },
    {
        id: 'p2',
        name: 'Email Hosting',
        category: 'Hosting Services',
        subCategory: 'Email Hosting',
        price: '$5/mo',
        description: 'Professional email hosting with spam protection and advanced filtering.',
        icon: Mail,
        image: new URL("../images/productImages/MailHosting.webp", import.meta.url).href
    },
    {
        id: 'p3',
        name: 'cPanel Control Panel',
        category: 'Control Panel',
        subCategory: 'cPanel',
        price: '$15/mo',
        description: 'Industry-leading control panel with intuitive interface for server management.',
        icon: Settings,
        image: new URL("../images/productImages/Serveur Cpanel.webp", import.meta.url).href
    },
    {
        id: 'p4',
        name: 'Plesk Control Panel',
        category: 'Control Panel',
        subCategory: 'Plesk',
        price: '$18/mo',
        description: 'Modern control panel with powerful automation and multi-OS support.',
        icon: Settings,
        image: new URL("../images/productImages/Plesk.webp", import.meta.url).href
    },
    {
        id: 'p5',
        name: 'CloudLinux OS',
        category: 'Control Panel',
        subCategory: 'CloudLinux',
        price: '$12/mo',
        description: 'Stable, secure operating system optimized for hosting environments.',
        icon: Zap,
        image: new URL("../images/productImages/Cloud_Linux.webp", import.meta.url).href
    },
    {
        id: 'p6',
        name: 'Backup As A Service',
        category: 'Backup & Disaster Recovery',
        subCategory: 'Backup As A Service',
        price: '$49/mo',
        description: 'Automated daily backups with unlimited storage and instant restore capability.',
        icon: Copy,
        image: new URL("../images/productImages/Backup_storage.webp", import.meta.url).href
    },
    {
        id: 'p7',
        name: 'Disaster Recovery',
        category: 'Backup & Disaster Recovery',
        subCategory: 'Disaster Recovery',
        price: '$99/mo',
        description: 'Complete disaster recovery solution with RTO and RPO guarantees.',
        icon: Database,
        image: new URL("../images/productImages/Disaster_recovery.webp", import.meta.url).href
    },
    {
        id: 'p8',
        name: 'SSL Certificates',
        category: 'Security',
        subCategory: 'SSL Certificates',
        price: '$49/year',
        description: 'Industry-standard SSL certificates for secure HTTPS connections.',
        icon: Shield,
        image: new URL("../images/productImages/ssl-gateway.webp", import.meta.url).href
    },
    {
        id: 'p9',
        name: 'Web Application Firewall',
        category: 'Security',
        subCategory: 'WAF',
        price: '$79/mo',
        description: 'Advanced WAF protection against OWASP top 10 and DDoS attacks.',
        icon: Shield,
        image: new URL("../images/productImages/waf.webp", import.meta.url).href
    },
    {
        id: 'p10',
        name: 'Antivirus Protection',
        category: 'Security',
        subCategory: 'Antivirus',
        price: '$19/mo',
        description: 'Real-time malware detection and removal for servers and websites.',
        icon: Shield,
        image: new URL("../images/productImages/antivirus.png", import.meta.url).href
    },
    {
        id: 'p11',
        name: 'VPN Service',
        category: 'Security',
        subCategory: 'VPN',
        price: '$9/mo',
        description: 'Secure VPN with encryption and unlimited bandwidth across global servers.',
        icon: Shield,
        image: new URL("../images/productImages/vpn.webp", import.meta.url).href
    },
    {
        id: 'p12',
        name: 'Microsoft Licenses',
        category: 'Licences',
        subCategory: 'Microsoft',
        price: 'Custom',
        description: 'Volume licensing for Microsoft Office, Windows Server, and enterprise solutions.',
        icon: Activity,
        image: new URL("../images/productImages/microsoft.png", import.meta.url).href
    },
    {
        id: 'p13',
        name: 'Network Design',
        category: 'Managed Services',
        subCategory: 'Network Design',
        price: 'Custom',
        description: 'Expert network architecture design and implementation services.',
        icon: Network,
        image: new URL("../images/productImages/network.webp", import.meta.url).href
    },
    {
        id: 'p14',
        name: 'Infrastructure Management',
        category: 'Managed Services',
        subCategory: 'Infrastructure Management',
        price: 'Custom',
        description: 'Comprehensive infrastructure management and monitoring 24/7.',
        icon: Wrench,
        image: new URL("../images/productImages/infrastructure.webp", import.meta.url).href
    },
    {
        id: 'p15',
        name: 'Migration Services',
        category: 'Managed Services',
        subCategory: 'Migration Services',
        price: 'Custom',
        description: 'Mail, environment, and data migration services with zero downtime.',
        icon: Copy,
        image: new URL("../images/productImages/Migration_Service.webp", import.meta.url).href
    },
];