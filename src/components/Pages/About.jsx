import { motion } from 'framer-motion'
import SectionTitle from '../UI/SectionTitle'

// --- 1. Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

// --- 2. Data ---
const faculty = [
  { name: "Dr. Rajesh Sharma", designation: "Faculty Coordinator" },
  { name: "Prof. Anjali Verma", designation: "Cultural Head" },
  { name: "Dr. Simran Kaur", designation: "Art & Performance Mentor" },
  { name: "Prof. Vikram Singh", designation: "Music Director" },
  { name: "Dr. Priya Mehta", designation: "Dance Choreography Head" },
  { name: "Prof. Arjun Patel", designation: "Event Coordinator" },
]

const values = [
  {
    title: "Inclusivity",
    description: "Welcoming artists from all backgrounds and skill levels. We are a family first.",
    color: "from-pink-500 to-rose-500",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Creativity",
    description: "Fostering innovation. We encourage breaking norms and experimenting with new styles.",
    color: "from-purple-500 to-violet-500",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Excellence",
    description: "Striving for perfection. From rehearsals to the final stage, we give our 100%.",
    color: "from-blue-500 to-cyan-500",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
]

const About = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-black text-white selection:bg-pink-500 selection:text-white">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <SectionTitle
            title="About Rockers"
            subtitle="Where Creativity Finds Its Rhythm"
          />
        </motion.div>
        
        {/* Mission & Vision Block */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto mb-24"
        >
          {/* Main Glass Card */}
          <motion.div variants={fadeInUp} className="relative group mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl">
              <h3 className="text-3xl font-bold mb-6 gradient-text">Our Purpose</h3>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                Our mission is to promote unity through creativity. We identify and nurture raw talent, 
                transforming passionate performers into star artists with the confidence to shine on major platforms.
                We believe that art is not just a hobby—it's a way of life.
              </p>
            </div>
          </motion.div>
          
          {/* Two Columns: Vision & Philosophy */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-pink-500 rounded-full"/> Origin & Vision
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Rockers Club was founded as a dynamic cultural hub where passion meets performance. 
                Built on the foundation of artistic expression and inclusivity, we bring together students from varied backgrounds.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We celebrate diverse dance styles, live music, rap, beatboxing, and everything that sets the stage alive.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-purple-500 rounded-full"/> Cultural Philosophy
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Through opportunities for innovation, expression, and teamwork, we prepare our members to excel in state, national, and inter-college events.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether it's energetic dance moves or soulful musical experiences, Rockers Club fosters a sense of belonging.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Faculty Support */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-24"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-16">
            Our <span className="gradient-text">Mentors</span>
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {faculty.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-pink-500/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 flex items-center justify-center group-hover:from-pink-600 group-hover:to-purple-600 transition-all duration-300 shadow-lg">
                    <span className="text-xl font-bold text-gray-400 group-hover:text-white transition-colors">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                      {member.designation}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-gradient-to-b from-zinc-900/50 to-black rounded-3xl p-8 md:p-16 border border-white/5"
        >
          <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Values</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value) => (
              <motion.div key={value.title} variants={fadeInUp} className="text-center group">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} mx-auto mb-6 flex items-center justify-center transform group-hover:rotate-6 transition-transform shadow-lg shadow-purple-900/20`}>
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed px-4">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default About