import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "../../../styles/ckeditor-custom.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const EditorComponent = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const f = async () => {
      const res = await axios.get("/api/guide/car");
      setContent(res.data.html || "");
    };
    f();
  }, []);

  const saveHandler = async () => {
    await axios.post("/api/guide/save", {
      category: "car",
      html: content,
    });
    alert("저장 완료");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">차량등록 안내 수정</h2>

      <div className="border bg-white rounded-xl p-5 shadow-sm">
        <CKEditor
          editor={ClassicEditor}
          data={content || ""}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "bulletedList",
              "numberedList",
              "|",
              "insertTable",
              "undo",
              "redo",
            ],
          }}
          onChange={(event, editor) => {
            setContent(editor.getData());
          }}
        />
      </div>

      <button
        onClick={saveHandler}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        저장하기
      </button>
    </div>
  );
};

export default EditorComponent;
