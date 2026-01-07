import { motion } from 'framer-motion'

const Card = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={`group relative h-full ${className}`}
    >
      {/* 1. The Gradient Glow/Border Effect (Hidden by default, shows on hover) */}
      {hover && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500" />
      )}

      {/* 2. The Card Surface (Glass Effect) */}
      <div className="relative h-full bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden p-6 transition-colors duration-300">
        {children}
      </div>
      
    </motion.div>
  )
}

export default Card