
import { Outlet } from 'react-router-dom'
import './App.css'
import NavItems from './compoments/NavItems'
import Footer from './compoments/Footer'

function App() {
 
  return (
    <>
      <NavItems/>
      {/* relative to the viewport: min-height 100vh */}
      <div className="min-vh-100"> 
      <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
