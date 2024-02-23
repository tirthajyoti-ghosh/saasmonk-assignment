import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Reviews from './pages/Reviews.tsx'
import Home from './pages/Home.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Home /> */}
    <Reviews />
  </React.StrictMode>,
)
