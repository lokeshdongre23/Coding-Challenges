import axios from "axios";

const API_URL = "http://localhost:5000/api/guests";

export const getGuests = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createGuest = async (name: string) => {
  const res = await axios.post(API_URL, { name });
  return res.data;
};

export const checkInGuest = async (id: string) => {
  const res = await axios.put(`${API_URL}/${id}/checkin`);
  return res.data;
};

export const checkOutGuest = async (id: string) => {
  const res = await axios.put(`${API_URL}/${id}/checkout`);
  return res.data;
};
