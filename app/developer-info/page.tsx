'use client';

import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';


export default function DeveloperInfo() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center p-6">
      {/* Company Logo */}
      <Image
        src={"/akamifyLogo.png"}
        alt="Company Logo"
        width={150}
        height={150}
        className="mb-4 rounded-full border"

      />
      
      <h1 className="text-3xl font-bold mb-4">Contact Information</h1>
      
      <div className="space-y-4">
        {/* Email */}
        <Button
          variant="outline"
          className="w-full"
          onClick={() => window.location.href = 'mailto:support@akamify.com'}
        >
          <Mail className="h-5 w-5 mr-2" /> support@akamify.com
        </Button>

        {/* WhatsApp Business */}
        <Button
          variant="outline"
          className="w-full"
          onClick={() => window.location.href = 'https://wa.me/917317322775'}
        >
          WhatsApp Business
        </Button>

        {/* Instagram */}
        <Button
          variant="outline"
          className="w-full"
          onClick={() => window.location.href = 'https://www.instagram.com/akamify_tech/'}
        >
          Instagram
        </Button>
      </div>
    </div>
  );
}