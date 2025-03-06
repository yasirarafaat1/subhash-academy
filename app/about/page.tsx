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
          A premier educational institution committed to excellence in education and research.
        </p>
      </div>

      {/* Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2072&auto=format&fit=crop"
            alt="University Campus"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Subhash Academy (College of IT & Management) is leading and prestigious institution
            specializing in professional courses such as Computer Management and other disciplines. It is one of
            the largest college for professional education in Kannauj and Farrukhabad districts.The college is
            affiliated with <span className="font-[700]">Makhanlal Chaturvedi National University of Journalism & Communication, Bhopal, </span> a renowned institution in Asia.
          </p>
          <p className="text-muted-foreground mb-4">
            Over the years, we have established ourselves as a center of academic excellence, research, and innovation. Our commitment to providing quality education has earned us recognition and accreditation from leading educational bodies.
          </p>
          <p className="text-muted-foreground">
            Today, SA stands as a symbol of educational excellence, with state-of-the-art infrastructure, experienced faculty, and a diverse student community from across the globe. We continue to evolve and adapt to the changing educational landscape while staying true to our core values and mission.
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
        <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Devesh Kumar Saxena",
              position: "Director",
              image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2149&auto=format&fit=crop"
            },
            {
              name: "Naseem Zama Khan",
              position: "Execitive Manager",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop"
            },
            {
              name: "Mayank Saxena",
              position: "Acountant",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
            },
            {
              name: "Mahboob Siddiqui",
              position: "HOD",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
            }
          ].map((leader, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                <p className="text-muted-foreground">{leader.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      {/* <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Accreditation",
              description: "Accredited by the National Board of Accreditation (NBA) for excellence in education."
            },
            {
              title: "Research Publications",
              description: "Over 500 research papers published in international journals by our faculty and students."
            },
            {
              title: "Industry Partnerships",
              description: "Collaborations with over 50 leading companies for internships and placements."
            },
            {
              title: "Global Recognition",
              description: "Ranked among the top 100 educational institutions in the country."
            },
            {
              title: "Alumni Success",
              description: "Our alumni are working in leading organizations across the globe."
            },
            {
              title: "Innovation Hub",
              description: "Established an innovation hub that has incubated over 20 successful startups."
            }
          ].map((achievement, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div> */}

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
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070&auto=format&fit=crop"
                alt="Campus Life"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
                alt="Campus Life"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                alt="Campus Life"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop"
                alt="Campus Life"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}