import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, logout } = useAuth();
    const { cart, isCartOpen, setIsCartOpen } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/logo.jpeg" alt="Dev Raj Express Logo" className="h-16 w-16 rounded-full border-2 border-gold object-cover" />
                        <span className="text-2xl font-bold font-display tracking-wider text-gold-gradient">
                            Dev Raj Express
                        </span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="text-white hover:text-gold transition-colors text-sm uppercase tracking-widest">
                        Home
                    </Link>
                    <Link to="/services" className="text-white hover:text-gold transition-colors text-sm uppercase tracking-widest">
                        Services
                    </Link>
                    <Link to="/track" className="text-white hover:text-gold transition-colors text-sm uppercase tracking-widest">
                        Track Shipment
                    </Link>
                    <Link to="/about" className="text-white hover:text-gold transition-colors text-sm uppercase tracking-widest">
                        About
                    </Link>
                    <Link to="/contact" className="text-white hover:text-gold transition-colors text-sm uppercase tracking-widest">
                        Contact
                    </Link>
                </div>

                {/* Icons */}
                <div className="hidden md:flex items-center space-x-6">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <Link to="/my-orders" className="text-white hover:text-gold transition-colors text-sm uppercase tracking-widest">
                                My Shipments
                            </Link>
                            <span className="text-gold font-bold">{user.name.split(' ')[0]}</span>
                            <button onClick={logout} className="text-gray-400 hover:text-white text-sm uppercase tracking-widest">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="text-white hover:text-gold transition-colors text-sm uppercase tracking-widest">
                            Login
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gold focus:outline-none"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10 py-4 flex flex-col items-center space-y-4">
                    <Link
                        to="/"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-white hover:text-gold text-lg uppercase tracking-widest"
                    >
                        Home
                    </Link>
                    <Link
                        to="/services"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-white hover:text-gold text-lg uppercase tracking-widest"
                    >
                        Services
                    </Link>
                    <Link
                        to="/track"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-white hover:text-gold text-lg uppercase tracking-widest"
                    >
                        Track Shipment
                    </Link>
                    <Link
                        to="/about"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-white hover:text-gold text-lg uppercase tracking-widest"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-white hover:text-gold text-lg uppercase tracking-widest"
                    >
                        Contact
                    </Link>

                    {user ? (
                        <>
                            <Link to="/my-orders" onClick={() => setIsMobileMenuOpen(false)} className="text-gold text-lg uppercase tracking-widest">My Shipments</Link>
                            <button onClick={logout} className="text-gray-400 text-lg uppercase tracking-widest">Logout</button>
                        </>
                    ) : (
                        <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-gold text-lg uppercase tracking-widest">Login</Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
