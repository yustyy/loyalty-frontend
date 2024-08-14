import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-purple-800 to-blue-900 text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link
        to="/"
        className="bg-pink-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-pink-700 shadow-lg transition-all duration-300 ease-in-out"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
