import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// sample page routing
const Records = Loadable(lazy(() => import('views/records')));
const Books = Loadable(lazy(() => import('views/books')));
const Students = Loadable(lazy(() => import('views/students')));
const Users = Loadable(lazy(() => import('views/users')));


// ==============================|| MAIN ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            element: <SignIn />
        },
        {
            path: '/register',
            element: <SignUp />
        }]
};

export default function ThemeRoutes(props) {
    return useRoutes([{
        path: '/',
        children: [
            {
                path: '/',
                element: <SignIn setToken={props.setToken} />
            },
            {
                path: '/register',
                element: <SignUp />
            }]
    }]);
}
