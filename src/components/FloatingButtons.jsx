import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Scroll To Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center focus:outline-none"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923162664019"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#128C7E] p-3 md:p-4 rounded-full shadow-lg transition-transform duration-200 hover:scale-110 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="w-7 h-7 md:w-8 md:h-8 object-contain" />
      </a>
    </div>
  );
};

export default FloatingButtons;
