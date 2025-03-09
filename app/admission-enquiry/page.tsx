import Image from "next/image";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata = {
  title: "Admission Enquiry | Subhash Academy - College of IT & Management",
  description: "Submit an enquiry about admissions at Subhash Academy - College of IT & Management.",
};

export default function AdmissionEnquiryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Admission Enquiry</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Interested in joining Subhash Academy? Fill out the form below, and our admissions team will get in touch with you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Submit Your Enquiry</h2>
            <EnquiryForm />
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Admission Process</h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Submit Enquiry</h3>
                  <p className="text-muted-foreground">Fill out the enquiry form with your details and course preferences.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Application Form</h3>
                  <p className="text-muted-foreground">Our admissions team will send you the application form and guide you through the process.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Document Submission</h3>
                  <p className="text-muted-foreground">Submit your academic records, identification documents, and other required materials.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Entrance Test/Interview</h3>
                  <p className="text-muted-foreground">Depending on the course, you may need to take an entrance test or attend an interview.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Admission Offer</h3>
                  <p className="text-muted-foreground">If selected, you will receive an admission offer with details about fees and enrollment.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  6
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Fee Payment</h3>
                  <p className="text-muted-foreground">Complete the fee payment process to secure your admission.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  7
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Orientation</h3>
                  <p className="text-muted-foreground">Attend the orientation program to get familiar with the campus and academic procedures.</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Required Documents</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Completed application form
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                High school/secondary school certificates and transcripts
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Higher secondary/pre-university certificates and transcripts
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Undergraduate degree certificates (for postgraduate courses)
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Passport-sized photographs
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Identity proof (passport, driver's license, etc.)
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Address proof
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Transfer certificate (if applicable)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}