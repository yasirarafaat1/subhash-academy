import Link from "next/link";
import { School, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <School className="h-8 w-8 text-primary" />
              <div>
              <span className="ml-2 text-xl font-bold">Subhash Academy</span>
              <p className="text-s font-[300] pl-[7px]">College of IT & Management</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Subhash Academy is committed to providing quality education and shaping the future leaders of tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link>
              </li>
              <li>
                <Link href="/courses/bca" className="text-muted-foreground hover:text-primary">Courses</Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary">Gallery</Link>
              </li>
              <li>
                <Link href="/infrastructure" className="text-muted-foreground hover:text-primary">Infrastructure</Link>
              </li>
              <li>
                <Link href="/admission-enquiry" className="text-muted-foreground hover:text-primary">Admission Enquiry</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/dataPanel" className="text-muted-foreground hover:text-primary">Admin</Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/bca" className="text-muted-foreground hover:text-primary">Bachelor of Computer Applications (BCA)</Link>
              </li>
              <li>
                <Link href="/courses/bba" className="text-muted-foreground hover:text-primary">Post Graduate Diploma in Computer Application (PGDCA)</Link>
              </li>
              <li>
                <Link href="/courses/bsc" className="text-muted-foreground hover:text-primary">Advance Diploma in Computer Application (ADCA)</Link>
              </li>
              <li>
                <Link href="/courses/mba" className="text-muted-foreground hover:text-primary">Diploma in Computer Application (DCA)</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-muted-foreground">Awas Vikas Colony, Chhibramau, Kannauj, Uttar Pradesh, 209721 <br /> India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-muted-foreground">+91 9335 9390 00</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="text-muted-foreground"> subhashacademy@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
           1998 © {new Date().getFullYear()} Subhash Academy. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}