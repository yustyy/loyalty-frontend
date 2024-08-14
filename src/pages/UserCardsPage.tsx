import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UserProfile from '../components/UserProfile';
import CardCollection from '../components/CardCollection';
import { getUserData } from '../services/UserService';
import { getProductsByUser } from '../services/ProductService';

const UserCardsPage: React.FC = () => {
  const { userId } = useParams<{ userId?: string }>();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<any>(null);
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      navigate("/404");
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const userResponse = await getUserData(userId);
        if (!userResponse) {
          navigate("/404");
          return;
        }
        setUserData(userResponse);

        const productsResponse = await getProductsByUser(userId);
        setCards(productsResponse);
      } catch (error: any) {
        setError(error.message);
        navigate("/404");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId, navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!userData) {
    return <p>No user data found</p>;
  }

  return (
    <div className="bg-gradient-to-b from-purple-800 to-blue-900 text-white min-h-screen">
      <Navbar />
      
      <main className="container mx-auto py-16 px-4 lg:px-0">
        <UserProfile
          firstName={userData.firstName}
          lastName={userData.lastName}
          username={userData.username}
          blockchainAddress={userData.blockchainAddress}
          email={userData.email}
          phoneNumber={userData.phoneNumber}
          imageUrl={userData.imageUrl}
        />
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Owned Cards</h2>
          <CardCollection cards={cards} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UserCardsPage;
