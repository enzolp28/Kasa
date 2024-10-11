import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import './index.scss'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
