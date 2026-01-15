import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import Footer from "../../shared/footer/footer.tsx";
import {Navbar} from "../../shared/navbar/navbar.tsx";
import {CategoryFilter} from "./components/CategoryFilter.tsx";
import {ProductCard} from "./components/ProductCard.tsx";
import {CATEGORIES, PRODUCTS} from "../../assets/data/Product.data.ts";

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
                <div className="min-h-screen mt-16 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-primary-dark dark:via-primary dark:to-primary-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        {/* Header */}
                        <div className="mb-12">
                            <h1 className="text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-light dark:from-secondary-dark dark:to-secondary bg-clip-text text-transparent">
                                Product Dashboard
                            </h1>
                            <p className="text-gray-800 dark:text-white">Browse and filter our complete product catalog</p>
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
                                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-white dark:bg-slate-700/50 border border-gray-600 text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
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
                        <div className="mb-6 text-sm text-gray-800 dark:text-white">
                            Showing <span className="font-semibold text-primary dark:text-secondary">{filteredProducts.length}</span> of{' '}
                            <span className="font-semibold text-primary dark:text-secondary">{PRODUCTS.length}</span> products
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
