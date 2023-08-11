import { Grommet } from 'grommet'
import { RouterProvider, Outlet, createBrowserRouter } from 'react-router-dom'
import { AllPosts, Category, Footy, Main, Navbar, Registration, Success } from './components/index';
import './App.css';
import { AuthProvider } from './useAuth';
import Tfour from './components/test/tfour';
import Tone from './components/test/tone';
import Ttwo from './components/test/ttwo';
import Tthree from './components/test/tthree';

const testRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MessageBoard />,
        children: [
          {
            path: ":pageNumber",
            element: <AllPosts />,
          },
          {
            path: "post/:postId",
            element: <PostView />,
          },
        ],
      },
      {
        path: "welcome",
        element: <Welcome />,
        loader: welcomeLoader,
      },
    ],
  },
])

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Main />,
        children: [
          {
            path: "category",
            element: <Category />,
          },
          {
            path: ":pageNumber",
            element: <AllPosts />,
          },
        ]
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