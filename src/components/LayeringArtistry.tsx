import React, { useState } from 'react';
import { ChevronDown, Sparkles, Wind, Anchor, GlassWater, Crown } from 'lucide-react';

interface LayeringTip {
  id: number;
  number: string;
  title: string;
  summary: string;
  detail: string;
  icon: React.ReactNode;
}

export default function LayeringArtistry() {
  const [openTipId, setOpenTipId] = useState<number | null>(0); // Default open the first tip

  const tips: LayeringTip[] = [
    {
      id: 0,
      number: "01",
      title: "Layer 1: The Hydrator (Body Oil)",
      summary: "Preps the skin to ensure the fragrance doesn't evaporate into dry pores.",
      detail: "A hydrated base is the single most important pre-requisite of scent longevity. Applying a luxury, lightweight body oil first primes dry skin cells, creating a beautifully receptive, smooth lipid barrier that prevents your natural body pores from consuming or rapidly evaporating the delicate premium scent compounds.",
      icon: <GlassWater className="w-5 h-5 text-gold stroke-[1.5]" />
    },
    {
      id: 1,
      number: "02",
      title: "Layer 2: The Anchor (Perfume Oil)",
      summary: "Provides the long-lasting foundation that sits close to the pulse points.",
      detail: "Highly concentrated botanical perfume oils are exceptionally rich in heavy molecular lipids. Applying this oil base directly onto key thermal points (wrists, neck, and behind ears) forms a robust scent anchor, locking the base notes down to your skin's surface to serve as a slow-release projection engine.",
      icon: <Anchor className="w-5 h-5 text-gold stroke-[1.5]" />
    },
    {
      id: 2,
      number: "03",
      title: "Layer 3: The Bridge (Body Spray/Mist)",
      summary: "Creates an immediate, fresh scent cloud that covers a wider surface area.",
      detail: "Misting or spraying a refreshing body mist over the baseline. This light, fine mist veil acts as an atmospheric molecular bridge, expanding your sillage, elevating lighter notes, and creating a fresh scent bubble that projects over a wider physical radius with motion.",
      icon: <Wind className="w-5 h-5 text-gold stroke-[1.5]" />
    },
    {
      id: 3,
      number: "04",
      title: "Layer 4: The Crown (Eau de Parfum)",
      summary: "The high-performance finish that projects your signature to everyone around you.",
      detail: "The terminal masterpiece step. Mist a high-performance Eau de Parfum or concentrated Extrait onto pre-moisturized pulse zones and outerwear fabrics. This supreme layer delivers outstanding projection, ensuring your customized signature is elevated and fully appreciated.",
      icon: <Crown className="w-5 h-5 text-gold stroke-[1.5]" />
    }
  ];

  const toggleTip = (id: number) => {
    setOpenTipId(openTipId === id ? null : id);
  };

  return (
    <section id="layering-artistry" className="py-24 px-6 max-w-5xl mx-auto border-t border-gold/10 scroll-mt-20">
      {/* Title block */}
      <div className="text-center mb-16">
        <span className="font-serif text-gold text-xs tracking-[0.4em] uppercase block mb-3">
          Apothecary Science
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-widest text-gold uppercase mb-4 leading-normal">
          Layering Artistry
        </h3>
        <p className="font-sans text-xs sm:text-sm text-cream-muted tracking-[0.2em] max-w-2xl mx-auto leading-relaxed uppercase">
          Master the four-layer formula to extend scent longevity and sculpt a completely bespoke projection trail.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {tips.map((tip) => {
          const isOpen = openTipId === tip.id;
          return (
            <div 
              key={tip.id} 
              className="border border-gold/20 bg-[#111111] transition-all duration-300"
              id={`layering-tip-${tip.id}`}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleTip(tip.id)}
                className="w-full flex items-center justify-between p-6 cursor-pointer hover:bg-gold/5 focus:outline-none text-left select-none"
                aria-expanded={isOpen}
                id={`btn-toggle-tip-${tip.id}`}
              >
                <div className="flex items-center space-x-4 md:space-x-6">
                  {/* Sequence Number */}
                  <span className="font-serif text-gold text-lg md:text-xl font-light opacity-60">
                    {tip.number}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-10 h-10 border border-gold/25 bg-gold/5 flex items-center justify-center shrink-0">
                    {tip.icon}
                  </div>

                  {/* Title and brief description */}
                  <div>
                    <h4 className="font-serif text-sm sm:text-base font-medium tracking-wider text-cream">
                      {tip.title}
                    </h4>
                    <p className="font-sans text-xs text-cream-muted mt-1 leading-snug line-clamp-1 max-w-xl font-light">
                      {tip.summary}
                    </p>
                  </div>
                </div>

                {/* Chevron */}
                <div className="ml-4 shrink-0">
                  <ChevronDown 
                    className={`w-5 h-5 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </div>
              </button>

              {/* Accordion Content */}
              <div 
                className={`transition-all duration-300 overflow-hidden ${
                  isOpen ? 'max-h-60 border-t border-gold/10' : 'max-h-0'
                }`}
              >
                <div className="p-6 md:pl-[5.5rem] bg-black/40 text-left">
                  <p className="font-sans text-xs md:text-sm text-cream-muted leading-relaxed font-light">
                    {tip.detail}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
