import React from 'react';
import { FadeIn } from './FadeIn';

export const PractitionersSection: React.FC = () => {
  return (
    <section id="practitioners" className="relative py-32 px-6 bg-black border-t border-white/5">
      <div className="container mx-auto max-w-4xl text-center">
        <FadeIn>
            <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
            </div>
          <h2 className="font-serif text-3xl md:text-4xl text-bone mb-6">
            Are you a specialist?
          </h2>
          <p className="font-sans text-muted text-lg mb-12 max-w-2xl mx-auto">
            We are looking for Functional Neurologists and Osteopaths to scale their impact. 
            Join our network of certified reset practitioners.
          </p>
          <a href="#" className="inline-block relative group">
            <span className="font-sans text-gold text-sm uppercase tracking-widest pb-2 border-b border-gold/30 group-hover:border-gold transition-all duration-300">
                Apply for Partnership
            </span>
            <span className="absolute -right-6 top-0 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
};