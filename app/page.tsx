import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import EnquiryForm from "@/components/EnquiryForm";
import CourseCard from "@/components/CourseCard";
import { ArrowRight } from "lucide-react";
import { courses, galleryImages } from "@/lib/data";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/front1.jpeg"
            alt="University Campus"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Shaping Tomorrow's Leaders Today
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Subhash Academy is an All India Council of Technical Education (AICTE) approved Institute in Kannauj.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/admission-enquiry">Apply Now</Link>
            </Button>
            {/* <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
              <Link href="/courses/bca">Explore Courses</Link>
            </Button> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Subhash Academy</h2>
              <p className="text-muted-foreground mb-4">
                <span className="font-[700]">Subhash Academy (College of IT & Management) is an All India
                  Council of Technical Education (AICTE) approved institute,</span>
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
              <p className="text-muted-foreground mb-6">
                We believe in nurturing not just academic excellence but also character, ethics, and social responsibility. Our graduates are known for their technical expertise, leadership qualities, and commitment to making a positive impact on society.
              </p>
              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/front2.jpeg"
                alt="University Building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Courses</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of undergraduate and postgraduate programs designed to prepare you for a successful career.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          {/* <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link href="/courses/bca">View All Courses</Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Director Message Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1">
              <div className="relative h-[300px] w-full md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/assets/teachers/director.webp"
                  alt="Director"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Director's Message</h2>
              <blockquote className="text-muted-foreground mb-6 italic">
                My vision to push this institution to the Zenith of excellence by providing best infrastructure and class teaching facilities to aspiring students and transforming them the world class techno professionals. Development of infrastructure in rural area with standard educational input is very difficult for three reasons.One it is not economically viable. Second-Even after handsomme salary payment, good teachers are not available and Thirdly-children from good family background in sufficient number are not available. Even after all these hardship we have been considerably successful to implement good professionals courses to the rural children with quality education. I am thankful to System Manager, teachers & guardians for thier co-operation to make the dream true. My good wishes for Swaraj dedicated father late Shri Juagal Kishore Saxena, a freedom fighter, social worker & ex-chairperson of the society.
              </blockquote>
              <p className="text-muted-foreground mb-6">
                We strive to create an environment that encourages innovation, critical thinking, and practical application of knowledge. Our faculty members are dedicated to guiding students on their academic journey and helping them realize their full potential. Together, we are building a community of lifelong learners and future leaders.
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-semibold"> Devesh Kumar Saxena</h4>
                  <p className="text-sm text-muted-foreground">Director, Subhash Academy</p>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <Link href="/director-message">Read Full Message</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Campus Gallery</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Take a visual tour of our beautiful campus and facilities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.slice(0, 6).map((image) => (
              <div key={image.id} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Enquiry Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Admission Enquiry</h2>
              <p className="text-muted-foreground mb-6">
                Interested in joining Subhash Academy? Fill out the form below, and our admissions team will get in touch with you to guide you through the application process.
              </p>
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <EnquiryForm />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-card rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Why Choose SA?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Expert Faculty</h4>
                      <p className="text-sm text-muted-foreground">Learn from industry experts and experienced academics.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Modern Infrastructure</h4>
                      <p className="text-sm text-muted-foreground">State-of-the-art facilities including labs, library, and sports complex.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Industry Connections</h4>
                      <p className="text-sm text-muted-foreground">Strong ties with industry partners for internships and placements.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Holistic Development</h4>
                      <p className="text-sm text-muted-foreground">Focus on academic, personal, and professional growth.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-6 bg-card rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Admission Process</h3>
                <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                  <li>Submit the enquiry form</li>
                  <li>Receive application details from our team</li>
                  <li>Complete and submit the application</li>
                  <li>Attend entrance test/interview (if applicable)</li>
                  <li>Receive admission offer</li>
                  <li>Complete fee payment and enrollment</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}