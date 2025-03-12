import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, GraduationCap, IndianRupee } from "lucide-react";
import { courseDetails, getCourseBySlug, getRelatedCourses,} from "@/lib/utils";
import { Course } from "@/lib/types";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);
  
  if (!course) {
    return {
      title: "Course Not Found",
    };
  }
  
  return {
    title: `${course.title} | Subhash Academy - College of IT & Management`,
    description: `Learn about our ${course.title} program at Subhash Academy - College of IT & Management.`,
  };
}

export function generateStaticParams() {
  return Object.keys(courseDetails).map((slug) => ({
    slug,
  }));
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);
  
  if (!course) {
    notFound();
  }

  const relatedCourses = getRelatedCourses(params.slug);
  
  return (
    <div className="max-w-7xl mx-auto mt-14 px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>
        
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center bg-muted px-4 py-2 rounded-md">
              <Clock className="h-5 w-5 mr-2 text-primary" />
              <span>{course.duration}</span>
            </div>
              <div className="flex items-center bg-muted px-4 py-2 rounded-md">
                <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                <span>{course.mode}</span>
              </div>
            <div className="flex items-center bg-muted px-4 py-2 rounded-md">
              <IndianRupee className="h-5 w-5 mr-2 text-primary" />
              <span>{course.fees}</span>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Course Description</h2>
            <p className="text-muted-foreground whitespace-pre-line">{course.description}</p>
          </div>
          
          <Button size="lg" asChild>
            <Link href="/admission-enquiry">Apply Now</Link>
          </Button>
        </div>
      </div>
      
      {/* Course Structure */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Course Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {course.structure.years.map((year, index) => (
            <div key={index} className="bg-card rounded-lg shadow-sm overflow-hidden">
              <div className="bg-primary text-primary-foreground p-4">
                <h3 className="text-xl font-semibold">{year.year}</h3>
              </div>
              <ul className="p-4 space-y-2">
                {year.subjects.map((subject, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{subject}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Career Opportunities */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Career Opportunities</h2>
        <div className="bg-card rounded-lg shadow-sm p-6">
          <p className="text-muted-foreground mb-4">
            Graduates of this program can pursue careers in various fields including:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {course.structure.careerOpportunities.map((career, index) => (
              <li key={index} className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{career}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Related Courses */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedCourses.map((relatedCourse) => (
            <div key={relatedCourse.id} className="bg-card rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={relatedCourse.image}
                  alt={relatedCourse.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{relatedCourse.title}</h3>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="mr-3">{relatedCourse.duration}</span>
                  <IndianRupee className="h-4 w-4 mr-1" />
                  <span>{relatedCourse.fees}</span>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/courses/${relatedCourse.slug}`}>View Details</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Admission CTA */}
      <div className="mt-16 bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Take the first step towards a successful career by applying for our {course.title} program. Our admissions team is ready to guide you through the process.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/admission-enquiry">Apply Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Contact Admissions</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}