import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Verify from "../pages/Verify/Verify";
import LocalBusinessPage from "../pages/LocalBusinessPage/LocalBusinessPage";
<<<<<<< HEAD

=======
>>>>>>> 41c545802206ca1760e697a856fbe57be4a864b8

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
