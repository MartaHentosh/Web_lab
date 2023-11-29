import axios from "axios";

const baseURL = "http://localhost:5000";  // Update the base URL to match your server configuration

const api = axios.create({
  baseURL,
});

export const getFridges = () => {
  return api.get("/get");
};

export const getFridgeFiltered = (filters) => {
  return api.get("/filtered", { params: filters });
};

export const getFridgeInfo = (fridgeId) => {
  return api.get(`/get/${fridgeId}`);
};