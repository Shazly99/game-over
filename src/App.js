import axios from 'axios';
import { useState } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Img from './assets/Img.js';
import './Styles/App.scss';
import Component from './constants/Component'
import { Toaster } from 'react-hot-toast';
import jwtDecode from 'jwt-decode';



function App() {

  const [userData, setUserData] = useState(null);

  function userDecode() {
    let Incode = localStorage.getItem('token');
    let decode = jwtDecode(Incode)
    setUserData(decode)
  }

  function ProtectedRoutes({ children }) {
    if (localStorage.getItem('token')) {
      return children
    } else {
      return <Navigate to={'/login'} />
    }
  }
  function LogOut() {
    localStorage.removeItem('token')
    setUserData(null)
    return <Navigate to={'/login'} />
  }



  const root = createBrowserRouter([
    {
      path: '/', element: <Component.Layouts LogOut={LogOut} />, children: [

        { index: true, element: <ProtectedRoutes><Component.Home /></ProtectedRoutes> },
        {
          path: '/games', children: [
            { path: 'all', element: <ProtectedRoutes><Component.Games /></ProtectedRoutes> },
            { path: 'Platforms/:platform', element: <ProtectedRoutes><Component.Platforms /></ProtectedRoutes> },
            { path: 'sort-by/:sortBy', element: <ProtectedRoutes><Component.GmaeSort /></ProtectedRoutes> },
            { path: 'category/:categoryGame', element: <ProtectedRoutes><Component.Categories /></ProtectedRoutes> },
          ]
        },
        {path:'/gameDetails/:id',element:<ProtectedRoutes><Component.GameDetails/></ProtectedRoutes>},
        { path: '*', element: <Component.Error /> },
      ]
    },
    {
      path: '/', element: <Component.AurhLayout />, children: [
        { path: '/login', element: <Component.SignIn /> },
        { path: '/register', element: <Component.SignUp /> },
        { path: '*', element: <Component.Error /> },

      ]
    }

  ])

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            fontFamily: ' Arial, Helvetica, sans-serif',
            textTransform: 'capitalize',
            zIndex: '9999',
            background: '#333',
            color: '#fff',
          },
        }}
        containerStyle={{
          top: 60
        }}
      />
      <RouterProvider router={root} />
    </>
  );
}

export default App;

