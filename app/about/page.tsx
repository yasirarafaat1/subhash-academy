import Image from "next/image";

export const metadata = {
  title: "About Us | Subhash Academy - College of IT & Management",
  description: "Learn about Subhash Academy - College of IT & Management, our history, mission, vision, and values.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Subhash Academy </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          It is an All India Council of Technical Education (AICTE) approved
          institute.
        </p>
      </div>

      {/* Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/assets/front3.jpeg"
            alt="University Campus"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            <span className="font-[700]">
              Subhash Academy (College of IT & Management) is an All India
              Council of Technical Education (AICTE) approved institute,
            </span>{" "}
            ensuring that its programs meet the highest standards of technical
            and professional education set by the All India Council for
            Technical Education. With state-of-the-art infrastructure,
            experienced faculty, and a commitment to innovation, the college
            strives to provide a dynamic and enriching learning environment that
            empowers students to succeed in their careers.
          </p>
          <p className="text-muted-foreground mb-4">
            It is a leading and
            prestigious institution specializing in professional courses such as
            Computer Management and other disciplines. Recognized for its
            excellence in education, the academy is one of the largest colleges
            for professional education in the Kannauj and Farrukhabad districts.
            It is dedicated to fostering academic growth, skill development, and
            career-oriented learning for students aspiring to excel in the
            fields of IT, management, and beyond. The college is
            affiliated with{" "}
            <span className="font-[700]">
              Makhanlal Chaturvedi National University of Journalism &
              Communication, Bhopal,{" "}
            </span>{" "}
            a renowned institution in India known for its
            academic excellence and industry-aligned curriculum.
          </p>
          <p className="text-muted-foreground">
            Today, <span className="font-[700]">SA is one of the colleges in district Kannauj which is AICTE(1-44512605107) approved.</span> We continue to evolve and adapt to the changing educational landscape while staying true to our core values and mission.
          </p>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-card p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-muted-foreground">
            To provide quality education that prepares students for the challenges of the modern world, fostering critical thinking, innovation, and ethical leadership.
          </p>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-muted-foreground">
            To be a globally recognized institution of academic excellence, producing graduates who are not only technically proficient but also socially responsible and ethically sound.
          </p>
        </div>
        <div className="bg-card p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-4">Our Values</h3>
          <ul className="text-muted-foreground space-y-2">
            <li>• Excellence in all endeavors</li>
            <li>• Integrity and ethical conduct</li>
            <li>• Innovation and creativity</li>
            <li>• Inclusivity and diversity</li>
            <li>• Social responsibility</li>
          </ul>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Devesh Kumar Saxena",
              position: "Director",
              image: "/assets/teachers/director.webp",
              qualification: "MBA",
              experience: "15 years"
            },
            {
              name: "Naseem Zama Khan",
              position: "System Manager",
              image: "/assets/teachers/Naseem Zama Khan Sir.jpg",
              qualification: "M. Tech. (IT)",
              experience: "23 years"
            },
            {
              name: "Mayank Jeet Saxena",
              position: "Office Admin",
              image: "/assets/teachers/mayank_saxena_sir.jpg",
              qualification: "M.Sc. (CS)",
              experience: "24 years"
            },
            {
              name: "Mahboob Siddiqui",
              position: "HOD",
              image: "/assets/teachers/Mahboob_Siddiqui_Sir.jpg",
              qualification: "MCA",
              experience: "18 years"
            },
            {
              name: "Om Sir",
              position: "Linux",
              image: "/assets/teachers/om sir.jpg",
              qualification: "M.Tech (IT)",
              experience: "7 years"
            },
            {
              name: "Anchal Dixit",
              image: "/assets/teachers/aanchal dixit maam.jpg",
              position: "Communication",
              qualification: "MCA",
              experience: "5 years"
            },
            {
              name: "Kajal Dubey",
              image: "/assets/teachers/Kajal Maam.jpg",
              position: "Lab Incharge",
              qualification: "MCA",
              experience: "5 years"
            },
            {
              name: "Puneet Rajput",
              position: "Java",
              image: "/assets/teachers/punit_rajput_sir.jpeg",
              qualification: "MCA",
              experience: "3 years"
            }
          ].map((leader, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                <p className="text-muted-foreground">{leader.position}</p>
                <p className="text-muted-foreground">{leader.qualification}</p>
                <p className="text-muted-foreground"> {leader.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Campus Life */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Campus Life</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground mb-4">
            </p>
            <p className="text-muted-foreground mb-4">
              From cultural festivals and sports competitions to technical symposiums and workshops, there's always something happening on campus. Our student clubs and societies cater to a wide range of interests, from technology and entrepreneurship to arts and social service.
            </p>
            <p className="text-muted-foreground">
              We also organize regular guest lectures, industry visits, and career development programs to help students stay updated with the latest trends and prepare for their future careers. The campus environment is designed to foster creativity, collaboration, and personal growth.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/assets/gallery/farewell.jpg"
                alt="Campus Life"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/assets/gallery/img4.jpg"
                alt="Campus Life"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw"
                />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/assets/gallery/national_ocassion.jpg"
                alt="Campus Life"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw"
                />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/assets/gallery/img5.jpg"
                alt="Campus Life"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}