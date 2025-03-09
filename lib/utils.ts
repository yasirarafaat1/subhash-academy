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
    mode: "Regular/Distance",
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
  adca: {
    id: "adca",
    slug: "adca",
    title: "Advanced Diploma in Computer Applications (ADCA)",
    description: "A comprehensive two-year diploma program that provides in-depth knowledge of computer applications, programming, and modern IT tools. Perfect for students seeking advanced technical skills and practical experience.",
    duration: "1 Year",
    mode: "Regular",
    fees: "3,500/Sem",
    image: "/assets/courses/adca.webp",
    structure: {
      years: [
        {
          year: "Semester 1",
          subjects: [
            "Fundamentals of Computer & IT",
            "Operating Systems (Windows & Linux)",
            "Microsoft Office Suite (MS Word, MS Excel, MS PowerPoint, MS Access)",
            "Internet & Email Management",
            "Typing (English & Hindi) & Data Entry Skills",
            "Practical 1: MS Office & Typing Skills"
          ]
        },
        {
          year: "Semester 2",
          subjects: [
            "Programming in C & C++",
            "Web Designing (HTML, CSS, JavaScript, PHP Basics)",
            "Database Management System (DBMS) – MySQL",
            "Tally with GST & Accounting Basics",
            "Cyber Security & Digital Awareness",
            "Practical 2: Programming, Web Designing & Tally",
            "Project Work / Internship",
          ]
        }
      ],
      careerOpportunities: [
        "Software Developer",
        "Web Developer",
        "Database Administrator",
        "Quality Assurance Engineer",
        "Technical Support Specialist",
        "Digital Marketing Executive",
        "IT Project Coordinator"
      ]
    }
  },
  bcom: {
    id: "bcom",
    slug: "bcom",
    title: "Bachelor of Commerce (B.Com)",
    description: "A three-year undergraduate program that provides comprehensive knowledge of commerce, accounting, finance, and business management. Ideal for students pursuing careers in finance and business.",
    duration: "3 Years",
    mode: "Distance",
    fees: "25000/Sem",
    image: "/assets/courses/bcom.webp",
    structure: {
      years: [
        {
          year: "Year 1",
          subjects: [
            "Financial Accounting",
            "Business Economics",
            "Business Mathematics",
            "Business Law",
            "Business Communication",
            "Environmental Studies"
          ]
        },
        {
          year: "Year 2",
          subjects: [
            "Corporate Accounting",
            "Income Tax",
            "Cost Accounting",
            "Company Law",
            "E-Commerce",
            "Business Statistics"
          ]
        },
        {
          year: "Year 3",
          subjects: [
            "Management Accounting",
            "Auditing",
            "Financial Management",
            "Marketing Management",
            "Business Ethics",
            "Project Work"
          ]
        }
      ],
      careerOpportunities: [
        "Accountant",
        "Financial Analyst",
        "Tax Consultant",
        "Business Analyst",
        "Investment Banker",
        "Corporate Manager",
        "Entrepreneur",
        "Banking Professional"
      ]
    }
  },
  mcom: {
    id: "mcom",
    slug: "mcom",
    title: "Master of Commerce (M.Com)",
    description: "A two-year postgraduate program offering advanced knowledge in commerce, finance, and business management. Designed for students seeking expertise in financial management and advanced business practices.",
    duration: "2 Years",
    mode: "Distance",
    fees: "25,000/Sem",
    image: "/assets/courses/mcom.webp",
    structure: {
      years: [
        {
          year: "Year 1",
          subjects: [
            "Managerial Economics & Business Environment",
            "Financial & Corporate Accounting",
            "Business Statistics & Quantitative Techniques",
            "Marketing & Human Resource Management",
            "Corporate Law & Governance",
            "Banking & Financial Services"
          ]
        },
        {
          year: "Year 2",
          subjects: [
            "Advanced Cost & Management Accounting",
            "International Business & Trade",
            "Financial Management & Investment Analysis",
            "Taxation Laws (Direct & Indirect Taxes)",
            "Entrepreneurship & Small Business Management",
            "Research Methodology & Dissertation"
          ]
        }
      ],
      careerOpportunities: [
        "Financial Manager",
        "Investment Analyst",
        "Corporate Consultant",
        "Research Analyst",
        "Academic Professor",
        "Financial Controller",
        "Business Consultant",
        "Portfolio Manager"
      ]
    }
  },
  mba: {
    id: "mba",
    slug: "mba",
    title: "Master of Business Administration (MBA)",
    description: "A two-year postgraduate program offering advanced knowledge in commerce, finance, and business management. Designed for students seeking expertise in financial management and advanced business practices.",
    duration: "2 Years",
    mode: "Distance",
    fees: "90,000/Sem",
    image: "/assets/courses/mba.jpg",
    structure: {
      years: [
        {
          year: "Year 1",
          subjects: [
            "Principles of Management & Organizational Behavior",
            "Managerial Economics & Business Environment",
            "Financial & Management Accounting",
            "Marketing & Human Resource Management",
            "Operations & Supply Chain Management",
            "Quantitative Techniques & Business Analytics",
            "Business Law, Ethics & Corporate Governance"
          ]
        },
        {
          year: "Year 2",
          subjects: [
            "Strategic Management & Leadership",
            "Electives (Specialization in Finance, Marketing, etc.)",
            "Entrepreneurship & Innovation",
            "International Business & Trade",
            "Corporate Social Responsibility (CSR) & Business Ethics",
            "Internship / Industrial Training",
            "Final Year Project / Dissertation"
          ]
        }
      ],
      careerOpportunities: [
        "Financial Manager",
        "Investment Analyst",
        "Corporate Consultant",
        "Research Analyst",
        "Academic Professor",
        "Financial Controller",
        "Business Consultant",
        "Portfolio Manager"
      ]
    }
  },
  mca: {
    id: "mca",
    slug: "mca",
    title: "Master of Computer Applications (MCA)",
    description: "A two-year postgraduate program providing advanced knowledge in computer applications, software development, and IT management. Perfect for students aiming for higher positions in the IT industry.",
    duration: "2 Years",
    mode: "Distance",
    fees: "50,000/Sem",
    image: "/assets/courses/mcom.webp",
    structure: {
      years: [
        {
          year: "Year 1",
          subjects: [
            "Advanced Programming",
            "Data Structures and Algorithms",
            "Database Management Systems",
            "Software Engineering",
            "Computer Networks",
            "Research Methodology"
          ]
        },
        {
          year: "Year 2",
          subjects: [
            "Artificial Intelligence",
            "Machine Learning",
            "Cloud Computing",
            "Big Data Analytics",
            "Thesis Project",
            "IT Project Management"
          ]
        }
      ],
      careerOpportunities: [
        "Software Architect",
        "Technical Lead",
        "Data Scientist",
        "AI/ML Engineer",
        "Cloud Solutions Architect",
        "IT Project Manager",
        "Research and Development",
        "Technology Consultant"
      ]
    }
  }
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