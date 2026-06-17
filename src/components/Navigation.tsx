import { useState } from 'react';
import { Sparkles, Menu, X, Shield, ShoppingBag, Wind } from 'lucide-react';

export const JpoLogo = ({ className = "w-10 h-10 sm:w-12 sm:h-12 shrink-0 select-none animate-fade-in" }: { className?: string }) => (
  <svg 
    viewBox="0 0 200 200" 
    className={className}
    id="svg-jpo-logo"
  >
    <defs>
      <linearGradient id="gold-metallic" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5E4B2" />
        <stop offset="30%" stopColor="#D4AF37" />
        <stop offset="50%" stopColor="#AA7C11" />
        <stop offset="70%" stopColor="#F5E4B2" />
        <stop offset="85%" stopColor="#8A640F" />
        <stop offset="100%" stopColor="#D4AF37" />
      </linearGradient>
    </defs>

    {/* The Heart */}
    <path 
      d="M100,38 C100,38 95,30 89,30 C82,30 77,35 77,42 C77,49 87,57 100,66 C113,57 123,49 123,42 C123,35 118,30 111,30 C105,30 100,38 100,38 Z"
      fill="none"
      stroke="url(#gold-metallic)"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Elegant Horizontal Crown Stand Bars */}
    <line 
      x1="93" y1="52" x2="107" y2="52" 
      stroke="url(#gold-metallic)" 
      strokeWidth="3" 
      strokeLinecap="round" 
    />
    <line 
      x1="90" y1="57" x2="110" y2="57" 
      stroke="url(#gold-metallic)" 
      strokeWidth="3.5" 
      strokeLinecap="round" 
    />

    {/* Cursive JP Monogram Calligraphy Paths */}
    <path 
      d="M84,103 C70,95 55,90 50,105 C44,123 71,133 82,109"
      fill="none"
      stroke="url(#gold-metallic)"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    <path 
      d="M83,110 L108,162 C113,172 118,185 106,185 C92,185 86,168 97,145 L129,90 M113,124 C132,108 168,103 168,118 C168,133 133,137 125,134"
      fill="none"
      stroke="url(#gold-metallic)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface NavigationProps {
  onStartQuiz: () => void;
  onOpenCatalog: () => void;
  cartItemCount?: number;
  onOpenCart?: () => void;
}

export default function Navigation({ onStartQuiz, onOpenCatalog, cartItemCount = 0, onOpenCart }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian-light/80 backdrop-blur-md border-b border-gold/10">
      <div className="w-full px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo / Neoclassical Serif Typography */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-2 sm:space-x-4 text-left cursor-pointer focus:outline-none shrink-0"
          id="nav-logo"
        >
          <JpoLogo />
          <div className="text-gold text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0.15em] sm:tracking-[0.3em] font-light font-serif uppercase whitespace-nowrap">
            JPO's Choice
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs tracking-widest uppercase font-serif">
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsOpen(false);
            }} 
            className="text-cream-muted hover:text-gold transition-colors duration-300 py-3 px-1 cursor-pointer focus:outline-none whitespace-nowrap"
            id="nav-btn-home"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('philosophy')} 
            className="text-cream-muted hover:text-gold transition-colors duration-300 py-3 px-1 cursor-pointer focus:outline-none whitespace-nowrap"
            id="nav-btn-philosophy"
          >
            Philosophy
          </button>
          <button 
            onClick={() => scrollToSection('catalog')} 
            className="text-cream-muted hover:text-gold transition-colors duration-300 py-3 px-1 cursor-pointer focus:outline-none whitespace-nowrap"
            id="nav-btn-catalog"
          >
            Catalog
          </button>
          <button 
            onClick={() => scrollToSection('layering-artistry')} 
            className="text-cream-muted hover:text-gold transition-colors duration-300 py-3 px-1 cursor-pointer focus:outline-none whitespace-nowrap"
            id="nav-btn-tips"
          >
            Layering
          </button>
          
          <button
            onClick={onStartQuiz}
            className="border border-gold text-gold text-[10px] tracking-widest uppercase font-bold py-2.5 px-5 hover:bg-gold hover:text-black transition-colors rounded-none cursor-pointer whitespace-nowrap"
            id="nav-cta-quiz"
          >
            Scent Quiz
          </button>

          {/* Elegant Desktop Shopping Bag */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 text-gold hover:text-[#FFF] border border-transparent hover:border-gold/10 transition-all flex items-center justify-center cursor-pointer"
            aria-label="View Shopping Cart"
            id="nav-btn-cart"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold text-obsidian text-[9px] font-bold flex items-center justify-center font-mono animate-pulse">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Control Row with Cart Toggle & Hamburger */}
        <div className="flex lg:hidden items-center space-x-2">
          {/* Mobile Shopping Bag */}
          <button
            onClick={onOpenCart}
            className="relative w-11 h-11 border border-gold/10 flex items-center justify-center text-gold cursor-pointer"
            aria-label="View Shopping Cart"
            id="nav-mobile-btn-cart"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {cartItemCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-gold text-obsidian text-[8px] font-bold flex items-center justify-center font-mono animate-pulse">
                {cartItemCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gold focus:outline-none w-11 h-11 flex items-center justify-center border border-gold/10"
            aria-label="Toggle Menu"
            id="nav-mobile-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-obsidian border-b border-gold/20 flex flex-col items-center py-6 space-y-4 text-xs uppercase tracking-widest font-serif shadow-2xl animate-fade-in">
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsOpen(false);
            }} 
            className="text-cream-muted hover:text-gold w-full text-center min-h-[44px] flex items-center justify-center cursor-pointer"
            id="mobile-nav-val-home"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('philosophy')} 
            className="text-cream-muted hover:text-gold w-full text-center min-h-[44px] flex items-center justify-center cursor-pointer"
            id="mobile-nav-val-philosophy"
          >
            Philosophy
          </button>
          <button 
            onClick={() => scrollToSection('catalog')} 
            className="text-cream-muted hover:text-gold w-full text-center min-h-[44px] flex items-center justify-center cursor-pointer"
            id="mobile-nav-val-catalog"
          >
            Catalog
          </button>
          <button 
            onClick={() => scrollToSection('layering-artistry')} 
            className="text-cream-muted hover:text-gold w-full text-center min-h-[44px] flex items-center justify-center cursor-pointer"
            id="mobile-nav-val-tips"
          >
            Layering
          </button>
          
          <button
            onClick={() => {
              setIsOpen(false);
              onStartQuiz();
            }}
            className="border border-gold text-gold hover:bg-gold hover:text-black min-h-[44px] flex items-center justify-center rounded-none font-bold text-xs uppercase tracking-widest w-4/5 text-center mt-2 transition-colors cursor-pointer"
            id="mobile-nav-cta-quiz"
          >
            Scent Quiz
          </button>
        </div>
      )}
    </nav>
  );
}
