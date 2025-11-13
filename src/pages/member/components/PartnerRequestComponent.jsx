import React from "react";

const PartnerRequestComponent = ({
  checkClassHandler,
  checkAgreeHandler,
  checkFileHandler,
  checkAllAgreeHandler,
  cancelHandler,
  requestHandler,
  fileName,
  resumeRef,
  allChecked,
  certRef,
  bankRef,
  statusCheck,
}) => {
  return (
    <>
      {statusCheck.status == "PENDING" ? (
        <div className="text-center mt-20 text-xl font-semibold text-gray-700">
          신청서가 검토 중입니다.
        </div>
      ) : (
        <div className="max-w-3xl mx-auto p-10">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              파트너 신청
            </h2>
            <p className="text-gray-500 mt-2">
              파트너 회원이 되면 강사 활동이 가능합니다.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-8 space-y-10 border border-gray-100">
            <section>
              <h3 className="font-semibold text-lg text-gray-900 border-b pb-2">
                강좌 분야 선택
              </h3>

              <div className="grid grid-cols-3 gap-4 mt-4 text-gray-700 text-sm">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name={"수영"}
                    onChange={checkClassHandler}
                    className="w-5 h-5 accent-blue-600"
                  />
                  수영
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name={"헬스"}
                    onChange={checkClassHandler}
                    className="w-5 h-5 accent-blue-600"
                  />
                  헬스
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name={"골프"}
                    onChange={checkClassHandler}
                    className="w-5 h-5 accent-blue-600"
                  />
                  골프
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name={"무용"}
                    onChange={checkClassHandler}
                    className="w-5 h-5 accent-blue-600"
                  />
                  무용
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name={"풋살"}
                    onChange={checkClassHandler}
                    className="w-5 h-5 accent-blue-600"
                  />
                  풋살
                </label>
              </div>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-gray-900 border-b pb-2">
                증빙 자료 업로드
              </h3>

              <div className="space-y-5 mt-4">
                <div>
                  <span className="font-medium text-gray-800">이력서</span>
                  <input
                    type="file"
                    name="resumeFiles"
                    ref={resumeRef}
                    onChange={checkFileHandler}
                    accept=".pdf, .doc, .docx"
                    className="mt-2 block w-full border border-gray-300 rounded-lg p-3 text-sm bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    학력 및 경력 사항을 필수로 입력해 주세요. (PDF/DOC/DOCX){" "}
                    <br />
                  </p>
                </div>

                <div>
                  <span className="font-medium text-gray-800">자격증</span>
                  <input
                    type="file"
                    name="certFiles"
                    ref={certRef}
                    onChange={checkFileHandler}
                    multiple
                    accept=".jpg, .jpeg, .png"
                    className="mt-2 block w-full border border-gray-300 rounded-lg p-3 text-sm bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    관련 자격증을 첨부해 주세요. (JPG/JPEG/PNG) <br />
                  </p>
                  {fileName.certFiles && (
                    <div className="text-sm text-gray-600 mt-2 space-y-1">
                      {fileName.certFiles.map((i, idx) => (
                        <div>
                          {idx}. 첨부된 파일:{i}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <span className="font-medium text-gray-800">계좌 사본</span>
                  <input
                    type="file"
                    name="bankFiles"
                    ref={bankRef}
                    onChange={checkFileHandler}
                    accept=".jpg, .jpeg, .png"
                    className="mt-2 block w-full border border-gray-300 rounded-lg p-3 text-sm bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    예금주명은 실명과 동일해야 합니다. (JPG/JPEG/PNG) <br />
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-semibold text-lg text-gray-900 border-b pb-2">
                동의 사항 (필수)
              </h3>

              <label className="flex items-center gap-3 cursor-pointer text-gray-700 text-sm">
                <input
                  type="checkbox"
                  name="privacyAgreement"
                  onChange={checkAllAgreeHandler}
                  className="w-5 h-5 accent-blue-600"
                />
                전체 동의
                <p className="text-xs text-gray-500 mt-1">
                  아래 내용에 전체 동의합니다.
                  <br />
                </p>
              </label>

              <div className="space-y-3 mt-4">
                <label className="flex items-center gap-3 cursor-pointer text-gray-700 text-sm">
                  <input
                    type="checkbox"
                    name="privacyAgreement"
                    checked={allChecked}
                    onChange={checkAgreeHandler}
                    className="w-5 h-5 accent-blue-600"
                  />
                  개인정보 수집 및 이용 동의
                  <p className="text-xs text-gray-500 mt-1">
                    회원 정보, 사업자 정보, 결제 정보 등 수집 목적·보유 기간
                    명시 「개인정보 보호법」 관련 필수 항목 <br />
                  </p>
                </label>

                <label className="flex items-center gap-3 cursor-pointer text-gray-700 text-sm">
                  <input
                    type="checkbox"
                    name="thirdAgreement"
                    checked={allChecked}
                    onChange={checkAgreeHandler}
                    className="w-5 h-5 accent-blue-600"
                  />
                  제3자 정보 제공 동의
                  <p className="text-xs text-gray-500 mt-1">
                    플랫폼 운영사(예: 본사)나 보험사, 정산 대행사 등에게 정보
                    제공 동의 <br />
                  </p>
                </label>

                <label className="flex items-center gap-3 cursor-pointer text-gray-700 text-sm">
                  <input
                    type="checkbox"
                    name="serviceAgreement"
                    checked={allChecked}
                    onChange={checkAgreeHandler}
                    className="w-5 h-5 accent-blue-600"
                  />
                  서비스 이용 약관 동의
                  <p className="text-xs text-gray-500 mt-1">
                    파트너 회원의 권리·의무, 이용 제한, 탈퇴 절차 등 <br />
                  </p>
                </label>

                <label className="flex items-center gap-3 cursor-pointer text-gray-700 text-sm">
                  <input
                    type="checkbox"
                    name="partnerAgreement"
                    checked={allChecked}
                    onChange={checkAgreeHandler}
                    className="w-5 h-5 accent-blue-600"
                  />
                  파트너 활동 규정 및 계약 조건 동의
                  <p className="text-xs text-gray-500 mt-1">
                    서비스 품질 유지 의무, 계약 해지 사유, 고객 응대 기준 등{" "}
                    <br />
                  </p>
                </label>

                <label className="flex items-center gap-3 cursor-pointer text-gray-700 text-sm">
                  <input
                    type="checkbox"
                    name="taxAgreement"
                    checked={allChecked}
                    onChange={checkAgreeHandler}
                    className="w-5 h-5 accent-blue-600"
                  />
                  세금 및 정산 관련 동의
                  <p className="text-xs text-gray-500 mt-1">
                    소득 신고, 수수료 공제, 전자세금계산서 발행 관련 내용 <br />
                  </p>
                </label>

                <label className="flex items-center gap-3 cursor-pointer text-gray-700 text-sm">
                  <input
                    type="checkbox"
                    name="insuranceAgreement"
                    checked={allChecked}
                    onChange={checkAgreeHandler}
                    className="w-5 h-5 accent-blue-600"
                  />
                  보험 가입 및 사고 책임 동의
                  <p className="text-xs text-gray-500 mt-1">
                    소득 신고, 수수료 공제, 전자세금계산서 발행 관련 내용 <br />
                  </p>
                </label>
              </div>
            </section>
          </div>

          <div className="flex justify-end gap-4 mt-10">
            <button
              onClick={cancelHandler}
              className="px-8 py-3 rounded-xl font-semibold border border-gray-300 hover:bg-gray-200 text-gray-800 transition"
            >
              취소
            </button>
            <button
              onClick={requestHandler}
              className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:opacity-90 shadow-md transition"
            >
              신청하기
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PartnerRequestComponent;
