import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../UI/SectionTitle'

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-black text-white selection:bg-pink-500 selection:text-white">
      <div className="container mx-auto px-4">
        
        <SectionTitle
          title="Contact Us"
          subtitle="Let's Create Magic Together"
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          
          {/* --- LEFT COLUMN: INFO & FACULTY --- */}
          <div className="space-y-8">
            
            {/* 1. Contact Info Card */}
            <motion.div variants={fadeInUp} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  Get in Touch
                </h3>
                
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start space-x-4 group/item">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-purple-500/20 group-hover/item:border-purple-500/50 transition-colors">
                      <svg className="w-5 h-5 text-gray-400 group-hover/item:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89-4.26a2 2 0 012.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Email</h4>
                      <p className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">rockers@cgc.edu.in</p>
                      <p className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">cultural.club@cgc.edu.in</p>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-start space-x-4 group/item">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-500/50 transition-colors">
                      <svg className="w-5 h-5 text-gray-400 group-hover/item:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Location</h4>
                      <p className="text-gray-400 text-sm">Rockers Club Studio, Cultural Block</p>
                      <p className="text-gray-400 text-sm">CGC University, Mohali, Punjab</p>
                    </div>
                  </div>
                  
                  {/* Timings */}
                  <div className="flex items-start space-x-4 group/item">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-pink-500/20 group-hover/item:border-pink-500/50 transition-colors">
                      <svg className="w-5 h-5 text-gray-400 group-hover/item:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Timings</h4>
                      <p className="text-gray-400 text-sm">Practice: 4 PM - 8 PM (Daily)</p>
                      <p className="text-gray-400 text-sm">Office: 10 AM - 5 PM (Mon-Sat)</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Faculty Coordinators */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-6 pl-2 border-l-4 border-purple-500">
                Faculty Coordinators
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "Dr. Rajesh Sharma", role: "Faculty In-Charge", email: "rajesh.sharma@cgc.edu.in" },
                  { name: "Prof. Anjali Verma", role: "Cultural Head", email: "anjali.verma@cgc.edu.in" },
                ].map((faculty) => (
                  <div
                    key={faculty.name}
                    className="bg-zinc-900/50 rounded-xl p-6 border border-white/5 hover:border-purple-500/30 hover:bg-white/5 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-black flex items-center justify-center text-lg font-bold">
                        {faculty.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">{faculty.name}</h4>
                        <p className="text-xs text-gray-500">{faculty.role}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 bg-black/30 p-2 rounded border border-white/5 truncate">
                      {faculty.email}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: FORM & SOCIALS --- */}
          <div className="space-y-8">
            
            {/* 3. Contact Form */}
            <motion.div variants={fadeInUp} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Send Us a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="Collaboration / Inquiry"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-500 hover:to-teal-500 shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* 4. Social Links */}
            <motion.div variants={fadeInUp} className="text-center">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Connect With Us</h4>
              <div className="flex justify-center gap-4">
                {[
                  { name: "Instagram", icon: "📷", url: "#", color: "hover:border-pink-500 hover:text-pink-500" },
                  { name: "YouTube", icon: "🎥", url: "#", color: "hover:border-red-500 hover:text-red-500" },
                  { name: "Facebook", icon: "👥", url: "#", color: "hover:border-blue-500 hover:text-blue-500" },
                  { name: "Twitter", icon: "🐦", url: "#", color: "hover:border-sky-500 hover:text-sky-500" },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className={`w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-2xl transition-all shadow-lg ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- 5. MAP PLACEHOLDER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 relative rounded-3xl overflow-hidden border border-white/10 group"
        >
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          <div className="relative z-10 p-12 md:p-20 text-center">
            <div className="w-20 h-20 mx-auto bg-blue-600/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-blue-500/50 animate-pulse">
              <span className="text-4xl">📍</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find Us at CGC University
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Drop by the Cultural Block to catch us in action. The vibes are always high, and the doors are always open for talent.
            </p>
            <button className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center gap-2 mx-auto">
              Get Directions on Maps <span>→</span>
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Contact