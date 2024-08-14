import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="mt-24 bg-purple-700 bg-opacity-50 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Kullanıcılarımız Ne Diyor?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 bg-opacity-40 rounded-lg p-6">
          <p className="text-lg font-semibold">"Harika bir platform! Burada çok özel NFT'ler buldum!"</p>
          <p className="text-gray-400 mt-4">- Kullanıcı A</p>
        </div>
        <div className="bg-gray-800 bg-opacity-40 rounded-lg p-6">
          <p className="text-lg font-semibold">"NFT alıp satmak için en iyi yer. Kesinlikle tavsiye ederim!"</p>
          <p className="text-gray-400 mt-4">- Kullanıcı B</p>
        </div>
        <div className="bg-gray-800 bg-opacity-40 rounded-lg p-6">
          <p className="text-lg font-semibold">"Başlangıçtan bitişe kadar sorunsuz bir deneyim."</p>
          <p className="text-gray-400 mt-4">- Kullanıcı C</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
