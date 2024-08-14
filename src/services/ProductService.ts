import axios from 'axios';

// API base URL
const API_BASE_URL = 'http://localhost:8080/api';

// Get product data by user
export const getProductsByUser = async (userId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/getProductsByUserId/${userId}`);
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("Error fetching products data:", error);
    throw error;
  }
};

export const getProductsByCompany = async (companyId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/getProductsByCompanyId/${companyId}`);
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("Error fetching company products data:", error);
    throw error;
  }
};
