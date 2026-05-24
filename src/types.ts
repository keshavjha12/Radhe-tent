export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  subFeatures: string[];
  imageUrl: string;
  basePrice: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'wedding' | 'lighting' | 'stage' | 'traditional' | 'sound';
  imageUrl: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  date: string;
  rating: number;
  text: string;
  eventType: string;
}

export interface BookingSubmission {
  name: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  message: string;
  estimatedGuests: number;
  packageType: 'standard' | 'premium' | 'royal' | 'custom';
}
