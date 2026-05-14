import { createBrowserRouter } from 'react-router';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home/Home';
import AddTransactions from '../pages/AddTransactions/AddTransactions';
import AllTransactions from '../pages/AllTransactions/AllTransactions';
import Reports from '../pages/Reports/Reports';
import Login from '../pages/Login/Login';
import Error from '../pages/Error/Error';
import Register from '../pages/Login/Register';
import AuthLayout from '../layouts/AuthLayout';
import PrivateRoute from '../provider/PrivateRoute';
import MyProfile from '../pages/MyProfile/MyProfile';
import Profile from '../pages/MyProfile/Profile';
import UpdateProfile from '../pages/MyProfile/UpdateProfile';
// import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },

      // for inside the path error pages
      // {
      //   path: '/*',
      //   Component: Error,
      // },
    ],
  },
  {
    path: '/addTransactions',
    element: (
      <PrivateRoute>
        <AddTransactions></AddTransactions>
      </PrivateRoute>
    ),
  },
  {
    path: '/allTransactions',
    element: (
      <PrivateRoute>
        <AllTransactions></AllTransactions>
      </PrivateRoute>
    ),
  },
  {
    path: '/reports',
    element: (
      <PrivateRoute>
        <Reports></Reports>
      </PrivateRoute>
    ),
    // hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
  },
  {
    path: '/myprofile',
    element: (
      <PrivateRoute>
        <MyProfile></MyProfile>
      </PrivateRoute>
    ),
    children: [
      {
        path: '/myprofile/profile',
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: '/myprofile/updateprofile',
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/auth/register',
        element: <Register></Register>,
      },
    ],
  },
  {
    path: '/*',
    Component: Error,
  },
]);

export default Router;
