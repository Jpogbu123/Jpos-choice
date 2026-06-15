import { useState } from 'react';
import { 
  Sparkles, 
  Anchor, 
  Wind, 
  Crown, 
  Layers, 
  ShieldCheck, 
  ShieldAlert, 
  CloudRain, 
  Sun, 
  Shirt, 
  Flame, 
  FlameKindling, 
  Heart, 
  GlassWater,
  ChevronLeft,
  RotateCcw
} from 'lucide-react';
import { QUIZ_QUESTIONS, getRecommendation } from '../data/perfumeData';
import { StackRecommendation } from '../types';

// Map database string keys to Lucide React components safely
function renderLayerIcon(iconName: string) {
  const iconProps = { className: "w-5 h-5 text-gold shrink-0 stroke-[1.5]" };
  switch (iconName) {
    case 'ShieldAlert':
      return <ShieldAlert {...iconProps} />;
    case 'Layers':
      return <Layers {...iconProps} />;
    case 'Crown':
      return <Crown {...iconProps} />;
    case 'ShieldCheck':
      return <ShieldCheck {...iconProps} />;
    case 'Wind':
      return <Wind {...iconProps} />;
    case 'Sparkles':
      return <Sparkles {...iconProps} />;
    case 'Anchor':
      return <Anchor {...iconProps} />;
    case 'CloudRain':
      return <CloudRain {...iconProps} />;
    case 'Sun':
      return <Sun {...iconProps} />;
    case 'Shirt':
      return <Shirt {...iconProps} />;
    case 'Flame':
      return <Flame {...iconProps} />;
    case 'FlameKindling':
      return <FlameKindling {...iconProps} />;
    case 'Heart':
      return <Heart {...iconProps} />;
    case 'GlassWater':
      return <GlassWater {...iconProps} />;
    default:
      return <Sparkles {...iconProps} />;
  }
}

export default function ScentQuiz({ onAddToCart }: { onAddToCart: (item: any) => void }) {
  const [currentStep, setCurrentStep] = useState(0); // 0 = Intro, 1..5 = Questions, 6 = Results
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [recommendation, setRecommendation] = useState<StackRecommendation | null>(null);

  const handleStartQuiz = () => {
    setAnswers({});
    setRecommendation(null);
    setCurrentStep(1);
  };

  const handleOptionSelect = (questionId: number, value: string) => {
    const updatedAnswers = { ...answers, [questionId]: value };
    setAnswers(updatedAnswers);

    if (questionId < 5) {
      setCurrentStep(questionId + 1);
    } else {
      // End of quiz (after Q5 response), calculate recommendation based on scent types
      const rec = getRecommendation(updatedAnswers);
      setRecommendation(rec);
      setCurrentStep(6);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      setCurrentStep(0);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setRecommendation(null);
    setCurrentStep(1);
  };

  return (
    <section id="quiz-section" className="py-24 px-6 max-w-5xl mx-auto scroll-mt-20">
      {/* Quiz Card Master Container */}
      <div className="relative border border-gold/25 bg-[#111111] p-6 sm:p-12 md:p-16 shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden rounded-none">
        
        {/* Intricate decorative outline highlights */}
        <div className="absolute top-0 left-0 w-[1px] h-16 bg-gold" />
        <div className="absolute top-0 left-0 w-16 h-[1px] bg-gold" />
        <div className="absolute bottom-0 right-0 w-[1px] h-16 bg-gold" />
        <div className="absolute bottom-0 right-0 w-16 h-[1px] bg-gold" />

        {/* --- STEP 0: INTRO SCREEN --- */}
        {currentStep === 0 && (
          <div className="text-center py-8">
            <span className="font-serif text-gold text-xs tracking-[0.4em] uppercase block mb-3 animate-pulse">
              JPO's Choice Laboratory
            </span>
            <h3 className="font-serif text-3xl sm:text-5xl font-light tracking-widest text-gold uppercase mb-4 leading-normal">
              The Infinity Stack
            </h3>
            <p className="font-sans text-xs sm:text-sm text-cream-muted tracking-[0.2em] max-w-xl mx-auto leading-relaxed mb-10 uppercase">
              Standard fragrances fade away or distort. Discover a customized four-layered scent cocktail engineered specifically to match your daytime purpose, skin chemistry, setting and preferred scent families.
            </p>

            <button
              onClick={handleStartQuiz}
              className="bg-transparent hover:bg-gold text-gold hover:text-black border border-gold px-8 py-4 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded-none cursor-pointer hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]"
              id="quiz-btn-begin"
            >
              Begin Diagnostic Scent Match
            </button>
          </div>
        )}

        {/* --- DYNAMIC QUESTION STEPS 1 TO 5 --- */}
        {currentStep >= 1 && currentStep <= 5 && (
          <div className="animate-fade-in text-left">
            {/* Nav Back & Progress Details */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gold/10">
              <button 
                onClick={handleBack}
                className="flex items-center gap-1.5 text-xs text-cream-muted hover:text-gold uppercase tracking-widest cursor-pointer"
                id={`q${currentStep}-btn-back`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{currentStep === 1 ? 'Reset' : 'Previous'}</span>
              </button>
              <span className="font-mono text-[10px] text-gold tracking-[0.2em] uppercase font-bold">
                Profile Diagnostic: Step 0{currentStep} / 05
              </span>
            </div>

            {/* Question Text */}
            <h4 className="font-serif text-xl sm:text-2xl text-cream tracking-wider mb-8 uppercase font-medium leading-relaxed">
              {QUIZ_QUESTIONS[currentStep - 1].text}
            </h4>

            {/* Selection Options Vertical stack */}
            <div className="space-y-4">
              {QUIZ_QUESTIONS[currentStep - 1].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(currentStep, option.value)}
                  className="w-full text-left bg-black border border-gold/20 hover:border-gold/60 p-5 sm:p-6 text-sm flex items-center justify-between transition-all duration-300 hover:bg-gold/5 group cursor-pointer focus:outline-none focus:ring-1 focus:ring-gold rounded-none"
                  id={`q${currentStep}-option-${option.value}`}
                >
                  <span className="font-sans font-light tracking-wide text-cream group-hover:text-gold transition duration-300">
                    {option.text}
                  </span>
                  <div className="w-5 h-5 rounded-none border border-gold/20 flex items-center justify-center shrink-0 ml-4 group-hover:border-gold transition-all">
                    <span className="w-2.5 h-2.5 bg-gold scale-0 group-hover:scale-100 transition-all duration-300" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* --- STEP 6: RECTIFIED RESULTS PANELS --- */}
        {currentStep === 6 && recommendation && (
          <div className="animate-fade-in text-left">
            {/* Header Vibe Card */}
            <div className="text-center mb-12">
              <span className="font-mono text-[10px] text-gold tracking-[0.3em] uppercase block mb-1 font-bold">
                Diagnostic Result
              </span>
              <h4 className="font-serif text-2xl sm:text-4xl font-extrabold text-cream uppercase tracking-widest mb-2 leading-relaxed">
                {recommendation.title}
              </h4>
              <p className="font-sans text-[11px] sm:text-xs text-gold-light tracking-[0.2em] uppercase mb-4">
                Recommended Vibe: <span className="underline decoration-gold/40 font-semibold">{recommendation.vibe}</span>
              </p>
              <div className="w-16 h-[1px] bg-gold/30 mx-auto" />
            </div>

            {/* Four-Layer Scent Stack visual elements */}
            <div className="space-y-6 mb-10">
              {recommendation.layers.map((layer, index) => (
                <div 
                  key={index}
                  className="bg-black border border-gold/20 p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:border-gold/50 transition-colors duration-300 relative group rounded-none"
                >
                  {/* Decorative background step layout */}
                  <span className="absolute right-4 bottom-2 text-gold/5 font-serif text-5xl md:text-8xl select-none font-bold leading-none pointer-events-none group-hover:text-gold/10 transition-colors">
                    0{index + 1}
                  </span>

                  {/* Icon profile */}
                  <div className="w-12 h-12 border border-gold/30 bg-gold/5 flex items-center justify-center shrink-0 self-start md:self-center">
                    {renderLayerIcon(layer.icon)}
                  </div>

                  {/* Layer text content */}
                  <div className="space-y-1 relative pr-8">
                    <h5 className="font-serif text-xs tracking-widest text-gold text-left font-bold uppercase">
                      {layer.type}
                    </h5>
                    <h6 className="font-serif text-base text-cream text-left font-semibold tracking-wide">
                      {layer.name}
                    </h6>

                    <p className="font-sans text-[11px] text-gold-light font-medium tracking-widest uppercase text-left py-0.5">
                      Notes: {layer.notes}
                    </p>
                    <p className="font-sans text-xs text-cream-muted leading-relaxed font-light text-left pt-1">
                      {layer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Scent layering Master Tip banner */}
            <div className="bg-gold/5 border-l-2 border-gold p-5 mb-12 text-left">
              <p className="font-serif text-xs text-gold tracking-widest uppercase mb-1 font-bold">
                Master Apothecary Application Note
              </p>
              <p className="font-sans text-xs text-cream-muted leading-relaxed italic">
                "{recommendation.tip}"
              </p>
            </div>

             {/* Custom CTA Actions */}
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center bg-[#1a1a1a] p-6 border border-gold/20 rounded-none">
              <div className="text-left max-w-xl">
                <h5 className="font-serif text-sm tracking-wider text-cream font-bold uppercase mb-1">
                  Ready to explore your custom curation?
                </h5>
                <p className="font-sans text-xs text-cream-muted leading-relaxed font-light">
                  Reset the interactive diagnostics to explore other personalized scent combinations and custom profile paths.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0 justify-end">
                <button
                  onClick={handleReset}
                  className="flex items-center justify-center gap-1 bg-transparent hover:bg-gold/5 text-cream-muted hover:text-gold px-4 py-3.5 text-xs font-bold tracking-widest uppercase transition-colors border border-gold/15 hover:border-gold/30 cursor-pointer rounded-none duration-300"
                  id="quiz-btn-restart"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Diagnostics Reset</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
