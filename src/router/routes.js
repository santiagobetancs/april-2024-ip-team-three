import HomePage from "../pages/HomePage/HomePage"
import LocalBusinessPage from "../pages/LocalBusinessPage/LocalBusinessPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"

const routes = [
    {
        name: "home",
        path: '/',
        component: HomePage
    },
    {
        name: "small-business",
        path: '/small',
        component: LocalBusinessPage
    }, 
    {
       name: 'not-found-page',
       path: '*',
       component: NotFoundPage 
    }
]

export default routes