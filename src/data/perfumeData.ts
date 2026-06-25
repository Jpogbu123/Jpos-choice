import { Perfume, QuizQuestion, StackRecommendation } from '../types';

export const PERFUME_CATALOG: Perfume[] = [
  {
    id: 'gourmand-vanilla',
    name: 'Weekend Berries',
    tagline: 'Vibrant, fruity, and playful.',
    category: 'Floral Fruity',
    description: 'A bright and sparkling fragrance that captures the essence of a sun-drenched getaway, blending lush red berries with delicate floral undertones for a refreshing and uplifting experience.',
    notes: ['Wild Raspberries', 'Sugared Strawberries', 'White Rose Petals', 'Sparkling Musk'],
    image: '/weekend-berries.jpg',
    size: '50ml / 1.7 fl. oz.',
    concentration: 'Extrait de Parfum',
    price: '₦5,500',
    sillage: 'Long-Lasting'
  },
  {
    id: 'gourmand-cafe',
    name: 'Boss Orange',
    tagline: 'Spontaneous, passionate, and energetic.',
    category: 'Citrusy-Woody',
    description: 'A powerful blend that opens with the crispness of fresh apple and warm coriander, evolving into a heart of frankincense and Sichuan pepper, and settling into a soulful base of vanilla and Bubinga wood.',
    notes: ['Red Apple', 'Coriander', 'Incense', 'Sichuan Pepper', 'Vanilla', 'Woodsy Notes'],
    image: '/boss-orange.jpg',
    size: '100ml / 3.3 fl. oz.',
    concentration: 'Eau de Parfum',
    price: '₦10,000',
    sillage: 'Moderate to Long-Lasting'
  },
  {
    id: 'woody-santal',
    name: 'Dunhill Desire for Men',
    tagline: 'Spontaneous, passionate, and energetic.',
    category: 'The Woody',
    description: 'This powerful blend opens with the crispness of fresh apple and warm coriander, evolving into a heart of frankincense and Sichuan pepper, and settling into a soulful base of vanilla and Bubinga wood.',
    notes: ['Red Apple', 'Coriander', 'Incense', 'Sichuan Pepper', 'Vanilla', 'Woodsy Notes'],
    image: '/dunhill-desire.jpg',
    size: '100ml / 3.3 fl. oz.',
    concentration: 'Eau de Parfum',
    price: '₦10,000',
    sillage: 'Moderate to Long-Lasting'
  },
  {
    id: 'woody-oud',
    name: 'Scandal by Jean Paul Gaultier',
    tagline: 'Bold, Honey-Sweet, Sophisticated, Provocative.',
    category: 'The Woody',
    description: 'This fragrance is an elegant, powerhouse blend that opens with the freshness of blood orange and gardenia, transitions into a rich heart of honey, and settles into a warm, sensual base of patchouli.',
    notes: ['Blood Orange', 'Gardenia', 'Honey', 'Patchouli'],
    image: '/scandal.jpg',
    size: '100ml / 3.3 fl. oz.',
    concentration: 'Eau de Parfum',
    price: '₦10,000',
    sillage: 'Powerful and Long-Lasting'
  },
  {
    id: 'woody-black-power',
    name: 'Black Power',
    tagline: 'Bold, mysterious, and commanding.',
    category: 'The Woody',
    description: 'An evocative fragrance by Hanna\'s Secret that commands attention, blending deep intensity with sophisticated elegance. This scent is designed for those who exude natural authority and timeless strength.',
    notes: ['Dark Musk', 'Amber', 'Cedarwood', 'Black Pepper', 'Bergamot'],
    image: '/black-power.jpg',
    size: '50ml / 1.7 fl. oz.',
    concentration: 'Eau de Parfum',
    price: '₦7,000',
    sillage: 'Intense and Long-Lasting'
  },
  {
    id: 'floral-sugar',
    name: 'Sugar',
    tagline: 'Original, Fresh',
    category: 'The Floral',
    description: 'An artisanal fragrance compounded in-house, designed to maintain its peak olfactory profile for 12+ after the initial application.',
    notes: ['Fresh', 'Earthly'],
    image: '/sugar.jpg',
    size: '50ml / 1.7 fl. oz.',
    concentration: 'Eau de Parfum',
    price: '₦5,500',
    sillage: 'Long-lasting'
  },
  {
    id: 'fresh-soleil',
    name: 'Soleil Vert',
    tagline: 'Fresh citrus, mint, and sea salt.',
    category: 'The Fresh',
    description: 'A clean and energizing burst of fresh Italian citrus, cool mint, and a touch of sea salt that stays fresh all day.',
    notes: ['Calabrian Bergamot', 'Sea Salt Spray', 'Spearmint Bark', 'White Ginger'],
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=600&h=600',
    size: '50ml / 1.7 fl. oz.',
    concentration: 'Eau de Fraîche / Intense',
    price: '$120'
  },
  {
    id: 'fresh-neroli',
    name: 'Neroli Sauvage',
    tagline: 'Fresh orange leaf, lemon, and white wood.',
    category: 'The Fresh',
    description: 'A refreshing scent of wild orange leaves and cool air, mixed with fresh lemon and a clean wood base.',
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
      { text: 'A deep, warm wood scent that smells like confidence and quiet luxury', value: 'woody' },
      { text: 'A burst of fresh, clean citrus and sea air that feels energetic and light', value: 'citrus' },
      { text: 'A delicate, romantic veil of fresh roses and spring petals', value: 'floral' },
      { text: 'A sweet, comforting scent like warm vanilla, honey, and caramel', value: 'gourmand' }
    ]
  },
  {
    id: 2,
    text: 'Where will you wear this perfume stack the most?',
    options: [
      { text: 'At the office, in business meetings, or professional settings', value: 'office' },
      { text: 'Outdoors, during outdoor events, or in warm weather', value: 'outdoor' },
      { text: 'On intimate evening dates, dinners, or cozy lounges', value: 'evening' },
      { text: 'During casual daytime gatherings or classic Sunday brunch', value: 'daytime' }
    ]
  },
  {
    id: 3,
    text: 'How does your skin usually react to perfume?',
    options: [
      { text: 'My skin is dry and perfume fades within a few hours', value: 'absorb' },
      { text: 'Scents tend to change or smell sharp after a while', value: 'distort' },
      { text: 'Strong scents quickly feel heavy; I prefer a light, subtle scent', value: 'sheer' }
    ]
  },
  {
    id: 4,
    text: 'Where is your perfect afternoon escape?',
    options: [
      { text: 'In a quiet library with wooden shelves, leather chairs, and warm tea', value: 'wood_env' },
      { text: 'Walking along a cool coastline with a salty sea breeze and fresh lemon', value: 'mint_env' },
      { text: 'Strolling in a blooming garden after rain, surrounded by roses and green ivy', value: 'flower_env' },
      { text: 'Cozying up in a warm bakery with fresh coffee and caramel pastries', value: 'sweet_env' }
    ]
  },
  {
    id: 5,
    text: 'What level of scent strength matches your lifestyle?',
    options: [
      { text: 'Bold and long-lasting: A scent that fills the room and lasts all day', value: 'extrait' },
      { text: 'Modern and radiant: A pleasant scent bubble that people nearby will notice', value: 'edp' },
      { text: 'Subtle and personal: A light, clean scent that sits close to the skin', value: 'mist' }
    ]
  }
];

export function getRecommendation(answers: Record<number, string>): StackRecommendation {
  const scentPreference = answers[1] || 'citrus';
  const environment = answers[4] || 'mint_env';

  let targetType = scentPreference;
  if (!['woody', 'citrus', 'floral', 'gourmand'].includes(targetType)) {
    if (environment === 'wood_env') targetType = 'woody';
    else if (environment === 'flower_env') targetType = 'floral';
    else if (environment === 'sweet_env') targetType = 'gourmand';
    else targetType = 'citrus';
  }

  if (targetType === 'woody') {
    return {
      title: 'THE WOODY PROFILE',
      vibe: 'Warm, dry notes like sandalwood, cedarwood, or oud',
      layers: [
        {
          type: 'Layer 1: Moisturizer (Body Oil)',
          name: 'Woody Moisturizing Body Oil',
          notes: 'Warm cedarwood base (Scent: clean, warm cedar & dry wood)',
          description: 'Hydrates the skin to help the fragrance last longer.',
          icon: 'GlassWater'
        },
        {
          type: 'Layer 2: Scent Anchor (Perfume Oil)',
          name: 'Woody Sandalwood Perfume Oil',
          notes: 'Premium sandalwood and amber (Scent: rich, slow-releasing wood)',
          description: 'Creates a long-lasting base that sits close to the skin.',
          icon: 'Anchor'
        },
        {
          type: 'Layer 3: Scent Bridge (Body Spray/Mist)',
          name: 'Woody Fresh Body Mist',
          notes: 'Subtle saffron and pine (Scent: a warm, breezy forest path)',
          description: 'Spreads a fresh scent cloud around you.',
          icon: 'Wind'
        },
        {
          type: 'Layer 4: Final Touch (Eau de Parfum)',
          name: 'Woody Signature Eau de Parfum',
          notes: 'Australian sandalwood, cedar, and oud (Scent: smoky leather and rich wood)',
          description: 'Finishes the scent layering for maximum reach.',
          icon: 'Crown'
        }
      ],
      tip: 'Do not rub your wrists after applying! Friction makes the scent fade faster by breaking down the cedar wood notes.'
    };
  }

  if (targetType === 'floral') {
    return {
      title: 'THE FLORAL PROFILE',
      vibe: 'Fresh, romantic notes like rose, jasmine, or orange blossom',
      layers: [
        {
          type: 'Layer 1: Moisturizer (Body Oil)',
          name: 'Floral Moisturizing Body Oil',
          notes: 'Wild orchid extracts (Scent: light, clean flower petals)',
          description: 'Hydrates the skin to help the fragrance last longer.',
          icon: 'GlassWater'
        },
        {
          type: 'Layer 2: Scent Anchor (Perfume Oil)',
          name: 'Floral Jasmine Perfume Oil',
          notes: 'Night-blooming jasmine (Scent: sweet, natural white flowers)',
          description: 'Creates a long-lasting base that sits close to the skin.',
          icon: 'Anchor'
        },
        {
          type: 'Layer 3: Scent Bridge (Body Spray/Mist)',
          name: 'Floral Orange Blossom Scent Mist',
          notes: 'Fresh neroli and orange blossom (Scent: dewy morning petals)',
          description: 'Spreads a fresh scent cloud around you.',
          icon: 'Wind'
        },
        {
          type: 'Layer 4: Final Touch (Eau de Parfum)',
          name: 'Floral Signature Eau de Parfum',
          notes: 'Damask rose, peony, and clean white musk (Scent: fresh romantic roses)',
          description: 'Finishes the scent layering for maximum reach.',
          icon: 'Crown'
        }
      ],
      tip: 'Spray your perfume onto your clothes and hair to make the light floral notes last even longer.'
    };
  }

  if (targetType === 'gourmand') {
    return {
      title: 'THE GOURMAND PROFILE',
      vibe: 'Warm, sweet notes like vanilla, chocolate, or caramel',
      layers: [
        {
          type: 'Layer 1: Moisturizer (Body Oil)',
          name: 'Gourmand Sweet Almond Body Oil',
          notes: 'Sweet almond and jojoba (Scent: warm, buttery roasted almond)',
          description: 'Hydrates the skin to help the fragrance last longer.',
          icon: 'GlassWater'
        },
        {
          type: 'Layer 2: Scent Anchor (Perfume Oil)',
          name: 'Gourmand Vanilla Perfume Oil',
          notes: 'Pure vanilla (Scent: warm, sweet vanilla bean)',
          description: 'Creates a long-lasting base that sits close to the skin.',
          icon: 'Anchor'
        },
        {
          type: 'Layer 3: Scent Bridge (Body Spray/Mist)',
          name: 'Gourmand Caramel Scent Mist',
          notes: 'Salted caramel and brown sugar (Scent: warm, sweet bakery scent)',
          description: 'Spreads a fresh scent cloud around you.',
          icon: 'Wind'
        },
        {
          type: 'Layer 4: Final Touch (Eau de Parfum)',
          name: 'Gourmand Espresso & Vanilla Eau de Parfum',
          notes: 'Roasted coffee and warm vanilla (Scent: dark chocolate, coffee, and caramel)',
          description: 'Finishes the scent layering for maximum reach.',
          icon: 'Crown'
        }
      ],
      tip: 'Wait one minute after applying the perfume oil before spraying the perfume to let the vanilla and chocolate notes blend perfectly.'
    };
  }

  // Fallback or Citrus Preference
  return {
    title: 'THE FRESH PROFILE',
    vibe: 'Clean, energetic notes like bergamot, sea salt, or lemon',
    layers: [
      {
        type: 'Layer 1: Moisturizer (Body Oil)',
        name: 'Fresh Sea Mineral Body Oil',
        notes: 'Maritime pine and light minerals (Scent: clean, salty ocean air)',
        description: 'Hydrates the skin to help the fragrance last longer.',
        icon: 'GlassWater'
      },
      {
        type: 'Layer 2: Scent Anchor (Perfume Oil)',
        name: 'Fresh Sea Musk Perfume Oil',
        notes: 'Clean amber and cedar wood (Scent: clean skin after a swim)',
        description: 'Creates a long-lasting base that sits close to the skin.',
        icon: 'Anchor'
      },
      {
        type: 'Layer 3: Scent Bridge (Body Spray/Mist)',
        name: 'Fresh Mint & Basil Scent Mist',
        notes: 'Spearmint leaves and wild eucalyptus (Scent: cooling, fresh herbal splash)',
        description: 'Spreads a fresh scent cloud around you.',
        icon: 'Wind'
      },
      {
        type: 'Layer 4: Final Touch (Eau de Parfum)',
        name: 'Fresh Citrus Signature Eau de Parfum',
        notes: 'Italian bergamot, key lime, and fresh ginger (Scent: sparkling, zesty citrus)',
        description: 'Finishes the scent layering for maximum reach.',
        icon: 'Crown'
      }
    ],
    tip: 'Apply the perfume right after taking a warm shower when your skin is warm and hydrated to keep the citrus fresh all day.'
  };
}
