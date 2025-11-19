import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GuideEditComponent from "./components/GuideEditComponent";

const GuideEditPage = () => {
  const [content, setContent] = useState("");
  const { category } = useParams();
  const [categoryName, setCategoryName] = useState({
    time: "운영시간",
    rent: "상품대여",
    car: "차량등록",
    price: "요금안내",
    refund: "할인/환불/연기",
  });
  const [finalName, setFinalName] = useState("");

  useEffect(() => {
    const f = async () => {
      const res = await axios.get(`/api/guide/${category}`);
      setContent(res.data.html || "");
    };
    f();
  }, [category]);

  useEffect(() => {
    const changeCategory = () => {
      setFinalName(categoryName[category]);
    };
    changeCategory();
  }, [category]);

  const saveHandler = async () => {
    await axios.post("/api/guide/save", {
      category: category,
      html: content,
    });
    alert("저장 완료");
  };

  const EditorChangeHandler = (_, editor) => {
    setContent(editor.getData());
  };

  const editorConfig = {
    toolbar: {
      items: [
        "heading",
        "|",
        "bold",
        "italic",
        "underline",
        "strikethrough",
        "|",
        "link",
        "blockQuote",
        "horizontalLine",
        "|",
        "alignment",
        "|",
        "bulletedList",
        "numberedList",
        "outdent",
        "indent",
        "|",
        "insertTable",
        "|",
        "undo",
        "redo",
      ],
    },

    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
    },

    language: "ko",
  };

  return (
    <div>
      <GuideEditComponent
        saveHandler={saveHandler}
        finalName={finalName}
        content={content}
        EditorChangeHandler={EditorChangeHandler}
        editorConfig={editorConfig}
      />
    </div>
  );
};

export default GuideEditPage;
