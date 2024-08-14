import React from 'react';
import Navbar from '../components/Navbar';
import CardList from '../components/CardList';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-purple-800 to-blue-800 text-white min-h-screen">
      <Navbar />
      
      <main className="container mx-auto text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Explore <span className="text-pink-400">and</span> Collect <span className="text-pink-400">NFT's</span>
        </h1>
        <p className="text-lg md:text-xl mb-12">
        The brand loyalty program you are looking for is here!
        </p>

        <CardList />
        <HowItWorks />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
