import React from 'react';
import { SERVICES } from '../constants';
import YoutubeIcon from './icons/YoutubeIcon';
import SeoIcon from './icons/SeoIcon';
import InstagramIcon from './icons/InstagramIcon';
import PosterIcon from './icons/PosterIcon';
import SocialIcon from './icons/SocialIcon';
import VideoEditIcon from './icons/VideoEditIcon';
import DesignIcon from './icons/DesignIcon';
import { motion } from 'framer-motion';

const iconMap: { [key: string]: React.FC<{className: string}> } = {
  youtube: YoutubeIcon,
  seo: SeoIcon,
  instagram: InstagramIcon,
  social: SocialIcon,
  poster: PosterIcon,
  video: VideoEditIcon,
  design: DesignIcon,
};

const Services: React.FC = () => {
  return (
    <section 
      id="services" 
      className="py-20 bg-slate-900 scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our Services</h2>
          <p className="mt-2 text-lg text-slate-400">Comprehensive design & video solutions for creators.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || DesignIcon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }} // Staggered delay
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(14, 165, 233, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                }}
                className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-sky-500 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.div 
                  className="mb-4 inline-block p-3 bg-slate-700 rounded-lg relative z-10"
                  whileHover={{ rotate: 10, backgroundColor: "rgba(56, 189, 248, 0.2)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconComponent className="h-8 w-8 text-sky-400 group-hover:text-sky-300" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{service.title}</h3>
                <p className="text-slate-400 relative z-10">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;