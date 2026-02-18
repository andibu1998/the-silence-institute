import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-void">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif text-bone text-lg">
          The Silence Institute
        </div>
        <div className="font-sans text-muted text-sm">
          Restoring peace, one brain at a time.
        </div>
        <div className="flex gap-4">
             <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-4 h-4 bg-muted/50 rounded-sm"></div>
             </div>
             <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-4 h-4 bg-muted/50 rounded-sm"></div>
             </div>
        </div>
      </div>
    </footer>
  );
};