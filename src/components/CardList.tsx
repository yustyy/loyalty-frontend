import React from 'react';
import Card from './Card';

const CardList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card imageUrl='src/assets/pepsi.jpeg' title="Coke" status="NFT Card" />
      <Card imageUrl='src/assets/tshirt.jpeg' title="T-shirt" status="Exclusive NFT Card" />
      <Card imageUrl='src/assets/ayakkabi.jpeg' title="Shoe" status="Rare NFT Card" />
    </div>
  );
};

export default CardList;
