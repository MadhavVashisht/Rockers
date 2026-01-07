import { motion } from 'framer-motion'

const FirstVisitPopup = ({ onChoice }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      
      {/* 1. Backdrop Blur */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* 2. The Popup Card */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden"
      >
        {/* Background Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10 text-center">
          
          {/* Animated Icon */}
          <div className="w-20 h-20 mx-auto mb-8 relative flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-40 animate-pulse" />
             <div className="relative w-full h-full bg-black rounded-full border border-white/10 flex items-center justify-center">
                <span className="text-4xl animate-bounce">🎧</span>
             </div>
          </div>
          
          {/* Title & Text */}
          <h2 className="text-3xl font-bold mb-4 text-white tracking-tight">
            Sound Experience
          </h2>
          
          <p className="text-gray-400 mb-8 leading-relaxed text-lg">
            For the best cinematic experience, we recommend enabling sound. 
            Feel the rhythm of Rockers as you explore.
          </p>
          
          {/* Actions */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => onChoice(true)}
              className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 shadow-lg shadow-purple-500/25 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <span>🎵</span> Enable Sound
            </button>
            
            <button
              onClick={() => onChoice(false)}
              className="w-full py-4 rounded-xl font-semibold text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              Continue Without Sound
            </button>
          </div>
          
          <p className="text-gray-600 text-xs mt-6">
            Note: Audio is disabled by default on mobile devices to save data.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default FirstVisitPopup