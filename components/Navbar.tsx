"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { 
  School, 
  Menu, 
  X, 
  ChevronDown,
  Home,
  Info,
  BookOpen,
  Image,
  Building,
  FileText,
  User,
  Phone
} from "lucide-react";

const courses = [
  { name: "BCA", slug: "bca" },
  { name: "PGDCA", slug: "pgdca" },
  { name: "ADCA", slug: "adca" },
  { name: "DCA", slug: "dca" },
  { name: "B.Com", slug: "bcom" },
  { name: "M.Com", slug: "mcom" },
  { name: "MCA", slug: "mca" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCourses, setShowCourses] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) setShowCourses(false);
  };

  const toggleCourses = () => {
    setShowCourses(!showCourses);
  };

  const navItems = [
    { name: "Home", href: "/", icon: <Home className="h-4 w-4 mr-1" /> },
    { name: "About Us", href: "/about", icon: <Info className="h-4 w-4 mr-1" /> },
    { 
      name: "Courses", 
      href: "#", 
      icon: <BookOpen className="h-4 w-4 mr-1" />,
      dropdown: true,
      items: courses.map(course => ({
        name: course.name,
        href: `/courses/${course.slug}`
      }))
    },
    { name: "Gallery", href: "/gallery", icon: <Image className="h-4 w-4 mr-1" /> },
    { name: "Infrastructure", href: "/infrastructure", icon: <Building className="h-4 w-4 mr-1" /> },
    { name: "Admission Enquiry", href: "/admission-enquiry", icon: <FileText className="h-4 w-4 mr-1" /> },
    { name: "Director Message", href: "/director-message", icon: <User className="h-4 w-4 mr-1" /> },
    { name: "Contact Us", href: "/contact", icon: <Phone className="h-4 w-4 mr-1" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
              width={60}
                src="/logo.png"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => 
              !item.dropdown ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium flex items-center",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ) : (
                <div key={item.name} className="relative group">
                  <button
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium flex items-center",
                      pathname.startsWith('/courses')
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    {item.icon}
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-card border hidden group-hover:block">
                    <div className="py-1">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
            <div className="ml-3">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => 
            !item.dropdown ? (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium flex items-center",
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
                onClick={toggleMenu}
              >
                {item.icon}
                {item.name}
              </Link>
            ) : (
              <div key={item.name}>
                <button
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between",
                    pathname.startsWith('/courses')
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-accent hover:text-accent-foreground"
                  )}
                  onClick={toggleCourses}
                >
                  <span className="flex items-center">
                    {item.icon}
                    {item.name}
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${showCourses ? 'rotate-180' : ''}`} />
                </button>
                {showCourses && (
                  <div className="pl-6 mt-1 space-y-1">
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                        onClick={toggleMenu}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </nav>
  );
}