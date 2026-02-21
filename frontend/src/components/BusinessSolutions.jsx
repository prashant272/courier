import React from 'react';
import { Briefcase, Cpu, Landmark, ClipboardList, UserCheck, ArrowRight } from 'lucide-react';

const BusinessSolutions = () => {
    const solutions = [
        {
            icon: Briefcase,
            title: "Corporate Shipping",
            desc: "Customized logistics for your organization's unique requirements.",
        },
        {
            icon: Cpu,
            title: "API Integration",
            desc: "Seamlessly connect your e-commerce store with our tracking API.",
        },
        {
            icon: Landmark,
            title: "COD Settlement",
            desc: "Fastest Remittance cycles in the industry for online sellers.",
        },
        {
            icon: ClipboardList,
            title: "Bulk Monthly Plans",
            desc: "Simplified invoicing and deep discounts for frequent shippers.",
        },
        {
            icon: UserCheck,
            title: "Dedicated Manager",
            desc: "A single point of contact for all your elite logistics needs.",
        }
    ];

    return (
        <section className="py-10 bg-dark-800 relative overflow-hidden border-y border-white/5">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-gold text-sm font-bold tracking-[0.2em] uppercase block mb-4">
                            For Enterprises
                        </span>
                        <h2 className="text-4xl md:text-6xl font-display text-white mb-8">
                            Empowering Your <br />
                            <span className="text-gold-gradient italic">Business Growth</span>
                        </h2>
                        <p className="text-white/90 text-lg mb-10 leading-relaxed font-light">
                            Dev Raj Express offers scalable B2B logistics solutions designed to streamline your supply chain and enhance customer satisfaction with professional-grade delivery systems.
                        </p>
                        <button className="px-10 py-4 bg-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 flex items-center gap-3">
                            Connect with Sales <ArrowRight size={20} />
                        </button>
                    </div>

                    <div className="space-y-6">
                        {solutions.map((item, index) => (
                            <div key={index} className="flex gap-6 p-6 rounded-2xl border border-white/5 bg-white/5 group hover:border-gold/30 transition-all duration-300">
                                <div className="text-gold mt-1">
                                    <item.icon size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-display text-white mb-2 group-hover:text-gold transition-colors">{item.title}</h4>
                                    <p className="text-white/70 text-sm font-light leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        </section>
    );
};

export default BusinessSolutions;
