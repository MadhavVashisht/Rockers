import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-20 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {/* Main Title with Gradient */}
      <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
          {title}
        </span>
      </h2>

      {/* Decorative Line */}
      <div className={`h-1.5 w-24 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-6 ${align === 'center' ? 'mx-auto' : ''}`} />

      {/* Subtitle */}
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionTitle