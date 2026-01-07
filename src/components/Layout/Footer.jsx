import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const location = useLocation()
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Domains", path: "/domains" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Team", path: "/team" },
    { name: "Join Us", path: "/join" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <footer className="relative bg-black text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      
      {/* 1. Giant Watermark (Background) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none overflow-hidden">
        <span className="text-[18vw] md:text-[15vw] font-black tracking-tighter text-white">
          ROCKERS
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          
          {/* --- BRAND COLUMN (Span 5) --- */}
          <div className="md:col-span-5 space-y-8">
            <Link to="/" onClick={scrollToTop} className="inline-block group">
              <h2 className="text-3xl font-black tracking-tight flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 animate-pulse group-hover:scale-110 transition-transform" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  Rockers
                </span>
              </h2>
            </Link>
            
            <p className="text-gray-400 leading-relaxed text-lg max-w-md font-light">
              Where Creativity Finds Its Rhythm. <br />
              The official cultural heartbeat of CGC University, Mohali.
            </p>

            {/* Instagram Button */}
            <motion.a
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 text-white font-bold shadow-lg shadow-purple-900/20 hover:shadow-purple-500/40 transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow on Instagram
            </motion.a>
          </div>

          {/* --- LINKS COLUMN (Span 4) --- */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-8 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-purple-500"></span> Explore
            </h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={scrollToTop}
                    className={`text-sm font-medium flex items-center gap-2 group transition-colors duration-200 ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <span 
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-125 shadow-[0_0_8px_rgba(236,72,153,0.8)]' 
                          : 'bg-purple-500 opacity-0 group-hover:opacity-100'
                      }`} 
                    />
                    <span className={isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-bold' : ''}>
                      {link.name}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* --- CONTACT COLUMN (Span 3) --- */}
          <div className="md:col-span-3">
             <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-8 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-blue-500"></span> Contact
            </h3>
            <div className="space-y-6 text-sm text-gray-400">
              
              {/* Mail Link */}
              <a 
                href="mailto:rockers@cgc.edu.in" 
                className="flex items-center gap-4 group hover:text-white transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
                  📧
                </span>
                <span>rockers@cgc.edu.in</span>
              </a>

              {/* Map Link */}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=CGC+University+Campus+Mohali+Punjab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 group hover:text-white transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all">
                  📍
                </span>
                <span>
                  CGC University Campus,<br />
                  Mohali, Punjab
                </span>
              </a>

            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR (CENTERED CREDITS) --- */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center justify-center text-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Rockers Club. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs font-medium tracking-wide">
            Designed by <a href="https://amadhav.com" target="_blank" rel="noopener noreferrer" className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-bold hover:opacity-80 transition-opacity">Madhav</a> • Built with passion for CGC University
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer