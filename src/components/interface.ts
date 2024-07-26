// src/types/index.ts
export interface Product {
  id: number;
  productName: string;
  image: string;
  price: string;
  rating: number;
  description: string;
  category: string;
  sold?: boolean;
}
