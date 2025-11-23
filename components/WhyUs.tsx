import React from 'react';
import { WHY_US_POINTS, ABOUT_US_IMAGE } from '../constants';
import LocationIcon from './icons/LocationIcon';
import CheckIcon from './icons/CheckIcon';
import { motion } from 'framer-motion';

const WhyUs: React.FC = () => {
  return (
    <section 
      id="about-us" 
      className="py-20 bg-slate-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12 lg:mb-0"
            >
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">About Minimal Pixels</h2>
                <p className="mt-4 text-lg text-slate-400">
                    We're more than just designers; we're your strategic partners in content creation. We blend creativity with analytics to ensure every design we produce contributes to your growth.
                </p>
                <div className="mt-6 flex items-center gap-3">
                    <LocationIcon className="h-6 w-6 text-slate-500 flex-shrink-0" />
                    <p className="text-lg text-slate-400">
                        Based in Hyderabad, India — serving clients globally.
                    </p>
                </div>
                <div className="mt-8 space-y-6">
                    {WHY_US_POINTS.map((point, index) => (
                        <motion.div 
                          key={point.title}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="flex items-start"
                        >
                            <div className="flex-shrink-0">
                                <CheckIcon className="h-6 w-6 text-sky-400" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg font-bold text-white">{point.title}</h4>
                                <p className="mt-1 text-slate-400">{point.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-xl shadow-2xl kenburns-container"
            >
                <img 
                    src={ABOUT_US_IMAGE.src} 
                    alt={ABOUT_US_IMAGE.alt} 
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;