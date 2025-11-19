import React, { useEffect, useMemo, useState } from "react";
import DOMPurify from "dompurify";
import axios from "axios";
import GuideComponent from "./components/GuideComponent";
import { useParams } from "react-router-dom";

const GuidePage = () => {
  const [html, setHtml] = useState("");
  const { category } = useParams();
  const [categoryName, setCategoryName] = useState({
    time: "운영시간",
    rent: "상품대여",
    car: "차량등록",
    price: "요금안내",
    refund: "할인/환불/연기",
  });
  const [finalName, setFinalName] = useState("");
  const [Createddate, setCreatedDate] = useState("");

  useEffect(() => {
    const f = async () => {
      const res = await axios.get(`/api/guide/${category}`);
      console.log("res.data", res.data);
      setCreatedDate(res.data.updatedDate.slice(0, 10));
      setHtml(res.data.html || "");
    };
    f();
  }, [category]);

  useEffect(() => {
    const changeCategory = () => {
      setFinalName(categoryName[category]);
    };
    changeCategory();
  }, [category]);

  const cleanHtml = useMemo(() => {
    return DOMPurify.sanitize(html);
  }, [html]);

  return (
    <div>
      <GuideComponent
        cleanHtml={cleanHtml}
        finalName={finalName}
        Createddate={Createddate}
      />
    </div>
  );
};

export default GuidePage;
