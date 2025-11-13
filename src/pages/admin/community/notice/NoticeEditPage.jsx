import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneNotice } from "../../../../api/noticeApi";
import { modifyNotice } from "../../../../api/adminApi";

const initstate = {
  noticeId: 0,
  content: "",
  createAt: "",
  title: "",
};
const NoticeEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [getOne, setGetOne] = useState(initstate);

  useEffect(() => {
    const f = async () => {
      try {
        const res = await getOneNotice(id);
        console.log("백엔드에서 가져온 데이터", res);
        setGetOne(res);
      } catch (error) {
        console.error("가져오기실패", error);
      }
    };
    f();
  }, [id]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setGetOne({ ...getOne, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const f = async () => {
      try {
        const res = await modifyNotice(getOne);
        console.log(res);
        alert("수정완료");
        navigate(-1);
      } catch (error) {
        console.error("보내기 실패", error);
      }
    };
    f();
  };

  return (
    <div className="container mx-auto max-w-5xl p-4 md:p-8">
      <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-gray-800">
        <h1 className="text-3xl font-bold">공지사항 수정</h1>
      </div>

      <div className="border-t border-b border-gray-300 py-4 mb-6">
        <div className="flex items-center space-x-2 text-gray-700 mb-2">
          <span className="px-2 py-1 bg-gray-700 text-white text-xs font-semibold rounded-full">
            제목
          </span>
          <input
            type="text"
            name="title"
            value={getOne.title}
            onChange={changeHandler}
            className="border border-black w-96 text-xl font-bold text-gray-800"
          />
        </div>
        <div className="flex text-sm text-gray-500 space-x-4">
          <span>작성자 : 관리자</span>
        </div>
      </div>

      <textarea
        name="content"
        onChange={changeHandler}
        value={getOne.content}
        className="min-h-[400px] border border-black bg-white p-8 flex flex-col justify-center w-full items-center  text-xl font-semibold text-gray-800 mb-6"
      />

      {/* 첨부파일 영역 (임시로 비워둠) */}
      <div className="border-t border-gray-300 pt-4 mt-6">
        {/* 첨부파일 정보가 있다면 여기에 렌더링 */}
        {/* <div className="text-sm text-gray-600 mb-2">
          📎 11월 임대 사물함001.png [ Size : 105.19KB, Down : 83 ]
          <button className="ml-2 px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded hover:bg-gray-300">미리보기</button>
          <button className="ml-1 px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded hover:bg-gray-300">다운로드</button>
        </div> */}
      </div>
      <div className="flex justify-end mt-8 gap-x-4">
        <button
          onClick={submitHandler}
          className="bg-gray-700 text-white font-bold py-2 px-6 rounded hover:bg-gray-800 transition-colors"
        >
          수정
        </button>
        <Link
          to={-1}
          className="bg-gray-700 text-white font-bold py-2 px-6 rounded hover:bg-gray-800 transition-colors"
        >
          취소
        </Link>
      </div>
    </div>
  );
};

export default NoticeEditPage;
