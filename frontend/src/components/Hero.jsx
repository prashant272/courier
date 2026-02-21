import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const [currentImage, setCurrentImage] = useState(0);
    const [trackingId, setTrackingId] = useState('');

    const images = [
        '/biryani/1.jpg',
        '/biryani/2.jpg',
        '/biryani/3.webp',
        '/biryani/4.jpg',
        '/biryani/5.jpg',
        '/biryani/6.jpg',
        '/biryani/7.jpg',
        '/biryani/8.jpg',
        '/biryani/9.jpg',
        '/biryani/10.avif',
        '/biryani/11.jpg',
        '/biryani/12.jpg'
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    const handleTrack = (e) => {
        e.preventDefault();
        if (trackingId) navigate(`/track?id=${trackingId}`);
    };

    return (
        <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-dark-900">
            {/* Full-Screen Background Slider */}
            <div className="absolute inset-0 z-0">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${index === currentImage ? 'opacity-100 scale-105' : 'opacity-0 scale-100'} transition-transform duration-[5s]`}
                    >
                        <img src={img} alt={`Logistics ${index + 1}`} className="w-full h-full object-cover object-center" />
                        {/* Mobile overlay: strong top-to-bottom dark so stacked content is always readable */}
                        <div className="absolute inset-0 bg-black/60 lg:bg-black/40"></div>
                        {/* Desktop: left gradient so right side image shows through */}
                        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-dark-900 via-dark-900/50 to-transparent"></div>
                        {/* Mobile: bottom gradient so image peeks through at top */}
                        <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-dark-900/30 via-transparent to-dark-900"></div>
                    </div>
                ))}
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 pb-8 lg:pt-20 lg:pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                    {/* Left Column: Branding Content (7/12) */}
                    <div className="lg:col-span-7 text-center lg:text-left animate-fade-in-up">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-8 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                            <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
                                Global Elite Logistics Network
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8 leading-[1.1] drop-shadow-2xl">
                            India’s Fastest & <br />
                            <span className="text-gold-gradient italic">Reliable Network</span>
                        </h1>

                        <p className="text-white/80 text-lg md:text-xl mb-12 font-light tracking-widest uppercase leading-relaxed max-w-2xl">
                            Same Day Pickup | Express Delivery <br className="hidden md:block" /> | Real-Time Tracking | COD
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
                            <button
                                onClick={() => navigate('/pickup')}
                                className="px-8 md:px-10 py-4 md:py-5 bg-gold text-black font-bold uppercase tracking-[0.2em] hover:bg-white transition-all transform hover:scale-105 flex items-center gap-3 shadow-2xl shadow-gold/40 rounded-xl text-sm md:text-base"
                            >
                                📦 Book Elite Pickup
                            </button>
                            <button
                                onClick={() => navigate('/services')}
                                className="px-8 md:px-10 py-4 md:py-5 bg-white/10 border border-white/30 text-white font-bold uppercase tracking-[0.2em] hover:bg-white/20 transition-all backdrop-blur-xl rounded-xl text-sm md:text-base"
                            >
                                Our Services
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Interactive Tracking Masterpiece (5/12) */}
                    <div className="lg:col-span-5 animate-fade-in-up delay-300 mb-8 lg:mb-0">
                        <div className="bg-dark-900/40 border border-white/20 rounded-[2.5rem] p-8 lg:p-10 backdrop-blur-3xl shadow-3xl relative overflow-hidden group hover:border-gold/40 transition-all duration-700">
                            {/* Decorative background glow */}
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-gold/10 transition-colors"></div>

                            <div className="relative z-10">
                                <div className="mb-10 text-center lg:text-left">
                                    <h3 className="text-2xl md:text-3xl font-display text-white mb-2">Track Shipment</h3>
                                    <p className="text-gold/60 text-[10px] uppercase tracking-[0.2em] font-bold">Real-Time Global Intelligence</p>
                                </div>

                                <form onSubmit={handleTrack} className="space-y-5">
                                    <div className="relative group/input">
                                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gold group-hover/input:scale-110 transition-transform" size={20} />
                                        <input
                                            type="text"
                                            placeholder="Enter Tracking ID (e.g. DTDC1234)"
                                            className="w-full bg-white/5 border border-white/10 pl-16 pr-6 py-5 text-white rounded-2xl focus:border-gold focus:bg-white/10 outline-none transition-all placeholder:text-white/20 text-lg font-light"
                                            value={trackingId}
                                            onChange={(e) => setTrackingId(e.target.value)}
                                        />
                                    </div>
                                    <button
                                        onClick={handleTrack}
                                        className="w-full py-5 bg-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-all rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-gold/20 text-lg group/btn"
                                    >
                                        Track Now <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                                    </button>
                                </form>

                                <div className="mt-12">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="h-px flex-1 bg-white/10"></div>
                                        <span className="text-white/20 text-[9px] uppercase tracking-[0.3em] font-bold">Official Carriers</span>
                                        <div className="h-px flex-1 bg-white/10"></div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-4">
                                        {["DHL", "FEDEX", "UPS", "ARAMEX"].map(name => (
                                            <div key={name} className="flex items-center gap-2.5 group/carrier">
                                                <div className="w-1 h-1 bg-gold rounded-full opacity-40 group-hover/carrier:opacity-100 transition-opacity"></div>
                                                <span className="text-[9px] text-white/50 font-bold tracking-[0.15em] group-hover/carrier:text-gold transition-colors">
                                                    {name} PARTNER
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-30 hidden lg:block">
                <ChevronDown size={28} className="text-white" />
            </div>
        </section>
    );
};

export default Hero;
