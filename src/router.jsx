import {
    createBrowserRouter,
  } from "react-router-dom";
  import Apropos from './pages/A-propos/Apropos'
  import Error from './pages/Error/error.jsx'
  import Home from './pages/Home'
  import Layout from './pages/layout.jsx'

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
  
        },
        {
          path: "/apropos",
          element: <Apropos />,
        },
      ]
    }
  ]);