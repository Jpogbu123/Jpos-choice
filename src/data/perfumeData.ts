import { Perfume, QuizQuestion, StackRecommendation } from '../types';

export const PERFUME_CATALOG: Perfume[] = [
  {
    id: 'gourmand-vanilla',
    name: 'Vanilla Nectar',
    tagline: 'Decadently warm, syrupy and rich.',
    category: 'The Gourmand',
    description: 'An intoxicating amber gourmand that wraps the skin in a cloud of velvety sweetness. Crafted for those who love intense warmth, this composition behaves like an edible embrace, leaving a persistent trail of Madagascar orchids and toasted caramel.',
    notes: ['Madagascar Vanilla', 'Toasted Tonka Bean', 'Heavy Amber', 'Crushed Almonds'],
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600&h=600',
    size: '50ml / 1.7 fl. oz.',
    concentration: 'Extrait de Parfum',
    price: '$145'
  },
  {
    id: 'gourmand-cafe',
    name: 'Cafe Noir',
    tagline: 'Roasted espresso, dark cacao, and rich caramel.',
    category: 'The Gourmand',
    description: 'A dark, addictive olfactory morning ritual captured in a glass. Fresh roasted Arabica beans meet a thick drizzle of salted caramel, softened by velvet milk-froth accords and Venezuelan cacao bean absolute.',
    notes: ['Arabica Coffee', 'Dark Cacao Absolute', 'Salted Caramel', 'Fresh Hazelnut'],
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=600&h=600',
    size: '50ml / 1.7 fl. oz.',
    concentration: 'Extrait de Parfum',
    price: '$150'
  },
  {
    id: 'woody-santal',
    name: 'Santal Imperial',
    tagline: 'Rich, deeply grounded and bold.',
    category: 'The Woody',
    description: 'A creamy, dry woody portrait that asserts immediate authority and sophisticated luxury. Using superior organic cedar and premium sandalwood resins, it settles into a robust, smoky signature that adapts perfectly to warm body chemistry.',
    notes: ['Australian Sandalwood', 'Virginia Cedar', 'Raw Leather', 'Smoked Cardamom'],
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=600&h=600',
    size: '50ml / 1.7 fl. oz.',
    concentration: 'Eau de Parfum',
    price: '$135'
  },
  {
    id: 'woody-oud',
    name: 'Oud Majestueux',
    tagline: 'Smoky oud wood, warm patchouli, and rich leather.',
    category: 'The Woody',
    description: 'A majestic, deeply complex oriental woody creation that commands instant reverence. Hand-selected Cambodian Oud is laced with golden saffron threads, rich Indonesian patchouli leaves, and a refined smoked vetiver base.',
    notes: ['Cambodian Oud Wood', 'Dark Indonesian Patchouli', 'Laotian Saffron', 'Smoked Vetiver'],
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600&h=600',
    size: '50ml / 1.7 fl. oz.',
    concentration: 'Extrait de Parfum',
    price: '$165'
  },
  {
    id: 'floral-rose',
    name: 'Satin Rose',
    tagline: 'Elegant, modern flowery romanticism.',
    category: 'The Floral',
    description: 'A crisp, dewy rose that avoids dusty clichés. This is a radiant, fresh-cut petal fantasy paired with a clean white musk and lychee glow, blooming gracefully in any environment while maintaining a sheer, alluring silkiness.',
    notes: ['Damask Rose', 'Peony Petals', 'White Musk', 'Lychee Pulp'],
    image: 'https://images.unsplash.com/photo-1585211969224-3e9929861592?auto=format&fit=crop&q=80&w=600&h=600',
    size: '50ml / 1.7 fl. oz.',
    concentration: 'Eau de Parfum',
    price: '$140'
  },
  {
    id: 'floral-jasmin',
    name: 'Jardin de Jasmin',
    tagline: 'Sweet white flowers, nocturnal jasmine, and orange blossom.',
    category: 'The Floral',
    description: 'An ethereal walk through a midnight botanical greenhouse. Brimming with rare, night-blooming white jasmine, sweet Egyptian neroli bud extracts, and a soft, shielding base of sheer mineral amber.',
    notes: ['Night-Blooming Jasmin', 'Egyptian Neroli Absolute', 'Orange Blossom Water', 'Mineral Amber'],
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=600&h=600',
    size: '50ml / 1.7 fl. oz.',
    concentration: 'Eau de Parfum',
    price: '$138'
  },
  {
    id: 'fresh-soleil',
    name: 'Soleil Vert',
    tagline: 'Clean, ultra-fresh citrus brilliance.',
    category: 'The Fresh',
    description: 'An energetic burst of sharp Italian bergamot, effervescent sea salt breeze, and cooling crushed mint. Fortified with marine minerals to provide crisp, revitalizing olfactory relief that refuses to dilute even under high heat.',
    notes: ['Calabrian Bergamot', 'Sea Salt Spray', 'Spearmint Bark', 'White Ginger'],
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=600&h=600',
    size: '50ml / 1.7 fl. oz.',
    concentration: 'Eau de Fraîche / Intense',
    price: '$120'
  },
  {
    id: 'fresh-neroli',
    name: 'Neroli Sauvage',
    tagline: 'Bitter wild orange leaf, refreshing ice, and white cedar.',
    category: 'The Fresh',
    description: 'An invigorating blast of crisp wild orange tree twigs and high-altitude alpine air. Crushed basil leaves and wet river pebbles anchor the sparkling top notes, giving a clean, cold clarity that stays energetic.',
    notes: ['Wild Petitgrain', 'Frozen Lemon Rind', 'Mashed Sweet Basil', 'White Himalayan Cedar'],
    image: 'https://images.unsplash.com/photo-1528740564265-2d8c5cca7f41?auto=format&fit=crop&q=80&w=600&h=600',
    size: '50ml / 1.7 fl. oz.',
    concentration: 'Eau de Cologne / Intense',
    price: '$125'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    text: 'How would you prefer your scent presence to be felt by those around you?',
    options: [
      { text: 'A deep, grounding warmth that speaks of confidence, vintage study desks, and quiet luxury', value: 'woody' },
      { text: 'A burst of crisp, vibrant air and sea-spray energy that conveys a modern, high-performance clean', value: 'citrus' },
      { text: 'A delicate, romantic veil of spring humidity and freshly budding garden petals', value: 'floral' },
      { text: 'An incredibly rich, comforting sweetness that feels like warm cashmere, vanilla pods, and gold honey', value: 'gourmand' }
    ]
  },
  {
    id: 2,
    text: 'Where will this scent custom stack accompany you most?',
    options: [
      { text: 'Climate-controlled boardrooms, offices, or creative galleries', value: 'office' },
      { text: 'Warm outdoor breezes, active events, or humid climates', value: 'outdoor' },
      { text: 'Chic intimate evening dates, dinners, or cozy lounges', value: 'evening' },
      { text: 'Elegant casual daytime gatherings or classic Sunday brunch', value: 'daytime' }
    ]
  },
  {
    id: 3,
    text: 'How does your skin chemistry usually interact with fragrance?',
    options: [
      { text: 'My skin is dry and literally absorbs perfume within hours', value: 'absorb' },
      { text: 'Fragrances tend to turn sour, sharp, or synthetic after activity', value: 'distort' },
      { text: 'Strong scents quickly feel heavy or chemical; I need sheer weightless trails', value: 'sheer' }
    ]
  },
  {
    id: 4,
    text: 'If you were to disappear into a perfect afternoon destination, where would we find you?',
    options: [
      { text: 'Wandering through an ancient library with dark wooden shelves, cracked leather seats, and soft amber tea', value: 'wood_env' },
      { text: 'Walking along a rugged, wind-swept coastline, enjoying cold sea salt breeze and a fresh squeezed citrus twist', value: 'mint_env' },
      { text: 'Strolling in a hidden botanical glasshouse after a summer rain, surrounded by wet blooming roses and green ivy', value: 'flower_env' },
      { text: 'Cozying up in a warm subterranean bakery, wrapped in a heavy winter knit with fresh espresso and caramel syrup', value: 'sweet_env' }
    ]
  },
  {
    id: 5,
    text: 'What level of scent projection and lasting power fits your lifestyle?',
    options: [
      { text: 'Extrait Concentration: A bold, long-lived statement trail that commands room focus', value: 'extrait' },
      { text: 'Eau de Parfum: A modern, radiant bubble that leaves a delightful trace', value: 'edp' },
      { text: 'Intense Mist & Oil: A highly intimate, whispering skin layer that feels fully natural', value: 'mist' }
    ]
  }
];

export function getRecommendation(answers: Record<number, string>): StackRecommendation {
  // Determine dominant recommendation category based on Q1 preference primary goal, with Q4 environment as a secondary decider
  const scentPreference = answers[1] || 'citrus';
  const environment = answers[4] || 'mint_env';

  // Scent selection priority hierarchy
  let targetType = scentPreference;
  if (!['woody', 'citrus', 'floral', 'gourmand'].includes(targetType)) {
    // If invalid mapping, tie break using Q4
    if (environment === 'wood_env') targetType = 'woody';
    else if (environment === 'flower_env') targetType = 'floral';
    else if (environment === 'sweet_env') targetType = 'gourmand';
    else targetType = 'citrus';
  }

  if (targetType === 'woody') {
    return {
      title: 'THE WOODY (EARTH/BOLD) ARCHITECTURE',
      vibe: 'Grounded, sophisticated notes like sandalwood, cedarwood, or oud',
      layers: [
        {
          type: 'Layer 1: The Hydrator (Body Oil)',
          name: 'The Woody Hydrating Body Oil',
          notes: 'Preps with warm cedarwood and organic lipids (Scent example: clean, warm cedar & dry tree bark)',
          description: 'Preps the skin to ensure the fragrance doesn\'t evaporate into dry pores.',
          icon: 'GlassWater'
        },
        {
          type: 'Layer 2: The Anchor (Perfume Oil)',
          name: 'The Woody Sandalwood Perfume Oil',
          notes: 'Anchored with premium sandalwood and warm ambergris (Scent example: thick, luxurious, slow-releasing wood)',
          description: 'Provides the long-lasting foundation that sits close to the pulse points.',
          icon: 'Anchor'
        },
        {
          type: 'Layer 3: The Bridge (Body Spray/Mist)',
          name: 'The Woody Atmospheric Body Mist',
          notes: 'Bridged with subtle saffron and pine needle spray (Scent example: a fresh, warm, breezy forest trail)',
          description: 'Creates an immediate, fresh scent cloud that covers a wider surface area.',
          icon: 'Wind'
        },
        {
          type: 'Layer 4: The Crown (Eau de Parfum)',
          name: 'The Woody Signature Eau de Parfum',
          notes: 'Crowned with rich Australian sandalwood, cedar, and oud (Scent example: sophisticated smoky leather & dry paper)',
          description: 'The high-performance finish that projects your signature to everyone around you.',
          icon: 'Crown'
        }
      ],
      tip: 'Do not rub your wrists after applying! Friction heats the delicate woody resins too quickly, breaking down the complex natural cedar structure.'
    };
  }

  if (targetType === 'floral') {
    return {
      title: 'THE FLORAL (FLOWERY/ELEGANT) INTRIGUE',
      vibe: 'Romantic and fresh notes like rose, jasmine, or lily',
      layers: [
        {
          type: 'Layer 1: The Hydrator (Body Oil)',
          name: 'The Floral Hydrating Body Oil',
          notes: 'Preps with squalane and wild orchid extracts (Scent example: soothing light botanical cream)',
          description: 'Preps the skin to ensure the fragrance doesn\'t evaporate into dry pores.',
          icon: 'GlassWater'
        },
        {
          type: 'Layer 2: The Anchor (Perfume Oil)',
          name: 'The Floral Jasmine Perfume Oil',
          notes: 'Anchored with night-blooming white jasmine essence (Scent example: rich, sweet, natural white flower)',
          description: 'Provides the long-lasting foundation that sits close to the pulse points.',
          icon: 'Anchor'
        },
        {
          type: 'Layer 3: The Bridge (Body Spray/Mist)',
          name: 'The Floral Orange Blossom Scent Mist',
          notes: 'Bridged with fresh neroli and orange blossom spray (Scent example: dewy, refreshing morning petals)',
          description: 'Creates an immediate, fresh scent cloud that covers a wider surface area.',
          icon: 'Wind'
        },
        {
          type: 'Layer 4: The Crown (Eau de Parfum)',
          name: 'The Floral Signature Eau de Parfum',
          notes: 'Crowned with Damask rose, velvet peony, and clean white musk (Scent example: modern romantic rose bouquet)',
          description: 'The high-performance finish that projects your signature to everyone around you.',
          icon: 'Crown'
        }
      ],
      tip: 'Mist the Floral Crown layer directly onto clothing shoulders and hair so the delicate rose petals perform in cooler ambient temps.'
    };
  }

  if (targetType === 'gourmand') {
    return {
      title: 'THE GOURMAND (VANILLA/SWEET) COCKTAIL',
      vibe: 'Warm, edible, and comforting notes like vanilla, chocolate, or caramel',
      layers: [
        {
          type: 'Layer 1: The Hydrator (Body Oil)',
          name: 'The Gourmand Sweet Almond Body Oil',
          notes: 'Preps with sweet almond lipids and jojoba seed (Scent example: rich, buttery roasted nut)',
          description: 'Preps the skin to ensure the fragrance doesn\'t evaporate into dry pores.',
          icon: 'GlassWater'
        },
        {
          type: 'Layer 2: The Anchor (Perfume Oil)',
          name: 'The Gourmand Vanilla Perfume Oil',
          notes: 'Anchored with pure Madagascar vanilla absolute (Scent example: warm, sweet, edible vanilla bean)',
          description: 'Provides the long-lasting foundation that sits close to the pulse points.',
          icon: 'Anchor'
        },
        {
          type: 'Layer 3: The Bridge (Body Spray/Mist)',
          name: 'The Gourmand Caramel & Pistachio Scent Mist',
          notes: 'Bridged with salted caramel and warm brown sugar (Scent example: delicious, warm, sugary bakery breeze)',
          description: 'Creates an immediate, fresh scent cloud that covers a wider surface area.',
          icon: 'Wind'
        },
        {
          type: 'Layer 4: The Crown (Eau de Parfum)',
          name: 'The Gourmand Espresso & Vanilla Eau de Parfum',
          notes: 'Crowned with rich Arabica coffee and warm toasted tonka resins (Scent example: rich comforting dark chocolate, mocha, and heavy caramel)',
          description: 'The high-performance finish that projects your signature to everyone around you.',
          icon: 'Crown'
        }
      ],
      tip: 'Wait exactly 60 seconds after applying the Anchor layer before spraying the Crown so the rich cacao and vanilla can interlock cleanly.'
    };
  }

  // Fallback or Citrus Preference
  return {
    title: 'THE FRESH (CITRUS/CLEAN) SPECTACLE',
    vibe: 'Sharp, energetic notes like bergamot, sea salt, or lemon',
    layers: [
      {
        type: 'Layer 1: The Hydrator (Body Oil)',
        name: 'The Fresh Sea Mineral Body Oil',
        notes: 'Preps with maritime pine and light sea minerals (Scent example: fresh, clean, salty ocean air)',
        description: 'Preps the skin to ensure the fragrance doesn\'t evaporate into dry pores.',
        icon: 'GlassWater'
      },
      {
        type: 'Layer 2: The Anchor (Perfume Oil)',
        name: 'The Fresh Sea Musk Perfume Oil',
        notes: 'Anchored with mineral ambergris and white cedar woods (Scent example: crisp, clean skin after a swim)',
        description: 'Provides the long-lasting foundation that sits close to the pulse points.',
        icon: 'Anchor'
      },
      {
        type: 'Layer 3: The Bridge (Body Spray/Mist)',
        name: 'The Fresh Mint & Basil Scent Mist',
        notes: 'Bridged with crushed spearmint leaves and wild eucalyptus (Scent example: cooling, icy herbal splash)',
        description: 'Creates an immediate, fresh scent cloud that covers a wider surface area.',
        icon: 'Wind'
      },
      {
        type: 'Layer 4: The Crown (Eau de Parfum)',
        name: 'The Fresh Citrus Signature Eau de Parfum',
        notes: 'Crowned with Italian bergamot, key lime, and fresh ginger (Scent example: effervescent, sparkling, zesty citrus fruit)',
        description: 'The high-performance finish that projects your signature to everyone around you.',
        icon: 'Crown'
      }
    ],
    tip: 'Apply the Citrus Crown right after taking a warm shower when skin warmth and hydration levels are elevated to secure maximum freshness.'
  };
}
