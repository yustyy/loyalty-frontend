import axios from 'axios';

// API base URL
const API_BASE_URL = 'http://localhost:8080/api';

// Get user data
export const getUserData = async (userId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/getUserById/${userId}`);
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/getAllUsers`);
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

