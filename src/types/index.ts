export interface User {
  id: string;
  email: string;
  full_name?: string;
}

export interface Hotel {
  id: string;
  name: string;
  description: string;
  location: string;
  address: string;
  star_rating: number;
  user_rating: number;
  thumbnail_url: string;
  created_at: string;
  updated_at: string;
  images: HotelImage[];
  amenities: Amenity[];
  prices: HotelPrice[];
}

export interface HotelImage {
  id: string;
  hotel_id: string;
  image_url: string;
  created_at: string;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  category: string;
  created_at: string;
}

export interface HotelPrice {
  id: string;
  hotel_id: string;
  provider: string;
  price: number;
  currency: string;
  booking_url: string;
  created_at: string;
  updated_at: string;
}

export interface SearchFilters {
  location: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  priceRange: [number, number];
  amenities: string[];
  rating?: number;
}

export interface Booking {
  id: string;
  userId: string;
  hotelId: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}