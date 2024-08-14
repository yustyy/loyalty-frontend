import React from 'react';

interface CardProps {
  title: string;
  status: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, status, imageUrl }) => {
  return (
    <div className="bg-gray-800 bg-opacity-40 rounded-lg p-6">
      <div className="h-64 bg-gray-600 rounded-lg mb-4 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-full" 
        />
      </div>
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-gray-400">{status}</p>
      <div className="flex items-center mt-4">
        <div className="flex space-x-2">
          <span className="bg-gray-400 p-1 rounded-full"></span>
          <span className="bg-gray-400 p-1 rounded-full"></span>
          <span className="bg-gray-400 p-1 rounded-full"></span>
        </div>
        <button className="ml-auto bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600">Show Details</button>
      </div>
    </div>
  );
};

export default Card;
