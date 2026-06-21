export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  category: string;
  rating: number;
}

export const testimonials: TestimonialItem[] = [];
