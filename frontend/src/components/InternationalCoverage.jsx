import React from 'react';
import { Globe, Star, ShieldCheck, MapPin, Truck } from 'lucide-react';

const InternationalCoverage = () => {
    const countries = [
        "UK", "Germany", "USA", "France", "Canada",
        "Finland", "Belgium", "New Zealand", "Austria"
    ];

    const stats = [
        { label: "Deliveries Done", value: "5000+", icon: Truck },
        { label: "Cities Covered", value: "200+", icon: MapPin },
        { label: "Customer Rating", value: "4.9", icon: Star },
    ];

    return (
        <section className="py-10 bg-dark-900 border-y border-white/5 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-gold text-sm font-bold tracking-[0.3em] uppercase block mb-4">
                        Worldwide Reach
                    </span>
                    <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
                        Our International <br />
                        <span className="text-gold-gradient italic">Coverage & Trust</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-center gap-6 hover:border-gold/30 transition-all group">
                                <div className="p-4 bg-gold/10 rounded-xl text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                                    <stat.icon size={28} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-display font-bold text-white mb-1">{stat.value}</h3>
                                    <p className="text-white/60 uppercase text-[10px] tracking-widest font-bold">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Countries List */}
                    <div className="bg-white/5 border border-gold/20 p-10 rounded-3xl backdrop-blur-md">
                        <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
                            <Globe className="text-gold animate-spin-slow" size={32} />
                            <div>
                                <h4 className="text-2xl font-display text-white">Global Hubs</h4>
                                <p className="text-white/50 text-xs uppercase tracking-widest">Aviation Logistics Partners Worldwide</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                            {countries.map((country, index) => (
                                <div key={index} className="flex items-center gap-3 group">
                                    <div className="w-1.5 h-1.5 bg-gold rounded-full group-hover:scale-150 transition-transform"></div>
                                    <span className="text-white/80 font-bold tracking-wider text-sm group-hover:text-gold transition-colors">
                                        {country.toUpperCase()}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-gold/5 border border-gold/10 rounded-xl">
                            <p className="text-white/70 text-sm font-light italic leading-relaxed">
                                "Seamless door-to-door delivery across Europe, North America, and Pacific regions. We handle taxes, duties, and customs for a worry-free elite experience."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InternationalCoverage;
