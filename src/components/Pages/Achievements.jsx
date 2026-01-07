import { motion } from 'framer-motion'
import SectionTitle from '../UI/SectionTitle'

// --- 1. Data ---
const achievements = [
  {
    year: "2023",
    title: "National Cultural Fest Champions",
    description: "Won overall championship in the National Inter-University competition, beating 50+ colleges.",
    category: "Both",
    icon: "🏆"
  },
  {
    year: "2023",
    title: "Best Dance Crew - State Level",
    description: "Awarded best dance performance in Punjab by the State Cultural Ministry.",
    category: "Dance",
    icon: "💃"
  },
  {
    year: "2022",
    title: "Battle of Bands Winners",
    description: "Secured First Prize in the Inter-University 'Thunderstrukk' music competition.",
    category: "Music",
    icon: "🎸"
  },
  {
    year: "2022",
    title: "Most Innovative Club Award",
    description: "Recognized by CGC University for creative initiatives and consistent campus engagement.",
    category: "Both",
    icon: "🌟"
  },
  {
    year: "2021",
    title: "Folk Dance Competition Winners",
    description: "Secured first position in Regional Folk Dance (Bhangra & Giddha).",
    category: "Dance",
    icon: "🕺"
  },
  {
    year: "2021",
    title: "Rap Battle Champions",
    description: "Dominated the Inter-College Rap Cypher with our original compositions.",
    category: "Music",
    icon: "🎤"
  },
]

// --- 2. Stats Data ---
const stats = [
  { number: "15+", label: "Trophies Won" },
  { number: "50+", label: "Performances" },
  { number: "100+", label: "Members Trained" },
  { number: "5+", label: "Years of Excellence" },
]

// --- 3. Animations ---
const cardVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === 'left' ? -50 : 50,
    y: 20
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const Achievements = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-black text-white selection:bg-pink-500 selection:text-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        <SectionTitle
          title="Achievements"
          subtitle="Our Legacy Moments"
        />

        {/* --- TIMELINE SECTION --- */}
        <div className="relative max-w-5xl mx-auto mb-32">
          
          {/* Glowing Center Line (The Spine) */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-50 blur-[2px]" />
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-transparent via-white to-transparent opacity-80" />

          {/* Achievement Items */}
          {achievements.map((achievement, index) => {
            const isLeft = index % 2 === 0
            
            return (
              <motion.div
                key={index}
                custom={isLeft ? 'left' : 'right'} // Pass direction to variant
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
                className={`relative mb-16 md:mb-24 flex flex-col md:flex-row items-center ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* 1. Spacer for the other side (Desktop only) */}
                <div className="hidden md:block md:w-1/2" />

                {/* 2. Timeline Dot (Center) */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-10 w-4 h-4">
                   {/* Outer Glow */}
                   <div className={`absolute inset-0 rounded-full animate-ping opacity-75 ${
                     achievement.category === 'Dance' ? 'bg-pink-500' :
                     achievement.category === 'Music' ? 'bg-blue-500' : 'bg-purple-500'
                   }`} />
                   {/* Core Dot */}
                   <div className={`w-4 h-4 rounded-full border-2 border-white shadow-[0_0_15px_currentColor] ${
                     achievement.category === 'Dance' ? 'bg-pink-600 shadow-pink-500' :
                     achievement.category === 'Music' ? 'bg-blue-600 shadow-blue-500' : 'bg-purple-600 shadow-purple-500'
                   }`} />
                </div>

                {/* 3. The Card Content */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${
                  isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                }`}>
                  <div className="group relative">
                    {/* Hover Glow Effect */}
                    <div className={`absolute -inset-0.5 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500 ${
                       achievement.category === 'Dance' ? 'bg-pink-600' :
                       achievement.category === 'Music' ? 'bg-blue-600' : 'bg-purple-600'
                    }`} />
                    
                    <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl hover:border-white/20 transition-all">
                      
                      {/* Header: Badge & Year */}
                      <div className={`flex items-center gap-4 mb-4 ${
                        isLeft ? 'md:flex-row-reverse' : 'flex-row'
                      }`}>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                          achievement.category === 'Dance' 
                            ? 'bg-pink-500/10 text-pink-400 border-pink-500/20' 
                            : achievement.category === 'Music'
                            ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                            : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                        }`}>
                          {achievement.category}
                        </span>
                        <span className="text-2xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                          {achievement.year}
                        </span>
                      </div>
                      
                      {/* Title & Description */}
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                        {achievement.icon} {achievement.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>

              </motion.div>
            )
          })}
        </div>

        {/* --- STATS SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-20 p-1 rounded-3xl bg-gradient-to-r from-gray-800/50 to-black/50 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 blur-3xl" />
          
          <div className="relative bg-black/40 backdrop-blur-xl rounded-[22px] p-8 md:p-12 border border-white/5">
            <h3 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              By The Numbers
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, i) => (
                <div key={stat.label} className="text-center group">
                  <div className="text-4xl md:text-6xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 group-hover:from-pink-400 group-hover:to-purple-500 transition-all duration-500">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- QUOTE SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center max-w-4xl mx-auto relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl text-white/5 font-serif select-none">
            &ldquo;
          </div>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 italic font-light leading-relaxed relative z-10">
            Every trophy tells a story of passion, every award echoes countless hours of practice, 
            and every recognition fuels our journey to create more magic.
          </p>
          <div className="inline-block">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-bold uppercase tracking-widest text-sm">
              — Rockers Club Legacy
            </p>
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-2" />
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Achievements