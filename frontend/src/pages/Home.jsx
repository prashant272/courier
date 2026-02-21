import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PartnerStrip from '../components/PartnerStrip';
import Services from '../components/Services';
import InternationalCoverage from '../components/InternationalCoverage';
import SpecialOffers from '../components/SpecialOffers';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import BusinessSolutions from '../components/BusinessSolutions';
import FAQ from '../components/FAQ';
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {
    return (
        <div className="bg-dark-900 min-h-screen selection:bg-gold selection:text-black">
            <Navbar />
            <Hero />
            <PartnerStrip />
            <Services />
            <InternationalCoverage />
            <SpecialOffers />
            <Features />
            <Stats />
            <Testimonials />
            <BusinessSolutions />
            <FAQ />
            <WhatsAppButton />
        </div>
    );
};

export default Home;
