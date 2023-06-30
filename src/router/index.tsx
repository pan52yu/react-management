import {Navigate} from "react-router-dom";
import React, {lazy, Suspense} from "react";
import Home from "@/views/Home.tsx";

const withLoadingComponent = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
    <Suspense fallback={<h1>Loading...</h1>}>
        <Component/>
    </Suspense>
)

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
        element: withLoadingComponent(lazy(() => import('@/views/About')))
    },
    {
        path: "/user",
        element: withLoadingComponent(lazy(() => import('@/views/User')))
    }
]

export default routes