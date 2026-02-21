import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How long does delivery typically take?",
            answer: "Domestic express deliveries usually take 24-48 hours. International shipments vary between 3-7 business days depending on the destination and customs clearance."
        },
        {
            question: "Do you provide Cash on Delivery (COD)?",
            answer: "Yes, we provide specialized COD services for e-commerce vendors with one of the fastest remittance cycles in the industry."
        },
        {
            question: "Is specialized fragile packaging available?",
            answer: "Absolutely. We offer elite white-glove handling and reinforced packaging options for delicate items like electronics, glassware, and artwork."
        },
        {
            question: "How can I track my shipment in real-time?",
            answer: "You can track your shipment using the tracking bar on our homepage or by entering your Tracking ID on the 'Track Shipment' page. We also provide auto-updates via SMS and Email."
        },
        {
            question: "What is the maximum weight limit for shipments?",
            answer: "We handle everything from documents (500g) to heavy industrial cargo (1000kg+). For shipments over 50kg, we recommend our specialized Cargo solutions."
        }
    ];

    return (
        <section className="py-10 bg-dark-800 border-y border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-gold text-sm font-bold tracking-[0.2em] uppercase block mb-4">
                        Got Questions?
                    </span>
                    <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
                        Logistics <span className="text-gold-gradient italic">Expertise FAQ</span>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-white/5 bg-white/5 rounded-2xl overflow-hidden group">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full p-6 flex justify-between items-center text-left transition-all hover:bg-white/5"
                            >
                                <div className="flex items-center gap-4">
                                    <HelpCircle className="text-gold" size={20} />
                                    <span className="text-white font-display text-lg group-hover:text-gold transition-colors">{faq.question}</span>
                                </div>
                                {activeIndex === index ? (
                                    <Minus className="text-gold" size={20} />
                                ) : (
                                    <Plus className="text-gold" size={20} />
                                )}
                            </button>
                            <div className={`transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-40 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                <p className="text-white/80 font-light leading-relaxed border-t border-white/10 pt-4">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
