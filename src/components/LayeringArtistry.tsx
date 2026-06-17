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
      title: "Layer 1: Moisturizer (Body Oil)",
      summary: "Prep your skin so the scent sticks and lasts longer.",
      detail: "A moisturized base is the most important step for a long-lasting scent. Applying a lightweight body oil first hydrates your skin, preventing your pores from absorbing the perfume too quickly and making it fade.",
      icon: <GlassWater className="w-5 h-5 text-gold stroke-[1.5]" />
    },
    {
      id: 1,
      number: "02",
      title: "Layer 2: Scent Anchor (Perfume Oil)",
      summary: "Apply a long-lasting oil base close to your warm pulse points.",
      detail: "Concentrated perfume oils are rich and stick to your skin. Apply this oil directly onto warm areas like your wrists and neck to create a solid scent foundation that slowly releases the fragrance over hours.",
      icon: <Anchor className="w-5 h-5 text-gold stroke-[1.5]" />
    },
    {
      id: 2,
      number: "03",
      title: "Layer 3: Scent Bridge (Body Spray/Mist)",
      summary: "Spray a fresh mist to spread the scent around you.",
      detail: "Spraying a light body mist over your perfume oil layer helps spread the scent. This creates a fresh scent bubble around you that gets noticed when you move.",
      icon: <Wind className="w-5 h-5 text-gold stroke-[1.5]" />
    },
    {
      id: 3,
      number: "04",
      title: "Layer 4: Final Touch (Eau de Parfum)",
      summary: "Finish with a high-quality spray for maximum reach.",
      detail: "The final step. Spray your Eau de Parfum onto your wrists, neck, and clothes. This outer layer gives you strong reach, making sure your signature scent is easily noticed by everyone.",
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
          Scent Secrets
        </span>
        <h3 className="font-serif text-3xl sm:text-4xl font-light tracking-widest text-gold uppercase mb-4 leading-normal">
          How to Layer Scents
        </h3>
        <p className="font-sans text-xs sm:text-sm text-cream-muted tracking-[0.2em] max-w-2xl mx-auto leading-relaxed uppercase">
          Master the four-step guide to make your perfumes last longer and smell unique.
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
                className="w-full flex flex-col md:flex-row items-center justify-between p-6 cursor-pointer hover:bg-gold/5 focus:outline-none text-center md:text-left select-none gap-4 md:gap-0"
                aria-expanded={isOpen}
                id={`btn-toggle-tip-${tip.id}`}
              >
                <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6 w-full md:w-auto">
                  {/* Sequence Number */}
                  <span className="font-serif text-gold text-lg md:text-xl font-light opacity-60">
                    {tip.number}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-10 h-10 border border-gold/25 bg-gold/5 flex items-center justify-center shrink-0">
                    {tip.icon}
                  </div>

                  {/* Title and brief description */}
                  <div className="text-center md:text-left">
                    <h4 className="font-serif text-sm sm:text-base font-medium tracking-wider text-cream">
                      {tip.title}
                    </h4>
                    <p className="font-sans text-xs text-cream-muted mt-1 leading-snug max-w-xl font-light">
                      {tip.summary}
                    </p>
                  </div>
                </div>

                {/* Chevron */}
                <div className="shrink-0">
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
                <div className="p-6 md:pl-[5.5rem] bg-black/40 text-center md:text-left">
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
