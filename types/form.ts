export type ContactFormInput = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export type ContactFormEntry = ContactFormInput & {
  id: string;
  productId: string;
  createdAt: string;
};
