import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./components/Home.jsx";
import Quiz from "./components/Quiz.jsx";
import Root from "./components/Root.jsx";

export const router= createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: ()=> fetch ('https://openapi.programming-hero.com/api/quiz'),
    children: [
            {
                path: '/',
                element:<Home></Home>
            },
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
            }
        ]
    }
])