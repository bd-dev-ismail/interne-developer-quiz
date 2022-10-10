import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import Statistics from "../components/Statistics/Statistics";
import Blog from "../components/Blog/Blog";
import Main from "../layout/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, errorElement: <ErrorPage></ErrorPage>, children: [
        {path: '/', element: <Home></Home>},
        {path: '/home', element: <Home></Home>},
        {path: '/quiz', element: <Quiz></Quiz>},
        {path: '/statistics', element: <Statistics></Statistics>},
        {path: '/blog', element: <Blog></Blog>}
    ]}
])
export default router;