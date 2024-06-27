import HomePage from "../pages/HomePage/HomePage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"

const routes = [
    {
        name: "home",
        path: '/',
        component: HomePage
    }, 
    {
       name: 'not-found-page',
       path: '*',
       component: NotFoundPage 
    }
]

export default routes