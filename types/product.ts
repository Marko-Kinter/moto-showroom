export type Product = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  features: Record<string, string>; 
  images: string[];
  createdAt: string;
  updatedAt: string;
};

export type ProductFormData = {
  name: string;
  description?: string;
  features: { key: string; value: string }[];
  images: File[];
};
