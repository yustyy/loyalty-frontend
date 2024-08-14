import axios from 'axios';

// API base URL
const API_BASE_URL = 'http://localhost:8080/api';

// Get company data
export const getCompanyData = async (companyId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/companies/getCompanyById/${companyId}`);
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("Error fetching company data:", error);
    throw error;
  }
};

export const getAllCompanies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/companies/getAllCompanies`);
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("Error fetching company data:", error);
    throw error;
  }
};

// Get products created by company

