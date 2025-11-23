import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Icons ---

const PenToolIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

const CameraIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const LayersIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

const ImageIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

// --- Background Components ---

const FloatingShape = ({ 
  delay, 
  duration, 
  x = [0, 5, 0], 
  y = [0, -10, 0], 
  rotate = [0, 2, 0],
  children,
  className = "absolute inset-0 pointer-events-none"
}: { 
  delay: number, 
  duration: number, 
  x?: number[], 
  y?: number[], 
  rotate?: number[],
  children?: React.ReactNode,
  className?: string
}) => (
  <motion.div
    animate={{ x, y, rotate }}
    transition={{ 
      duration, 
      repeat: Infinity, 
      repeatType: "reverse", 
      ease: "easeInOut", 
      delay 
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const DesignCardStack = ({ className }: { className?: string }) => (
  <div className={`relative w-32 h-40 opacity-20 pointer-events-none ${className}`}>
    <motion.div 
      animate={{ rotate: [6, 10, 6] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 bg-slate-700 border border-slate-600 rounded-lg shadow-xl"
    />
    <motion.div 
      animate={{ rotate: [-6, -10, -6], y: [0, -5, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 bg-slate-800 border border-slate-600 rounded-lg shadow-xl"
      style={{ zIndex: 2 }}
    >
      <div className="h-2/3 bg-slate-700/50 m-2 rounded" />
      <div className="h-2 w-16 bg-slate-600 m-2 rounded" />
    </motion.div>
  </div>
);

// --- Professional "Editing in Progress" Animation ---
const ProfessionalVideoAnimation = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="relative w-full h-56 md:h-64 bg-slate-900 rounded-xl border border-slate-700/80 overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.15)] group"
    >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50 pointer-events-none z-10" />
        
        {/* Soft Neon Underglow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-1000" />

        {/* Top Bar: Rec Indicator & Time */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-4 z-20">
            <div className="flex items-center gap-3">
                <motion.div 
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                />
                <span className="text-xs font-bold text-red-500 tracking-wider">REC</span>
            </div>
            <div className="text-xs font-mono text-slate-400">00:12:43:08</div>
        </div>

        {/* Timeline Tracks */}
        <div className="absolute top-12 left-0 right-0 bottom-12 flex flex-col gap-2 p-3 z-0">
            {/* Track 1: Video */}
            <div className="relative h-12 w-full bg-slate-800/80 rounded-md overflow-hidden flex items-center border border-slate-700/50">
                 <motion.div 
                    className="h-full bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-blue-600/30 w-[200%]"
                    animate={{ x: ["0%", "-30%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 />
                 <div className="absolute inset-0 flex divide-x divide-slate-700/30">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="flex-1 opacity-20 bg-slate-600/10"></div>
                    ))}
                 </div>
            </div>

             {/* Track 2: Audio/Overlay */}
             <div className="relative h-12 w-full bg-slate-800/80 rounded-md overflow-hidden flex items-center border border-slate-700/50">
                 <div className="absolute top-3 left-0 w-full h-px bg-slate-700/50" />
                 <div className="absolute bottom-3 left-0 w-full h-px bg-slate-700/50" />
                <motion.div 
                    className="absolute top-2 left-10 h-8 bg-emerald-500/20 rounded-md w-32 border border-emerald-500/30 backdrop-blur-sm"
                    animate={{ width: ["20%", "35%", "20%"], x: [0, 20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                 <motion.div 
                    className="absolute top-2 right-1/4 h-8 bg-orange-500/20 rounded-md w-20 border border-orange-500/30 backdrop-blur-sm"
                    animate={{ x: [0, -40, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
            
            {/* Track 3: Layers */}
            <div className="relative h-8 w-full bg-slate-800/60 rounded-md overflow-hidden border border-slate-700/30 mt-1">
                 <motion.div 
                    className="absolute top-1 left-1/3 h-6 bg-pink-500/20 rounded w-16"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                 />
            </div>
        </div>

        {/* Bottom: Audio Waveform */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-slate-800/90 border-t border-slate-700 flex items-end justify-center gap-[3px] pb-2 px-2 overflow-hidden z-20">
            {[...Array(50)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-1.5 bg-sky-500/50 rounded-t-sm"
                    animate={{ height: ["20%", "60%", "30%", "50%", "20%"] }}
                    transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        repeatType: "mirror",
                        delay: i * 0.08,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>

        {/* Playhead */}
        <motion.div 
            className="absolute top-8 bottom-0 w-[2px] bg-red-500 z-30 shadow-[0_0_15px_rgba(239,68,68,0.6)]"
            initial={{ left: "10%" }}
            animate={{ left: "90%" }}
            transition={{ duration: 12, ease: "linear", repeat: Infinity }}
        >
            <div className="absolute top-0 -left-[6px] w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[9px] border-t-red-500 drop-shadow-md" />
        </motion.div>
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 100]);
  const yParallaxFast = useTransform(scrollY, [0, 500], [0, 150]);

  const handleScrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center bg-slate-900 overflow-hidden pt-20 pb-20">
      
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* --- Background Parallax Grid --- */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
      >
        <div className="absolute inset-0 bg-grid-slate-800/[0.2] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)]" />
      </motion.div>

      {/* --- Floating Background Elements (Visual Anchors) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none max-w-[1920px] mx-auto">
        
        {/* Abstract Shapes */}
        <FloatingShape delay={0} duration={12} x={[0, 4, 0]} y={[0, -6, 0]} rotate={[0, 3, 0]}>
           <div className="absolute top-32 left-[10%] text-slate-700/20 text-6xl font-bold opacity-10">+</div>
        </FloatingShape>
        
        <FloatingShape delay={2} duration={15} x={[0, -5, 0]} y={[0, 8, 0]} rotate={[0, -3, 0]}>
           <div className="absolute bottom-40 right-[15%] w-24 h-24 border-2 border-slate-700/10 rounded-full" />
        </FloatingShape>
        
        {/* Card Stack Anchor (Left) */}
        <motion.div 
            style={{ y: yParallaxFast }}
            className="absolute top-1/3 left-5 lg:left-20 hidden lg:block opacity-30"
        >
             <FloatingShape 
                className="relative" 
                delay={1} duration={10} x={[0, 3, 0]} y={[0, -6, 0]} rotate={[0, 2, 0]}
             >
                <DesignCardStack />
            </FloatingShape>
        </motion.div>

         {/* Icons */}
        <FloatingShape delay={0.5} duration={10} x={[0, 6, 0]} y={[0, -8, 0]} rotate={[0, -2, 0]}>
            <PenToolIcon className="absolute top-24 left-[20%] w-16 h-16 text-slate-700/10" />
        </FloatingShape>
        
        <FloatingShape delay={1.5} duration={14} x={[0, -5, 0]} y={[0, 10, 0]} rotate={[0, 3, 0]}>
            <CameraIcon className="absolute bottom-32 right-[20%] w-20 h-20 text-slate-700/10" />
        </FloatingShape>

        <FloatingShape delay={3} duration={11} x={[0, 4, 0]} y={[0, 6, 0]} rotate={[0, -2, 0]}>
            <LayersIcon className="absolute top-40 right-[10%] w-12 h-12 text-slate-700/10" />
        </FloatingShape>

        <FloatingShape delay={2} duration={13} x={[0, -4, 0]} y={[0, -12, 0]} rotate={[0, 2, 0]}>
            <PlayIcon className="absolute bottom-20 left-[15%] w-24 h-24 text-slate-700/5" />
        </FloatingShape>

        <FloatingShape delay={4} duration={16} x={[0, 5, 0]} y={[0, 8, 0]} rotate={[0, -4, 0]}>
            <ImageIcon className="absolute top-1/4 right-[25%] w-14 h-14 text-slate-700/5" />
        </FloatingShape>

      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div>
          {/* Main Headline Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Subtle glow behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-blue-500/20 blur-3xl rounded-full -z-10" />
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text animated-gradient-text pb-2 relative z-10 drop-shadow-sm">
              Designs That Get Clicks
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed"
          >
            We craft stunning, high-performance thumbnails and graphics that captivate your audience and supercharge your content's success.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-5"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(14, 165, 233, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold py-3.5 px-8 rounded-lg text-lg btn-animated-gradient-sky shadow-lg shadow-sky-900/20"
            >
              Get a Free Quote
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio"
              onClick={handleScrollToPortfolio}
              className="bg-slate-800/80 backdrop-blur-sm text-slate-100 font-bold py-3.5 px-8 rounded-lg text-lg transition-all duration-200 btn-animated-border border border-slate-700 hover:border-sky-500 cursor-pointer hover:bg-slate-800"
            >
              View Our Work
            </motion.a>
          </motion.div>

          {/* Professional Editing Animation */}
          <div className="mt-16 max-w-3xl mx-auto hidden sm:block">
             <ProfessionalVideoAnimation />
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex justify-center items-center gap-2 mt-4"
             >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-xs text-slate-500 font-mono tracking-widest uppercase">
                    System Active • Rendering 4K
                </p>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;