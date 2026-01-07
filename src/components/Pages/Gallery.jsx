import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../UI/SectionTitle'

// --- 1. Gallery Data ---
const galleryItems = [
  { id: 1, category: 'dance', title: 'Hip-Hop Showcase', size: 'large' },
  { id: 2, category: 'music', title: 'Rockers Unplugged', size: 'small' },
  { id: 3, category: 'events', title: 'Saviskar 2025', size: 'medium' },
  { id: 4, category: 'dance', title: 'Bhangra Warriors', size: 'medium' },
  { id: 5, category: 'music', title: 'Rap Cypher Vol. 1', size: 'large' },
  { id: 6, category: 'events', title: 'Orientation Day', size: 'small' },
  { id: 7, category: 'dance', title: 'Contemporary Flow', size: 'small' },
  { id: 8, category: 'music', title: 'Beatbox Battle', size: 'medium' },
  { id: 9, category: 'events', title: 'Art Workshop', size: 'large' },
  { id: 10, category: 'dance', title: 'Folk Fusion', size: 'medium' },
  { id: 11, category: 'music', title: 'Studio Sessions', size: 'small' },
  { id: 12, category: 'events', title: 'Award Night', size: 'medium' },
]

const filters = [
  { id: 'all', label: 'All Moments' },
  { id: 'dance', label: 'Dance' },
  { id: 'music', label: 'Music' },
  { id: 'events', label: 'Events' },
]

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <div className="pt-24 pb-20 min-h-screen bg-black text-white selection:bg-pink-500 selection:text-white">
      <div className="container mx-auto px-4">
        
        <SectionTitle
          title="Gallery"
          subtitle="Capturing the Rhythm of Life"
        />

        {/* --- CINEMATIC FILTERS --- */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap justify-center gap-2 bg-zinc-900/80 backdrop-blur-md p-2 rounded-full border border-white/10">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`relative px-6 py-2 rounded-full font-medium text-sm transition-colors duration-300 z-10 ${
                  activeFilter === filter.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeFilter === filter.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.5)] -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* --- ANIMATED GRID --- */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(item)}
                className={`group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-zinc-900/50 border border-white/5 hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/20`}
              >
                {/* 1. Holographic Background Placeholder */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-30 transition-opacity duration-500 group-hover:opacity-50 ${
                  item.category === 'dance' ? 'from-pink-600 via-purple-600 to-black' :
                  item.category === 'music' ? 'from-blue-600 via-teal-600 to-black' :
                  'from-purple-600 via-pink-600 to-black'
                }`} />

                {/* 2. Floating 3D Icon (Visual Interest) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="text-6xl md:text-7xl filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] opacity-80 group-hover:opacity-100 transition-opacity"
                  >
                    {item.category === 'dance' ? '💃' :
                     item.category === 'music' ? '🎵' : '📸'}
                  </motion.div>
                </div>

                {/* 3. Hover Overlay Info */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center backdrop-blur-sm">
                  <span className={`text-xs font-bold uppercase tracking-widest mb-2 ${
                    item.category === 'dance' ? 'text-pink-400' :
                    item.category === 'music' ? 'text-blue-400' : 'text-purple-400'
                  }`}>
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-400">View Full Size</p>
                </div>

                {/* 4. Corner Badge */}
                <div className="absolute top-3 left-3">
                  <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- IMMERSIVE LIGHTBOX MODAL --- */}
        <AnimatePresence>
          {selectedImage && (
            <div
              className="fixed inset-0 z-[60] flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/95 backdrop-blur-xl cursor-pointer"
              />

              {/* Modal Content */}
              <motion.div 
                layoutId={`image-${selectedImage.id}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative w-full max-w-5xl aspect-video bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent close on clicking image
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-colors text-white border border-white/10"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Full Screen Visual */}
                <div className={`w-full h-full bg-gradient-to-br flex flex-col items-center justify-center text-center p-10 ${
                   selectedImage.category === 'dance' ? 'from-pink-900/40 via-black to-purple-900/40' :
                   selectedImage.category === 'music' ? 'from-blue-900/40 via-black to-teal-900/40' :
                   'from-purple-900/40 via-black to-pink-900/40'
                }`}>
                  
                  {/* Giant Icon */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-9xl mb-8 filter drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                  >
                    {selectedImage.category === 'dance' ? '💃' :
                     selectedImage.category === 'music' ? '🎵' : '🌟'}
                  </motion.div>

                  {/* Text Details */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="inline-block px-4 py-1 rounded-full border border-white/20 bg-white/5 text-sm font-bold uppercase tracking-widest mb-4">
                      {selectedImage.category}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
                      {selectedImage.title}
                    </h2>
                    <p className="text-xl text-gray-400 font-light">
                      Rockers Club • CGC University Moments
                    </p>
                  </motion.div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}

export default Gallery