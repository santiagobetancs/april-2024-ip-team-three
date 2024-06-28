import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Verify from "../pages/Verify/Verify";

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
    name: "not-found-page",
    path: "*",
    component: NotFoundPage,
  },
];

export default routes;
