import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-10">
      <div className="container mx-auto mr-0 grid grid-cols-1 md:grid-cols-3 gap-8">
       
        <div className="flex flex-col items-start">
          <div className="mb-4">
            <img src="/path/to/logo.png" alt="Xchain" className="w-12 h-12" />
          </div>
          <p className="text-gray-300 text-sm">
          WINFT is a SKY LAB company.
          </p>
        </div>

        {/* Hesabım, Kaynaklar, Şirket Bölümleri */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Account</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-white hover:text-yellow-400">My Profile</a></li>
            <li><a href="#" className="text-white">My nfts</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-white hover:text-yellow-400">About</a></li>
            <li><a href="#" className="text-white hover:text-yellow-400">Jobs</a></li>
            <li><a href="#" className="text-white hover:text-yellow-400">Contact us</a></li>
          </ul>
        </div>
      </div>

      {/* Alt Metin */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        <p>SKY LAB © 2024. All rights reserved</p>
        <p className="mt-2">
          <a href="#" className="hover:text-yellow-400">Gizlilik politikası</a> |{' '}
          <a href="#" className="hover:text-yellow-400">Hizmet şartları</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
