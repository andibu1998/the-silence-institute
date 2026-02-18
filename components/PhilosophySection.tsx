import React from 'react';
import { FadeIn } from './FadeIn';

const TruthItem = ({ number, title, description, delay }: { number: string, title: string, description: string, delay: number }) => (
  <FadeIn delay={delay} className="flex flex-col md:flex-row gap-6 md:gap-12 border-t border-white/10 py-12 hover:bg-white/[0.02] transition-colors duration-500 group">
    <div className="font-sans text-gold/60 text-sm tracking-widest uppercase w-32 pt-2">Truth #{number}</div>
    <div className="flex-1">
      <h3 className="font-serif text-3xl md:text-4xl text-bone mb-4 group-hover:text-cyan transition-colors duration-500">
        {title}
      </h3>
      <p className="font-sans text-muted text-lg leading-relaxed max-w-2xl">
        {description}
      </p>
    </div>
  </FadeIn>
);

export const PhilosophySection: React.FC = () => {
  return (
    <section className="relative py-32 px-6 bg-surface/30">
      <div className="container mx-auto max-w-5xl">
        <FadeIn className="mb-20">
          <h2 className="font-sans text-cyan text-sm tracking-[0.2em] uppercase mb-4">The Philosophy</h2>
          <div className="h-px w-20 bg-cyan/50"></div>
        </FadeIn>

        <div className="flex flex-col">
          <TruthItem 
            number="1" 
            title="Tinnitus Is a Software Problem." 
            description="Your brain's noise-canceling filter is stuck. We teach it to turn back on." 
            delay={0}
          />
          <TruthItem 
            number="2" 
            title="Physical Tension Modulates Volume." 
            description="Jaw clenching sends signals directly to the auditory center. We release the triggers." 
            delay={100}
          />
          <TruthItem 
            number="3" 
            title="The Brain Can't Ignore a Threat." 
            description="As long as the sound is labeled 'danger,' the filter stays off. We remove the label." 
            delay={200}
          />
          <TruthItem 
            number="4" 
            title="Stress Amplifies the Signal." 
            description="Fight-or-flight makes neurons fire faster. We activate the calm switch." 
            delay={300}
          />
          <TruthItem 
            number="5" 
            title="Precision Medicine." 
            description="Somatic ≠ Stress-induced. We customize the protocol." 
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};