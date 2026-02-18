import React from 'react';

export const NeuroOrb: React.FC = () => {
  return (
    <div className="relative w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] flex items-center justify-center opacity-60">
      <style>{`
        @keyframes deep-breathe {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        @keyframes drift {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        @keyframes synapse-flash {
            0%, 100% { opacity: 0; }
            50% { opacity: 0.3; }
        }
      `}</style>
      
      {/* Core Nucleus */}
      <div 
        className="absolute w-[40%] h-[40%] rounded-full blur-[80px]"
        style={{
            background: 'radial-gradient(circle, rgba(0,212,255,0.4) 0%, rgba(2,6,9,0) 70%)',
            animation: 'deep-breathe 8s ease-in-out infinite'
        }}
      />

      {/* Outer Glow Layer 1 */}
      <div 
        className="absolute w-[70%] h-[70%] rounded-full blur-[100px] mix-blend-screen"
        style={{
            background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, rgba(2,6,9,0) 70%)',
            animation: 'deep-breathe 12s ease-in-out infinite reverse'
        }}
      />

       {/* Outer Glow Layer 2 (Warmth) */}
       <div 
        className="absolute w-[60%] h-[60%] rounded-full blur-[90px] mix-blend-screen"
        style={{
            background: 'radial-gradient(circle, rgba(200,176,133,0.1) 0%, rgba(2,6,9,0) 80%)',
            animation: 'drift 20s linear infinite'
        }}
      />

      {/* Synaptic Threads (Simulated with rotating gradients) */}
      <div 
        className="absolute w-full h-full opacity-30"
        style={{
            background: 'conic-gradient(from 0deg, transparent 0deg, rgba(0,212,255,0.1) 20deg, transparent 40deg)',
            filter: 'blur(60px)',
            animation: 'spin-slow 60s linear infinite'
        }}
      />
    </div>
  );
};