import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardDetails from '../components/CardDetails';

const CardDetailPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-purple-800 to-blue-900 text-white min-h-screen">
      <Navbar />

      <main className="container mx-auto py-16 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl w-full">
          {/* Ürün Görseli */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Colorful Skull Art"
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>

          {/* Kart Detayları */}
          <CardDetails
            title="Colorful Skull Art"
            description="This unique NFT represents a skull art embellished with bright colors. It is a perfect piece for both modern art lovers and collectors."
            status="Waiting List"
            owner="User A"
            transferInfo="This card will be automatically added to your account when the QR code is scanned."
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CardDetailPage;
