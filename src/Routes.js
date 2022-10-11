import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./components/Home.jsx";
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
        ]
    }
])