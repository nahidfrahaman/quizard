import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Root from "./components/Root.jsx";

export const router= createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
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