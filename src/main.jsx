import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import Apropos from './pages/A-propos/Apropos'
import Error from './pages/Error/error.jsx'
import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* { <Home /> } */}
    {/* <Error /> */}
    { <Apropos /> }
  </StrictMode>,
)
