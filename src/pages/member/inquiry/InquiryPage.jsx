import React from "react";
import InquiryComponent from "./components/InquiryComponent";

const InquiryPage = () => {
  const submitHandler = () => {};

  return (
    <div>
      <InquiryComponent submitHandler={submitHandler} />
    </div>
  );
};

export default InquiryPage;
