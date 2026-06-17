import { Sparkles, ArrowRight, Compass } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
  onBrowseCatalog: () => void;
}

export default function Hero({ onStartQuiz, onBrowseCatalog }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-24 overflow-hidden">
      {/* Soft background luxury amber glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      {/* Outer border container creating high-end editorial feel */}
      <div className="relative max-w-4xl w-full p-8 md:p-16 border border-gold/10 bg-obsidian-light/40 backdrop-blur-[2px] transition-all duration-500 hover:border-gold/20 flex flex-col items-center">
        {/* Intricate top accent corner lines */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/40" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/40" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/40" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/40" />

        {/* Brand Crest */}
        <div className="flex items-center space-x-1 mb-8 opacity-80 scale-110">
          <div className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
          <span className="font-serif tracking-[0.5em] text-[10px] uppercase text-gold">JPO's Premium Quality</span>
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        </div>

        {/* Title */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.2em] uppercase text-gold leading-tight mb-6">
          JPO'S CHOICE
        </h2>

        {/* Divide */}
        <div className="w-24 h-[1px] bg-gold/30 mb-8" />

        <p className="font-sans text-xs sm:text-sm text-cream-muted tracking-[0.2em] max-w-lg leading-relaxed mb-12 uppercase">
          Find your perfect matching perfume from our long-lasting oils and body mists.
        </p>

        {/* Custom Actions */}
        <div className="flex flex-col sm:flex-row gap-5 w-full max-w-md justify-center mt-2">
          <button
            onClick={onStartQuiz}
            className="flex items-center justify-center space-x-2 border border-gold text-gold hover:bg-gold hover:text-black py-4 px-8 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-none cursor-pointer hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] min-h-[44px]"
            id="hero-cta-quiz"
          >
            <span>Start Scent Quiz</span>
            <Sparkles className="w-4 h-4 ml-1 animate-pulse" />
          </button>

          <button
            onClick={onBrowseCatalog}
            className="flex items-center justify-center space-x-2 border border-gold/30 text-gold hover:border-gold hover:bg-gold/5 px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-none cursor-pointer min-h-[44px]"
            id="hero-cta-catalog"
          >
            <Compass className="w-4 h-4 mr-1 stroke-[1.5]" />
            <span>Browse Perfumes</span>
          </button>
        </div>
      </div>

      {/* Down arrow marker */}
      <div className="mt-12 animate-bounce flex flex-col items-center opacity-45 hover:opacity-100 transition-opacity">
        <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-serif mb-2">Explore</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
