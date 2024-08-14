import React from 'react';
import CardItem from './CardItem';

interface CardCollectionProps {
  cards: Array<{
    imageUrl: string;
    code: string;
    name: string;
    description: string;
    nftAddress: string;
    categories: string[];
  }>;
}

const CardCollection: React.FC<CardCollectionProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {cards.map((card, index) => (
        <CardItem
          key={index}
          imageUrl={card.imageUrl}
          code={card.code}
          name={card.name}
          description={card.description}
          nftAddress={card.nftAddress}
          categories={card.categories}
        />
      ))}
    </div>
  );
};

export default CardCollection;
