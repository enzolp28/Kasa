import {
  createBrowserRouter,
} from "react-router-dom";
// import Apropos from './pages/A-propos/Apropos'
// import Home from './pages/Home'
// import Layout from './pages/layout.jsx'
// import FicheLogement from "./pages/Fiche-logement/ficheLogement.jsx";
// import Error from "./pages/Error/error.jsx";
import React, { lazy, Suspense } from 'react';
const Apropos = lazy(() => import('./pages/A-propos/Apropos'));
const Home = lazy(() => import('./pages/Home'));
const Layout = lazy(() => import('./pages/layout.jsx'));
const FicheLogement = lazy(() => import("./pages/Fiche-logement/ficheLogement.jsx"));
const Error = lazy(() => import("./pages/Error/error.jsx"));


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>,

      },
      {
        path: "/apropos",
        element: <Suspense fallback={<div>Loading...</div>}><Apropos /></Suspense>,
      },
      {
        path: "/logement/:id",
        element: <Suspense fallback={<div>Loading...</div>}><FicheLogement /></Suspense>,
      },
      {
        path: "/*",
        element: <Suspense fallback={<div>Loading...</div>}><Error /></Suspense>,
      },
      {
        path: "/logement/*",
        element: <Suspense fallback={<div>Loading...</div>}><Error /></Suspense>,
      }
    ]
  }
]);