import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const courseDetails = {
  bca: {
    id: "bca",
    slug: "bca",
    title: "Bachelor of Computer Applications (BCA)",
    description: "A comprehensive three-year undergraduate program designed to create skilled IT professionals. The course covers programming, software development, database management, and modern computing technologies.",
    duration: "3 Years",
    mode: "Regular",
    fees: "10,900/Sem",
    image: "/assets/courses/bca.webp",
    structure: {
      years: [
        {
          year: "Year 1",
          subjects: [
            "Introduction to Programming",
            "Computer Organization",
            "Mathematics for Computing",
            "Digital Logic",
            "Communication Skills",
            "Environmental Studies"
          ]
        },
        {
          year: "Year 2",
          subjects: [
            "Data Structures and Algorithms",
            "Database Management Systems",
            "Operating Systems",
            "Web Technologies",
            "Software Engineering",
            "Computer Networks"
          ]
        },
        {
          year: "Year 3",
          subjects: [
            "Artificial Intelligence",
            "Cloud Computing",
            "Mobile Application Development",
            "Information Security",
            "Project Work",
            "Professional Ethics"
          ]
        }
      ],
      careerOpportunities: [
        "Software Developer",
        "Web Developer",
        "Database Administrator",
        "System Analyst",
        "Network Administrator",
        "IT Consultant",
        "Project Manager",
        "Quality Assurance Engineer",
        "Technical Support Specialist"
      ]
    }
  },
  dca: {
    id: "dca",
    slug: "dca",
    title: "Diploma in Computer Applications (DCA)",
    description: "A one-year diploma program focusing on practical computer skills and applications. Perfect for those seeking quick entry into the IT workforce or looking to enhance their computer literacy.",
    duration: "1 Year",
    mode: "Regular",
    fees: "5,760/Sem",
    image: "/assets/courses/dca.webp",
    structure: {
      years: [
        {
          year: "Semester 1",
          subjects: [
            "Computer Fundamentals",
            "Office Automation Tools",
            "Internet and Web Design",
            "Typing (English & Hindi) & Data Entry Skills",
            "Operating Systems (Windows & Linux Basics)",
            "Practical 1: MS Office & Typing Skills"
          ]
        },
        {
          year: "Semester 2",
          subjects: [
            "Basics of Programming (C & C++)",
            "Web Designing (HTML, CSS, JavaScript Basics)",
            "Database Management System (DBMS) – MySQL",
            "Tally with GST & Accounting Basics",
            "Cyber Security & Digital Awareness",
            "Practical 2: Programming, Web Designing & Tally",
            "Project Work",
          ]
        }
      ],
      careerOpportunities: [
        "Office Administrator",
        "Data Entry Operator",
        "Computer Lab Assistant",
        "Desktop Publishing Professional",
        "Technical Support Executive",
        "IT Help Desk Assistant"
      ]
    }
  },
  pgdca: {
    id: "pgdca",
    slug: "pgdca",
    title: "Post Graduate Diploma in Computer Applications (PGDCA)",
    description: "An advanced one-year program designed for graduates seeking specialized computer application knowledge. The course covers advanced programming, system administration, and modern IT practices.",
    duration: "1 Year",
    mode: "Regular",
    fees: "8,500/Sem",
    image: "/assets/courses/pgdca.webp",
    structure: {
      years: [
        {
          year: "Semester 1",
          subjects: [
            "Fundamentals of Information Technology",
            "Programming & Problem Solving through C Language",
            "Database Management System (DBMS)",
            "Software Engineering & Project Management",
            "Operating Systems (Windows & Linux)",
            "Practical 1: Programming in C",
            "Practical 2: DBMS using SQL"
          ]
        },
        {
          year: "Semester 2",
          subjects: [
            "Object-Oriented Programming with Java",
            "Web Technologies (HTML, CSS, JavaScript, PHP)",
            "Computer Networks & Data Communication",
            "Python Programming",
            "E-Commerce & Cyber Security",
            "Practical 3: Java Programming",
            "Practical 4: Web Designing & Python Programming",
            "Project Work / Internship",
          ]
        }
      ],
      careerOpportunities: [
        "Systems Administrator",
        "Database Manager",
        "Software Project Lead",
        "IT Security Specialist",
        "Business Analyst",
        "Cloud Solutions Architect",
        "Data Analytics Specialist",
        "IT Trainer"
      ]
    }
  },
};

export const getAllCourses = () => Object.values(courseDetails);

export const getCourseBySlug = (slug: string) => {
  return courseDetails[slug as keyof typeof courseDetails] || null;
};

export const getRelatedCourses = (currentSlug: string, limit = 3) => {
  return Object.values(courseDetails)
    .filter(course => course.slug !== currentSlug)
    .slice(0, limit);
};