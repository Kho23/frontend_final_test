<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { getRegistrationList } from '../../../../api/memberApi'

const initState = [
    {
        registrationId: 0,
        lessonId: 0,
        lessonTitle: "",
        teacherName: "",
        createdAt: "",
        status: "",

    }
]
const MyReservationComponent = () => {
    const [registration, setRegistration] = useState([])
    
    useEffect(() => {
        try {
            const get = async () => {
                const data = await getRegistrationList()
                setRegistration(data)
                if (data == null || data.length == 0)
                    setRegistration(initState)
                console.log(data)
            }; get()
        } catch (error) {
            console.log(error)
            alert("수강신청 목록 조회 중 오류 발생")
        }
    }, [])

    return (
        <div className="flex flex-col items-center min-h-screen bg-white pt-10 md:pt-20">
            
            {/* 상단 타이틀 영역 (로그인 페이지 스타일 통일) */}
            <div className="w-full max-w-4xl px-4 mb-8">
                <div className="flex justify-between items-end border-b-2 border-gray-300 pb-4 mb-6">
                    <h1 className="text-4xl font-bold text-gray-900">수강신청 내역</h1>
                    {/* 우측 상단 아이콘 (디자인 요소) */}
                </div>
                
                <div className="text-sm text-gray-600 mb-10 leading-relaxed">
                    회원님의 <span className="text-[#263c79] font-bold">수강신청 목록</span>입니다.<br />
                    신청 상태 및 상세 내역을 확인하실 수 있습니다.
                </div>
            </div>

            {/* 리스트 영역 */}
            <div className="w-full max-w-4xl px-4 pb-20">
                {registration && registration.length > 0 ? (
                    registration.map((i, index) => (
                        <div 
                            key={index} 
                            className="w-full border border-gray-300 bg-white p-6 mb-4 shadow-sm hover:shadow-md transition-shadow rounded-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                        >
                            {/* 강의 정보 */}
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-1 bg-gray-100 text-xs text-gray-500 rounded border border-gray-200">
                                        No. {i.registrationId || '-'}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {i.lessonTitle || "강의명 없음"}
                                    </h3>
                                </div>
                                
                                <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 gap-2 sm:gap-4">
                                    <div className="flex items-center">
                                        <span className="font-medium mr-2 text-gray-400">강사명</span>
                                        <span>{i.teacherName}</span>
                                    </div>
                                    <span className="hidden sm:inline text-gray-300">|</span>
                                    <div className="flex items-center">
                                        <span className="font-medium mr-2 text-gray-400">신청시간</span>
                                        <span className="font-mono text-gray-500">{i.createdAt}</span>
                                    </div>
                                </div>
                            </div>

                            {/* 상태 배지 */}
                            <div className="flex items-center">
                                <span className={`px-4 py-2 rounded-full text-sm font-bold border ${
                                    i.status === '취소' ? 'bg-red-50 text-red-600 border-red-200' :
                                    i.status === '완료' ? 'bg-blue-50 text-[#263c79] border-blue-200' :
                                    'bg-gray-50 text-gray-600 border-gray-200'
                                }`}>
                                    {i.status || "상태미정"}
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    /* 데이터 없을 때 */
                    <div className="w-full border border-gray-300 bg-gray-50 p-12 text-center text-gray-500 rounded-sm">
                        수강신청 목록이 없습니다.
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyReservationComponent
=======
import React from "react";
import { Link } from "react-router-dom";
import {
  PiBookOpenTextDuotone,
  PiBuildingDuotone,
  PiCalendarCheckDuotone,
} from "react-icons/pi";

const MyReservationComponent = () => {
  const menus = [
    {
      id: 1,
      title: "수강신청 목록",
      path: "/member/myReservation/lesson",
      icon: <PiBookOpenTextDuotone className="text-5xl text-blue-900" />,
      description: "신청하신 교육/강좌 예약 현황을 확인하세요.",
    },
    {
      id: 2,
      title: "대관신청 목록",
      path: "/member/myReservation/rental",
      icon: <PiBuildingDuotone className="text-5xl text-blue-900" />,
      description: "공간/시설 대관 신청 내역을 확인하세요.",
    },
    {
      id: 3,
      title: "일일이용 예약 목록",
      path: "/member/myReservation/dailyUse",
      icon: <PiCalendarCheckDuotone className="text-5xl text-blue-900" />,
      description: "일일 이용 예약 현황을 확인하세요.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-10 border-l-8 border-blue-900 pl-4">
        내 예약 조회
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {menus.map((i) => (
          <Link
            key={i.id}
            to={i.path}
            className="
              bg-white border border-gray-200 rounded-2xl shadow-sm p-8
              flex flex-col items-center text-center
              hover:shadow-xl hover:border-blue-300 hover:-translate-y-1
              transition-all duration-200 cursor-pointer
            "
          >
            <div className="mb-4">{i.icon}</div>

            <h2 className="text-xl font-bold text-gray-900 mb-2">{i.title}</h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              {i.description}
            </p>
          </Link>
        ))}
      </div>
      <div className="max-w-5xl mx-auto mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 text-sm text-gray-700 leading-relaxed">
        <h3 className="font-bold text-blue-900 mb-3">※ 이용 안내</h3>

        <ul className="space-y-2 list-disc list-inside">
          <li>예약 내역은 신청일 기준 최신 순으로 표시됩니다.</li>
          <li>
            승인 대기 중인 예약은 처리 결과에 따라 상태가 변경될 수 있습니다.
          </li>
          <li>취소를 원하실 경우 해당 예약 상세 페이지에서 가능합니다.</li>
          <li>
            강좌 및 대관 일정은 운영 사정에 따라 변경될 수 있으며 사전 안내가
            제공됩니다.
          </li>
          <li>일일이용 예약은 당일 취소 시 환불이 제한될 수 있습니다.</li>
        </ul>
      </div>
    </div>
  );
};

export default MyReservationComponent;
>>>>>>> main
