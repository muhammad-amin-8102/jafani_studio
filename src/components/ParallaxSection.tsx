import React, { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  backgroundImage?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  className = '', 
  speed = 0.5,
  backgroundImage 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!backgroundImage) return;

    const rafId = { id: 0 } as { id: number };
    let running = true;

    // lightweight rAF loop + passive scroll listener
    const onScroll = () => {
      // nothing here — just wake the rAF loop which reads DOM once
    };

    const tick = () => {
      if (!running || !sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      // rect.top moves as the page scrolls. We use translate3d for GPU acceleration.
      const translate = Math.round(rect.top * -speed * 0.5);

      sectionRef.current.style.willChange = 'transform';
      sectionRef.current.style.transform = `translate3d(0, ${translate}px, 0)`;

      rafId.id = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    rafId.id = requestAnimationFrame(tick);

    return () => {
      running = false;
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId.id);
    };
  }, [speed, backgroundImage]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <div
          ref={sectionRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;