/**
 * Types & Interfaces for JPO's Choice Fragrance Boutique
 */

export interface Perfume {
  id: string;
  name: string;
  tagline: string;
  category: 'The Gourmand' | 'The Woody' | 'The Floral' | 'The Fresh';
  description: string;
  notes: string[];
  image: string;
  size: string;
  concentration: string;
  price: string;
  sillage?: string;
}

export interface QuizOption {
  text: string;
  value: string;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: QuizOption[];
}

export interface StackLayer {
  type: string;
  name: string;
  notes: string;
  description: string;
  icon: string; // lucide icon name
}

export interface StackRecommendation {
  title: string;
  vibe: string;
  layers: StackLayer[];
  tip: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  size?: string;
  concentration?: string;
  quantity: number;
  isStackLayer?: boolean;
}

export interface OrderDetails {
  fullName: string;
  address: string;
  phone: string;
}

