import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { formatter, getOneNotice } from "../../../../api/noticeApi";
import { deleteNotice } from "../../../../api/adminApi";

const initState = {
  content: "",
  createdAt: "",
  noticeId: 0,
  title: "",
  viewCount: 0,
};

const NoticeReadPage = () => {
  const { id } = useParams();
  const [notice, setNotice] = useState(initState);

  const navigate = useNavigate();

  useEffect(() => {
    const getOne = async () => {
      try {
        const data = await getOneNotice(id);
        console.log(data);
        setNotice(data);
      } catch (error) {
        console.log("백엔드 데이터 로드 중 오류 발생", error);
      }
    };
    getOne();
  }, [id]);

  const deleteHandler = () => {
    const f = async () => {
      try {
        const res = await deleteNotice(id);
        console.log(res);
        alert("삭제가 완료되었습니다.");
        navigate(-1);
      } catch (error) {
        console.error("삭제 error", error);
      }
    };
    f();
  };

  return (
    <div className="container mx-auto max-w-5xl p-4 md:p-8">
      {/* 상단 제목 및 아이콘들 */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-gray-800">
        <h1 className="text-3xl font-bold">공지사항</h1>
        <div className="flex space-x-2 text-gray-600">
          {/* 아이콘 예시 (실제 아이콘 라이브러리 필요) */}
          <button className="p-2 hover:bg-gray-100 rounded">
            {/* <FaPrint /> */}
            <span className="text-lg">🖨️</span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            {/* <FaShareAlt /> */}
            <span className="text-lg">🔗</span>
          </button>
        </div>
      </div>

      {/* 공지 상세 헤더 */}
      <div className="border-t border-b border-gray-300 py-4 mb-6">
        <div className="flex items-center space-x-2 text-gray-700 mb-2">
          {/* 공지 아이콘 */}
          <span className="px-2 py-1 bg-gray-700 text-white text-xs font-semibold rounded-full">
            공지
          </span>
          <h2 className="text-xl font-bold text-gray-800">{notice.title}</h2>
        </div>
        <div className="flex text-sm text-gray-500 space-x-4">
          <span>작성자 : 관리자</span>
          {notice.createdAt && <span>등록일자 : {formatter(notice)}</span>}
          <span>조회 : {notice.viewCount}</span>
        </div>
      </div>

      <div className="min-h-[400px] border border-gray-300 bg-white p-8 flex flex-col justify-center items-center text-center text-xl font-semibold text-gray-800 mb-6">
        <p className="whitespace-pre-wrap">{notice.content}</p>
      </div>

      {/* 첨부파일 영역 (임시로 비워둠) */}
      <div className="border-t border-gray-300 pt-4 mt-6">
        {/* 첨부파일 정보가 있다면 여기에 렌더링 */}
        {/* <div className="text-sm text-gray-600 mb-2">
          📎 11월 임대 사물함001.png [ Size : 105.19KB, Down : 83 ]
          <button className="ml-2 px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded hover:bg-gray-300">미리보기</button>
          <button className="ml-1 px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded hover:bg-gray-300">다운로드</button>
        </div> */}
      </div>

      <div className="flex justify-end mt-1 gap-x-4">
        <Link
          to={"/admin/notice"}
          className="bg-gray-700 text-white font-bold py-2 px-6 rounded hover:bg-gray-800 transition-colors"
        >
          목록
        </Link>

        <Link
          to={`/admin/notice/update/${id}`}
          className="bg-gray-700 text-white font-bold py-2 px-6 rounded hover:bg-gray-800 transition-colors"
        >
          수정
        </Link>
        <button
          type="button"
          onClick={deleteHandler}
          className="bg-gray-700 text-white font-bold py-2 px-6 rounded hover:bg-gray-800 transition-colors"
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default NoticeReadPage;
