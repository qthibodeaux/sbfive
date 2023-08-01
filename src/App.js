import { Box, Button, Grommet, Nav } from 'grommet'
import { RouterProvider, Outlet, createBrowserRouter } from 'react-router-dom'
import { Footy, Main, Navbar, Registration, Success } from './components/index';
import { useAuth } from './useAuth'
import supabaseClient from './supabaseClient';
import './App.css';
import { useEffect, useState } from 'react';
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { Auth } from '@supabase/auth-ui-react'
import { AuthProvider } from './useAuth'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Main />
      },
      {
        path: "success",
        element: <Success />
      },
      {
        path: "registration",
        element: <Registration />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;

function Layout () {
  //const auth = useAuth()
  return (
    <Grommet>
      <AuthProvider>
        <Navbar/>
        <Outlet />
        <Footy />
      </AuthProvider>
    </Grommet>
  )
}