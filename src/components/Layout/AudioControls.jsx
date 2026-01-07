import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AudioControls = ({ enabled }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const audioRef = useRef(null)

  // 1. Initialize Audio
  useEffect(() => {
    // Only initialize if we haven't already
    if (!audioRef.current) {
      audioRef.current = new Audio('/theme.mp3') 
      audioRef.current.loop = true
      audioRef.current.volume = 0.5
      
      // Add error listener to help debug
      audioRef.current.addEventListener('error', (e) => {
        console.error("Audio Error:", e)
        console.error("Make sure 'theme.mp3' is in your 'public' folder!")
      })
    }

    // 2. Play/Pause based on 'enabled' prop
    if (enabled) {
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
            console.log("Audio playing successfully")
          })
          .catch(error => {
            console.error("Autoplay prevented:", error)
            setIsPlaying(false)
          })
      }
    } else {
      audioRef.current.pause()
      setIsPlaying(false)
    }

    // Cleanup
    return () => {
      // Don't destroy the audio object immediately to prevent jitter, 
      // but pause it if component unmounts
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [enabled])

  // 3. Handle Scroll Visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 4. Toggle Logic (Manual Click)
  const toggleMusic = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().catch(e => console.error("Play failed:", e))
      setIsPlaying(true)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { scale: 1.1, transition: { duration: 0.2 } },
    tap: { scale: 0.9 }
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-4">
      <AnimatePresence>
        
        {/* --- MUSIC TOGGLE BUTTON --- */}
        <motion.button
          key="music-btn"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          whileHover="hover"
          whileTap="tap"
          onClick={toggleMusic}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-500 ${
            isPlaying 
              ? 'bg-pink-500/20 shadow-[0_0_30px_rgba(236,72,153,0.5)] border-pink-500/50' 
              : 'bg-black/80 border-white/10'
          }`}
        >
          {isPlaying && (
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-t-pink-500 border-r-transparent border-b-purple-500 border-l-transparent opacity-50"
            />
          )}

          {isPlaying ? (
            <div className="flex items-end gap-[3px] h-6">
              {[1, 2, 3, 4].map((bar) => (
                <motion.div
                  key={bar}
                  animate={{ height: [6, 16, 8, 20, 10] }}
                  transition={{ 
                    duration: 0.8, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: bar * 0.1 
                  }}
                  className="w-[3px] bg-pink-400 rounded-full"
                />
              ))}
            </div>
          ) : (
            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.63 3.63a.996.996 0 000 1.41L7.29 8.6 7 9H4a1 1 0 00-1 1v4a1 1 0 001 1h3l3.29 3.29a.996.996 0 001.71-.7V13.41l4.29 4.29a.996.996 0 101.41-1.41L4.05 3.63zM10 15.17L7.83 13H5v-2h2.83l.88-.88L10 11.41v3.76zM19 12c0 .82-.15 1.57-.41 2.26l1.49 1.49c.61-1.14.92-2.42.92-3.75 0-3.92-2.56-7.23-6-8.22v2.13c2.29.89 4 3.1 4 5.82zm-3 0c0 1.72-.94 3.22-2.34 4.02l1.45 1.45C16.39 16.59 17 15.37 17 12c0-2.36-1.39-4.39-3.41-5.35v2.24c.94.75 1.41 1.93 1.41 3.11z"/>
            </svg>
          )}
        </motion.button>

        {/* --- SCROLL TO TOP BUTTON --- */}
        {showScrollTop && (
          <motion.button
            key="scroll-btn"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            whileHover="hover"
            whileTap="tap"
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-blue-600/20 backdrop-blur-md border border-blue-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:bg-blue-600/40 hover:border-blue-400 transition-colors"
          >
            <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}

      </AnimatePresence>
    </div>
  )
}

export default AudioControls