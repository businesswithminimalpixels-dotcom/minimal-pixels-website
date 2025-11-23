import React from 'react';
import { WHATSAPP_LINK, INSTAGRAM_LINK } from '../constants';
import Logo from './icons/Logo';
import WhatsAppIcon from './icons/WhatsAppIcon';
import InstagramIcon from './icons/InstagramIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <div className="flex items-center space-x-6">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">WhatsApp</span>
                <WhatsAppIcon className="h-6 w-6" />
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:order-1 flex items-center justify-center space-x-4">
            <Logo className="h-8 w-auto"/>
            <p className="text-center text-base text-slate-400">
              &copy; {new Date().getFullYear()} Minimal Pixels. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;