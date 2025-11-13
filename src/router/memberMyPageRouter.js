import React, { lazy, Suspense } from "react";
const MemberEdit = lazy(() => import("../pages/member/MemberEditPage"));
const PwEditPage = lazy(() => import("../pages/member/PwEditPage"));
const Reservation = lazy(() => import("../pages/member/ReservationPage"));
const Inquiry = lazy(() => import("../pages/member/InquiryPage"));
const PartnerRequest = lazy(() => import("../pages/member/PartnerRequestPage"));

const Loading = () => <div>Loading...</div>;
const memberMyPageRouter = () => {
  return [
    {
      path: "memberEdit/:id",
      element: (
        <Suspense fallback={<Loading />}>
          <MemberEdit />
        </Suspense>
      ),
    },
    {
      path: "pwEditPage/:id",
      element: (
        <Suspense fallback={<Loading />}>
          <PwEditPage />
        </Suspense>
      ),
    },
    {
      path: "reservation/:id",
      element: (
        <Suspense fallback={<Loading />}>
          <Reservation />
        </Suspense>
      ),
    },
    {
      path: "inquiry/:id",
      element: (
        <Suspense fallback={<Loading />}>
          <Inquiry />
        </Suspense>
      ),
    },
    {
      path: "partnerRequest/:id",
      element: (
        <Suspense fallback={<Loading />}>
          <PartnerRequest />
        </Suspense>
      ),
    },
  ];
};

export default memberMyPageRouter;
