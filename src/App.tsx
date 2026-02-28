import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Talent from './pages/Talent'
import Tickets from './pages/Tickets'
import Tour from './pages/Tour'
import Contact from './pages/Contact'
import TalentEPK from './pages/TalentEPK'

function App() {
  return (
    <div className="w-full m-0 p-0">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/talent" element={<Talent />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/talent/:slug" element={<TalentEPK />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
