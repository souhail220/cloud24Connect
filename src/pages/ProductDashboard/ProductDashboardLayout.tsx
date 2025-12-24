import { useState, useMemo } from 'react';
import { Search, Cloud, BarChart3, Shield, Activity, Zap, X } from 'lucide-react';
import Footer from "../../shared/footer/footer.tsx";
import {Navbar} from "../../shared/navbar/navbar.tsx";
import {CategoryFilter} from "./components/CategoryFilter.tsx";
import {ProductCard} from "./components/ProductCard.tsx";

interface SubCategory {
    id: string;
    name: string;
}

interface Product {
    id: string;
    name: string;
    category: string;
    subCategory: string;
    price: string;
    description: string;
    icon: React.ReactNode;
    label?: string;
}

interface Category {
    id: string;
    name: string;
    subCategories: SubCategory[];
}

const CATEGORIES: Category[] = [
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

const PRODUCTS: Product[] = [
    {
        id: 'p1',
        name: 'CloudSync Pro',
        category: 'Seamless Cloud Integration',
        subCategory: 'Multi-Cloud',
        price: '$99/mo',
        description: 'Seamless synchronization across multiple cloud providers with intelligent routing.',
        icon: <Cloud className="w-8 h-8" />,
    },
    {
        id: 'p2',
        name: 'HybridLink',
        category: 'Seamless Cloud Integration',
        subCategory: 'Hybrid',
        price: '$149/mo',
        description: 'Connect on-premise infrastructure with cloud services effortlessly.',
        icon: <Cloud className="w-8 h-8" />,
    },
    {
        id: 'p3',
        name: 'MigrateFlow',
        category: 'Seamless Cloud Integration',
        subCategory: 'Migration Tools',
        price: '$199/mo',
        description: 'Automated cloud migration with zero downtime and full data integrity.',
        icon: <Cloud className="w-8 h-8" />,
    },
    {
        id: 'p4',
        name: 'InsightLive',
        category: 'Data Analytics',
        subCategory: 'Real-Time',
        price: '$149/mo',
        description: 'Real-time data analytics with instant insights and custom dashboards.',
        icon: <BarChart3 className="w-8 h-8" />,
    },
    {
        id: 'p5',
        name: 'ReportMax',
        category: 'Data Analytics',
        subCategory: 'Reporting',
        price: '$89/mo',
        description: 'Comprehensive reporting suite with automated schedules and templates.',
        icon: <BarChart3 className="w-8 h-8" />,
    },
    {
        id: 'p6',
        name: 'VisualData',
        category: 'Data Analytics',
        subCategory: 'Visualization',
        price: '$129/mo',
        description: 'Transform raw data into stunning visual representations.',
        icon: <BarChart3 className="w-8 h-8" />,
    },
    {
        id: 'p7',
        name: 'ThreatShield',
        category: 'Security Suite',
        subCategory: 'Threat Detection',
        price: '$249/mo',
        description: 'Advanced threat detection with AI-powered anomaly detection.',
        icon: <Shield className="w-8 h-8" />,
    },
    {
        id: 'p8',
        name: 'ComplianceHub',
        category: 'Security Suite',
        subCategory: 'Compliance',
        price: '$199/mo',
        description: 'Automated compliance monitoring for GDPR, HIPAA, SOC 2 and more.',
        icon: <Shield className="w-8 h-8" />,
    },
    {
        id: 'p9',
        name: 'CryptoGuard',
        category: 'Security Suite',
        subCategory: 'Encryption',
        price: '$79/mo',
        description: 'Enterprise-grade encryption for data at rest and in transit.',
        icon: <Shield className="w-8 h-8" />,
    },
    {
        id: 'p10',
        name: 'InfraWatch',
        category: 'Monitoring Tools',
        subCategory: 'Infrastructure',
        price: '$119/mo',
        description: 'Monitor infrastructure health across all your cloud resources.',
        icon: <Activity className="w-8 h-8" />,
    },
    {
        id: 'p11',
        name: 'PerfTrace',
        category: 'Monitoring Tools',
        subCategory: 'Performance',
        price: '$139/mo',
        description: 'Deep performance monitoring with automatic issue detection.',
        icon: <Activity className="w-8 h-8" />,
    },
    {
        id: 'p12',
        name: 'AlertSystem',
        category: 'Monitoring Tools',
        subCategory: 'Alerting',
        price: '$59/mo',
        description: 'Intelligent alerting system with multi-channel notifications.',
        icon: <Activity className="w-8 h-8" />,
    },
    {
        id: 'p13',
        name: 'ContainerOS',
        category: 'Computing',
        subCategory: 'Containers',
        price: '$179/mo',
        description: 'Complete container orchestration and management platform.',
        icon: <Zap className="w-8 h-8" />,
    },
    {
        id: 'p14',
        name: 'ServerlessEdge',
        category: 'Computing',
        subCategory: 'Serverless',
        price: '$129/mo',
        description: 'Deploy functions globally with zero server management.',
        icon: <Zap className="w-8 h-8" />,
    },
    {
        id: 'p15',
        name: 'VMCluster',
        category: 'Computing',
        subCategory: 'Virtual Machines',
        price: '$159/mo',
        description: 'High-performance virtual machine management and scaling.',
        icon: <Zap className="w-8 h-8" />,
    },
];

const ProductDashboard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

    const filteredProducts = useMemo(() => {
        return PRODUCTS.filter((product) => {
            const matchesSearch =
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory =
                !selectedCategory || product.category === CATEGORIES.find(c => c.id === selectedCategory)?.name;

            const selectedSubCategoryName = CATEGORIES
                .find(c => c.id === selectedCategory)
                ?.subCategories?.find(s => s?.id === selectedSubCategory)?.name;

            const matchesSubCategory = !selectedSubCategory || product.subCategory === selectedSubCategoryName;


            return matchesSearch && matchesCategory && matchesSubCategory;
        });
    }, [searchQuery, selectedCategory, selectedSubCategory]);

    return (
        <div className="min-h-screen  flex flex-col">
            <Navbar />
            <main>
                <div className="min-h-screen mt-16 bg-gradient-to-br from-primary-dark via-primary to-primary-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        {/* Header */}
                        <div className="mb-12">
                            <h1 className="text-4xl sm:text-5xl font-bold text-secondary mb-2">
                                Product Dashboard
                            </h1>
                            <p className="text-white">Browse and filter our complete product catalog</p>
                        </div>

                        {/* Search Bar */}
                        <div className="mb-8">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-slate-700/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="mb-12 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <CategoryFilter
                                categories={CATEGORIES}
                                selectedCategory={selectedCategory}
                                selectedSubCategory={selectedSubCategory}
                                onCategoryChange={setSelectedCategory}
                                onSubCategoryChange={setSelectedSubCategory}
                            />
                        </div>

                        {/* Results Count */}
                        <div className="mb-6 text-sm text-white">
                            Showing <span className="font-semibold text-secondary">{filteredProducts.length}</span> of{' '}
                            <span className="font-semibold text-secondary">{PRODUCTS.length}</span> products
                        </div>

                        {/* Products Grid */}
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-1000">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                <p className="text-gray-500 text-lg">No products found matching your filters</p>
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setSelectedCategory(null);
                                        setSelectedSubCategory(null);
                                    }}
                                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>

    );
};
export default ProductDashboard;
