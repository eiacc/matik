import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.tsx'
import "./assets/styles/index.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)