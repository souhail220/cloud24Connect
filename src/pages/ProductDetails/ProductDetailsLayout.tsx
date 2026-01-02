import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import {Navbar} from "../../shared/navbar/navbar.tsx";
import Footer from "../../shared/footer/footer.tsx";
import {ProductDetails} from "./component/ProductDetails.tsx";
import {PRODUCTS} from "../../assets/data/Product.data.ts";
import type {Product} from "../../assets/data/Product.data.ts";
import {TESTIMONIALS_BY_PRODUCT} from "../../assets/data/product.testimonial.data.ts";
import type {Testimonial} from "../../assets/data/product.testimonial.data.ts";
import {ProductTestimonials} from "./component/ProductTestimonials.tsx";

export const ProductDetailsLayout = () => {
    const { productId } = useParams<{ productId: string }>();
    const navigate = useNavigate();

    const product: Product | undefined = PRODUCTS.find(p => p.id === productId);
    const testimonials: Testimonial[] = productId ? TESTIMONIALS_BY_PRODUCT[productId] || [] : [];

    if (!product) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="pt-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <button onClick={() => navigate('/products/dashboard')}
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 font-semibold"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back to Products
                        </button>
                        <div className="text-center py-20">
                            <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
    );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary to-primary-dark">
            <Navbar />
            <div className="pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <button onClick={() => navigate('/products/dashboard')}
                        className="flex items-center gap-2 text-secondary hover:text-secondary-dark hover:border-secondary-light mb-8 font-semibold transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Products
                    </button>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-12">
                        <ProductDetails product={product} />
                    </div>

                    {testimonials.length > 0 && (
                        <div>
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-secondary mb-2">Customer Testimonials</h2>
                                <p className="text-white">See what our satisfied customers have to say</p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {testimonials.map((testimonial) => (
                                    <ProductTestimonials key={testimonial.id} testimonial={testimonial} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};
