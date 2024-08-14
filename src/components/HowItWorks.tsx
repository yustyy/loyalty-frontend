import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 bg-opacity-40 rounded-lg p-6">
          <div className="h-64 bg-gray-600 rounded-lg mb-4 overflow-hidden">
            <img 
              src="src/assets/register.jpeg" 
              alt="Step 1: Register" 
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-lg font-semibold">Step 1: Register</p>
          <p className="text-gray-400">Register to collect NFTs.</p>
        </div>
        <div className="bg-gray-800 bg-opacity-40 rounded-lg p-6">
          <div className="h-64 bg-gray-600 rounded-lg mb-4 overflow-hidden">
            <img 
              src="src/assets/collect.jpeg" 
              alt="Step 2: Collect NFTs" 
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-lg font-semibold">Step 2: Collect NFTs</p>
          <p className="text-gray-400">Explore our marketplace and collect the NFTs you love.</p>
        </div>
        <div className="bg-gray-800 bg-opacity-40 rounded-lg p-6">
          <div className="h-64 bg-gray-600 rounded-lg mb-4 overflow-hidden">
            <img 
              src="src/assets/earnrew.jpeg" 
              alt="Step 3: Earn rewards" 
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-lg font-semibold">Step 3: Earn rewards</p>
          <p className="text-gray-400">Put your NFTs up for sale or trade with others in the community.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
