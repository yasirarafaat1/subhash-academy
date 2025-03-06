import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Subhash Academy - College of IT & Management",
  description: "Get in touch with Subhash Academy - College of IT & Management. Find our contact details and location.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          We're here to help. Get in touch with us for any queries or information.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="bg-card rounded-lg p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    Awas Vikas Colony,<br />
                    Chhibramau, Uttar Pradesh, 209721<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">
                    Main: +91 9335 9390 00<br />
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    Email: subhashacademy@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 10:00 AM - 3:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
            <p className="text-muted-foreground mb-6">
              For admission inquiries, please fill out our admission form. We'll get back to you as soon as possible.
            </p>
            <Button size="lg" asChild>
              <Link href="/admission-enquiry">Admission Enquiry</Link>
            </Button>
          </div>
        </div>

        <div>
          <div className="relative h-[300px] md:h-[600px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop"
              alt="University Campus"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <p className="text-white text-xl">Campus Map Coming Soon</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Department of Computer Science",
              contact: "cs@globalinstitute.edu",
              phone: "+1 (123) 456-7893"
            },
            {
              name: "Department of Business Administration",
              contact: "business@globalinstitute.edu",
              phone: "+1 (123) 456-7894"
            },
            {
              name: "Department of Science",
              contact: "science@globalinstitute.edu",
              phone: "+1 (123) 456-7895"
            },
            {
              name: "Department of Arts & Humanities",
              contact: "arts@globalinstitute.edu",
              phone: "+1 (123) 456-7896"
            },
            {
              name: "Department of Engineering",
              contact: "engineering@globalinstitute.edu",
              phone: "+1 (123) 456-7897"
            },
            {
              name: "Department of Medicine",
              contact: "medicine@globalinstitute.edu",
              phone: "+1 (123) 456-7898"
            }
          ].map((dept, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">{dept.name}</h3>
              <p className="text-muted-foreground mb-1">
                <Mail className="h-4 w-4 inline mr-2" />
                {dept.contact}
              </p>
              <p className="text-muted-foreground">
                <Phone className="h-4 w-4 inline mr-2" />
                {dept.phone}
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}