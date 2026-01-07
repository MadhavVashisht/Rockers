import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../UI/SectionTitle'
import CTAButton from '../UI/CTAButton'

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    semester: '',
    domain: '',
    experience: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Application submitted! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      department: '',
      semester: '',
      domain: '',
      experience: ''
    })
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-black text-white selection:bg-pink-500 selection:text-white">
      <div className="container mx-auto px-4">
        
        <SectionTitle
          title="Join Rockers"
          subtitle="Be Part of the Rhythm"
        />

        {/* --- 1. WHY JOIN SECTION --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto mb-24"
        >
          <motion.div variants={fadeInUp} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Why Join Rockers?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { title: "Professional Training", desc: "Learn from experts and industry professionals." },
                  { title: "Stage Experience", desc: "Perform at major college and inter-college events." },
                  { title: "Networking", desc: "Connect with artists, alumni, and performers." },
                  { title: "Skill Development", desc: "Enhance your artistic, leadership, and team skills." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-colors duration-300">
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- 2. RECRUITMENT MODES --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-24"
        >
          <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            Recruitment Modes
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Year-round", desc: "Open recruitment for exceptional talent.", icon: "🔄", color: "blue" },
              { title: "Fixed Drives", desc: "Bi-annual drives at semester start.", icon: "🎯", color: "pink" },
              { title: "Event-based", desc: "Auditions before major shows.", icon: "🎪", color: "purple" }
            ].map((mode, i) => (
              <motion.div
                key={mode.title}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className={`bg-zinc-900/50 rounded-2xl p-8 border border-white/5 hover:border-${mode.color}-500/50 transition-all text-center group`}
              >
                <div className="text-5xl mb-6 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{mode.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {mode.title}
                </h4>
                <p className="text-gray-400 text-sm">{mode.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- 3. DOMAINS AVAILABLE --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-24"
        >
          <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-center mb-12">
            Choose Your <span className="gradient-text">Path</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Dance Card */}
            <motion.div variants={fadeInUp} className="group relative">
               <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500" />
               <div className="relative bg-black rounded-2xl p-8 h-full border border-white/10">
                <h4 className="text-2xl font-bold mb-6 text-pink-400 flex items-center gap-3">
                  <span>💃</span> Dance Domain
                </h4>
                <ul className="space-y-3 mb-8">
                  {['Hip-Hop', 'Contemporary', 'Bollywood', 'Punjabi Folk', 'Western'].map((style) => (
                    <li key={style} className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-3" />
                      {style}
                    </li>
                  ))}
                </ul>
                <CTAButton to="/domains#dance" accent="pink">Learn More</CTAButton>
               </div>
            </motion.div>
            
            {/* Music Card */}
            <motion.div variants={fadeInUp} className="group relative">
               <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500" />
               <div className="relative bg-black rounded-2xl p-8 h-full border border-white/10">
                <h4 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-3">
                  <span>🎵</span> Music Wing
                </h4>
                <ul className="space-y-3 mb-8">
                  {['Vocal Singing', 'Instruments', 'Rap', 'Beatboxing', 'Production'].map((category) => (
                    <li key={category} className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                      {category}
                    </li>
                  ))}
                </ul>
                <CTAButton to="/domains#music" accent="blue">Learn More</CTAButton>
               </div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- 4. APPLICATION FORM --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
              <h3 className="text-3xl font-bold mb-8 text-center text-white">
                Apply Now
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Department *</label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                      placeholder="e.g. CSE, BBA"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Semester *</label>
                    <select
                      name="semester"
                      value={formData.semester}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-zinc-900">Select Semester</option>
                      {[1,2,3,4,5,6,7,8,9,10].map((sem) => (
                        <option key={sem} value={sem} className="bg-zinc-900">Semester {sem}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Preferred Domain *</label>
                    <select
                      name="domain"
                      value={formData.domain}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-zinc-900">Select Domain</option>
                      <option value="dance" className="bg-zinc-900">Dance Domain</option>
                      <option value="music" className="bg-zinc-900">Music Wing</option>
                      <option value="both" className="bg-zinc-900">Both</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Previous Experience</label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                    placeholder="Tell us briefly about your skills or past performances..."
                  />
                </div>
                
                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-12 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 shadow-lg shadow-purple-500/25 transition-all transform hover:-translate-y-1"
                  >
                    Submit Application
                  </button>
                  <p className="text-gray-500 text-xs mt-4">
                    We'll get back to you within 3-5 working days.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Join