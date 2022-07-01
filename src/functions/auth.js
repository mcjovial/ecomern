import axios from "axios";

export const registerUser = async (userData) => {
  return await axios.post( `${process.env.REACT_APP_API}/auth/register`, userData);
};
export const loginUser = async (userData) => {
  return await axios.post( `${process.env.REACT_APP_API}/auth/login`, userData);
};

export const currentUser = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  return await axios.get( `${process.env.REACT_APP_API}/auth/user`, config);
};

export const currentAdmin = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  return await axios.get( `${process.env.REACT_APP_API}/auth/admin`, config);
};
