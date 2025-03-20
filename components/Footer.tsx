import Link from "next/link";
import { School, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, GraduationCap, BookOpen } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const regularCourses = [
    { name: "BCA", path: "/courses/bca" },
    { name: "PGDCA", path: "/courses/pgdca" },
    { name: "DCA", path: "/courses/dca" },
  ];
  
  // const distanceCourses = [
  //   { name: "BCA", path: "/courses/bca_distance" },
  //   { name: "BA", path: "/courses/ba" },
  //   { name: "B.Com", path: "/courses/bcom" },
  //   { name: "MA", path: "/courses/ma" },
  //   { name: "MSc.(Maths)", path: "/courses/msc" },
  //   { name: "MSW", path: "/courses/msw" },
  //   { name: "M.Com", path: "/courses/mcom" },
  //   { name: "MCA", path: "/courses/mca" },
  //   { name: "MBA", path: "/courses/mba" },
  // ];

  return (
    <footer className="bg-gradient-to-b from-card to-card/95 text-card-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* About - 4 columns */}
          <div className="lg:col-span-4">
            <div className="flex items-center mb-6 group">
              <Image 
                src={"logo.png"}
                width={"60"}
                height={"60"}
                alt="logo"
              />
              <div className="ml-3">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  Subhash Academy
                </span>
                <p className="text-sm font-medium text-muted-foreground">College of IT & Management</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Subhash Academy is committed to providing quality education and shaping the future leaders of tomorrow through innovative teaching methods and industry-relevant curriculum.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-200"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-primary" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Gallery", "Infrastructure", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center"
                  >
                    <span className="hover:translate-x-1 transition-transform duration-200 inline-block">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regular Courses - 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <GraduationCap className="h-5 w-5 mr-2 text-primary" />
              Courses
            </h3>
            <ul className="space-y-2">
              {regularCourses.map((course) => (
                <li key={course.name}>
                  <Link
                    href={course.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <span className="hover:translate-x-1 transition-transform duration-200 inline-block">
                      {course.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Distance Courses - 3 columns
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <GraduationCap className="h-5 w-5 mr-2 text-primary" />
              Distance Learning
            </h3>
            <ul className="space-y-2">
              {distanceCourses.map((course) => (
                <li key={course.name}>
                  <Link
                    href={course.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <span className="hover:translate-x-1 transition-transform duration-200 inline-block">
                      {course.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Contact Section */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="ml-3 text-muted-foreground">
                Awas Vikas Colony, Chhibramau, Kannauj, Uttar Pradesh, 209721, India
              </span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="ml-3 text-muted-foreground">+91 9335 9390 00</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="ml-3 text-muted-foreground">subhashacademy@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            1998 - {new Date().getFullYear()} © Subhash Academy. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/developer-info" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Developer-Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}