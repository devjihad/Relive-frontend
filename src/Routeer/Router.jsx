import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "./Main";
import MainHome from "../HomeComponents/MainHome";
import About from "../About/About";
import Service from "../Service/Service";
import Contact from "../Contact/Contact";
import Login from "../Login&Signup/Login";
import Signup from "../Login&Signup/Signup";


const Router = () => {
    const router =createBrowserRouter([
        {
            path:'/',
            element:<Main/>,
            children:[
                {
                    path:'/',
                    element:<MainHome/>
                },
                {
                    path:'/about',
                    element:<About/>
                },
                {
                    path:'/service',
                    element:<Service/>
                },
                {
                    path:'/contact',
                    element:<Contact/>
                },
                {
                    path:'/login',
                    element:<Login/>
                },
                {
                    path:'/signup',
                    element:<Signup/>
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Router;