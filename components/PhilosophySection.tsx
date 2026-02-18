import React from 'react';
import { FadeIn } from './FadeIn';

interface BentoCardProps {
  number: string;
  title: string;
  text: string;
  className?: string;
  delay?: number;
}

const BentoCard: React.FC<BentoCardProps> = ({ number, title, text, className = "", delay = 0 }) => (
  <FadeIn delay={delay} className={`h-full ${className}`}>
    <div className="group relative h-full min-h-[300px] p-8 md:p-12 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] hover:border-cyan/50 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(0,212,255,0.05)] transition-all duration-700 overflow-hidden flex flex-col justify-end">
      
      {/* Big Background Number */}
      <span className="absolute -top-10 -right-6 font-serif text-[8rem] md:text-[12rem] text-white/[0.03] group-hover:text-cyan/[0.08] transition-colors duration-700 leading-none select-none pointer-events-none z-0">
        {number}
      </span>

      {/* Content */}
      <div className="relative z-10">
          <h3 className="font-serif text-3xl md:text-4xl text-bone mb-6 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="font-sans text-muted text-lg md:text-xl leading-relaxed font-light border-l-2 border-white/10 pl-6 group-hover:border-cyan/50 transition-colors duration-500">
            {text}
          </p>
      </div>
    </div>
  </FadeIn>
);

export const PhilosophySection: React.FC = () => {
  return (
    <section className="relative py-32 md:py-48 px-6 bg-surface/30 border-t border-white/5">
        {/* Background Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-b from-void via-surface/50 to-void pointer-events-none" />

      <div className="relative z-10 container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <FadeIn className="mb-24 md:mb-32 max-w-3xl">
          <span className="font-mono text-cyan text-xs tracking-[0.3em] uppercase block mb-6 pl-1">
            Core Philosophy
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-bone mb-8 leading-[1.1]">
            The Neuro-Somatic <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-bone to-muted opacity-80">Manifesto</span>
          </h2>
          <p className="font-sans text-xl text-muted/80 max-w-xl leading-relaxed">
            We don't believe in "coping." We believe in recalibration. Here is the 5-point architecture of our approach.
          </p>
        </FadeIn>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-fr">
          
          {/* Row 1 */}
          {/* Card 01 - Span 7 cols */}
          <BentoCard 
            className="lg:col-span-7"
            number="01"
            title="The Software Problem" 
            text="Your brain's noise-canceling filter is stuck. It's a feedback loop error, not permanent damage. We teach it to turn back on." 
            delay={0}
          />

          {/* Card 02 - Span 5 cols */}
          <BentoCard 
            className="lg:col-span-5"
            number="02"
            title="Somatic Modulation" 
            text="Jaw clenching and neck strain send signals directly into your auditory center. We release the triggers." 
            delay={100}
          />

          {/* Row 2 */}
          {/* Card 03 - Span 5 cols */}
          <BentoCard 
            className="lg:col-span-5"
            number="03"
            title="The Threat Label" 
            text="As long as the sound is labeled 'dangerous,' the filter stays off. We remove the label." 
            delay={200}
          />

           {/* Card 04 - Span 7 cols */}
           <BentoCard 
            className="lg:col-span-7"
            number="04"
            title="The Stress Amplifier" 
            text="Fight-or-flight mode makes neurons fire faster. We activate your body's natural calm switch." 
            delay={300}
          />

          {/* Row 3 */}
          {/* Card 05 - Full Width (12 cols) */}
          <BentoCard 
            className="lg:col-span-12"
            number="05"
            title="Precision Medicine" 
            text="One Size Fits All Doesn't Work. Somatic tinnitus ≠ Stress-induced tinnitus. We customize the protocol to your subtype." 
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};