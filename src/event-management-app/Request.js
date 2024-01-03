import axios from "axios";

const baseURL = "http://localhost:4200/api/v1";

export const publicRequest = axios.create({
  baseURL: baseURL,
});

export const userRequest = () => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("Useremail");

  if (!token) {
    const mess = "Kindly Login or create Account";
  }

  const headers = {
    Authorization: token || '', // Provide a default value for token if it's null or undefined
  };

  if (email) {
    headers.UserEmail = email;
  }

  return axios.create({ 
    baseURL: baseURL, 
    headers: headers 
});
};
