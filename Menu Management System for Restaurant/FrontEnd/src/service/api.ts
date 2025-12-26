import axios from "axios";

const API_URL = "http://localhost:5000/menu"; // Your backend URL
const auth = { username: "admin", password: "password123" };

// Get all menu items
export const getMenu = () => axios.get(API_URL, { auth });

// Add a new menu item
export const addMenuItem = (item: {
  name: string;
  category: string;
  price: number;
}) => axios.post(API_URL, item, { auth });

// Update a menu item
export const updateMenuItem = (
  id: string,
  item: { name: string; category: string; price: number }
) => axios.put(`${API_URL}/${id}`, item, { auth });

// Delete a menu item
export const deleteMenuItem = (id: string) =>
  axios.delete(`${API_URL}/${id}`, { auth });
