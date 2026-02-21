import React from 'react';
import { Package, MapPin, Truck, PhoneCall } from 'lucide-react';

const Stats = () => {
    const stats = [
        {
            icon: Package,
            value: "10,000+",
            label: "Parcels Delivered",
        },
        {
            icon: MapPin,
            value: "250+",
            label: "Cities Covered",
        },
        {
            icon: Truck,
            value: "98%",
            label: "On-Time Delivery",
        },
        {
            icon: PhoneCall,
            value: "24/7",
            label: "Expert Support",
        }
    ];

    return (
        <section className="py-20 bg-dark-900 border-y border-white/5 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                                <stat.icon size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-2">{stat.value}</h3>
                            <p className="text-white/60 uppercase tracking-[0.2em] text-xs font-bold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        </section>
    );
};

export default Stats;
