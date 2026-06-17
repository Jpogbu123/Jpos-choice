import React, { useState } from 'react';
import { ShoppingCart, MessageSquare, Tag, Eye, Heart, ShoppingBag } from 'lucide-react';
import { Perfume, CartItem } from '../types';
import { PERFUME_CATALOG } from '../data/perfumeData';

interface ProductCatalogProps {
  whatsappNumber: string;
  onSetWhatsappNumber: (num: string) => void;
  onAddToCart: (item: CartItem) => void;
}

export default function ProductCatalog({ whatsappNumber, onSetWhatsappNumber, onAddToCart }: ProductCatalogProps) {
  const [selectedProduct, setSelectedProduct] = useState<Perfume | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const getWhatsappLink = (perfume: Perfume) => {
    const text = encodeURIComponent(
      `Hello JPO's Choice! I would like to make an inquiry about the following scent:\n\n*Name:* ${perfume.name}\n*Category:* ${perfume.category}\n*Concentration:* ${perfume.concentration}\n*Price:* ${perfume.price}\n\nPlease let me know if this is available. Thank you!`
    );
    return `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`;
  };

  return (
    <section id="catalog" className="py-24 px-6 max-w-[1600px] mx-auto scroll-mt-20">
      {/* Pillar Intro */}
      <div className="text-center mb-16">
        <span className="font-serif text-gold text-xs tracking-[0.4em] uppercase block mb-3">
          JPO's Choice
        </span>
        <h3 className="font-serif text-3xl sm:text-5xl font-bold tracking-widest text-cream uppercase mb-4">
          Signature Collection
        </h3>
        <p className="font-sans text-xs sm:text-sm text-cream-muted tracking-widest max-w-2xl mx-auto leading-relaxed uppercase">
          Discover our premium, long-lasting fragrances crafted for projection and personal expression.
        </p>
      </div>

      {/* Scent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {PERFUME_CATALOG.map((perfume) => {
          const isFav = favorites.includes(perfume.id);
          const hasImgError = imgErrors[perfume.id];

          return (
            <div
              key={perfume.id}
              className="group relative flex flex-col bg-[#111111] border border-gold/25 hover:border-gold transition-all duration-500 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8)] focus-within:ring-1 focus-within:ring-gold overflow-hidden rounded-none"
              id={`product-card-${perfume.id}`}
            >
              {/* Pillar Header Ribbon */}
              <div className="absolute top-4 left-4 z-10 bg-black/90 border border-gold/30 text-gold text-[9px] tracking-[0.25em] font-serif uppercase px-2.5 py-1 backdrop-blur-sm">
                {perfume.category}
              </div>

              {/* Fragrance Imagery with fallback safeguard */}
              <div className="relative aspect-square w-full bg-black/50 overflow-hidden flex items-center justify-center">
                {hasImgError ? (
                  <div className="w-full h-full bg-gradient-to-b from-black to-[#1c1917] border border-gold/10 flex flex-col items-center justify-center p-4 text-center">
                    <span className="font-serif text-gold text-lg tracking-widest uppercase mb-1">JPO's Choice</span>
                    <span className="font-sans text-[10px] text-cream-muted uppercase tracking-wider">Artisanal Scent</span>
                  </div>
                ) : (
                  <img
                    src={perfume.image}
                    alt={`${perfume.name} fragrance bottle`}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-750 group-hover:scale-105 pointer-events-none"
                    referrerPolicy="no-referrer"
                    onError={() => setImgErrors(prev => ({ ...prev, [perfume.id]: true }))}
                  />
                )}
                
                {/* Instant overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <button
                    onClick={() => setSelectedProduct(perfume)}
                    className="w-full bg-black/90 hover:bg-gold hover:text-black text-gold text-[10px] font-bold tracking-[0.2em] uppercase py-2.5 border border-gold/40 hover:border-gold transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer rounded-none min-h-[44px]"
                    id={`btn-quick-view-${perfume.id}`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Explore Formulation</span>
                  </button>
                </div>

                {/* Favorite Heart Selector (44x44px touch target) */}
                <button
                  onClick={(e) => toggleFavorite(perfume.id, e)}
                  className="absolute top-4 right-4 z-10 w-11 h-11 bg-black/80 backdrop-blur-xs border border-gold/10 flex items-center justify-center text-gold/80 hover:text-gold hover:scale-105 transition active:scale-95 cursor-pointer rounded-none"
                  aria-label="Add to Favorites"
                  id={`btn-fav-${perfume.id}`}
                >
                  <Heart className={`w-4 h-4 ${isFav ? 'fill-gold text-gold animate-bounce' : ''}`} />
                </button>
              </div>

              {/* Fragrance Specifications */}
              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h4 className="font-serif text-lg tracking-wider text-cream group-hover:text-gold transition-colors font-light">
                      {perfume.name}
                    </h4>
                    <span className="font-mono text-gold font-bold text-sm bg-gold/5 py-0.5 px-2 border border-gold/10 shrink-0">
                      {perfume.price}
                    </span>
                  </div>

                  <p className="text-[10px] tracking-wide text-gold/80 font-serif italic mb-3">
                    {perfume.tagline}
                  </p>

                  {/* Notes badging */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gold/5 mb-4">
                    {perfume.notes.slice(0, 3).map((note, i) => (
                      <span key={i} className="text-[9px] tracking-widest text-cream uppercase bg-black/40 px-1.5 py-0.5 border border-gold/5 flex items-center gap-1">
                        <Tag className="w-2.5 h-2.5 text-gold shrink-0 stroke-[1.5]" />
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Primary CTA: Add Scent */}
                  <button
                    onClick={() => onAddToCart({
                      id: perfume.id,
                      name: perfume.name,
                      category: perfume.category,
                      price: perfume.price,
                      image: perfume.image,
                      size: perfume.size,
                      concentration: perfume.concentration,
                      quantity: 1
                    })}
                    className="w-full bg-gold hover:bg-gold-hover text-obsidian px-3 py-3 text-xs tracking-widest font-bold uppercase transition duration-300 flex items-center justify-center gap-1.5 text-center select-none rounded-none cursor-pointer min-h-[44px]"
                    id={`btn-add-to-cart-${perfume.id}`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
                    <span>Add Scent</span>
                  </button>

                  {/* Secondary WhatsApp Inquiry (44x44px touch target) */}
                  <a
                    href={getWhatsappLink(perfume)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 w-full text-[11px] font-sans font-bold uppercase tracking-widest text-gold/80 hover:text-gold hover:underline transition duration-300 flex items-center justify-center gap-1.5 text-center select-none cursor-pointer min-h-[44px]"
                    id={`btn-whatsapp-inquire-${perfume.id}`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Elegant Detailed Modal Backdrop for Formulation Quick Views */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedProduct(null)}
          id="product-quick-view-modal-backdrop"
        >
          <div 
            className="relative bg-obsidian-light border border-gold/30 max-w-2xl w-full p-6 md:p-8 flex flex-col md:flex-row gap-8 shadow-[0_0_50px_rgba(212,175,55,0.15)] animate-scale-up"
            onClick={(e) => e.stopPropagation()}
            id={`quick-view-modal-${selectedProduct.id}`}
          >
            {/* Corner visual embellishments */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold" />

            {/* Photo preview column */}
            <div className="w-full md:w-1/2 aspect-square relative bg-obsidian md:sticky md:top-0">
              {imgErrors[selectedProduct.id] ? (
                <div className="w-full h-full bg-gradient-to-b from-black to-[#1c1917] border border-gold/10 flex flex-col items-center justify-center p-4 text-center min-h-[300px]">
                  <span className="font-serif text-gold text-2xl tracking-widest uppercase mb-2">JPO's Choice</span>
                  <span className="font-sans text-xs text-cream-muted uppercase tracking-wider">Artisanal Scent</span>
                </div>
              ) : (
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover object-center border border-gold/10"
                  referrerPolicy="no-referrer"
                  onError={() => setImgErrors(prev => ({ ...prev, [selectedProduct.id]: true }))}
                />
              )}
              <div className="absolute bottom-3 left-3 bg-black/90 border border-gold/10 text-gold text-[9px] tracking-widest font-serif uppercase px-2 py-0.5">
                {selectedProduct.category}
              </div>
            </div>

            {/* Particular attributes text column */}
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-serif text-2xl tracking-widest text-gold text-left uppercase">
                    {selectedProduct.name}
                  </h4>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="text-cream-muted hover:text-gold text-2xl font-serif leading-none transition-colors duration-200 cursor-pointer w-11 h-11 flex items-center justify-center"
                    aria-label="Close detailed Formulation view"
                    id="btn-close-detailed-view"
                  >
                    &times;
                  </button>
                </div>

                <p className="font-serif italic text-sm text-gold-light tracking-wide mb-4 text-left">
                  "{selectedProduct.tagline}"
                </p>

                <p className="text-xs text-cream/70 leading-relaxed mb-6 font-light text-left">
                  {selectedProduct.description}
                </p>

                {/* Ingredients & Notes List */}
                <div className="space-y-3 mb-6">
                  <h5 className="text-[10px] tracking-[0.25em] font-serif text-cream uppercase pb-1.5 border-b border-gold/10 text-left">
                    Scent Profile Notes
                  </h5>
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-sans tracking-wide text-cream-muted text-left">
                    {selectedProduct.notes.map((note, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-gold" />
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sizing & Sillage Details */}
                <div className="grid grid-cols-2 gap-4 text-xs font-mono text-cream-muted pb-4 border-b border-gold/10 leading-relaxed">
                  <div>
                    <span className="text-cream/40 block text-[9px] uppercase tracking-wider">Price</span>
                    <strong className="text-gold text-lg">{selectedProduct.price}</strong>
                  </div>
                  <div>
                    <span className="text-cream/40 block text-[9px] uppercase tracking-wider">Volume</span>
                    <span className="text-gold">{selectedProduct.size}</span>
                  </div>
                  <div>
                    <span className="text-cream/40 block text-[9px] uppercase tracking-wider">Concentration</span>
                    <span className="text-gold">{selectedProduct.concentration}</span>
                  </div>
                  <div>
                    <span className="text-cream/40 block text-[9px] uppercase tracking-wider">Sillage</span>
                    <span className="text-gold">Very Long Lasting</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-6 space-y-3">
                <button
                  onClick={() => {
                    onAddToCart({
                      id: selectedProduct.id,
                      name: selectedProduct.name,
                      category: selectedProduct.category,
                      price: selectedProduct.price,
                      image: selectedProduct.image,
                      size: selectedProduct.size,
                      concentration: selectedProduct.concentration,
                      quantity: 1
                    });
                    setSelectedProduct(null);
                  }}
                  className="w-full bg-gold hover:bg-gold-hover text-obsidian py-3.5 text-xs tracking-[0.22em] font-bold uppercase transition duration-300 flex items-center justify-center gap-2 text-center rounded-none cursor-pointer min-h-[44px]"
                  id={`btn-modal-add-to-cart-${selectedProduct.id}`}
                >
                  <ShoppingBag className="w-4 h-4 shrink-0" />
                  <span>Add to Scent Selection</span>
                </button>

                <a
                  href={getWhatsappLink(selectedProduct)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-transparent hover:bg-gold/5 text-gold py-3 text-xs tracking-[0.22em] font-bold uppercase transition duration-300 border border-gold/30 hover:border-gold flex items-center justify-center gap-2 text-center rounded-none cursor-pointer min-h-[44px]"
                  id={`quickview-whatsapp-${selectedProduct.id}`}
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>Send WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
