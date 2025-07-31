import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/global.css'
import Main from '@/components/Main/index.tsx'
import Header from '@/components/Header/index.tsx'
import Footer from '@/components/Footer/index.tsx'

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

export default App
