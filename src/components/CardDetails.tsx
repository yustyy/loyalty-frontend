import React from 'react';

interface CardDetailsProps {
  title: string;
  description: string;
  status: string;
  owner: string;
  transferInfo: string;  
  imageUrl?: string;
  altText?: string;
}

const CardDetails: React.FC<CardDetailsProps> = ({
  title,
  description,
  status,
  owner,
  transferInfo,
  imageUrl,
  altText,
}) => {
  return (
    <div className="p-8 bg-gray-900 bg-opacity-90 rounded-lg shadow-lg">
      {imageUrl && (
        <div className="mb-6 rounded-lg overflow-hidden shadow-md">
          <img
            src={imageUrl}
            alt={altText || 'Card Image'}
            className="object-cover w-full h-80 transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      )}
      <h1 className="text-3xl font-extrabold mb-4">{title}</h1>
      <p className="text-gray-300 text-lg mb-6">{description}</p>
      <div className="mb-6">
        <p className="text-xl font-semibold text-pink-500">Status: {status}</p>
        <p className="text-lg font-medium text-gray-400 mt-2">Owner: {owner}</p>
        <p className="text-lg font-medium text-gray-400 mt-2">{transferInfo}</p>
      </div>
      <div className="mt-6 bg-gray-800 bg-opacity-70 p-4 rounded-lg">
        <p className="text-gray-300 text-lg text-center">
          This card will be automatically added to your account when the QR code is scanned.
        </p>
      </div>
    </div>
  );
};

export default CardDetails;
