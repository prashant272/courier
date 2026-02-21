import React from 'react';
import { Truck, Globe, Rocket, Package, ShoppingCart, FileText, Pill, ShieldAlert, RotateCcw } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: Truck,
            title: "Domestic Courier",
            desc: "Nationwide delivery with DTDC's gold standard network.",
        },
        {
            icon: Globe,
            title: "International Courier",
            desc: "Seamless cross-border shipping to 220+ countries.",
        },
        {
            icon: Rocket,
            title: "Express Delivery",
            desc: "Critical same-day and next-day priority services.",
        },
        {
            icon: Package,
            title: "Bulk Cargo",
            desc: "Specialized handling for heavy industrial shipments.",
        },
        {
            icon: ShoppingCart,
            title: "Ecommerce Shipping",
            desc: "End-to-end logistics with COD for online vendors.",
        },
        {
            icon: FileText,
            title: "Document Courier",
            desc: "Secure, tamper-proof delivery for legal documents.",
        },
        {
            icon: Pill,
            title: "Medicine Courier",
            desc: "Temperature-controlled shipping for health essentials.",
        },
        {
            icon: ShieldAlert,
            title: "Fragile Item Handling",
            desc: "Extra care and customized packing for delicate cargo.",
        },
        {
            icon: RotateCcw,
            title: "Reverse Logistics",
            desc: "Hassle-free return management for your business.",
        }
    ];

    return (
        <section className="py-24 bg-dark-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-gold text-sm font-bold tracking-[0.2em] uppercase block mb-4">
                        Elite Solutions
                    </span>
                    <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
                        Our Premium <br />
                        <span className="text-gold-gradient italic">Logistics Services</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Authorized partners for <span className="text-gold font-bold">DHL, FEDEX, UPS, ARAMAX, DPD & TNT</span>. Providing tailored global logistics solutions with DTDC's domestic excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group p-10 bg-dark-800 border border-white/5 rounded-2xl hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-black transition-all duration-500 transform group-hover:rotate-12 shadow-lg shadow-gold/5">
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-display text-white mb-4">{service.title}</h3>
                            <p className="text-white/90 mb-8 font-light">{service.desc}</p>
                            <button className="mt-auto px-6 py-2 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300 rounded-lg">
                                Get Elite Quote
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
