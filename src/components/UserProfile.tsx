import React from 'react';

interface UserProfileProps {
  firstName: string;
  lastName: string;
  imageUrl: string;
  username: string;
  blockchainAddress: string;
  email: string;
  phoneNumber: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  firstName,
  lastName,
  imageUrl,
  username,
  blockchainAddress,
  email,
  phoneNumber,
}) => {
  return (
    <div className="bg-gray-900 bg-opacity-90 p-8 rounded-lg shadow-lg flex items-center">
      <img
        src={imageUrl || 'https://via.placeholder.com/100'}
        alt={`${firstName} ${lastName}`}
        className="rounded-full w-24 h-24 mr-6"
      />
      <div>
        <h1 className="text-3xl font-extrabold">{firstName} {lastName}</h1>
        <p className="text-gray-400">@{username}</p>
        <p className="text-gray-500 mt-2">{blockchainAddress}</p>
        <p className="text-gray-500 mt-2">{email}</p>
        <p className="text-gray-500 mt-2">{phoneNumber}</p>
      </div>
    </div>
  );
};

export default UserProfile;
