import {ReactNode, useState} from "react";

interface Product {
    id: string;
    name: string;
    category: string;
    subCategory: string;
    price: string;
    description: string;
    icon: ReactNode;
    label?: string;
}

interface ProductCardProps {
    product: Product,
    key?: string
}

export const ProductCard = ({product}: ProductCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative h-full bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-500 ease-in-out hover:border-blue-400 hover:shadow-xl hover:-translate-y-1"
        >
            <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>

            <div className="relative p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                    <div
                        className="p-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg text-secondary-dark group-hover:shadow-md transition-shadow duration-500">
                        {product.icon}
                    </div>
                    <span className="text-sm font-semibold text-secondary-dark bg-blue-50 px-3 py-1 rounded-full">
            {product.price}
          </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-secondary-dark transition-colors duration-500">
                    {product.name}
                </h3>

                <div className="mb-4 space-y-1">
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <p className="text-xs text-gray-400">{product.subCategory}</p>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                    <div
                        className={`overflow-hidden transition-all duration-500 ${
                            isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </button>
    );
};