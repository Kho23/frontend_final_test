import { lazy, Suspense } from "react";
import ProgramListPage from "../pages/program/ProgramListPage";
import ProgramEditPage from "../pages/admin/program/ProgramEditPage";
import NoticeEditPage from "../pages/admin/community/notice/NoticeEditPage";
import NoticeAddPage from "../pages/admin/community/notice/NoticeAddPage";
import FaqListPage from "../pages/faq/FaqListPage";
import NoticeListPage from "../pages/admin/community/notice/NoticeListPage";
import NoticeReadPage from "../pages/admin/community/notice/NoticeReadPage";

const EditorPage = lazy(() => import("../pages/admin/test/EditorPage"));

const Loading = () => <div>Loading...</div>;
const adminRouter = () => {
  return [
    {
      path: "program/:programId",
      element: (
        <Suspense fallback={<Loading />}>
          <ProgramListPage />
        </Suspense>
      ),
    },
    {
      path: "program/update/:programId",
      element: (
        <Suspense fallback={<Loading />}>
          <ProgramEditPage />
        </Suspense>
      ),
    },
    {
      path: "notice",
      element: (
        <Suspense fallback={<Loading />}>
          <NoticeListPage />
        </Suspense>
      ),
    },
    {
      path: "notice/:id",
      element: (
        <Suspense fallback={<Loading />}>
          <NoticeReadPage />
        </Suspense>
      ),
    },
    {
      path: "notice/add",
      element: (
        <Suspense fallback={<Loading />}>
          <NoticeAddPage />
        </Suspense>
      ),
    },
    {
      path: "notice/update/:id",
      element: (
        <Suspense fallback={<Loading />}>
          <NoticeEditPage />
        </Suspense>
      ),
    },
    {
      path: "faq",
      element: (
        <Suspense fallback={<Loading />}>
          <FaqListPage />
        </Suspense>
      ),
    },
    {
      path: "test",
      element: (
        <Suspense fallback={<Loading />}>
          <EditorPage />
        </Suspense>
      ),
    },
  ];
};
export default adminRouter;
