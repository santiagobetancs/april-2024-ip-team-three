import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Verify from "../pages/Verify/Verify";
import HomePage from "../pages/HomePage/HomePage";
import LocalBusinessPage from "../pages/LocalBusinessPage/LocalBusinessPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const routes = [
  {
    name: "home",
    path: "/",
    component: HomePage,
  },
  {
    name: "veryfiy",
    path: "/verify",
    component: Verify,
  },
  {
    name: "small-business",
    path: "/small",
    component: LocalBusinessPage,
  },
  {
    name: "not-found-page",
    path: "*",
    component: NotFoundPage,
  },
];

export default routes;
