import React from 'react';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-void overflow-hidden hero-section">
      {/* CSS for "Neural Halo" and specific animations */}
      <style>{`
        @keyframes pulse-ring {
          0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.9; }
        }
        @keyframes breathe-core {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.3; }
          100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.7; }
        }
        /* The Neural Halo (Ring) */
        .hero-section::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 55vw;
          height: 55vw;
          max-width: 900px;
          max-height: 900px;
          border-radius: 50%;
          /* Create a glowing ring structure */
          background: radial-gradient(circle, transparent 55%, rgba(0, 212, 255, 0.1) 60%, rgba(0, 212, 255, 0.4) 63%, transparent 70%);
          box-shadow: 0 0 100px rgba(0, 212, 255, 0.15);
          z-index: 0;
          animation: pulse-ring 10s infinite alternate ease-in-out;
          pointer-events: none;
        }
        /* The Inner Core */
        .hero-section::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 30vw;
          height: 30vw;
          max-width: 500px;
          max-height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%);
          z-index: 0;
          animation: breathe-core 6s infinite alternate ease-in-out;
          pointer-events: none;
        }
      `}</style>

      {/* Content Grid */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
            
            {/* Left Column: Eyebrow + Huge Headline */}
            <FadeIn delay={200} className="text-left w-full">
                {/* Eyebrow Label */}
                <span className="font-sans text-cyan text-xs md:text-sm tracking-[0.25em] font-bold uppercase mb-6 block pl-1">
                    The Neuro-Somatic Tinnitus Solution
                </span>

                <h1 className="font-serif leading-[1.05] tracking-tight"
                    style={{ fontSize: 'clamp(3.5rem, 6vw, 7.5rem)' }}>
                    <span className="text-muted block mb-2">Silence Isn't Gone.</span>
                    <span className="text-muted">It's </span>
                    <span className="text-bone drop-shadow-[0_0_30px_rgba(224,228,232,0.3)] italic">Just Waiting</span>
                    <span className="text-muted"> to Be </span>
                    <span className="text-bone drop-shadow-[0_0_30px_rgba(224,228,232,0.3)] italic">Restored</span>.
                </h1>
            </FadeIn>

            {/* Right Column: Narrative + CTA */}
            <FadeIn delay={400} className="flex flex-col items-start space-y-10 lg:pt-20">
                 <p className="font-sans text-lg md:text-xl text-[#94A3B8] leading-relaxed font-light text-left">
                    For decades, millions have been told: <span className="text-bone">"There's no cure. You'll have to learn to live with it."</span>
                    <br/><br/>
                    But what if the <strong className="text-bone font-semibold">ringing</strong> isn't coming from broken ears? What if relief isn't about masking the sound... But <strong className="text-cyan font-semibold">rebooting</strong> the system that's generating it?
                    <br/><br/>
                    The Silence Institute is building the future of tinnitus relief.
                </p>

                <button className="group relative px-10 py-5 bg-transparent overflow-hidden rounded-full border border-white/20 hover:border-cyan/60 transition-all duration-500">
                  <div className="absolute inset-0 bg-cyan/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  <span className="relative z-10 font-sans tracking-[0.2em] uppercase text-sm font-semibold text-bone group-hover:text-cyan transition-colors">
                    Discover Our Approach ↓
                  </span>
                </button>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};