import { createBrowserRouter } from "react-router-dom";
import AppLanding from "../appLanding";
import AppDashboard from "../AppDashboard";
import AppForm from "../appForm";
import Login from "../Login";
import Register from "../Register";
import EventList from "../EventList";
import AppHome from "../AppHome";






export const AppRoute = createBrowserRouter(
    [
        {
            path:'/',
            element:<AppLanding/>,
            children:[
                {
                    index:true,
                    element:<AppHome/>
                },
                {
                    path:'/dashboard',
                    element:<AppDashboard/>
                },
                {
                    path:'/create-event',
                    element:<AppForm/>

                },
                {
                    path:'/login',
                    element:<Login/>
                },
                {
                    path:'/register',
                    element:<Register/>
                },
                {
                    path:'/events',
                    element:<EventList/>
                }
            ]    
        }
    ]
)