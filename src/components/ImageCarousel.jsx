import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/carousal images/img-1.jpeg',
  '/carousal images/img-2.jpeg',
  '/carousal images/img-3.jpeg',
  '/carousal images/img-4.jpeg',
  '/carousal images/img-5.jpeg',
  '/carousal images/img-6.jpeg',
  '/carousal images/img-7.jpeg',
  '/carousal images/img-8.jpeg',
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="section bg-white pt-2 pb-10">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto relative group rounded-2xl overflow-hidden shadow-2xl">
          {/* Images */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[450px] w-full">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Subtle dark overlay for better contrast on arrows/dots */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 md:left-6 -translate-y-1/2 z-20 bg-white/40 hover:bg-white/90 text-gray-900 p-2 md:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 focus:outline-none focus:opacity-100 shadow-lg backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-4 md:right-6 -translate-y-1/2 z-20 bg-white/40 hover:bg-white/90 text-gray-900 p-2 md:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 focus:outline-none focus:opacity-100 shadow-lg backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Pagination Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full shadow-sm ${index === currentIndex
                  ? 'w-8 h-3 bg-primary'
                  : 'w-3 h-3 bg-white/70 hover:bg-white'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
