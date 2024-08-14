import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllUsers } from '../services/UserService';

const AccountsPage: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers();
        setUsers(usersData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleCardClick = (userId: string) => {
    navigate(`/user/${userId}`);
  };

  return (
    <div className="bg-gradient-to-b from-purple-800 to-blue-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Accounts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {users && users.map((user, index) => (
          <div 
            key={index} 
            className="bg-gray-800 bg-opacity-40 rounded-lg p-6 cursor-pointer hover:bg-gray-700 transition-all duration-300"
            onClick={() => handleCardClick(user.id)}
          >
            <h2 className="text-xl font-semibold mb-2">{user.firstName} {user.lastName}</h2>
            <p className="text-gray-400 mb-2">Email: {user.email}</p>
            <p className="text-gray-400">Blockchain Address: {user.blockchainAddress}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountsPage;
