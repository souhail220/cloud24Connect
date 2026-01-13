interface SubCategory {
    id: string;
    name: string;
}

interface Category {
    id: string;
    name: string;
    subCategories: SubCategory[];
}

interface CategoryFilterProps {
    categories: Category[];
    selectedCategory: string | null;
    selectedSubCategory: string | null;
    onCategoryChange: (categoryId: string | null) => void;
    onSubCategoryChange: (subCategoryId: string | null) => void;
}

export const CategoryFilter = ({
                            categories,
                            selectedCategory,
                            selectedSubCategory,
                            onCategoryChange,
                            onSubCategoryChange,
                        }: CategoryFilterProps) => {
    const selectedCategoryObj = categories.find((c) => c.id === selectedCategory);

    return (
        <div className="space-y-4">
            <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">Categories</p>
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => {
                            onCategoryChange(null);
                            onSubCategoryChange(null);
                        }}
                        className={`px-4 py-2 rounded-full border hover:border-primary-light dark:hover:border-secondary font-medium transition-all duration-300 ${
                            selectedCategory === null
                                ? 'bg-primary dark:bg-secondary-dark text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => {
                                onCategoryChange(selectedCategory === category.id ? null : category.id);
                                onSubCategoryChange(null);
                            }}
                            className={`px-4 py-2 rounded-full hover:border-primary-light dark:hover:border-secondary font-medium transition-all duration-300 ${
                                selectedCategory === category.id
                                    ? 'bg-primary dark:bg-secondary-dark text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {selectedCategoryObj && (
                <div className="animate-in fade-in duration-300">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Sub-Categories</p>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => onSubCategoryChange(null)}
                            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                                selectedSubCategory === null
                                    ? 'bg-primary-light text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            All
                        </button>
                        {selectedCategoryObj.subCategories.map((subCategory) => (
                            <button
                                key={subCategory.id}
                                onClick={() =>
                                    onSubCategoryChange(
                                        selectedSubCategory === subCategory.id ? null : subCategory.id
                                    )
                                }
                                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                                    selectedSubCategory === subCategory.id
                                        ? 'bg-primary-light text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {subCategory.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};