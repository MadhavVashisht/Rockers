import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import AudioControls from './components/Layout/AudioControls'
import FirstVisitPopup from './components/Layout/FirstVisitPopup'
import FloatingElements from './components/UI/FloatingElements'

import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Domains from './components/Pages/Domains'
import Events from './components/Pages/Events'
import Gallery from './components/Pages/Gallery'
import Achievements from './components/Pages/Achievements'
import Team from './components/Pages/Team'
import Join from './components/Pages/Join'
import Contact from './components/Pages/Contact'

function App() {
  const [showPopup, setShowPopup] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(false)

  useEffect(() => {
    // FIX: Removed the 'isMobile' check. 
    // Now the popup will trigger on ALL devices every time the site refreshes.
    setShowPopup(true)
  }, [])

  const handleSoundChoice = (choice) => {
    setAudioEnabled(choice)
    setShowPopup(false)
  }

  return (
    <Router>
      <div className="min-h-screen bg-black relative overflow-hidden">
        
        {/* Floating Background */}
        <FloatingElements />

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/team" element={<Team />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
        
        {/* Audio & Popup */}
        <AudioControls enabled={audioEnabled} />
        {showPopup && <FirstVisitPopup onChoice={handleSoundChoice} />}
      </div>
    </Router>
  )
}

export default App