import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../../styles/calendar.css";

// 시설 / 장소 mock
const facilities = [
  { id: 1, name: "체육관" },
  { id: 2, name: "풋살장" },
  { id: 3, name: "수영장" },
  { id: 4, name: "탁구장" },
];

const spaces = {
  1: ["체육관 A", "체육관 B"],
  2: ["풋살장 A", "풋살장 B", "풋살장 C"],
  3: ["메인풀", "유아풀"],
  4: ["탁구실 1", "탁구실 2"],
};

// 시간 슬롯
const timeSlots = [
  "09:00 ~ 10:00",
  "10:00 ~ 11:00",
  "11:00 ~ 12:00",
  "13:00 ~ 14:00",
  "14:00 ~ 15:00",
  "15:00 ~ 16:00",
];

const bookedDates = ["2025-11-21", "2025-11-24"];

const DailyUsePage = () => {
  const [facility, setFacility] = useState(null);
  const [space, setSpace] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateClick = (info) => {
    if (bookedDates.includes(info.dateStr)) return; // 마감일 클릭 방지
    setSelectedDate(info.dateStr);
    setSelectedTime(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <nav className="text-sm text-gray-500 mb-6">
        홈 &gt; 예약신청 &gt; 일일이용예약
      </nav>

      <div className="flex items-end justify-between mb-4">
        <h1 className="text-3xl font-bold text-gray-900">일일이용예약</h1>
      </div>

      <div className="border-b-2 border-gray-400 mb-6" />

      {/* 상단 선택 UI */}
      <div className="border rounded-lg p-4 mb-8">
        <p className="text-sm text-gray-600 mb-3">
          대관 예약을 진행할 시설과 장소를 선택하세요.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {/* 시설 리스트 */}
          <div>
            <p className="font-semibold mb-2">시설</p>
            <div className="border rounded-md h-32 overflow-y-auto">
              {facilities.map((f) => (
                <div
                  key={f.id}
                  onClick={() => {
                    setFacility(f.id);
                    setSpace(null);
                  }}
                  className={`p-2 cursor-pointer hover:bg-gray-100 ${
                    facility === f.id ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {f.name}
                </div>
              ))}
            </div>
          </div>

          {/* 장소 리스트 */}
          <div>
            <p className="font-semibold mb-2">장소</p>
            <div className="border rounded-md h-32 overflow-y-auto">
              {!facility ? (
                <p className="text-xs p-2 text-gray-400">
                  시설 먼저 선택하세요.
                </p>
              ) : (
                spaces[facility].map((s) => (
                  <div
                    key={s}
                    onClick={() => setSpace(s)}
                    className={`p-2 cursor-pointer hover:bg-gray-100 ${
                      space === s ? "bg-blue-600 text-white" : ""
                    }`}
                  >
                    {s}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-3">
          ※ 시설, 장소를 모두 선택해야 날짜 예약이 가능합니다.
        </p>
      </div>

      {/* 아래 영역 2분할 */}
      <div className="flex gap-6">
        {/* 캘린더 */}
        <div className="w-2/3">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            locale="ko"
            height="auto"
            headerToolbar={{
              start: "prev",
              center: "title",
              end: "next",
            }}
            dateClick={facility && space ? handleDateClick : undefined}
            dayCellClassNames={(arg) => {
              const date = arg.date.toISOString().split("T")[0];
              if (!facility || !space) return ["cell-disabled"];
              if (bookedDates.includes(date)) return ["cell-disabled"];
              return [];
            }}
          />
        </div>

        {/* 예약 정보 테이블 */}
        <div className="w-1/3 border rounded-md p-4">
          <p className="font-semibold border-b pb-2">예약 정보</p>

          {!facility || !space ? (
            <p className="text-gray-500 text-sm mt-4">
              시설과 장소를 먼저 선택해주세요.
            </p>
          ) : !selectedDate ? (
            <p className="text-gray-500 text-sm mt-4">날짜를 선택해주세요.</p>
          ) : (
            <div className="mt-4">
              <p className="text-sm mb-2">
                📅 <b>{selectedDate}</b>
              </p>

              <p className="text-sm">
                🏟 시설: <b>{facilities.find((f) => f.id === facility).name}</b>
              </p>
              <p className="text-sm mb-3">
                📌 장소: <b>{space}</b>
              </p>

              <p className="text-sm font-semibold mt-4">⏰ 시간 선택</p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`border rounded-md p-2 text-sm hover:bg-gray-100 ${
                      selectedTime === t ? "bg-blue-600 text-white" : ""
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {selectedTime && (
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded">
                  예약 진행
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DailyUsePage;
