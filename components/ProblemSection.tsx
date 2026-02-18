import React from 'react';
import { FadeIn } from './FadeIn';

// --- Icons ---

const EarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted group-hover:text-bone transition-colors duration-300">
    <path d="M7 21C7 21 4 18 4 12C4 6 9 2 14 2C19 2 21 6 21 9C21 11.5 19 13 19 13" />
    <path d="M16 16C16 16 15 18 13 18C11 18 10 16 10 12" />
  </svg>
);

const WaveIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted group-hover:text-bone transition-colors duration-300">
    <path d="M2 12H5L8 5L12 19L15 12H22" />
  </svg>
);

const FlagIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted group-hover:text-bone transition-colors duration-300">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

const ErrorBadge = () => (
    <div className="absolute -top-1 -right-4 bg-red-500/10 border border-red-500/40 text-red-400 text-[9px] font-mono px-1.5 py-0.5 rounded shadow-[0_0_8px_rgba(239,68,68,0.3)] backdrop-blur-sm transform rotate-3 opacity-80">
        ERR_FAIL
    </div>
);

// --- Components ---

const ProblemCard = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
    <div className="relative group h-full p-8 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-start hover:bg-white/[0.03] transition-colors duration-500 overflow-hidden">
        <div className="relative mb-6">
            <div className="p-3 rounded-lg bg-white/5 border border-white/5 group-hover:border-white/10 transition-all">
                {icon}
            </div>
            <ErrorBadge />
        </div>
        <h3 className="font-serif text-xl text-bone mb-3 opacity-90">{title}</h3>
        <p className="font-sans text-muted text-sm leading-relaxed opacity-60 font-light">{text}</p>
    </div>
);

export const ProblemSection: React.FC = () => {
  return (
    <section className="relative py-40 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <FadeIn className="text-center mb-24">
            <div className="inline-block px-3 py-1 mb-6 border border-white/10 rounded-full">
                <span className="font-mono text-[10px] text-muted tracking-widest uppercase">Analysis Phase</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-bone mb-6">Why Most Treatments Fail</h2>
        </FadeIn>

        {/* The Failures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-40">
          <FadeIn delay={0} className="h-full">
            <ProblemCard 
              icon={<EarIcon />}
              title="Targeting Hardware"
              text="Doctors treat the ears. But tinnitus isn't an ear problem. The hardware is often fine; the software is looping."
            />
          </FadeIn>
          <FadeIn delay={150} className="h-full">
            <ProblemCard 
              icon={<WaveIcon />}
              title="Masking Symptoms"
              text="Apps mask the sound. But masking prevents healing. It teaches the brain the sound is still something to hide from."
            />
          </FadeIn>
          <FadeIn delay={300} className="h-full">
            <ProblemCard 
              icon={<FlagIcon />}
              title="Forced Surrender"
              text="'Learn to live with it.' That's not a solution. It's a surrender to a malfunction that can be fixed."
            />
          </FadeIn>
        </div>

        {/* The Truth Container - "Active System Diagnostic" */}
        <FadeIn delay={500} className="relative max-w-5xl mx-auto">
            {/* Glowing Top Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent shadow-[0_0_25px_rgba(0,212,255,0.8)] opacity-80"></div>
            
            <div className="bg-gradient-to-b from-[#0c141d] to-void border-x border-b border-white/5 p-12 md:p-16 rounded-b-2xl relative overflow-hidden">
                
                {/* Background Grid Texture */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                     style={{ 
                         backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', 
                         backgroundSize: '40px 40px',
                         maskImage: 'linear-gradient(to bottom, black, transparent)'
                     }}>
                </div>
                
                <div className="relative z-10 flex flex-col items-center">
                    <span className="font-mono text-cyan text-xs tracking-[0.3em] uppercase mb-10 animate-pulse flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_5px_cyan]"></span>
                        System Diagnostic: Active
                    </span>
                    
                    <h3 className="font-serif text-3xl md:text-5xl text-bone mb-16 text-center leading-tight">
                        The Truth: Tinnitus is a <span className="text-cyan drop-shadow-[0_0_15px_rgba(0,212,255,0.3)]">Brain Problem</span>.
                    </h3>

                    {/* The 3 Systems Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 md:gap-0">
                         {/* System 1 */}
                         <div className="group flex flex-col items-center text-center px-4 md:border-r border-white/5 transition-opacity duration-700">
                            <div className="w-3 h-3 rounded-full bg-red-500 mb-6 shadow-[0_0_15px_rgba(239,68,68,0.6)] group-hover:scale-125 transition-transform duration-300"></div>
                            <h4 className="font-sans font-medium text-lg text-bone mb-3">The Auditory System</h4>
                            <div className="px-3 py-1 bg-red-500/5 border border-red-500/20 rounded">
                                <p className="font-mono text-[10px] text-red-400 uppercase tracking-widest">[ Internal Volume Up ]</p>
                            </div>
                         </div>
                         
                         {/* System 2 */}
                         <div className="group flex flex-col items-center text-center px-4 md:border-r border-white/5 transition-opacity duration-700 delay-100">
                            <div className="w-3 h-3 rounded-full bg-red-500 mb-6 shadow-[0_0_15px_rgba(239,68,68,0.6)] group-hover:scale-125 transition-transform duration-300"></div>
                            <h4 className="font-sans font-medium text-lg text-bone mb-3">Somatosensory System</h4>
                            <div className="px-3 py-1 bg-red-500/5 border border-red-500/20 rounded">
                                <p className="font-mono text-[10px] text-red-400 uppercase tracking-widest">[ Physical Amplification ]</p>
                            </div>
                         </div>
                         
                         {/* System 3 */}
                         <div className="group flex flex-col items-center text-center px-4 transition-opacity duration-700 delay-200">
                            <div className="w-3 h-3 rounded-full bg-red-500 mb-6 shadow-[0_0_15px_rgba(239,68,68,0.6)] group-hover:scale-125 transition-transform duration-300"></div>
                            <h4 className="font-sans font-medium text-lg text-bone mb-3">The Limbic System</h4>
                            <div className="px-3 py-1 bg-red-500/5 border border-red-500/20 rounded">
                                <p className="font-mono text-[10px] text-red-400 uppercase tracking-widest">[ Threat Labeling ]</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </FadeIn>

      </div>
    </section>
  );
};