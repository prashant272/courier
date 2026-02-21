import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Rohit Sharma",
            location: "New Delhi",
            text: "Very fast delivery, pickup same day ho gaya. Highly recommended for urgent business documents.",
            rating: 5
        },
        {
            name: "Priyanka Verma",
            location: "Mumbai",
            text: "Excellent service for fragile items. My international shipment reached London without a single scratch.",
            rating: 5
        },
        {
            name: "Amit Singhal",
            location: "Bangalore",
            text: "Their corporate dashboard is a game changer for our e-commerce business. Tracking is 100% accurate.",
            rating: 5
        }
    ];

    return (
        <section className="py-24 bg-dark-900 overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 mb-6 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                        <span className="text-gold font-bold">4.9 / 5.0</span>
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <Star key={i} size={14} className="text-gold fill-gold" />
                            ))}
                        </div>
                        <span className="text-white/60 text-xs ml-2">Google Reviews</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
                        What Our Elite <br />
                        <span className="text-gold-gradient italic">Clients Say</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="p-10 bg-dark-800 border border-white/5 rounded-2xl relative group hover:border-gold/30 transition-all duration-500">
                            <Quote size={40} className="text-gold/20 absolute top-8 right-8 group-hover:text-gold/40 transition-colors" />
                            <div className="flex mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="text-gold fill-gold" />
                                ))}
                            </div>
                            <p className="text-white/90 mb-8 italic leading-relaxed font-light">"{review.text}"</p>
                            <div>
                                <h4 className="text-white font-display text-lg">{review.name}</h4>
                                <p className="text-gold text-xs uppercase tracking-widest">{review.location}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Client Logos Placeholder */}
                <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="text-white font-display text-2xl font-black italic">TRUSTED BY 500+ ENTERPRISES ACROSS INDIA</span>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
