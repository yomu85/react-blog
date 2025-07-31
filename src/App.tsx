import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/global.css'
import Main from '@/components/Main/index.tsx'
import Header from '@/components/Header/index.tsx'
import Footer from '@/components/Footer/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Main />
    <Footer />
  </StrictMode>,
)
