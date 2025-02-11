import axios from "axios";

const API_URL = "http://13.60.194.28:5000/users";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const addUser = async (name, email) => {
  try {
    const response = await axios.post(API_URL, { name, email });
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error);
    return null;
  }
};

// إضافة دالة الحذف
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    return null;
  }
};
