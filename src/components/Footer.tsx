import React from 'react';
import { useLanguage } from '../App';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#010d2c] border-t border-white/10">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>© {currentYear} Stefano Schifano. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;