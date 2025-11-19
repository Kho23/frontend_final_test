import axios from "axios";
import React, { useEffect, useState } from "react";

const CarGuideComponent = () => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const load = async () => {
      const res = await axios.get("/api/guide/car");
      setHtml(res.data.html || "");
    };
    load();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <article
        className="prose prose-blue max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default CarGuideComponent;
