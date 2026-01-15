import type {Product} from "../../../assets/data/Product.data.ts";
import type {ComponentType, SVGProps} from "react";

interface ProductDetailsProps {
    product: Product
}

export const ProductDetails = ({product}: ProductDetailsProps) => {
    const Icon: ComponentType<SVGProps<SVGSVGElement>> = product.icon;
    return (
        <div className="p-0 grid md:grid-cols-2 gap-8 items-start">
            <div className="flex justify-center items-center overflow-hidden
            bg-gradient-to-r from-primary-light to-[#60a5fa] dark:from-primary dark:to-primary-light p-6 min-h-full md:h-auto rounded-xl"
            >
                <img src={product.image} alt={product.name}
                     className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="p-8">
                <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg text-secondary">
                        <Icon />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-semibold uppercase">{product.category}</p>
                        <p className="text-xs text-gray-400">{product.subCategory}</p>
                    </div>
                </div>

                <h1 className="lg:text-4xl text-xl font-bold text-gray-900 mb-4">{product.name}</h1>

                <div className="mb-6">
                    <p className="lg:text-lg text-sm text-gray-600 leading-relaxed">{product.description}</p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-8">
                    <p className="lg:text-sm text-xs text-gray-600 mb-2">Starting at</p>
                    <p className="lg:text-3xl text-xl font-bold text-secondary">{product.price}</p>
                </div>

                <button className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary-dark hover:border-secondary transition-colors mb-4">
                    Get Started
                </button>
                <button
                    className="w-full border-2 border-secondary text-secondary py-3 rounded-lg font-semibold hover:bg-blue-50 hover:border-secondary-light transition-colors">
                    Schedule Demo
                </button>
            </div>
        </div>
    )
}