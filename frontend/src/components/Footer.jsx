import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Send, ChevronRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark-900 pt-10 pb-8 border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
                    {/* Left Side: Brand & Detailed Form */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <img src="/logo.jpeg" alt="Dev Raj Express Logo" className="h-16 w-16 rounded-full border-2 border-gold object-cover" />
                            <span className="text-3xl font-bold font-display tracking-wider text-gold-gradient">
                                Dev Raj Express
                            </span>
                        </div>
                        <p className="text-white/90 mb-10 max-w-md leading-relaxed font-light">
                            Dev Raj Express: Your premium gateway to global logistics. Authorized partner of <span className="text-gold font-bold">DTDC, DHL, FedEx, UPS, Aramex, DPD, and TNT</span>. Delivering excellence across 19,000+ codes in India and 220 countries worldwide.
                        </p>

                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
                            <h4 className="text-white font-display text-xl mb-6 flex items-center gap-2">
                                <Send className="text-gold" size={20} /> Request a Elite Callback
                            </h4>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Full Name" className="bg-dark-900 border border-white/10 p-3 rounded-lg text-white focus:border-gold outline-none transition-all placeholder:text-gray-600" />
                                <input type="text" placeholder="Phone Number" className="bg-dark-900 border border-white/10 p-3 rounded-lg text-white focus:border-gold outline-none transition-all placeholder:text-gray-600" />
                                <input type="email" placeholder="Email Address" className="bg-dark-900 border border-white/10 p-3 rounded-lg text-white focus:border-gold outline-none transition-all placeholder:text-gray-600" />
                                <select className="bg-dark-900 border border-white/10 p-3 rounded-lg text-gray-400 focus:border-gold outline-none transition-all">
                                    <option>Select Service Type</option>
                                    <option>Domestic Courier</option>
                                    <option>International Cargo</option>
                                    <option>Corporate Contract</option>
                                </select>
                                <input type="text" placeholder="Pickup Pincode" className="bg-dark-900 border border-white/10 p-3 rounded-lg text-white focus:border-gold outline-none transition-all placeholder:text-gray-600" />
                                <input type="text" placeholder="Destination City" className="bg-dark-900 border border-white/10 p-3 rounded-lg text-white focus:border-gold outline-none transition-all placeholder:text-gray-600" />
                                <button className="md:col-span-2 py-4 bg-gold text-black font-black uppercase tracking-widest hover:bg-white transition-all transform hover:scale-[1.02]">
                                    Get Quote Now
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Side: Links & Contact */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h4 className="text-white font-display text-xl mb-8 border-l-4 border-gold pl-4">Elite Services</h4>
                            <ul className="space-y-4">
                                <li><Link to="/services" className="text-white/70 hover:text-gold transition-colors flex items-center gap-2 font-light"><ChevronRight size={14} /> Express Delivery</Link></li>
                                <li><Link to="/services" className="text-white/70 hover:text-gold transition-colors flex items-center gap-2 font-light"><ChevronRight size={14} /> Global Priority Ship</Link></li>
                                <li><Link to="/services" className="text-white/70 hover:text-gold transition-colors flex items-center gap-2 font-light"><ChevronRight size={14} /> Industrial Cargo</Link></li>
                                <li><Link to="/services" className="text-white/70 hover:text-gold transition-colors flex items-center gap-2 font-light"><ChevronRight size={14} /> Medicine Express</Link></li>
                                <li><Link to="/services" className="text-white/70 hover:text-gold transition-colors flex items-center gap-2 font-light"><ChevronRight size={14} /> E-commerce Logi</Link></li>
                            </ul>

                            <h4 className="text-white font-display text-xl mt-12 mb-8 border-l-4 border-gold pl-4 text-xs tracking-widest uppercase">Global Hubs</h4>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                <span className="text-white/60 hover:text-gold text-xs flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full"></div> UK & Europe</span>
                                <span className="text-white/60 hover:text-gold text-xs flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full"></div> USA & Canada</span>
                                <span className="text-white/60 hover:text-gold text-xs flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full"></div> Germany & France</span>
                                <span className="text-white/60 hover:text-gold text-xs flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full"></div> Australia & NZ</span>
                                <span className="text-white/60 hover:text-gold text-xs flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full"></div> Austria & Finland</span>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-display text-xl mb-8 border-l-4 border-gold pl-4 text-xs tracking-widest uppercase">Contact Elite</h4>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <MapPin className="text-gold mt-1 shrink-0" size={18} />
                                    <span className="text-white/80 text-sm font-light leading-relaxed">Plot No 47, Baba Haridass Market, Tura Mandi, Najafgarh, Near Reliance Smart Mall, Delhi - 110043</span>
                                </li>
                                <li className="flex flex-col gap-2">
                                    <div className="flex items-center gap-4">
                                        <Phone className="text-gold shrink-0" size={18} />
                                        <span className="text-white/80 text-sm font-light">+91 88512 05871</span>
                                    </div>
                                    <div className="flex items-center gap-4 ml-8">
                                        <span className="text-white/80 text-sm font-light">+91 95552 54163</span>
                                    </div>
                                    <div className="flex items-center gap-4 ml-8">
                                        <span className="text-white/80 text-sm font-light">+91 88826 63673</span>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <Mail className="text-gold shrink-0" size={18} />
                                    <span className="text-white/80 text-sm font-light">express@devraj.com</span>
                                </li>
                            </ul>

                            <div className="mt-12">
                                <h4 className="text-white font-display text-sm mb-6 uppercase tracking-widest font-bold">Follow Our World</h4>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-black transition-all group shadow-xl">
                                        <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-black transition-all group shadow-xl">
                                        <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-black transition-all group shadow-xl">
                                        <Twitter size={20} className="group-hover:scale-110 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} Dev Raj Express. Elite Logistics Partner - Authorized DTDC Franchise.
                    </p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="text-gray-500 hover:text-white text-[10px] uppercase tracking-widest font-bold">Privacy Policy</Link>
                        <Link to="/terms" className="text-gray-500 hover:text-white text-[10px] uppercase tracking-widest font-bold">Terms & Conditions</Link>
                        <Link to="/refund" className="text-gray-500 hover:text-white text-[10px] uppercase tracking-widest font-bold">Refund Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
