import React from 'react';
import { FadeIn } from './FadeIn';

export const VisionSection: React.FC = () => {
  return (
    <section className="relative py-40 md:py-52 px-6 flex flex-col items-center justify-center min-h-[90vh] overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-cyan/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        
        {/* Header */}
        <FadeIn>
          <span className="font-sans text-gold/80 text-sm tracking-[0.2em] uppercase mb-6 block">Future Pacing</span>
          <h2 className="font-serif text-5xl md:text-7xl text-bone mb-12 leading-[1.05]">
            The Neuro-Somatic<br/>Reset Protocol
          </h2>
        </FadeIn>

        {/* Progress System */}
        <FadeIn delay={200} className="w-full max-w-xl mx-auto mb-12">
            <div className="flex justify-between items-end mb-3">
                <span className="font-mono text-cyan text-xs tracking-widest uppercase">System Reboot Sequence</span>
                <span className="font-mono text-cyan text-xs">75%</span>
            </div>
            
            {/* Bar Track */}
            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden relative">
                {/* Bar Fill */}
                <div className="absolute inset-y-0 left-0 bg-cyan w-[75%] shadow-[0_0_15px_rgba(0,212,255,0.5)]">
                    {/* Shimmer Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
                </div>
            </div>
            <style>{`
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
            `}</style>

            <div className="flex justify-between items-start mt-3">
                <span className="font-mono text-muted text-[10px] uppercase">Loading Modules...</span>
                <span className="font-mono text-bone text-[10px] uppercase">Launch Window: Q2/Q3 2026</span>
            </div>
        </FadeIn>

        {/* Specialists (Tech Specs) */}
        <FadeIn delay={300}>
            <div className="flex flex-wrap justify-center gap-3 mb-20 opacity-90 max-w-2xl mx-auto">
                {['Functional Neurologists', 'Osteopaths', 'Somatic Therapists', 'ANS Experts'].map((tech) => (
                    <span key={tech} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-muted uppercase tracking-wider backdrop-blur-sm hover:border-cyan/30 transition-colors duration-300">
                        {tech}
                    </span>
                ))}
            </div>
        </FadeIn>

        {/* Waitlist Form */}
        <FadeIn delay={400} className="w-full max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
             <span className="font-sans text-[10px] tracking-widest uppercase text-green-400/90 font-medium">Early Access: OPEN</span>
          </div>

          <form className="group relative" onSubmit={(e) => e.preventDefault()}>
            <div className="flex p-1 bg-white/5 border border-white/10 rounded-full focus-within:border-cyan/50 focus-within:bg-white/10 transition-all duration-300 shadow-lg">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow bg-transparent border-none px-6 py-3 text-bone placeholder-muted/40 focus:outline-none focus:ring-0 text-sm font-sans"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-bone text-void font-sans font-bold uppercase tracking-widest text-xs rounded-full hover:bg-cyan hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all duration-300 whitespace-nowrap"
                >
                  Join Priority Waitlist
                </button>
            </div>
          </form>
          <p className="mt-4 text-xs text-muted/40 font-sans">
              Limited spots available for the beta cohort.
          </p>
        </FadeIn>

      </div>
    </section>
  );
};