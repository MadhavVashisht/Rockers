import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../UI/SectionTitle'

// --- 1. Event Data ---
const events = {
  upcoming: [
    {
      id: 1,
      title: "Rockers Night - Annual Concert",
      date: "Mar 15, 2024",
      type: "Internal",
      description: "Grand annual showcase featuring all domains. A night of pure rhythm and soul where the best of our college talent performs live.",
      details: "Join us for an electrifying evening featuring live bands, solo vocal performances, and high-energy dance routines. Food stalls and merchandise will be available.",
      category: "Music & Dance",
      status: "Registration Open",
      venue: "Main Auditorium",
      time: "5:00 PM Onwards"
    },
    {
      id: 2,
      title: "Inter-College Dance Battle",
      date: "Apr 5, 2024",
      type: "Inter-college",
      description: "The ultimate face-off. Competitors from across Punjab battle for the crown.",
      details: "Top dance crews from 20+ universities will compete for the title. Categories include Hip-Hop, Classical, and Freestyle.",
      category: "Dance",
      status: "Coming Soon",
      venue: "Open Air Theatre",
      time: "10:00 AM"
    },
    {
      id: 3,
      title: "Music Workshop with Professionals",
      date: "Feb 28, 2024",
      type: "Internal",
      description: "Learn production and vocals from industry experts in this exclusive masterclass.",
      details: "A hands-on workshop covering music production basics, vocal modulation, and stage presence. Certificate provided upon completion.",
      category: "Music",
      status: "Limited Seats",
      venue: "Music Room (Block C)",
      time: "2:00 PM - 5:00 PM"
    }
  ],
  past: [
    {
      id: 4,
      title: "Cultural Fest 2023",
      date: "Nov 20, 2023",
      type: "Internal",
      description: "Three-day cultural extravaganza celebrating art, music, and dance.",
      category: "Both",
      status: "Completed",
      venue: "Campus Grounds"
    },
    {
      id: 5,
      title: "Battle of Bands 2023",
      date: "Oct 10, 2023",
      type: "Inter-college",
      description: "High-voltage music competition featuring 15+ college bands.",
      category: "Music",
      status: "Winner: Rockers",
      venue: "Main Stage"
    },
    {
      id: 6,
      title: "Freshers' Welcome 2023",
      date: "Sep 5, 2023",
      type: "Internal",
      description: "A warm, energetic welcome performance for the new batch of students.",
      category: "Both",
      status: "Completed",
      venue: "Auditorium"
    }
  ]
}

// --- 2. Modal Component ---
const EventModal = ({ event, onClose }) => {
  if (!event) return null

  // Determine button state based on event status
  const isRegistrationOpen = event.status === "Registration Open" || event.status === "Limited Seats";
  const isComingSoon = event.status === "Coming Soon";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
      />

      {/* Modal Content */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/40"
      >
        {/* Header Image Area */}
        <div className={`h-40 relative overflow-hidden ${
          event.category === 'Music' ? 'bg-gradient-to-r from-blue-900 to-purple-900' :
          event.category === 'Dance' ? 'bg-gradient-to-r from-pink-900 to-orange-900' :
          'bg-gradient-to-r from-purple-900 to-pink-900'
        }`}>
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <span className="text-8xl">
              {event.category === 'Dance' ? '💃' : event.category === 'Music' ? '🎵' : '🎭'}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              event.status === 'Registration Open' ? 'bg-green-500/20 text-green-400' :
              event.status === 'Limited Seats' ? 'bg-orange-500/20 text-orange-400' :
              event.status === 'Coming Soon' ? 'bg-blue-500/20 text-blue-400' :
              'bg-gray-700 text-gray-400'
            }`}>
              {event.status}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10 text-gray-300">
              {event.type}
            </span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-2">{event.title}</h2>
          <div className="flex items-center gap-6 text-gray-400 text-sm mb-6">
            <div className="flex items-center gap-2">
              <span>📅</span> {event.date}
            </div>
            <div className="flex items-center gap-2">
              <span>⏰</span> {event.time || "TBA"}
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span> {event.venue || "TBA"}
            </div>
          </div>

          <div className="prose prose-invert max-w-none text-gray-300 mb-8">
            <p className="text-lg leading-relaxed">{event.description}</p>
            {event.details && (
              <p className="mt-4 text-sm text-gray-400 bg-black/20 p-4 rounded-xl border border-white/5">
                {event.details}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {isRegistrationOpen ? (
              // Case 1: Registration is active
              <button className="flex-1 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 shadow-lg shadow-purple-500/25 transition-all transform hover:-translate-y-1">
                Register Now
              </button>
            ) : isComingSoon ? (
              // Case 2: Event is "Coming Soon"
              <button disabled className="flex-1 py-4 rounded-xl font-bold text-gray-500 bg-white/5 cursor-not-allowed border border-white/5">
                Coming Soon
              </button>
            ) : (
              // Case 3: All other states (e.g., Completed)
              <button disabled className="flex-1 py-4 rounded-xl font-bold text-gray-500 bg-white/5 cursor-not-allowed border border-white/5">
                Registration Closed
              </button>
            )}
            <button 
              onClick={onClose}
              className="px-8 py-4 rounded-xl font-bold text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming')
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <div className="pt-24 pb-20 min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Events"
          subtitle="Where Memories Are Made"
        />

        {/* Cinematic Tabs */}
        <div className="flex justify-center mb-16">
          <div className="relative inline-flex bg-zinc-900/80 backdrop-blur-md p-2 rounded-full border border-white/10">
            {['upcoming', 'past'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 md:px-12 py-3 rounded-full font-bold text-sm md:text-base tracking-wide transition-all duration-300 z-10 ${
                  activeTab === tab ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 rounded-full ${
                      tab === 'upcoming' 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-[0_0_20px_rgba(168,85,247,0.5)]' 
                        : 'bg-gradient-to-r from-blue-600 to-teal-600 shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                    }`}
                  />
                )}
                <span className="relative capitalize">
                  {tab} Events
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {(activeTab === 'upcoming' ? events.upcoming : events.past).map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl bg-zinc-900/50 backdrop-blur-sm border border-white/5 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-900/20"
                >
                  {/* Image/Icon Placeholder Area */}
                  <div className={`h-52 relative overflow-hidden ${
                    event.category === 'Music' ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' :
                    event.category === 'Dance' ? 'bg-gradient-to-br from-pink-900/20 to-orange-900/20' :
                    'bg-gradient-to-br from-purple-900/20 to-pink-900/20'
                  }`}>
                    {/* Floating Icon */}
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                      <span className="text-6xl filter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        {event.category === 'Dance' ? '💃' : 
                         event.category === 'Music' ? '🎵' : '🎭'}
                      </span>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-white/10 ${
                        event.status === 'Registration Open' ? 'bg-green-500/20 text-green-300' :
                        event.status === 'Limited Seats' ? 'bg-orange-500/20 text-orange-300' :
                        event.status === 'Coming Soon' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-gray-500/20 text-gray-300'
                      }`}>
                        {event.status}
                      </span>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className="flex flex-col bg-black/60 backdrop-blur-md rounded-xl px-4 py-2 border border-white/10 text-center min-w-[60px]">
                        <span className="text-xl font-bold text-white leading-none">
                          {event.date.split(' ')[1].replace(',', '')}
                        </span>
                        <span className="text-xs text-gray-400 uppercase font-bold">
                          {event.date.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <span className={`text-xs font-bold px-2 py-1 rounded border ${
                        event.type === 'Inter-college' 
                          ? 'border-pink-500/50 text-pink-400' 
                          : 'border-blue-500/50 text-blue-400'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                      {event.description}
                    </p>
                    
                    <button 
                      onClick={() => setSelectedEvent(event)}
                      className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/30 text-gray-300 hover:text-white font-semibold transition-all flex items-center justify-center gap-2 group-hover:gap-4"
                    >
                      Event Details <span>→</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Legend / Info Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-1 rounded-3xl bg-gradient-to-r from-gray-800/50 to-black/50"
        >
          <div className="bg-black/80 backdrop-blur-xl rounded-[22px] p-8 md:p-12 border border-white/5">
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">
              Event Categories Guide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '🎭', title: 'Internal Events', desc: 'Exclusive performances and workshops for CGC University students.' },
                { icon: '🏆', title: 'Inter-College', desc: 'Grand competitions featuring talent from universities across the region.' },
                { icon: '🌟', title: 'Public Shows', desc: 'Open-air concerts and showcases accessible to the general public.' }
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/5 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400 max-w-xs mx-auto">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* MODAL OVERLAY */}
        <AnimatePresence>
          {selectedEvent && (
            <EventModal 
              event={selectedEvent} 
              onClose={() => setSelectedEvent(null)} 
            />
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}

export default Events