export interface Link {
  text: string;
  url: string;
}

export interface Product {
  id: number;
  title: string;
  author: string;
  description: string;
  price: number;
  sale: number | null;
  img: string;
  images: string[];
  sold: boolean;
}

type ButtonState = 'cart' | 'loading' | 'idle';
