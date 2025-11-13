import axios from "axios";

export const getPartnerStatus = async (id) => {
  const res = await axios.get(
    `http://localhost:8080/api/member/partnerRequest/${id}`
  );
  return res.data;
};
