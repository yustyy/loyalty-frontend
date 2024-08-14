import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="mt-24 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Join us!</h2>
      <p className="text-lg md:text-xl mb-12">
        Register now and, start collecting NFTs today!
      </p>
      <button className="bg-pink-500 text-white py-4 px-8 rounded-lg hover:bg-pink-600">
        Start now!
      </button>
    </section>
  );
};

export default CallToAction;
