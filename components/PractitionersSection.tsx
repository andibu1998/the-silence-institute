import React from 'react';
import { FadeIn } from './FadeIn';

const GoldCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gold flex-shrink-0 mt-1">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PractitionersSection: React.FC = () => {
  return (
    <section id="practitioners" className="relative py-32 md:py-40 px-6 bg-[#040506] border-t border-white/5 overflow-hidden">
      {/* Atmospheric Gold Glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[50vw] h-[50vw] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[40vw] h-[40vw] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
            {/* Left Column: The Hook */}
            <FadeIn>
                <div className="inline-block px-3 py-1 mb-8 border border-gold/20 bg-gold/5 rounded-full">
                    <span className="font-sans text-gold text-[10px] tracking-[0.25em] uppercase font-bold">For World-Class Practitioners</span>
                </div>
                
                <h2 className="font-serif text-4xl md:text-6xl text-bone mb-8 leading-[1.1]">
                    Scale Your Impact. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#E8DCC0] to-gold opacity-90">Define the Future</span> of Tinnitus Treatment.
                </h2>
                
                <p className="font-sans text-lg text-muted/80 leading-relaxed mb-8 font-light">
                    You have the clinical results. We have the platform. 
                    <br/><br/>
                    We are assembling a <strong className="text-gold font-normal">Clinical Advisory Board</strong> of the world's leading Functional Neurologists, Osteopaths, and Somatic Therapists to build the first comprehensive neuro-somatic protocol.
                </p>

                <div className="flex flex-col gap-4">
                    <p className="font-serif italic text-gold/60 text-lg">"The standard of care is broken. Help us build the new one."</p>
                </div>
            </FadeIn>

            {/* Right Column: The Deal (The Box) */}
            <FadeIn delay={200} className="w-full">
                <div className="relative group rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-gold/20 p-8 md:p-10 hover:border-gold/40 transition-colors duration-500">
                    {/* Decorative Corner Accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-gold/40 rounded-tl-lg"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-gold/40 rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-gold/40 rounded-bl-lg"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-gold/40 rounded-br-lg"></div>

                    <h3 className="font-serif text-2xl text-gold mb-8 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-gold/50"></span>
                        The Partnership Model
                    </h3>

                    <ul className="space-y-6 mb-10">
                        {[
                            { title: "High-Leverage Impact", desc: "Treat thousands of patients, not just 1:1." },
                            { title: "Zero Overhead", desc: "We handle marketing, tech, and operations." },
                            { title: "Asset Creation", desc: "Build the core curriculum once, earn continuously." },
                            { title: "Legacy", desc: "Help shift the global standard of care." }
                        ].map((item, idx) => (
                            <li key={idx} className="flex gap-4 items-start group/item">
                                <GoldCheck />
                                <div>
                                    <h4 className="font-sans text-bone font-medium text-sm tracking-wide mb-1 group-hover/item:text-gold transition-colors">{item.title}</h4>
                                    <p className="font-sans text-muted text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <button className="w-full py-4 bg-gold hover:bg-[#D4C095] text-[#0C0E10] font-sans font-bold uppercase tracking-widest text-xs rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(200,176,133,0.2)] hover:shadow-[0_0_30px_rgba(200,176,133,0.4)] transform hover:-translate-y-1">
                        Apply for Clinical Board
                    </button>
                    <p className="text-center mt-4 text-[10px] text-muted uppercase tracking-widest">
                        Selection Process: Invitation Only
                    </p>
                </div>
            </FadeIn>
        </div>

        {/* Tag Cloud / Specialists */}
        <FadeIn delay={400} className="border-t border-white/5 pt-12">
            <p className="text-center font-mono text-gold/40 text-[10px] uppercase tracking-widest mb-6">Eligible Specialties</p>
            <div className="flex flex-wrap justify-center gap-4 opacity-80">
                {["Functional Neurologists", "TMJ Specialists", "Osteopaths", "ANS Experts", "Somatic Therapists"].map((role) => (
                    <span key={role} className="px-5 py-2 rounded-full border border-white/5 bg-white/[0.02] text-xs font-mono text-muted uppercase tracking-wider hover:border-gold/30 hover:text-gold transition-colors duration-300 cursor-default">
                        {role}
                    </span>
                ))}
            </div>
        </FadeIn>

      </div>
    </section>
  );
};