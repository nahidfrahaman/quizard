import { createBrowserRouter } from "react-router-dom";
import Blog from "./components/Blog.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./components/Home.jsx";
import Quiz from "./components/Quiz.jsx";
import Root from "./components/Root.jsx";
import Statistics from "./components/Statistics.jsx";

export const router= createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: ()=> fetch ('https://openapi.programming-hero.com/api/quiz'),
    children: [
            
            {
                path: '/home',
                element:<Home></Home>
            },
            {
                path: '/quiz/:id',
                element: <Quiz></Quiz>,
                loader: ({params})=>{
                    return  fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                }
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: ()=> fetch ('https://openapi.programming-hero.com/api/quiz')
            }
        ]
    }
])