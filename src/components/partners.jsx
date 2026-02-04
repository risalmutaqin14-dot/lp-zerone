import React, { useEffect, useRef } from 'react';
import { partnerLogos } from '../data';

export default function LogoCarousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.3; // Kecepatan scroll (pixel per frame)

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset posisi ketika mencapai setengah konten (karena kita duplicate)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    // Pause saat hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className=" bg-gradient-to-b  from-white to-gray-50 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div 
            ref={scrollRef}
            className="overflow-hidden whitespace-nowrap"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="inline-flex gap-4 py-8">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="inline-flex items-center justify-center w-48 h-32 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex-shrink-0"
                >
                  <img 
                    src={logo.image} 
                    alt={logo.name}
                    className="max-h-16 max-w-[180px] object-contain filter transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        [data-scrollable]::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export { LogoCarousel as Partner };