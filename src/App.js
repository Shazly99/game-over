import axios from 'axios';
import { createContext, useState } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Img from './assets/Img.js';
import './Styles/App.scss';
import Component from './constants/Component'
import { Toaster } from 'react-hot-toast';
import jwtDecode from 'jwt-decode';
import Switch from "react-switch";


export const ThemeContext = createContext(null)

function App() {

  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }
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
            { path: 'category/:category', element: <ProtectedRoutes><Component.Categories /></ProtectedRoutes> },
          ]
        },
        { path: '/gameDetails/:id', element: <ProtectedRoutes><Component.GameDetails /></ProtectedRoutes> },
        { path: '*', element: <Component.Error /> },
      ]
    },
    {
      path: '/', element: <Component.AurhLayout />, children: [
        { path: '/login', element: <Component.SignIn /> },
        { path: '/register', element: <Component.SignUp /> }, 

      ]
    }

  ])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme} className='app'  >

        <Component.DetectOffline />

        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
            style: {
              fontFamily: ' Arial, Helvetica, sans-serif',
              textTransform: 'capitalize',
              zIndex: '9999',
              background: '#fffg',
              color: '#333',
            },
          }}
          containerStyle={{
            top: 60
          }}
        />

        <RouterProvider router={root} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

