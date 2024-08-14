import React from 'react';

const Navbar: React.FC = () => {
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("Connected account:", accounts[0]);
      } catch (error) {
        console.error("Failed to connect to MetaMask:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.");
    }
  };

  return (
    <header className="container mx-auto py-6 flex justify-between items-center">
      <div className="text-xl font-bold">
        <a href="/" className="text-pink-200">WINFT</a>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="/users" className="text-white hover:text-gray-300">Accounts</a></li>
          <li><a href="/companies" className="text-white hover:text-gray-300">Companies</a></li>
          <li><a href="/companies" className="text-white hover:text-gray-300">Games</a></li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-gray-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.71 20.29l-3.39-3.39A9.953 9.953 0 0020 11c0-5.52-4.48-10-10-10S0 5.48 0 11s4.48 10 10 10a9.953 9.953 0 005.9-1.68l3.39 3.39a1.004 1.004 0 001.42-1.42zM10 18c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
          </svg>
        </button>
        <button 
          onClick={connectWallet}
          className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600"
        >
          Connect MetaMask
        </button>
      </div>
    </header>
  );
};

export default Navbar;
