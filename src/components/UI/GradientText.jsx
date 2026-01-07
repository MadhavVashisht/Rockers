const GradientText = ({ children, className = '' }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      
      {/* 1. The Neon Glow (Behind) */}
      <span 
        className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-lg opacity-40 animate-pulse select-none" 
        aria-hidden="true"
      >
        {children}
      </span>

      {/* 2. The Sharp Gradient Text (Front) */}
      <span className="relative z-10 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-extrabold tracking-tight">
        {children}
      </span>
      
    </span>
  )
}

export default GradientText