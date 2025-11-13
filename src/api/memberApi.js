import axios from "axios";

export const getOne = async (id) => {
  const res = await axios.get(
    `http://localhost:8080/api/member/memberEdit/${id}`
  );
  return res.data;
};

export const register = async (id, userData) => {
  const res = await axios.post(
    `http://localhost:8080/api/member/memberEdit/${id}`,
    userData
  );
  return res.data;
};

export const partnerReqFileRegister = async (formData) => {
  const res = await axios.post(
    "http://localhost:8080/api/member/partnerRequest",
    formData
  );
  return res.data;
};
