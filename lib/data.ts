import { Course, Facility, GalleryImage } from './types';

export const courses: Course[] = [
  {
    id: "bca",
    title: "Bachelor of Computer Application",
    slug: "bca",
    duration: "3 Years",
    mode: "Regular",
    fees: "10,900 per sem",
    description: "The Bachelor of Computer Applications (BCA) is a three-year undergraduate degree program that provides students with a strong foundation in computer science and applications. The curriculum covers programming languages, database management, software engineering, web development, and more. Students also gain practical experience through projects and internships, preparing them for careers in the IT industry.",
    image: "/assets/courses/bca.webp"
  },
  {
    id: "pgdca",
    title: "Post Graduate Diploma in Computer Application",
    slug: "pgdca",
    duration: "1 Years",
    mode: "Regular",
    fees: "8,500 per sem",
    description: "Post Graduate Diploma in Computer Application (PGDCA) program is designed to provide students with a comprehensive understanding of business principles and practices. The curriculum covers areas such as management, marketing, finance, human resources, and entrepreneurship. Through case studies, projects, and internships, students develop the skills needed to succeed in the corporate world and become effective business leaders.",
    image: "/assets/courses/pgdca.webp"
  },
  {
    id: "adca",
    title: "Advance Diploma in Computer Application",
    slug: "adca",
    duration: "1 Years",
    mode: "Regular",
    fees: "3,500/Sem",
    description: "Advance Diploma in Computer Application (ADCA) program offers a rigorous education in scientific principles and methodologies. Students can specialize in various fields such as Physics, Chemistry, Biology, Mathematics, or Computer Science. The curriculum combines theoretical knowledge with practical laboratory work, research projects, and field studies. Graduates are prepared for careers in research, education, industry, or further academic pursuits.",
    image: "/assets/courses/adca.webp"
  },
  {
    id: "dca",
    title: "Diploma in Computer Application",
    slug: "dca",
    duration: "1 Year",
    mode: "Regular",
    fees: "5,760 per sem",
    description: "The Diploma in Computer Applications (DCA) is a short-term diploma course designed to provide foundational knowledge of computer applications. It is ideal for students, professionals, and individuals looking to enhance their computer skills for career opportunities in IT and related fields.",
    image: "/assets/courses/dca.webp"
  },
  {
    id: "bcom",
    title: "Bachelor of Commerce",
    slug: "bcom",
    duration: "3 Years",
    mode: "Distance",
    fees: "6,500/Sem",
    description: "The Bachelor of Commerce (B.Com) is a three-year undergraduate degree program focused on business, finance, accounting, and commerce-related subjects. It is one of the most popular courses for students interested in pursuing careers in business, finance, banking, and corporate sectors.",
    image: "/assets/courses/bcom.webp"
  },
  {
    id: "ba",
    title: "Bachelor of Art",
    slug: "ba",
    duration: "3 Years",
    mode: "Distance",
    fees: "5,500/Sem",
    description: "A Bachelor of Arts (BA) is a popular undergraduate degree focusing on liberal arts and humanities, offering a broad education with various specializations and career paths in fields like education, social work, and more.",
    image: "/assets/courses/ba.webp"
  },
  {
    id: "ma",
    title: "Master of Art",
    slug: "ma",
    duration: "2 Year",
    mode: "Distance",
    fees: "9,000/Sem",
    description: "The Master of Arts (MA) is a postgraduate degree awarded in the field of arts, humanities, and social sciences. It typically focuses on theoretical knowledge, research, and analytical skills in disciplines like literature, history, political science, economics, sociology, psychology, education, and languages.",
    image: "/assets/courses/ma.webp"
  },
  {
  id: "msw",
  title: "Master of Social Work",
  slug: "msw",
  duration: "2 Year",
  mode: "Distance",
  fees: "9,000/Sem",
  description: "The Master of Social Work (MSW) is a postgraduate degree that focuses on social work practice, welfare policies, community services, and human rights. It equips students with skills to work with individuals, families, and communities to promote social justice, advocate for the underprivileged, and bring about positive social change.",
  image: "/assets/courses/msw.webp"
 },
 {
  id: "msc",
  title: "Master of Science(Maths)",
  slug: "msc",
  duration: "2 Years",
  mode: "Distance",
  fees: "10,000/Sem",
  description: "The Master of Science in Mathematics (MSc Maths) is a 2-year postgraduate program divided into 2 academic years. The syllabus covers core mathematics subjects, electives, and research-based projects. It focuses on advanced mathematical theories, problem-solving, and analytical skills.",
  image: "/assets/courses/msc.webp"
},
 {
  id: "mcom",
  title: "Master of Commerce",
  slug: "mcom",
  duration: "2 Years",
  mode: "Distance",
  fees: "9,000/Sem",
  description: "The Master of Commerce (M.Com) is a postgraduate degree program that provides advanced knowledge in commerce, finance, accounting, and business management. It is an excellent choice for students who want to build expertise in financial analysis, taxation, banking, or corporate governance.",
  image: "/assets/courses/mcom.webp"
},
  {
    id: "mba",
    title: "Master of Business Administration",
    slug: "mba",
    duration: "2 Year",
    mode: "Distance",
    fees: "17,000/Sem",
    description: "The Master of Business Administration (MBA) is a globally recognized postgraduate degree designed to develop the skills required for leadership and management roles in various industries. It provides a comprehensive understanding of business operations, strategic decision-making, and problem-solving.",
    image: "/assets/courses/mba.jpg"
  },
  {
    id: "mca",
    title: "Master in Computer Application",
    slug: "mca",
    duration: "2 Years",
    mode: "Distance",
    fees: "17,000/Sem",
    description: "The Master of Computer Applications (MCA) is a postgraduate degree program in computer science and information technology, designed to provide comprehensive knowledge of computer applications, software development, and IT management. It prepares students for advanced careers in the IT industry and research fields.",
    image: "/assets/courses/mca.webp"
  }
];

export const facilities: Facility[] = [
  {
    id: "library",
    title: "Modern Library",
    description: "Our state-of-the-art library houses over 50,000 books, journals, and digital resources. It provides a quiet and conducive environment for study and research. Students have access to online databases, e-books, and academic journals from around the world.",
    image: "/assets/infrastructure/library.jpeg"
  },
  {
    id: "computer-labs",
    title: "Computer Laboratories",
    description: "Well equipped with more than 30+ Pentium IV computers & other computing resources to cater to academic needs of the Institute. All computers are networked through Novel, NT & Linux along the with Internet server. The state-of-the-art centre provides hands on experience to the user & always keeps pace with the advancement of technology",
    image: "/assets/infrastructure/lab.png"
  },
  {
    id: "lecturehalls",
    title: "Lecture Halls",
    description: "3 well designed Lecture Halls with a standard sitting capacity of 70 students at a time. The lecture hall is equipped with 6 fans and other modern gadgets.",
    image: "/assets/infrastructure/class.jpeg"
  },

  {
    id: "multimedia",
    title: "MultiMedia",
    description: "Our modern multimedia is equipped with advanced audio-visual systems and can accommodate up to 500 people. It hosts various events such as seminars, conferences, cultural programs, and guest lectures.",
    image: "/assets/infrastructure/multimedia.jpg"
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/assets/gallery/farewell.jpg",
    alt: "gallery",
    width: 2071,
    height: 1380
  },
  {
    id: "2",
    src: "/assets/gallery/fresher.jpg",
    alt: "gallery",
    width: 2072,
    height: 1384
  },
  {
    id: "3",
    src: "/assets/gallery/img2.jpg",
    alt: "gallery",
    width: 2070,
    height: 1380
  },
  {
    id: "4",
    src: "/assets/gallery/national_ocassion.jpg",
    alt: "gallery",
    width: 2070,
    height: 1380
  },
  {
    id: "5",
    src: "/assets/gallery/img1.jpg",
    alt: "gallery",
    width: 2070,
    height: 1380
  },
  {
    id: "6",
    src: "/assets/gallery/img3.jpg",
    alt: "gallery",
    width: 2132,
    height: 1422
  },
  {
    id: "7",
    src: "/assets/gallery/img4.jpg",
    alt: "",
    width: 2070,
    height: 1380
  },
  {
    id: "8",
    src: "/assets/gallery/img5.jpg",
    alt: "gallery",
    width: 2074,
    height: 1384
  },
  {
    id: "9",
    src: "/assets/gallery/img6.jpg",
    alt: "gallery",
    width: 2072,
    height: 1384
  },
  {
    id: "10",
    src: "/assets/gallery/farewell2.jpg",
    alt: "gallery",
    width: 2070,
    height: 1380
  },
  {
    id: "11",
    src: "/assets/gallery/img8.jpg",
    alt: "gallery",
    width: 2070,
    height: 1380
  },
  {
    id: "12",
    src: "/assets/gallery/farewell3.jpg",
    alt: "gallery",
    width: 2070,
    height: 1380
  }
];

export const directorMessage = {
  name: "Devesh Kumar Saxena",
  position: "Director, Subhash Academy",
  image: "/assets/teachers/director.webp",
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