import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Talent from './pages/Talent'
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
        <Route path="/talent/:slug" element={<TalentEPK />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
