import React from 'react';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  return (
    <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
      <FadeIn delay={200}>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-bone leading-tight mb-8">
          Silence Isn't Gone.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan/80 to-bone/80">
            It's Just Waiting.
          </span>
        </h1>
      </FadeIn>

      <FadeIn delay={400} className="max-w-2xl mx-auto">
        <p className="font-sans text-lg md:text-xl text-muted leading-relaxed mb-12">
          For decades, millions have been told: "There's no cure." 
          But what if the ringing isn't coming from broken ears? 
          What if relief isn't about masking the sound... 
          But <span className="text-cyan">rebooting the system</span> that's generating it?
        </p>
      </FadeIn>

      <FadeIn delay={600}>
        <button className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-cyan/30 hover:border-cyan/60 transition-all duration-500">
          <div className="absolute inset-0 bg-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          <span className="relative z-10 font-sans tracking-widest uppercase text-sm font-semibold text-bone group-hover:text-cyan transition-colors">
            Discover The Approach
          </span>
          <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(0,212,255,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </button>
      </FadeIn>
    </div>
  );
};