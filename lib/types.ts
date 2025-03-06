export interface Course {
  id: string;
  title: string;
  slug: string;
  duration: string;
  fees: string;
  description: string;
  image: string;
}

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  createdAt: Date;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}