import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import Statistics from "../components/Statistics/Statistics";
import Blog from "../components/Blog/Blog";
import Main from "../layout/Main";
import Contact from "../components/Contact/Contact";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home></Home>,
      },
      {
        path: "/quiz/:Id",
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.Id}`
          );
        },
        element: <Quiz></Quiz>,
      },
      {
        path: "/statistics",
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Statistics></Statistics>,
      },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/contact", element: <Contact></Contact>},
    ],
  },
]);
export default router;