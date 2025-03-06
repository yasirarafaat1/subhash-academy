import Image from "next/image";
import { directorMessage } from "@/lib/data";

export const metadata = {
  title: "Director's Message | Subhash Academy - College of IT & Management",
  description: "Read the message from the Director of Global Institute of Technology.",
};

export default function DirectorMessagePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Director's Message</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          A message from the Director of Subhash Academy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl mb-6">
              <Image
                src={directorMessage.image}
                alt={directorMessage.name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold">{directorMessage.name}</h2>
            <p className="text-muted-foreground">{directorMessage.position}</p>
          </div>
        </div>
        
        <div className="md:col-span-2 bg-card rounded-lg p-8 shadow-sm">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {directorMessage.message.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}