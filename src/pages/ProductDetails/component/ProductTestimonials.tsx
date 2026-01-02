import {Star} from "lucide-react";
import type {Testimonial} from "../../../assets/data/product.testimonial.data.ts";

interface ProductTestimonialsProps {
    testimonial: Testimonial,
    key?: string
}

export const ProductTestimonials = ({testimonial, key}: ProductTestimonialsProps) => {
    return (
        <div key={key}
            className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
            <div className="flex items-center gap-4 mb-6">
                <img src={testimonial.avatar} alt={testimonial.name}
                     className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
            </div>

            <div className="flex gap-1 mb-4">
                {Array.from({length: 5}).map((_, i) => (
                    <Star key={i}
                          className={`w-4 h-4 ${
                              i < testimonial.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                          }`
                          }
                    />
                ))}
            </div>
            <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
        </div>
    )
}