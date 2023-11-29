import axios from "axios";


export const getFridges = () => {
  return axios.get("http://localhost:5000/get");
};

export const getFridgeFiltered = (filters) => {
  return axios.get("http://localhost:5000/filtered", { params: filters });
};

export const getFridgeInfo = (fridgeId) => {
  return axios.get(`http://localhost:5000/get/${fridgeId}`);
};
