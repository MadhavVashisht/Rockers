import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// 1. Music & Dance SVG Assets
const icons = {
  note: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-lg">
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
    </svg>
  ),
  mic: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-lg">
      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
    </svg>
  ),
  headphones: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-lg">
      <path d="M12 3a9 9 0 0 0-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7a9 9 0 0 0-9-9z" />
    </svg>
  ),
  dancer: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-lg">
      <path d="M12.75 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-1.25 5c-1.5 0-2.8 0.8-3.5 2l-1 5c-0.3 1.5 0.5 3 2 3.3 0.2 0 0.5 0 0.7 0l0.3-1.5c-0.5-0.1-0.9-0.5-0.9-1l0.8-4c0.1-0.4 0.5-0.8 1-0.8s0.9 0.4 1 0.8l2 8c0.4 1.5 1.9 2.4 3.4 2 1.5-0.4 2.4-1.9 2-3.4l-1-4h1c0.6 0 1-0.4 1-1s-0.4-1-1-1h-3l-0.6-2.5c-0.2-0.9-1-1.5-1.9-1.5z" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-lg">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  )
};

const iconKeys = Object.keys(icons);

const FloatingElements = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate 30 floating items
    const newParticles = Array.from({ length: 30 }).map((_, i) => {
      const randomColor = Math.random();
      let colorClass;

      if (randomColor < 0.33) colorClass = "text-pink-500/40";
      else if (randomColor < 0.66) colorClass = "text-purple-500/40";
      else colorClass = "text-white/20";

      return {
        id: i,
        icon: iconKeys[Math.floor(Math.random() * iconKeys.length)],
        left: Math.random() * 100,
        duration: 15 + Math.random() * 25,
        delay: -(Math.random() * 40),
        sway: 30 + Math.random() * 60,
        size: 20 + Math.random() * 50,
        opacity: 0.2 + Math.random() * 0.5,
        colorClass: colorClass
      };
    });

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute ${p.colorClass}`}
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            filter: "blur(1px)",
          }}
          initial={{ y: "110vh", opacity: 0, x: 0, rotate: 0 }}
          animate={{
            y: "-20vh",
            opacity: [0, p.opacity, p.opacity, 0],
            x: [0, p.sway, -p.sway, 0],
            rotate: 360,
          }}
          transition={{
            y: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay },
            rotate: { duration: p.duration * 1.5, repeat: Infinity, ease: "linear", delay: p.delay },
            x: { duration: p.duration / 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: p.delay },
            opacity: { duration: p.duration, repeat: Infinity, times: [0, 0.1, 0.9, 1], delay: p.delay },
          }}
        >
          {icons[p.icon]}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;