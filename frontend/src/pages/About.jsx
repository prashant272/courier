import React from 'react';
import { Truck, Award, ShieldCheck, Globe, Zap, Users } from 'lucide-react';

const About = () => {
    const stats = [
        { value: "5000+", label: "Daily Deliveries" },
        { value: "19,000+", label: "Pin Codes Served" },
        { value: "220+", label: "Countries Covered" },
        { value: "99.2%", label: "On-Time Rate" },
    ];

    const values = [
        { icon: Zap, title: "Express Speed", desc: "Same-day pickup and next-day delivery for domestic shipments across India." },
        { icon: ShieldCheck, title: "Secure Handling", desc: "Every parcel is tracked, insured, and handled with the utmost care and professionalism." },
        { icon: Globe, title: "Global Reach", desc: "Authorized partner of DTDC, DHL, FedEx, UPS & Aramex covering 220+ countries worldwide." },
        { icon: Award, title: "Elite Service", desc: "Premium concierge logistics for businesses and individuals who demand excellence." },
        { icon: Users, title: "Trusted Network", desc: "Serving 5000+ customers daily with a 4.9-star satisfaction rating." },
        { icon: Truck, title: "End-to-End", desc: "Pickup, transit, tracking, and doorstep delivery — fully managed by our expert team." },
    ];

    return (
        <div className="bg-dark-900 min-h-screen pt-24 pb-20 text-white">
            {/* Hero Section */}
            <div className="relative h-[45vh] mb-24 flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-dark-900" />
                <div className="relative z-10 text-center px-6">
                    <span className="text-gold text-sm font-bold tracking-[0.3em] uppercase block mb-4">
                        Our Story
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display text-white mb-4">
                        About <span className="text-gold italic">Dev Raj Express</span>
                    </h1>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
                        India's premium authorized logistics partner — delivering trust across borders.
                    </p>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8" />
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-6xl">
                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-gold/40 transition-all hover:-translate-y-1">
                            <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">{stat.value}</div>
                            <div className="text-white/60 text-sm uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Introduction */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
                    <div>
                        <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase block mb-4">Who We Are</span>
                        <h2 className="text-4xl md:text-5xl font-display text-white mb-8 leading-tight">
                            Greater Noida's <span className="text-gold italic">Elite</span> Courier Hub
                        </h2>
                        <p className="text-white/70 leading-relaxed mb-6 font-light text-lg">
                            Dev Raj Express is an authorized multi-brand logistics franchise located in Greater Noida West, Uttar Pradesh. We are the official partners of <strong className="text-white">DTDC, DHL, FedEx, UPS, Aramex, TNT, and DPD</strong> — bringing global-grade shipping services to your doorstep.
                        </p>
                        <p className="text-white/70 leading-relaxed font-light">
                            Founded with a vision to make premium international and domestic logistics accessible and affordable, we serve businesses, e-commerce sellers, and individuals who need reliable, fast, and secure courier services every single day.
                        </p>
                        <div className="mt-8 p-6 border-l-4 border-gold bg-gold/5 rounded-r-xl">
                            <p className="text-white/80 italic font-light">
                                "Our mission is to make world-class logistics available to every business and individual in India, regardless of scale."
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 border border-gold/20 rounded-2xl rotate-2" />
                        <img
                            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                            alt="Dev Raj Express Logistics Hub"
                            className="relative rounded-2xl shadow-2xl w-full object-cover h-[420px]"
                        />
                    </div>
                </section>

                {/* Core Values */}
                <section className="mb-28">
                    <div className="text-center mb-16">
                        <span className="text-gold text-sm font-bold tracking-[0.3em] uppercase block mb-3">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-display text-white">
                            The <span className="text-gold italic">Dev Raj</span> Difference
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((v, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-gold/30 transition-all hover:-translate-y-2 group">
                                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                                    <v.icon size={26} className="text-gold" />
                                </div>
                                <h3 className="text-xl font-display text-white mb-3">{v.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed font-light">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Vision */}
                <section className="bg-white/5 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden border border-white/10">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
                    <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase block mb-6">Our Vision</span>
                    <h2 className="text-3xl md:text-5xl font-display text-white mb-8 leading-tight max-w-3xl mx-auto">
                        "To be India's most trusted premium courier access point — connecting every business to the world."
                    </h2>
                    <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
                        At Dev Raj Express, every shipment carries our commitment to precision, speed, and elite customer service.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About;
