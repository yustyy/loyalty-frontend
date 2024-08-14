import React from 'react';

interface CardItemProps {
  imageUrl: string;
  code: string;
  name: string;
  description: string;
  nftAddress: string;
  categories: string[];
}

const CardItem: React.FC<CardItemProps> = ({
  imageUrl,
  code,
  name,
  description,
  nftAddress,
  categories,
}) => {
  return (
    <div className="bg-gray-800 bg-opacity-90 p-4 rounded-lg shadow-md">
      <img
        src={imageUrl}
        alt={name}
        className="object-cover w-full h-48 rounded-lg mb-4"
      />
      <h2 className="text-xl font-bold text-white mt-2">{name}</h2>
      <p className="text-gray-400 mt-2">Code: {code}</p>
      <p className="text-gray-300 mt-2">{description}</p>
      <p className="text-gray-400 mt-2">NFT Address: {nftAddress}</p>
      <div className="flex flex-wrap mt-4">
        {categories.map((category, index) => (
          <span key={index} className="bg-purple-600 text-white text-sm rounded-full px-3 py-1 mr-2 mb-2">
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CardItem;
