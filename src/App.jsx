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
    // MODIFIED: Removed localStorage check to force popup on every refresh
    // We only check if it's mobile (to avoid auto-play issues on phones)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    
    if (!isMobile) {
      setShowPopup(true)
    }
  }, [])

  const handleSoundChoice = (choice) => {
    // We don't save to localStorage anymore so it resets every time
    setAudioEnabled(choice)
    setShowPopup(false)
  }

  return (
    <Router>
      <div className="min-h-screen bg-black relative overflow-hidden">
        
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
        
        {/* Pass audioEnabled state to controls */}
        <AudioControls enabled={audioEnabled} />
        
        {showPopup && <FirstVisitPopup onChoice={handleSoundChoice} />}
      </div>
    </Router>
  )
}

export default App