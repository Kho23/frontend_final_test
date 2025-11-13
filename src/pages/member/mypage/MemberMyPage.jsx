import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MemberMyComponent from "./components/MemberMyComponent";
import axios from "axios";
import { getOne } from "../../../api/memberApi";

const MemberMyPage = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const f = async () => {
      const res = await getOne(id);
      setData(res);
    };
    f();
  }, [id]);

  return <MemberMyComponent data={data} />;
};

export default MemberMyPage;
