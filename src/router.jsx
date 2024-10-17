import {
  createBrowserRouter,
} from "react-router-dom";
import Apropos from './pages/A-propos/Apropos'
import Home from './pages/Home'
import Layout from './pages/layout.jsx'
import FicheLogement from "./pages/Fiche-logement/ficheLogement.jsx";

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
      {
        path: "/logement/:id",
        element: <FicheLogement />,
      }
    ]
  }
]);