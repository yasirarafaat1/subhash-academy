import { Course, Facility, GalleryImage } from './types';

export const courses: Course[] = [
  {
    id: "bca",
    title: "Bachelor of Computer Application",
    slug: "bca",
    duration: "3 Years",
    fees: "10900 per sem",
    description: "The Bachelor of Computer Applications (BCA) is a three-year undergraduate degree program that provides students with a strong foundation in computer science and applications. The curriculum covers programming languages, database management, software engineering, web development, and more. Students also gain practical experience through projects and internships, preparing them for careers in the IT industry.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "pgdca",
    title: "Post Graduate Diploma in Computer Application",
    slug: "pgdca",
    duration: "1 Years",
    fees: "10900 per sem",
    description: "Post Graduate Diploma in Computer Application (PGDCA) program is designed to provide students with a comprehensive understanding of business principles and practices. The curriculum covers areas such as management, marketing, finance, human resources, and entrepreneurship. Through case studies, projects, and internships, students develop the skills needed to succeed in the corporate world and become effective business leaders.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: "adca",
    title: "Advance Diploma in Computer Application",
    slug: "adca",
    duration: "1 Years",
    fees: "10900 per sem",
    description: "Advance Diploma in Computer Application (ADCA) program offers a rigorous education in scientific principles and methodologies. Students can specialize in various fields such as Physics, Chemistry, Biology, Mathematics, or Computer Science. The curriculum combines theoretical knowledge with practical laboratory work, research projects, and field studies. Graduates are prepared for careers in research, education, industry, or further academic pursuits.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "dca",
    title: "Diploma in Computer Application",
    slug: "dca",
    duration: "1 Year",
    fees: "10900 per sem",
    description: "The Diploma in Computer Applications (DCA) is a short-term diploma course designed to provide foundational knowledge of computer applications. It is ideal for students, professionals, and individuals looking to enhance their computer skills for career opportunities in IT and related fields.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "bcom",
    title: "Bachelor of Commerce",
    slug: "bcom",
    duration: "3 Years",
    fees: "10900 per sem",
    description: "The Bachelor of Commerce (B.Com) is a three-year undergraduate degree program focused on business, finance, accounting, and commerce-related subjects. It is one of the most popular courses for students interested in pursuing careers in business, finance, banking, and corporate sectors.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "mcom",
    title: "Master of Commerce",
    slug: "mcom",
    duration: "2 Years",
    fees: "10900 per sem",
    description: "The Master of Commerce (M.Com) is a postgraduate degree program that provides advanced knowledge in commerce, finance, accounting, and business management. It is an excellent choice for students who want to build expertise in financial analysis, taxation, banking, or corporate governance.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "mca",
    title: "Master in Computer Application",
    slug: "mca",
    duration: "2 Years",
    fees: "10900 per sem",
    description: "The Master of Computer Applications (MCA) is a postgraduate degree program in computer science and information technology, designed to provide comprehensive knowledge of computer applications, software development, and IT management. It prepares students for advanced careers in the IT industry and research fields.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  }
];

export const facilities: Facility[] = [
  {
    id: "library",
    title: "Modern Library",
    description: "Our state-of-the-art library houses over 50,000 books, journals, and digital resources. It provides a quiet and conducive environment for study and research. Students have access to online databases, e-books, and academic journals from around the world.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "computer-labs",
    title: "Computer Laboratories",
    description: "Well equipped with more than 400 Pentium IV computers & other computing resources to cater to academic needs of the Institute. All computers are networked through Novel, NT & Linux along the with Internet server. The state-of-the-art centre provides hands on experience to the user & always keeps pace with the advancement of technology",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "lecturehalls",
    title: "Lecture Halls",
    description: "3 well designed Lecture Halls with a standard sitting capacity of 70 students at a time. The lecture hall is equipped with 6 fans and other modern gadgets.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2076&auto=format&fit=crop"
  },
  // {
  //   id: "hostel",
  //   title: "Student Hostels",
  //   description: "Our on-campus hostels provide comfortable and safe accommodation for students. The hostels are equipped with modern amenities and are supervised by wardens to ensure a conducive living environment.",
  //   image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop"
  // },
  // {
  //   id: "cafeteria",
  //   title: "Cafeteria",
  //   description: "Our cafeteria serves nutritious and delicious meals at affordable prices. It provides a variety of food options to cater to different tastes and dietary requirements.",
  //   image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=2070&auto=format&fit=crop"
  // },
  {
    id: "multimedia",
    title: "MultiMedia",
    description: "Our modern multimedia is equipped with advanced audio-visual systems and can accommodate up to 500 people. It hosts various events such as seminars, conferences, cultural programs, and guest lectures.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop",
    alt: "University Campus",
    width: 2071,
    height: 1380
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2072&auto=format&fit=crop",
    alt: "University Building",
    width: 2072,
    height: 1384
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
    alt: "University Library",
    width: 2070,
    height: 1380
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop",
    alt: "University Lecture Hall",
    width: 2070,
    height: 1380
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop",
    alt: "University Graduation",
    width: 2070,
    height: 1380
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
    alt: "University Students",
    width: 2132,
    height: 1422
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
    alt: "University Entrance",
    width: 2070,
    height: 1380
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2074&auto=format&fit=crop",
    alt: "University Computer Lab",
    width: 2074,
    height: 1384
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop",
    alt: "University Sports Facility",
    width: 2072,
    height: 1384
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    alt: "University Cafeteria",
    width: 2070,
    height: 1380
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    alt: "University Study Group",
    width: 2070,
    height: 1380
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2070&auto=format&fit=crop",
    alt: "University Auditorium",
    width: 2070,
    height: 1380
  }
];

export const directorMessage = {
  name: "Devesh Kumar Saxena",
  position: "Director, Subhash Academy",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2149&auto=format&fit=crop",
  message: `
    Dear Students, Parents, and Visitors,

    My vision to push this institution to the Zenith of excellence by providing best infrastructure and class
          teaching facilities to aspiring students and transforming them the world class techno professionals.
          Development of infrastructure in rural area with standard educational input is very difficult for three
          reasons.One it is not economically viable. Second-Even after handsomme salary payment, good teachers are not
          available and Thirdly-children from good family background in sufficient number are not available.
          Even after all these hardship we have been considerably successful to implement good professionals courses to
          the rural children with quality education. I am thankful to System Manager, teachers & guardians for thier
          co-operation to make the dream true. My good wishes for Swaraj dedicated father late Shri Juagal Kishore
          Saxena, a freedom fighter, social worker & ex-chairperson of the society.

    Warm regards,


    Devesh Kumar Saxena

    Director, Subhash Academy
  `
};