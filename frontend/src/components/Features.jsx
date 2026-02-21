import React from 'react';
import { Clock, ShieldCheck, CheckCircle, Smartphone, Globe, Shield, Trophy, Users } from 'lucide-react';

const Features = () => {
    return (
        <section className="py-10 relative bg-dark-800 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-gold text-sm font-bold tracking-[0.2em] uppercase block mb-4">
                        Elite Performance
                    </span>
                    <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
                        Why Businesses Trust <br />
                        <span className="text-gold-gradient italic">Dev Raj Express</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        We don't just deliver parcels; we deliver trust. Our commitment to excellence makes us India’s most trusted logistics partner for high-stakes deliveries.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {/* Feature 1 */}
                    <div className="p-10 border border-white/5 bg-white/5 backdrop-blur-sm rounded-2xl group hover:border-gold/50 transition-all duration-500 hover:-translate-y-2">
                        <div className="w-20 h-20 mx-auto bg-black border border-gold rounded-2xl flex items-center justify-center mb-8 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500 transform group-hover:rotate-6">
                            <Clock size={36} />
                        </div>
                        <h3 className="text-2xl font-display text-white mb-4">24/7 Priority Support</h3>
                        <p className="text-white/80 leading-relaxed font-light">Dedicated account managers available round the clock for your critical business shipments.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-10 border border-white/5 bg-white/5 backdrop-blur-sm rounded-2xl group hover:border-gold/50 transition-all duration-500 hover:-translate-y-2">
                        <div className="w-20 h-20 mx-auto bg-black border border-gold rounded-2xl flex items-center justify-center mb-8 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500 transform group-hover:-rotate-6">
                            <ShieldCheck size={36} />
                        </div>
                        <h3 className="text-2xl font-display text-white mb-4">Secured Cargo</h3>
                        <p className="text-white/80 leading-relaxed font-light">Multi-layer verification and specialized insurance for high-value industrial cargo.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-10 border border-white/5 bg-white/5 backdrop-blur-sm rounded-2xl group hover:border-gold/50 transition-all duration-500 hover:-translate-y-2">
                        <div className="w-20 h-20 mx-auto bg-black border border-gold rounded-2xl flex items-center justify-center mb-8 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500 transform group-hover:rotate-6">
                            <Globe size={36} />
                        </div>
                        <h3 className="text-2xl font-display text-white mb-4">Global Network</h3>
                        <p className="text-white/80 leading-relaxed font-light">Authorized DTDC partner providing seamless international shipping to 220+ countries worldwide.</p>
                    </div>

                    {/* Feature 4 */}
                    <div className="p-10 border border-white/5 bg-white/5 backdrop-blur-sm rounded-2xl group hover:border-gold/50 transition-all duration-500 hover:-translate-y-2">
                        <div className="w-20 h-20 mx-auto bg-black border border-gold rounded-2xl flex items-center justify-center mb-8 text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500 transform group-hover:-rotate-6">
                            <Smartphone size={36} />
                        </div>
                        <h3 className="text-2xl font-display text-white mb-4">Live Analytics</h3>
                        <p className="text-white/80 leading-relaxed font-light">Real-time GPS tracking and performance metrics via our elite business-first dashboard.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
