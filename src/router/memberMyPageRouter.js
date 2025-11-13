import React, { lazy, Suspense } from "react";
const MemberEdit = lazy(() =>
  import("../pages/member/memberEdit/MemberEditPage")
);
const PwEditPage = lazy(() => import("../pages/member/pwEdit/PwEditPage"));
const Reservation = lazy(() =>
  import("../pages/member/myReservation/MyReservationPage")
);
const Inquiry = lazy(() => import("../pages/member/inquiry/InquiryPage"));
const PartnerRequest = lazy(() =>
  import("../pages/member/partnerRequest/PartnerRequestPage")
);

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
