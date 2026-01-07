import { motion } from 'framer-motion'
import SectionTitle from '../UI/SectionTitle'
import ProfileCard from '../UI/ProfileCard'

// --- 1. Data ---
const officeBearers = [
  { position: "President", name: "Jatin" },
  { position: "Vice President", name: "Bipanjit Singh" },
  { position: "General Secretary", name: "Madhav Vashisht" },
  { position: "Secretary", name: "Samardeep Singh" },
  { position: "Treasurer", name: "Akash Sundhu" },
]

const members = [
  { name: "Ritika" },
  { name: "Priya Thakur" },
  { name: "George Bodra" },
  { name: "Priyanshu Raj" },
  { name: "Torus" },
  { name: "Chetan Chaurasia" },
  { name: "Itiksha Sharma" },
  { name: "Tanu Sharma" },
  { name: "Dameer" },
  { name: "Kritika Gupta" },
  { name: "Sneha Dogra" },
  { name: "Shreya" },
  { name: "Gunjan" },
  { name: "Bhisham" },
  { name: "Arushi" },
  { name: "Akshay" },
  { name: "Akanshi Kalhotra" },
  { name: "Rahul" },
  { name: "Rafia" },
  { name: "Naazmeen" },
]

// --- 2. Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const Team = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-black text-white selection:bg-pink-500 selection:text-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Core Team"
          subtitle="The Heartbeat of Rockers"
        />

        {/* --- OFFICE BEARERS --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-32"
        >
          <motion.h3 variants={fadeInUp} className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Office Bearers
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-center">
            {officeBearers.map((bearer) => (
              <motion.div key={bearer.position} variants={fadeInUp}>
                <ProfileCard 
                  name={bearer.name} 
                  title={bearer.position} 
                  initial={bearer.name.charAt(0)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- MEMBERS (All Visible) --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h3 variants={fadeInUp} className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            Club Members
          </motion.h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {members.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-zinc-900/50 border border-white/5 hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Avatar Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center group-hover:from-blue-900/20 group-hover:to-teal-900/20 transition-all">
                  <span className="text-4xl font-bold text-gray-600 group-hover:text-blue-400 transition-colors">
                    {member.name.charAt(0)}
                  </span>
                </div>

                {/* Overlay Info */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center backdrop-blur-sm">
                  <h4 className="text-lg font-bold text-white">{member.name}</h4>
                  <div className="w-8 h-1 bg-blue-500 rounded-full mt-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Team