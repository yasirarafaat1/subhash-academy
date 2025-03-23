"use client"
import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { ThemeToggle } from './ThemeToggle';
import Image from 'next/image';

import { 
  School, 
  Menu, 
  X, 
  ChevronDown,
  Home,
  Info,
  Image as ImageIcon, // Rename to avoid conflict
  BookOpen,
  Building,
  FileText,
  User,
  Phone
} from 'lucide-react';


const courses = [
  { name: "BCA", slug: "bca" },
  { name: "PGDCA", slug: "pgdca" },
  { name: "DCA", slug: "dca" }
];

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
  { name: "Gallery", href: "/gallery", icon: <ImageIcon className="h-4 w-4 mr-1" /> },
  { name: "Admission Enquiry", href: "/admission-enquiry", icon: <FileText className="h-4 w-4 mr-1" /> },
  { name: "Contact Us", href: "/contact", icon: <Phone className="h-4 w-4 mr-1" /> },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownEnter = (name: string) => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <div className='mb-10'>

    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Image
                 alt="Logo"
                 width={60}
                 height={60}
                src={"/logo.png"}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => 
              !item.dropdown ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 flex items-center"
                >
                  {item.icon}
                  {item.name}
                </a>
              ) : (
                <div
                  key={item.name}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className={`px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 flex items-center ${
                      activeDropdown === item.name ? 'text-indigo-600 dark:text-indigo-400 bg-gray-50 dark:bg-gray-800' : ''
                    }`}
                  >
                    {item.icon}
                    {item.name}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <div
                    className={`absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 dark:ring-gray-700 transition-all duration-200 ${
                      activeDropdown === item.name ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                    }`}
                  >
                    <div className="py-1">
                      {item.items?.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-150"
                        >
                          {subItem.name}
                        </a>
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
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none transition-colors duration-200"
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
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => 
            !item.dropdown ? (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </a>
            ) : (
              <div key={item.name}>
                <button
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center justify-between"
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                >
                  <span className="flex items-center">
                    {item.icon}
                    {item.name}
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>
                <div
                  className={`pl-4 mt-1 space-y-1 transition-all duration-200 ${
                    activeDropdown === item.name ? 'block' : 'hidden'
                  }`}
                >
                  {item.items?.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </nav>
    </div>

  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;