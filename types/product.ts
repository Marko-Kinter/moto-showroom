export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  features: Record<string, string>; 
  images: string[];
  presentation_images?: string[];
  createdAt: string;
  updatedAt: string;
};

export interface Motorcycle {
  id: string
  name: string
  slug: string
  description: string
  presentation_images?: string[]
  images: string[]
  features: Record<string, string>
}

export interface MotorcycleDetailProps {
  motorcycle: Motorcycle
}

export type ProductFormData = {
  name: string;
  description: string;
  features: { key: string; value: string }[];
  images: File[];
  presentation_images: File[];
};
