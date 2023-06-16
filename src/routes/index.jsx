import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAuth } from '../provider/authProvider';
import ProtectedRoute from './ProtectedRoute';
import Logout from '../pages/Logout';
import Login from '../pages/Login';

const Routes = () => {
    const { token } = useAuth();

    // Routes accessible to all users
    const routesForPublic = [
        {
            path: '/service',
            element: <div>Service Page</div>
        },
        {
            path: '/about-us',
            element: <div>About Us Page</div>
        },
    ];
    // Routes accessible to authenticated users only
    const routesForAuthenticatedOnly = [
        {
            path: '/',
            element: <ProtectedRoute />,
            children: [
                {
                    path: '/',
                    element: <h1>User Home Page</h1>
                },
                {
                    path: '/profile',
                    element: <div>User Profile Page</div>
                },
                {
                    path: '/logout',
                    element: <Logout />
                }
            ],
        },
    ];
    // Routes accessible to unauthenticated users only
    const routesForUnauthenticatedOnly = [
        {
            path: '/',
            element: <div>Home Page</div>
        },
        {
            path: '/login',
            element: <Login />
        },
    ];

    const router = createBrowserRouter({
        ...routesForPublic,
        ...(!token ? routesForUnauthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
        // the spread operator is used to merge the arrays into a single array
    });

    return (
        <RouterProvider router={router} />
    );
};

export default Routes;