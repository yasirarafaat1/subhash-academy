'use client';

import { ArrowLeftIcon, Mail, MessageCircle, MessageCircleMore, Wheat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';


export default function DeveloperInfo() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center p-6">
      {/* Company Logo */}
      <Image
        src={"/developer.jpeg"}
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
          onClick={() => window.location.href = 'mailto:mailforyasir@gmail.com'}
        >
          <Mail className="h-5 w-5 mr-2" /> mailforyasir@gmail.com
        </Button>

        {/* WhatsApp Business */}
        <Button
          variant="outline"
          className="w-full"
          onClick={() => window.location.href = 'https://wa.me/917905325078'}

        >
          <MessageCircleMore className="h-5 w-5 mr-2" />
          WhatsApp Business
        </Button>

        {/* Home */}
        <Button
          variant="outline"
          className="w-full"
          onClick={() => window.location.href = '/'}
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Home
        </Button>
      </div>
    </div>
  );
}