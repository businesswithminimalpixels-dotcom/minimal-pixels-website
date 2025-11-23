import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { motion } from 'framer-motion';

const Cta: React.FC = () => {
  return (
    <section className="bg-slate-800">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"
      >
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Ready to Elevate Your Content?
        </h2>
        <p className="mt-4 text-lg leading-6 text-slate-300">
          Let's create something amazing together. Contact us now for a free consultation and quote.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block border border-transparent rounded-lg py-3 px-8 text-base font-medium text-white btn-animated-gradient-sky shadow-lg shadow-sky-500/20"
        >
          Chat on WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Cta;