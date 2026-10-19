export type ExperienceCategory = 'intimos' | 'rebeldia' | 'compartir' | 'empresariales';

export interface Experience {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: ExperienceCategory;
  categoryLabel: string;
  objective?: string;
  description: string;
  participants: string;
  duration: string;
  included?: string[];
  locations: string[];
  image: string;
  featured?: boolean;
  corporateRoi?: string;
}

export interface EventSpace {
  name: string;
  capacity: string;
  type: string;
  description?: string;
}

export interface HotelLocation {
  id: string;
  name: string;
  slug: string;
  region: string;
  environment: string;
  tagline: string;
  description: string;
  features: string[];
  eventSpaces?: EventSpace[];
  capacityTotal?: string;
  idealFor?: string[];
  url: string;
  image: string;
}

export interface ContactFormData {
  nombre: string;
  email: string;
  telefono: string;
  motivo: string;
  fecha?: string;
  asistentes?: string;
  mensaje: string;
  website_hp?: string;
  acepta_privacidad: boolean;
}
