import React, { useState, useEffect, useRef } from 'react';
import { CLIENTS } from '../constants';

const Clients: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="clients" 
      ref={sectionRef}
      className={`py-20 bg-slate-900 animate-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Trusted by Creators and Brands
          </h2>
          <p className="mt-2 text-lg text-slate-400">
            We're proud to have worked with some amazing talent.
          </p>
        </div>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <div className="flex w-max animate-[scroll-left_40s_linear_infinite] hover:[animation-play-state:paused]">
            {[...CLIENTS, ...CLIENTS].map((client, index) => (
              <div key={`${client.alt}-${index}`} className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center h-20">
                <img
                  src={client.src}
                  alt={client.alt}
                  className="max-h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;