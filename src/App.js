import { Grommet } from 'grommet'
import { RouterProvider, Outlet, createBrowserRouter } from 'react-router-dom'
import { Category, Footy, Main, Navbar, Profile, Registration, Success, Thread } from './components/index';
import './App.css';
import { AuthProvider } from './useAuth';
import { welcomeLoader } from './components/Success';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: ":category",
        children: [
          {
            path: "",
            element: <Category />,  
          },
          {
          path: ":allpost",
          element: <Thread />,  
          }
        ]
      },
      {
        path: "success",
        element: <Success />,
        loader: welcomeLoader,
      },
      {
        path: "registration",
        element: <Registration />
      },
      {
        path: "profile",
        element: <Profile />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;

function Layout () {
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