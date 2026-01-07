import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../UI/SectionTitle'
import CTAButton from '../UI/CTAButton'

const danceStyles = [
  "Hip-Hop", "Contemporary", "Bollywood", "Punjabi Folk",
  "Himachali", "Bhangra", "Giddha", "Western Freestyle"
]

const musicCategories = [
  "Vocal Singing", "Guitar", "Piano/Keys", "Drums",
  "Bass", "Rap", "Beatboxing", "Music Production"
]

// Animation Variants
const tabContentVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: { duration: 0.3 } 
  }
}

const Domains = () => {
  const [activeTab, setActiveTab] = useState('dance')
  const { hash } = useLocation()

  // 1. Auto-switch tab based on URL hash (e.g., /domains#music)
  useEffect(() => {
    if (hash === '#music') {
      setActiveTab('music')
      document.getElementById('domain-content')?.scrollIntoView({ behavior: 'smooth' })
    } else if (hash === '#dance') {
      setActiveTab('dance')
      document.getElementById('domain-content')?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  return (
    <div className="pt-24 pb-20 min-h-screen bg-black text-white selection:bg-pink-500 selection:text-white">
      <div className="container mx-auto px-4">
        
        <SectionTitle
          title="Our Domains"
          subtitle="Specialized Wings of Excellence"
        />

        {/* Cinematic Tabs */}
        <div className="flex justify-center mb-16">
          <div className="relative inline-flex bg-zinc-900/80 backdrop-blur-md p-2 rounded-full border border-white/10">
            {['dance', 'music'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 md:px-12 py-3 rounded-full font-bold text-sm md:text-base tracking-wide transition-all duration-300 z-10 ${
                  activeTab === tab ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {/* Active Tab Background Glow */}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 rounded-full ${
                      tab === 'dance' 
                        ? 'bg-gradient-to-r from-pink-600 to-purple-600 shadow-[0_0_20px_rgba(236,72,153,0.5)]' 
                        : 'bg-gradient-to-r from-blue-600 to-teal-600 shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                    }`}
                  />
                )}
                <span className="relative capitalize flex items-center gap-2">
                  {tab === 'dance' ? '💃 Dance Domain' : '🎵 Music Wing'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div id="domain-content" className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            
            {/* --- DANCE CONTENT --- */}
            {activeTab === 'dance' && (
              <motion.div
                key="dance"
                variants={tabContentVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-16"
              >
                {/* Hero Card */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
                    
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="relative z-10">
                        <h3 className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                          Cultural Dance Wing
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                          A celebration of movement and diversity. Students explore a variety of dance forms—ranging from 
                          <span className="text-white font-semibold"> Hip-Hop</span> to vibrant 
                          <span className="text-white font-semibold"> Regional Folk</span>—showcasing rich cultural heritage with a modern twist. 
                          Every performance is a burst of energy, passion, and creativity.
                        </p>
                        
                        <div className="mb-10">
                          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Styles We Master</h4>
                          <div className="flex flex-wrap gap-3">
                            {danceStyles.map((style) => (
                              <span
                                key={style}
                                className="px-4 py-2 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm font-medium hover:bg-pink-500/20 transition-colors cursor-default"
                              >
                                {style}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <CTAButton to="/join" accent="pink">
                          Join Dance Domain
                        </CTAButton>
                      </div>
                      
                      {/* Visual Side */}
                      <div className="relative flex items-center justify-center min-h-[300px]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-full blur-3xl" />
                        <motion.div 
                          animate={{ y: [0, -20, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="relative z-10"
                        >
                           {/* Giant 3D Icon Placeholder */}
                           <svg className="w-64 h-64 text-pink-500 drop-shadow-[0_0_30px_rgba(236,72,153,0.6)]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12.75 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-1.25 5c-1.5 0-2.8 0.8-3.5 2l-1 5c-0.3 1.5 0.5 3 2 3.3 0.2 0 0.5 0 0.7 0l0.3-1.5c-0.5-0.1-0.9-0.5-0.9-1l0.8-4c0.1-0.4 0.5-0.8 1-0.8s0.9 0.4 1 0.8l2 8c0.4 1.5 1.9 2.4 3.4 2 1.5-0.4 2.4-1.9 2-3.4l-1-4h1c0.6 0 1-0.4 1-1s-0.4-1-1-1h-3l-0.6-2.5c-0.2-0.9-1-1.5-1.9-1.5z" />
                           </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements Strip */}
                <div>
                  <h3 className="text-2xl font-bold mb-8 pl-4 border-l-4 border-pink-500">Dance Achievements</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { title: "Inter-University Championship", year: "2023" },
                      { title: "National Dance Fest Winners", year: "2022" },
                      { title: "State Level Competition", year: "2023" },
                    ].map((achievement) => (
                      <div
                        key={achievement.title}
                        className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 border border-white/5 hover:border-pink-500/50 transition-all duration-300"
                      >
                        <div className="text-pink-400 text-xs font-bold uppercase tracking-widest mb-2 group-hover:text-pink-300">{achievement.year}</div>
                        <h4 className="text-xl font-bold text-white group-hover:translate-x-1 transition-transform">{achievement.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* --- MUSIC CONTENT --- */}
            {activeTab === 'music' && (
              <motion.div
                key="music"
                variants={tabContentVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-16"
              >
                {/* Hero Card */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
                    
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className="relative z-10">
                        <h3 className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                          Music Wing
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                          Where melodies meet magic. This wing brings together 
                          <span className="text-white font-semibold"> Vocalists</span>, 
                          <span className="text-white font-semibold"> Instrumentalists</span>, and 
                          <span className="text-white font-semibold"> Producers</span> to create unforgettable musical experiences. 
                          From college fests to exclusive concerts, we amplify every beat.
                        </p>
                        
                        <div className="mb-10">
                          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Categories We Cover</h4>
                          <div className="flex flex-wrap gap-3">
                            {musicCategories.map((category) => (
                              <span
                                key={category}
                                className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium hover:bg-blue-500/20 transition-colors cursor-default"
                              >
                                {category}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <CTAButton to="/join" accent="blue">
                          Join Music Wing
                        </CTAButton>
                      </div>
                      
                      {/* Visual Side */}
                      <div className="relative flex items-center justify-center min-h-[300px]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl" />
                        <motion.div 
                          animate={{ y: [0, -20, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="relative z-10"
                        >
                           <svg className="w-64 h-64 text-blue-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                           </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements Strip */}
                <div>
                  <h3 className="text-2xl font-bold mb-8 pl-4 border-l-4 border-blue-500">Music Achievements</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { title: "Battle of Bands Champions", year: "2023" },
                      { title: "National Music Fest", year: "2022" },
                      { title: "Inter-College Rap Competition", year: "2023" },
                    ].map((achievement) => (
                      <div
                        key={achievement.title}
                        className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 border border-white/5 hover:border-blue-500/50 transition-all duration-300"
                      >
                        <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 group-hover:text-blue-300">{achievement.year}</div>
                        <h4 className="text-xl font-bold text-white group-hover:translate-x-1 transition-transform">{achievement.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Domains