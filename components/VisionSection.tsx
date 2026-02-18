import React, { useEffect, useState, useRef } from 'react';
import { FadeIn } from './FadeIn';

export const VisionSection: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const totalHeight = rect.height;
        // Calculate progress based on how much of the section has been scrolled past the middle of viewport
        const progress = Math.min(Math.max((windowHeight / 2 - rect.top) / (totalHeight / 2), 0), 1);
        setScrollProgress(progress * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-40 px-6 flex flex-col items-center justify-center min-h-[80vh]">
      <div className="container mx-auto max-w-4xl text-center">
        
        {/* Progress Line */}
        <div className="w-full h-[2px] bg-white/10 mb-16 relative overflow-hidden rounded-full">
            <div 
                className="absolute top-0 left-0 h-full bg-cyan shadow-[0_0_15px_rgba(0,212,255,0.8)] transition-all duration-100 ease-linear"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>

        <FadeIn>
          <h2 className="font-serif text-5xl md:text-6xl text-bone mb-4">
            The Neuro-Somatic Reset Protocol
          </h2>
          <p className="font-sans text-xl md:text-2xl text-gold mb-12">
            A 12-week precision program. Launching Q3 2026.
          </p>
        </FadeIn>

        <FadeIn delay={200} className="w-full max-w-md mx-auto">
          <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-white/5 border border-white/10 rounded-full px-6 py-4 text-bone placeholder-muted focus:outline-none focus:border-cyan/50 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-bone text-void font-sans font-bold uppercase tracking-wide text-sm rounded-full hover:bg-cyan hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300"
            >
              Get Early Access
            </button>
          </form>
          <p className="mt-4 text-xs text-muted font-sans">
            Limited cohort size. Join the waitlist to secure priority.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};