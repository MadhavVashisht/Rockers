import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import CTAButton from '../UI/CTAButton'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

// --- 1. Counter Component ---
const AnimatedCounter = ({ value }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: "-50px" }) // "once: false" makes it replay
  
  // Extract number from string (e.g. "50+" -> 50)
  const numericValue = parseInt(value) || 0
  const suffix = value.replace(/[0-9]/g, '') // Get the "+" or "%"

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 })

  useEffect(() => {
    if (inView) {
      motionValue.set(numericValue)
    } else {
      motionValue.set(0) // Reset to 0 when scrolling out
    }
  }, [inView, numericValue, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix
      }
    })
  }, [springValue, suffix])

  return <span ref={ref}>{value}</span> // Default static fallback, replaced by JS
}

// --- 2. Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  },
  exit: { opacity: 0, y: -60, transition: { duration: 0.5 } }
}

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } }
}

const Home = () => {
  return (
    <div className="relative bg-black min-h-screen selection:bg-pink-500 selection:text-white overflow-x-hidden">
      
      {/* GLOBAL BACKGROUND: Cinematic Fog/Spotlight */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen" 
        />
        <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-pink-600/10 blur-[100px] rounded-full mix-blend-screen" />
        <div className={`absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]`} />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
          className="container mx-auto px-4 text-center"
        >
          
          {/* Main Title Block */}
          <div className="mb-8 relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-600/30 to-purple-600/30 blur-2xl opacity-50 rounded-full" />
            
            <h1 className="relative">
              <motion.span variants={fadeInUp} className="block text-sm md:text-xl text-pink-400 font-bold tracking-[0.5em] uppercase mb-4">
                CGC University Presents
              </motion.span>
              <motion.span variants={fadeInUp} className="block text-7xl md:text-9xl font-black tracking-tighter text-white drop-shadow-2xl">
                ROCKERS
              </motion.span>
              <motion.span variants={fadeInUp} className="block text-2xl md:text-4xl font-light text-gray-300 mt-2 tracking-widest uppercase opacity-80">
                The Cultural Club
              </motion.span>
            </h1>
          </div>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Where <span className="text-white font-semibold">Creativity</span> finds its rhythm. 
            A stage for the bold, the loud, and the artistic.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <CTAButton to="/domains" accent="pink">
              Explore Domains
            </CTAButton>
            <CTAButton to="/join" accent="purple">
              Join the Crew
            </CTAButton>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
        >
          <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-pink-500 to-transparent"></div>
        </motion.div>
      </section>

      {/* Cinematic Stats Strip */}
      <section className="relative z-10 py-10 border-y border-white/5 bg-black/40 backdrop-blur-sm">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={staggerContainer}
          className="container mx-auto px-4"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
            {[
              { label: 'Active Members', value: '50+' },
              { label: 'Annual Events', value: '20+' },
              { label: 'Core Domains', value: '02' },
              { label: 'Years of Legacy', value: '05' },
            ].map((stat) => (
              <motion.div 
                key={stat.label} 
                variants={fadeInUp}
                className="text-center px-4 group cursor-default"
              >
                <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 group-hover:from-pink-400 group-hover:to-purple-600 transition-all duration-500">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-xs md:text-sm uppercase tracking-widest text-gray-500 mt-2 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Cultural Wings (Cards) */}
      <section className="relative z-10 py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Our Wings</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            {/* Dance Card */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full bg-zinc-900 rounded-2xl p-8 border border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-700">
                  <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"/></svg>
                </div>
                
                <h3 className="text-3xl font-black text-white mb-4 uppercase italic">Dance</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  From Hip-Hop to vibrant regional folk. We don't just move; we tell stories through every beat and rhythm.
                </p>
                
                <Link to="/domains#dance" className="inline-flex items-center gap-2 text-pink-400 font-bold uppercase tracking-wider hover:gap-4 transition-all">
                  Enter the Floor <span>→</span>
                </Link>
              </div>
            </motion.div>
            
            {/* Music Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full bg-zinc-900 rounded-2xl p-8 border border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-700">
                   <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
                </div>

                <h3 className="text-3xl font-black text-white mb-4 uppercase italic">Music</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Where melodies meet magic. Vocalists, rappers, and instrumentalists creating soundscapes that resonate.
                </p>
                
                <Link to="/domains#music" className="inline-flex items-center gap-2 text-purple-400 font-bold uppercase tracking-wider hover:gap-4 transition-all">
                  Amplify Sound <span>→</span>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home