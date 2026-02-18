import React from 'react';
import { Navigation } from './components/Navigation';
import { NeuroOrb } from './components/NeuroOrb';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { PhilosophySection } from './components/PhilosophySection';
import { VisionSection } from './components/VisionSection';
import { PractitionersSection } from './components/PractitionersSection';
import { Footer } from './components/Footer';
import { NoiseOverlay } from './components/NoiseOverlay';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-void selection:bg-cyan selection:text-void overflow-hidden">
      {/* Texture & Background Effects */}
      <NoiseOverlay />
      
      <div className="relative z-10 flex flex-col w-full">
        <Navigation />
        
        <main className="flex-grow flex flex-col w-full">
          <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
             {/* The Neuro Orb lives in the background of the Hero */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
              <NeuroOrb />
            </div>
            <Hero />
          </section>

          <ProblemSection />
          <PhilosophySection />
          <VisionSection />
          <PractitionersSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;