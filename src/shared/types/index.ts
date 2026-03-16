export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  image?: string;
}
