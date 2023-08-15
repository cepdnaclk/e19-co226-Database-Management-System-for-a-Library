import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import SignUp from 'pages/SignUp';
import Category from 'views/category';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// sample page routing
const Records = Loadable(lazy(() => import('views/records')));
const Books = Loadable(lazy(() => import('views/books')));
const Students = Loadable(lazy(() => import('views/students')));
const Users = Loadable(lazy(() => import('views/users')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element:<MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'Records',
            element: <Records />
        },
        {
            path: 'Books',
            element: <Books />
        },
        {
            path: 'Category',
            element: <Category />
        },
        {
            path: 'Students',
            element: <Students />
        },
        {
            path: 'Users',
            element: <Users />
        }
    ]
};


export default function ThemeRoutes() {
    return useRoutes([MainRoutes]);
}
