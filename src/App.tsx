import { useState } from 'react';
import { Award, MapPin } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import LayeringArtistry from './components/LayeringArtistry';
import ScentQuiz from './components/ScentQuiz';
import CartDrawer from './components/CartDrawer';
import { CartItem } from './types';

export default function App() {
  // Custom states default to Nigeria (+234) startup business line per customer specifications
  const [whatsappNumber, setWhatsappNumber] = useState('+2347071407319');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i);
      }
      return [...prev, item];
    });
    // Open cart drawer immediately to provide responsive feedback
    setIsCartOpen(true);
  };

  const handleUpdateCount = (id: string, delta: number) => {
    setCartItems(prev => 
      prev.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleStartQuiz = () => {
    const el = document.getElementById('quiz-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBrowseCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getWhatsappContactLink = () => {
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
    const text = encodeURIComponent("Hello JPO's Choice, I would like to make an inquiry about your curated art and artisanal fragrances.");
    return `https://wa.me/${cleanNumber}?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-obsidian text-cream font-sans selection:bg-gold selection:text-obsidian flex flex-col justify-between">
      {/* 1. Global Navigation */}
      <Navigation 
        onStartQuiz={handleStartQuiz} 
        onOpenCatalog={handleBrowseCatalog}
        cartItemCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-grow pt-20">
        {/* 2. Hero Header Block */}
        <Hero 
          onStartQuiz={handleStartQuiz} 
          onBrowseCatalog={handleBrowseCatalog} 
        />

        {/* Brand Mission/Philosophy Split Grid */}
        <section id="philosophy" className="py-24 px-6 max-w-7xl mx-auto border-t border-b border-gold/5 bg-gradient-to-b from-black/50 to-obsidian-light/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mission Statement text */}
            <div className="text-left space-y-6">
              <span className="font-serif text-gold text-xs tracking-[0.4em] uppercase block">
                JPO's Choice Philosophy
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-black tracking-widest text-cream uppercase leading-normal">
                Curating Scent as an Intimate Architecture
              </h3>
              <p className="font-sans text-sm text-cream-muted leading-relaxed font-light">
                At JPO's Choice, we do not believe in synthetic bulk scents. We believe a perfume is a live molecular blanket that bonds with your lipid profile to tell your personal narrative.
              </p>
              <p className="font-sans text-sm text-cream-muted leading-relaxed font-light">
                Our formulas are built with 100% stable essential organic resins, and are specifically cataloged under four definitive pillars: sweetness, earthiness, elegant romanticism, and mineral sea-fresh zest.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border border-gold/10 p-4 bg-obsidian-light">
                  <span className="font-serif text-gold font-bold text-lg block mb-1">100%</span>
                  <p className="font-sans text-[10px] uppercase text-cream/40 tracking-wider">Stable Lipids Base</p>
                </div>
                <div className="border border-gold/10 p-4 bg-obsidian-light">
                  <span className="font-serif text-gold font-bold text-lg block mb-1">12hr+</span>
                  <p className="font-sans text-[10px] uppercase text-cream/40 tracking-wider">Active Projection</p>
                </div>
              </div>
            </div>

            {/* Visual Call-Out Card */}
            <div className="relative border border-gold/15 p-8 bg-obsidian-light/60 flex flex-col justify-center items-center text-center max-w-lg mx-auto w-full overflow-hidden">
              <div className="absolute -right-16 -top-16 w-36 h-36 bg-gold/5 blur-2xl rounded-full" />
              
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-6 animate-pulse">
                <Award className="w-6 h-6 stroke-[1.5]" />
              </div>
              
              <h4 className="font-serif text-xl tracking-widest text-cream uppercase mb-3">
                Compound Safety
              </h4>
              <p className="font-sans text-xs text-cream-muted leading-relaxed font-light mb-6">
                All JPO's Choice formulas are dermatologist checked, allergen screened, and optimized to resist premature acidic skin breakdowns.
              </p>
              
              <hr className="w-16 border-gold/20 mb-6" />
              
              <span className="font-serif italic text-xs text-gold-light tracking-widest">
                "Formulated with ancient patience. Presented with modern boldness."
              </span>
            </div>
          </div>
        </section>

        {/* 3. Recent Curate Perfumes Catalog */}
        <ProductCatalog 
          whatsappNumber={whatsappNumber} 
          onSetWhatsappNumber={setWhatsappNumber} 
          onAddToCart={handleAddToCart}
        />

        {/* 3.5 Layering Artistry Section */}
        <LayeringArtistry />

        {/* 4. Scent Stack Interactive Quiz Block */}
        <section className="py-16 bg-gradient-to-b from-obsidian-light/40 to-black/80 border-t border-b border-gold/5">
          <ScentQuiz onAddToCart={handleAddToCart} />
        </section>

        {/* Scent Lounge Interactive map-placeholder & salon details block */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="border border-gold/10 bg-obsidian-light p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
              {/* Row 1 */}
              <div className="space-y-4">
                <span className="font-serif text-gold text-xs tracking-widest uppercase block">The JPO's Choice Studio</span>
                <h4 className="font-serif text-xl tracking-wider uppercase text-cream">JPO's Choice</h4>
                <p className="font-sans text-xs text-cream-muted leading-relaxed font-light">
                  A modern apothecary workspace configured for personal compound discovery and physical fragrance exploration.
                </p>
                <div className="flex items-center gap-2 text-xs text-cream-muted tracking-wider">
                  <MapPin className="w-4 h-4 text-gold shrink-0" />
                  <span>Karu, Fct, Abuja</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="space-y-4">
                <span className="font-serif text-gold text-xs tracking-widest uppercase block">Studio Hours</span>
                <h4 className="font-serif text-xl tracking-wider uppercase text-cream">Consultation Hours</h4>
                <div className="space-y-2 text-xs text-cream-muted leading-relaxed font-light">
                  <div className="flex items-center justify-between">
                    <span>Monday - Friday</span>
                    <strong className="text-gold">11:00 AM - 7:30 PM</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Saturday Studio</span>
                    <strong className="text-gold">12:00 PM - 6:00 PM</strong>
                  </div>
                  <div className="flex items-center justify-between text-cream/40 font-mono text-[10px]">
                    <span>Sunday</span>
                    <span className="uppercase text-[9px] tracking-wider">Closed</span>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="space-y-4 flex flex-col justify-between">
                <div>
                  <span className="font-serif text-gold text-xs tracking-widest uppercase block">Direct Line</span>
                  <h4 className="font-serif text-xl tracking-wider uppercase text-cream">+2347071407319 Direct Inquiry</h4>
                  <p className="font-sans text-xs text-cream-muted leading-relaxed font-light mb-4">
                    Have any questions regarding our customized scent matches or product formulations? Contact our team directly.
                  </p>
                </div>
                <a
                  href={getWhatsappContactLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gold text-black block px-6 py-3 font-bold text-xs tracking-wider uppercase hover:bg-gold/80 transition duration-300 rounded-none w-full text-center cursor-pointer select-none"
                  id="foot-cta-audit"
                >
                  Contact Us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 5. Custom Luxury Designer Footer */}
      <footer className="bg-black border-t border-gold/15 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Logo & subtext */}
          <div>
            <span className="font-serif tracking-[0.3em] text-lg font-bold text-gold uppercase block">
              JPO's Choice
            </span>
            <span className="font-sans text-[10px] tracking-widest text-cream/40 uppercase block mt-1">
              Curating Scent Architecture © 2026. All Rights Reserved.
            </span>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-cream-muted font-sans uppercase tracking-widest">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="hover:text-gold transition-colors block cursor-pointer"
              id="foot-link-top"
            >
              Back to Top
            </button>
            <button 
              onClick={handleBrowseCatalog} 
              className="hover:text-gold transition-colors block cursor-pointer"
              id="foot-link-catalog"
            >
              Our 4 Pillars
            </button>
            <button 
              onClick={handleStartQuiz} 
              className="hover:text-gold transition-colors block cursor-pointer"
              id="foot-link-quiz"
            >
              Scent Stack Quiz
            </button>
          </div>
        </div>
      </footer>

      {/* 6. Bespoke Shopping Archive Cart Drawer Slider */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateCount={handleUpdateCount}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
        whatsappNumber={whatsappNumber}
      />
    </div>
  );
}
