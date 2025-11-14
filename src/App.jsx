import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import WebApp from './pages/WebApp'
import EduNav from './pages/edunav'
import Contact from './pages/contact'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/web-app" element={<WebApp />} />

        <Route path="/edunav" element={<EduNav />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
