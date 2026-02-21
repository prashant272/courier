import React from 'react';
import { Percent, Gift, CreditCard, Users, Package, Calendar } from 'lucide-react';

const SpecialOffers = () => {
    return (
        <section className="py-24 bg-dark-900 border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-gold text-sm font-bold tracking-[0.2em] uppercase block mb-4">
                        Corporate Partnerships
                    </span>
                    <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
                        Elite Shipments, <br />
                        <span className="text-gold-gradient italic">Exclusive Rates</span>
                    </h2>
                    <p className="text-gold font-bold text-sm bg-gold/10 inline-block px-4 py-2 rounded-full border border-gold/20 animate-fade-pulse">
                        🔥 High-Volume Booking Offers - Valid for Limited Time
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Offer 1 */}
                    <div className="group relative overflow-hidden bg-gradient-to-br from-dark-800 to-dark-900 border border-gold/20 p-10 rounded-2xl hover:border-gold transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-black/50">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="p-4 bg-gold/10 rounded-xl text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-500">
                                <Users size={32} />
                            </div>
                            <h3 className="text-2xl font-display text-white">First B2B Shipment</h3>
                        </div>
                        <p className="text-gold font-bold text-3xl mb-2">FLAT 30% OFF</p>
                        <p className="text-white/80 text-sm mb-8 leading-relaxed">Boost your business with our elite welcome discount. Use Code: <span className="text-white font-mono bg-white/10 px-3 py-1 rounded-lg border border-white/10 ml-2">DEVRAJ30</span></p>
                        <button className="w-full py-4 border border-gold text-gold font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300 rounded-lg">Claim Offer</button>
                    </div>

                    {/* Offer 2 */}
                    <div className="group relative overflow-hidden bg-gradient-to-br from-dark-800 to-dark-900 border border-gold/20 p-10 rounded-2xl hover:border-gold transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-black/50">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="p-4 bg-gold/10 rounded-xl text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-500">
                                <Package size={32} />
                            </div>
                            <h3 className="text-2xl font-display text-white">Bulk Parcels</h3>
                        </div>
                        <p className="text-gold font-bold text-3xl mb-2">10+ Parcels Deal</p>
                        <p className="text-white/80 text-sm mb-8 leading-relaxed">Exclusive rates for bulk bookings above 10 parcels. Ideal for e-commerce and retail vendors.</p>
                        <button className="w-full py-4 border border-gold text-gold font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300 rounded-lg">Get Wholesale Rates</button>
                    </div>

                    {/* Offer 3 */}
                    <div className="group relative overflow-hidden bg-gradient-to-br from-dark-800 to-dark-900 border border-gold/20 p-10 rounded-2xl hover:border-gold transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-black/50">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="p-4 bg-gold/10 rounded-xl text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-500">
                                <Calendar size={32} />
                            </div>
                            <h3 className="text-2xl font-display text-white">Monthly Plans</h3>
                        </div>
                        <p className="text-gold font-bold text-3xl mb-2">Corporate Plans</p>
                        <p className="text-white/80 text-sm mb-8 leading-relaxed">Bespoke monthly subscription for frequent shippers with dedicated accounts and COD settlements.</p>
                        <button className="w-full py-4 border border-gold text-gold font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300 rounded-lg">Contact Enterprise</button>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-white/60 text-sm flex items-center justify-center gap-2">
                        <Gift size={16} /> Free Home Pickup on all local orders above ₹500
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;
