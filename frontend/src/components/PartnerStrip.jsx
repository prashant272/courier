import React from 'react';

const PartnerStrip = () => {
    const partners = [
        { name: "DTDC", logo: "/courier/dtdc.png" },
        { name: "DHL", logo: "/courier/dhl.png" },
        { name: "FedEx", logo: "/courier/fadex.png" },
        { name: "UPS", logo: "/courier/ups.png" },
        { name: "Aramex", logo: "/courier/armex.webp" },
        { name: "TNT", logo: "/courier/tnt.png" },
        { name: "DPD", logo: "/courier/DPD.png" }
    ];

    // Double the array for seamless infinite scroll
    const slidingPartners = [...partners, ...partners, ...partners, ...partners];

    return (
        <section className="py-10 bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-10 text-center">
                <span className="text-gold text-sm font-bold tracking-[0.4em] uppercase opacity-70 block mb-3">
                    OUR DOMESTIC & INTERNATIONAL IMPACT
                </span>
                <h2 className="text-white font-display text-3xl md:text-5xl font-bold">
                    Official <span className="text-gold italic">Logistics Partners</span>
                </h2>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* Horizontal Gradient Overlays for Fade Effect */}
                <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20 pointer-events-none"></div>

                <div className="flex animate-marquee whitespace-nowrap items-center py-10">
                    {slidingPartners.map((partner, index) => (
                        <div
                            key={index}
                            className="inline-flex items-center justify-center mx-4 md:mx-6"
                        >
                            <div className="w-44 h-24 md:w-64 md:h-36 bg-white rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center transition-all duration-700 hover:scale-110 shadow-3xl shadow-black/50 overflow-hidden group/card relative">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="w-full h-full object-contain p-4 md:p-6 transition-all duration-500 transform group-hover/card:scale-110"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerStrip;
