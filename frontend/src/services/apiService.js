import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export const getData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
};

export const createData = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_URL}/${endpoint}`, data);
    return response;
  } catch (error) {
    console.error("Error creating data:", error);
    return error;
  }
};

export const updateData = async (endpoint, id, data) => {
  try {
    console.log(`${API_URL}/${endpoint}/${id}`);
    console.log({ data });

    const response = await axios.put(`${API_URL}/${endpoint}/${id}`, data);
    return response;
  } catch (error) {
    console.error("Error updating data:", error);
    return error;
  }
};

export const deleteData = async (endpoint, id) => {
  try {
    const response = await axios.delete(`${API_URL}/${endpoint}/${id}`);
    return response;
  } catch (error) {
    console.error("Error deleting data:", error);
    return error;
  }
};
