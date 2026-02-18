import React from 'react';
import { FadeIn } from './FadeIn';

const EarIcon = () => (
  <svg className="w-12 h-12 text-muted group-hover:text-cyan transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M7 21C7 21 4 18 4 12C4 6 9 2 14 2C19 2 21 6 21 9C21 11.5 19 13 19 13" />
    <path d="M16 16C16 16 15 18 13 18C11 18 10 16 10 12" />
    <line x1="2" y1="22" x2="22" y2="2" strokeWidth="1.5" className="text-red-400/50" />
  </svg>
);

const WaveIcon = () => (
  <svg className="w-12 h-12 text-muted group-hover:text-cyan transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M2 12H4C4 12 5 7 7 7C9 7 10 12 10 12S11 17 13 17C15 17 16 12 16 12S17 4 19 4C21 4 22 12 22 12" className="opacity-30" />
    <path d="M2 12H6L8 9L10 12H22" strokeDasharray="4 4" />
  </svg>
);

const BrainIcon = () => (
  <svg className="w-12 h-12 text-muted group-hover:text-cyan transition-colors duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M9.5 20C9.5 20 4 19 3 13C2 7 9 3 12 3C15 3 22 7 21 13C20 19 14.5 20 14.5 20" />
    <path d="M12 3V21" strokeDasharray="2 2" />
    <path d="M8 8C8 8 7 11 8 14" />
    <path d="M16 8C16 8 17 11 16 14" />
    <circle cx="12" cy="12" r="2" className="fill-cyan/20 stroke-cyan" />
  </svg>
);

const Card = ({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) => (
  <div className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/5 hover:bg-white/10 hover:border-cyan/20 transition-all duration-700 h-full flex flex-col items-center text-center">
    <div className="mb-6 p-4 rounded-full bg-void/50 border border-white/5 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="font-serif text-xl text-bone mb-3">{title}</h3>
    <p className="font-sans text-muted text-sm leading-relaxed">{subtitle}</p>
  </div>
);

export const ProblemSection: React.FC = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <FadeIn className="text-center mb-24">
          <h2 className="font-serif text-4xl md:text-5xl text-bone mb-6">The Hardware vs. Software Shift</h2>
          <p className="font-sans text-muted max-w-xl mx-auto">
            Specifically, three malfunctioning systems: The Auditory System, The Somatosensory System, The Limbic System.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn delay={0} className="h-full">
            <Card 
              icon={<EarIcon />} 
              title="Doctors treat the ears" 
              subtitle="But tinnitus is a brain problem. The hardware is often fine; the software is looping."
            />
          </FadeIn>
          <FadeIn delay={200} className="h-full">
            <Card 
              icon={<WaveIcon />} 
              title="Apps mask the sound" 
              subtitle="But masking prevents healing. It teaches the brain the sound is still something to hide from."
            />
          </FadeIn>
          <FadeIn delay={400} className="h-full">
            <Card 
              icon={<BrainIcon />} 
              title="They say 'Live with it'" 
              subtitle="We say: Reset the signal. Rewire the neural pathways maintaining the noise."
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};