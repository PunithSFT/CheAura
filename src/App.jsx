import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
// 1. Import the ScrollToTop component
import ScrollToTop from './components/ScrollToTop' 

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 2. Place ScrollToTop directly inside the router. 
          It runs on every route change and scrolls the window to 0,0. */}
      <ScrollToTop /> 
      
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App