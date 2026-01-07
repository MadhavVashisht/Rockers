import { useRef, useState } from "react";
import { motion } from "framer-motion";

const ProfileCard = ({ name, title, initial }) => {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);

  // Mouse move handler for 3D Tilt effect
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation based on mouse position
    const xRotation = ((y - rect.height / 2) / rect.height) * 20;
    const yRotation = ((x - rect.width / 2) / rect.width) * 20;
    
    ref.current.style.transform = `perspective(1000px) rotateX(${-xRotation}deg) rotateY(${yRotation}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    setHover(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[280px] h-[380px] mx-auto rounded-[2rem] bg-[#09090b] overflow-hidden border border-white/10 shadow-2xl transition-all duration-200 ease-out cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* 1. NOISE TEXTURE BACKGROUND */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.4" />
        </svg>
      </div>

      {/* 2. GLITCHY PIXEL ELEMENTS (Decorations) */}
      <motion.div 
        animate={{ y: hover ? -10 : 0, opacity: hover ? 1 : 0.5 }}
        className="absolute top-10 left-4 w-8 h-8 border-l-2 border-t-2 border-pink-500/50 rounded-tl-lg" 
      />
      <motion.div 
        animate={{ y: hover ? 10 : 0, opacity: hover ? 1 : 0.5 }}
        className="absolute bottom-10 right-4 w-8 h-8 border-r-2 border-b-2 border-purple-500/50 rounded-br-lg" 
      />
      
      {/* 3. CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center pt-12 pb-8" style={{ transform: "translateZ(30px)" }}>
        
        {/* Name & Title */}
        <div className="text-center mb-8 space-y-2">
          <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-lg">
            {name}
          </h3>
          <p className="text-sm font-semibold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            {title}
          </p>
        </div>

        {/* Visual / Avatar */}
        <div className="relative mt-auto">
          {/* Glowing Aura behind head */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-pink-600 to-purple-600 blur-[50px] rounded-full transition-opacity duration-500 ${hover ? 'opacity-80' : 'opacity-40'}`} />
          
          {/* Avatar Container */}
          <div className="relative w-32 h-32 rounded-full bg-zinc-900 border-2 border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
            <span className="text-6xl font-black text-white/90">
              {initial}
            </span>
            
            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_4px,3px_100%] pointer-events-none" />
          </div>
        </div>

      </div>

      {/* 4. Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent z-0" />
    </div>
  );
};

export default ProfileCard;