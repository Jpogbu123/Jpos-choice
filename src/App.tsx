import { useState } from 'react';
import { Award, MapPin } from 'lucide-react';
import Navigation, { JpoLogo } from './components/Navigation';
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
                Find Your Signature Scent
              </h3>
              <p className="font-sans text-sm text-cream-muted leading-relaxed font-light">
                At JPO's Choice, we make high-quality, long-lasting perfumes. We believe your perfume should be unique and tell your personal story.
              </p>
              <p className="font-sans text-sm text-cream-muted leading-relaxed font-light">
                Our perfumes use high-quality ingredients and are grouped into four clear styles: sweet, earthy, romantic, and sea-fresh.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border border-gold/10 p-4 bg-obsidian-light">
                  <span className="font-serif text-gold font-bold text-lg block mb-1">100%</span>
                  <p className="font-sans text-[10px] uppercase text-cream/40 tracking-wider">Scent Oil Base</p>
                </div>
                <div className="border border-gold/10 p-4 bg-obsidian-light">
                  <span className="font-serif text-gold font-bold text-lg block mb-1">12hr+</span>
                  <p className="font-sans text-[10px] uppercase text-cream/40 tracking-wider">Long Lasting Scent</p>
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
                All our perfumes are tested for safety and made to be gentle on your skin while lasting all day.
              </p>
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

        {/* 4.5 JPO's Choice Studio & Consultation Details */}
        <section className="py-12 px-6 max-w-7xl mx-auto border-t border-gold/10">
          <div className="border border-gold/10 bg-obsidian-light p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
              {/* Column 1: Studio Details */}
              <div className="space-y-4">
                <span className="font-serif text-gold text-xs tracking-widest uppercase block">The Studio</span>
                <h4 className="font-serif text-xl tracking-wider uppercase text-cream">JPO's Choice Studio</h4>
                <p className="font-sans text-xs text-cream-muted leading-relaxed font-light">
                  Our studio is a welcoming space where you can explore our perfumes in person.
                </p>
                <div className="flex items-center gap-2 text-xs text-cream-muted tracking-wider">
                  <MapPin className="w-4 h-4 text-gold shrink-0" />
                  <span>Karu, Fct, Abuja</span>
                </div>
              </div>

              {/* Column 2: Studio Hours */}
              <div className="space-y-4">
                <span className="font-serif text-gold text-xs tracking-widest uppercase block">Studio Hours</span>
                <h4 className="font-serif text-xl tracking-wider uppercase text-cream">Consultation Hours</h4>
                <div className="space-y-2 text-xs text-cream-muted leading-relaxed font-light">
                  <div className="flex items-center justify-between">
                    <span>Monday - Friday</span>
                    <strong className="text-gold">11:00 AM - 7:30 PM</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Saturday</span>
                    <strong className="text-gold">12:00 PM - 6:00 PM</strong>
                  </div>
                  <div className="flex items-center justify-between text-cream/40 font-mono text-[10px]">
                    <span>Sunday</span>
                    <span className="uppercase text-[9px] tracking-wider">Closed</span>
                  </div>
                </div>
              </div>

              {/* Column 3: Contact details */}
              <div className="space-y-4 flex flex-col justify-between">
                <div>
                  <span className="font-serif text-gold text-xs tracking-widest uppercase block">Direct Line</span>
                  <h4 className="font-serif text-lg tracking-wider text-cream uppercase mt-1">
                    +234 707 140 7319
                  </h4>
                  <p className="font-sans text-xs text-cream-muted leading-relaxed font-light mt-2 mb-4">
                    Have questions about our perfumes or custom scents? Contact our team directly.
                  </p>
                </div>
                <a
                  href={getWhatsappContactLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gold text-black block px-6 py-3 font-bold text-xs tracking-wider uppercase hover:bg-gold/85 transition duration-300 rounded-none w-full text-center cursor-pointer select-none min-h-[44px] flex items-center justify-center space-x-2"
                  id="foot-cta-audit"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.503 4.94 1.505 5.548 0 10.064-4.512 10.068-10.066.002-2.69-1.043-5.22-2.94-7.119C16.328 1.571 13.8 1.072 11.11 1.072 5.56 1.072 1.048 5.584 1.044 11.139c-.001 1.77.463 3.5 1.34 5.028l-.995 3.634 3.738-.98c1.51.926 3.208 1.385 4.924 1.383zm10.59-7.135c-.293-.146-1.734-.857-2.001-.954-.268-.099-.463-.146-.659.147-.195.29-.756.953-.927 1.148-.17.197-.341.221-.634.074-.293-.146-1.237-.456-2.356-1.455-.87-.77-1.456-1.73-1.628-2.023-.17-.293-.018-.452.129-.597.132-.13.293-.341.439-.512.146-.17.195-.293.293-.488.098-.195.049-.366-.024-.513-.073-.146-.659-1.586-.902-2.17-.238-.574-.479-.496-.659-.506-.17-.008-.366-.01-.561-.01-.195 0-.512.073-.78.366-.268.29-1.024 1.001-1.024 2.441 0 1.439 1.048 2.83 1.195 3.025.147.195 2.062 3.149 4.996 4.413.697.302 1.242.482 1.668.618.7.223 1.338.192 1.843.118.563-.081 1.734-.708 1.979-1.393.244-.683.244-1.27.17-1.393-.073-.122-.268-.195-.561-.341z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 5. Custom Luxury Designer Footer */}
      <footer className="bg-black border-t border-gold/15 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <JpoLogo className="w-8 h-8 shrink-0 select-none" />
              <span className="font-serif tracking-[0.3em] text-lg font-bold text-gold uppercase block">
                JPO's Choice
              </span>
            </div>
            <p className="font-sans text-xs text-cream-muted leading-relaxed font-light">
              Premium artisanal fragrances and custom scent layering oils.
            </p>
            <span className="font-sans text-[10px] tracking-widest text-cream/40 uppercase block pt-2">
              © 2026 JPO's Choice. All Rights Reserved.
            </span>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-4">
            <h5 className="font-serif text-xs tracking-[0.2em] text-gold uppercase font-bold">Explore</h5>
            <ul className="space-y-2 text-xs text-cream-muted font-sans uppercase tracking-wider">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                  className="hover:text-gold transition-colors text-left cursor-pointer"
                  id="foot-link-top"
                >
                  Back to Top
                </button>
              </li>
              <li>
                <button 
                  onClick={handleBrowseCatalog} 
                  className="hover:text-gold transition-colors text-left cursor-pointer"
                  id="foot-link-catalog"
                >
                  Browse Perfumes
                </button>
              </li>
              <li>
                <button 
                  onClick={handleStartQuiz} 
                  className="hover:text-gold transition-colors text-left cursor-pointer"
                  id="foot-link-quiz"
                >
                  Scent Quiz
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div className="space-y-4">
            <h5 className="font-serif text-xs tracking-[0.2em] text-gold uppercase font-bold">Direct Support</h5>
            <p className="font-sans text-xs text-cream-muted font-light leading-relaxed">
              Have questions about our perfumes? Contact our team directly.
            </p>
            <div className="space-y-3 pt-1">
              <span className="text-gold font-mono text-sm block font-bold tracking-wider">
                +234 707 140 7319
              </span>
              <a 
                href={getWhatsappContactLink()}
                target="_blank"
                rel="noreferrer"
                className="border border-gold text-gold hover:bg-gold hover:text-black transition-colors duration-300 block px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-center cursor-pointer select-none min-h-[44px] flex items-center justify-center space-x-2 rounded-none w-full sm:w-44"
                id="footer-whatsapp-contact"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.503 4.94 1.505 5.548 0 10.064-4.512 10.068-10.066.002-2.69-1.043-5.22-2.94-7.119C16.328 1.571 13.8 1.072 11.11 1.072 5.56 1.072 1.048 5.584 1.044 11.139c-.001 1.77.463 3.5 1.34 5.028l-.995 3.634 3.738-.98c1.51.926 3.208 1.385 4.924 1.383zm10.59-7.135c-.293-.146-1.734-.857-2.001-.954-.268-.099-.463-.146-.659.147-.195.29-.756.953-.927 1.148-.17.197-.341.221-.634.074-.293-.146-1.237-.456-2.356-1.455-.87-.77-1.456-1.73-1.628-2.023-.17-.293-.018-.452.129-.597.132-.13.293-.341.439-.512.146-.17.195-.293.293-.488.098-.195.049-.366-.024-.513-.073-.146-.659-1.586-.902-2.17-.238-.574-.479-.496-.659-.506-.17-.008-.366-.01-.561-.01-.195 0-.512.073-.78.366-.268.29-1.024 1.001-1.024 2.441 0 1.439 1.048 2.83 1.195 3.025.147.195 2.062 3.149 4.996 4.413.697.302 1.242.482 1.668.618.7.223 1.338.192 1.843.118.563-.081 1.734-.708 1.979-1.393.244-.683.244-1.27.17-1.393-.073-.122-.268-.195-.561-.341z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* 6. Shopping Cart Drawer Slider */}
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
