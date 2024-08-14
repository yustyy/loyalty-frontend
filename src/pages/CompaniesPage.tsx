import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCompanies } from '../services/CompanyService';

const CompaniesPage: React.FC = () => {
  const [companies, setCompanies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const companiesData = await getAllCompanies();
        setCompanies(companiesData);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleCardClick = (companyId: string) => {
    navigate(`/company/${companyId}`);
  };

  return (
    <div className="bg-gradient-to-b from-purple-800 to-blue-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Companies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {companies && companies.map(company => (
          <div 
            key={company.id || company.email}  // Benzersiz bir key kullanıyoruz, id yoksa email kullanılır
            className="bg-gray-800 bg-opacity-40 rounded-lg p-6 cursor-pointer hover:bg-gray-700 transition-all duration-300"
            onClick={() => handleCardClick(company.id)}
          >
            <h2 className="text-xl font-semibold mb-2">{company.companyName}</h2>
            <p className="text-gray-400 mb-2">Industry: {company.industry}</p>
            <p className="text-gray-400">Email: {company.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesPage;
