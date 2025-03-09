import Image from "next/image";
import { facilities } from "@/lib/data";

export const metadata = {
  title: "Infrastructure | Subhash Academy",
  description: "Explore the state-of-the-art infrastructure and facilities at Subhash Academy.",
};

export default function InfrastructurePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Infrastructure</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Subhash Academy provides state-of-the-art infrastructure and facilities to support teaching, learning, and research.
        </p>
      </div>

      {/* Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/assets/front.jpg"
            alt="University Campus"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">World-Class Facilities</h2>
          <p className="text-muted-foreground mb-4">
            At Subhash Academy, we believe that a conducive learning environment is essential for academic excellence. Our campus is designed to provide students with the best possible facilities to support their educational journey.
          </p>
          <p className="text-muted-foreground mb-4">
            From modern classrooms and well-equipped laboratories to a comprehensive library and recreational facilities, we have everything students need to excel in their studies and enjoy a balanced campus life.
          </p>
          <p className="text-muted-foreground">
            Our infrastructure is regularly updated to incorporate the latest technologies and meet the evolving needs of students and faculty. We are committed to providing a safe, comfortable, and stimulating environment for all members of our community.
          </p>
        </div>
      </div>

      {/* Facilities */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Our Facilities</h2>
        <div className="space-y-16">
          {facilities.map((facility, index) => (
            <div 
              key={facility.id} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="text-2xl font-bold mb-4">{facility.title}</h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Campus Map */}
      {/* <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Campus Map</h2>
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop"
              alt="Campus Map"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <p className="text-white text-xl">Interactive Campus Map Coming Soon</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}