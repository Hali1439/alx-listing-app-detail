export interface CardProps {
  image?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
}

// interfaces/index.ts

export interface Address {
  city: string;
  country: string;
}

export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface PropertyProps {
  name: string;
  image: string;
  description: string;
  rating: number;
  address: Address;
  category: string[];         // amenities
  price: number;
  reviews: Review[];
}
