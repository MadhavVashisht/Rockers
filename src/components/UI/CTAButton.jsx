import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CTAButton = ({ children, to, accent = 'pink', onClick, className = '' }) => {
  
  // Configuration for different color themes
  const styles = {
    pink: {
      gradient: 'from-pink-600 to-purple-600',
      shadow: 'shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]',
    },
    purple: {
      gradient: 'from-purple-600 to-indigo-600',
      shadow: 'shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)]',
    },
    blue: {
      gradient: 'from-blue-600 to-cyan-600',
      shadow: 'shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]',
    },
    teal: {
      gradient: 'from-teal-600 to-emerald-600',
      shadow: 'shadow-[0_0_20px_rgba(13,148,136,0.3)] hover:shadow-[0_0_30px_rgba(13,148,136,0.6)]',
    }
  }

  const currentStyle = styles[accent] || styles.pink

  const baseClasses = `
    relative inline-flex items-center justify-center px-8 py-4 
    font-bold text-white rounded-xl overflow-hidden
    bg-gradient-to-r ${currentStyle.gradient} 
    ${currentStyle.shadow}
    transition-shadow duration-300
    ${className}
  `

  // Animation for the white "shine" effect moving across
  const shineVariant = {
    hover: { 
      x: ['-100%', '200%'],
      transition: { 
        duration: 0.5, 
        ease: "easeInOut" 
      }
    }
  }

  const content = (
    <>
      {/* 1. The moving shine effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: '-100%' }}
        variants={shineVariant}
      />
      
      {/* 2. The Text */}
      <span className="relative z-10 flex items-center gap-2 tracking-wide">
        {children}
      </span>
    </>
  )

  // Logic to render Link vs Button
  if (to) {
    return (
      <Link to={to} className="inline-block">
        <motion.div
          className={baseClasses}
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
        >
          {content}
        </motion.div>
      </Link>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClasses}
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  )
}

export default CTAButton