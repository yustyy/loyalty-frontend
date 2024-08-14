import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CompanyProfile from '../components/CompanyProfile';
import CardCollection from '../components/CardCollection';
import { getCompanyData } from '../services/CompanyService';
import { getProductsByCompany } from '../services/ProductService';

const CompanyPage: React.FC = () => {
  const { companyId } = useParams<{ companyId?: string }>();
  const navigate = useNavigate();
  const [companyData, setCompanyData] = useState<any>(null);
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!companyId) {
      navigate("/404");
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const companyResponse = await getCompanyData(companyId);
        if (!companyResponse) {
          navigate("/404");
          return;
        }
        setCompanyData(companyResponse);

        const productsResponse = await getProductsByCompany(companyId);
        setCards(productsResponse);
      } catch (error: any) {
        setError(error.message);
        navigate("/404");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [companyId, navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!companyData) {
    return <p>No company data found</p>;
  }

  return (
    <div className="bg-gradient-to-b from-purple-800 to-blue-900 text-white min-h-screen">
      <Navbar />
      
      <main className="container mx-auto py-16 px-4 lg:px-0">
        <CompanyProfile {...companyData} />
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Created Cards</h2>
          <CardCollection cards={cards} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CompanyPage;
