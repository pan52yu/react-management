import {Navigate} from "react-router-dom";
import Home from "@/views/Home.tsx";
import About from "@/views/About.tsx";

const routes = [
    {
        path: '/',
        element: <Navigate to={'/home'} replace={true}/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/about',
        element: <About/>
    }
]

export default routes