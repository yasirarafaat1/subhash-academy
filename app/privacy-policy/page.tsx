import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen p-10 bg-gray-100 text-gray-900">
      <div className=" mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700">Effective Date: [Insert Date]</p>

        <p className="mt-4">
          Welcome to Subhash Academy. Your privacy is important to us, and we are
          committed to protecting your personal information. This Privacy Policy outlines
          how we collect, use, and safeguard your data when you visit our website or
          enroll in our IT-related courses.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details provided during course enrollment.</li>
          <li><strong>Payment Information:</strong> Securely processed payment details when you purchase a course.</li>
          <li><strong>Usage Data:</strong> Information about your interaction with our website, including browsing history and IP addresses.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>To process course enrollments and payments.</li>
          <li>To provide personalized learning experiences.</li>
          <li>To send important updates regarding courses and services.</li>
          <li>To improve our website and course offerings based on user feedback.</li>
          <li>To ensure compliance with legal and regulatory requirements.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">3. Data Sharing and Security</h2>
        <p className="text-gray-700 mt-2">
          We do not sell, rent, or trade your personal data with third parties. However, we may share your information with:
        </p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li><strong>Service Providers:</strong> Trusted partners for course delivery, payment processing, and website functionality.</li>
          <li><strong>Legal Authorities:</strong> If required by law, we may disclose your data to comply with legal obligations.</li>
        </ul>
        <p className="text-gray-700 mt-2">We implement industry-standard security measures to protect your information.</p>

        <h2 className="text-2xl font-semibold mt-6">4. Your Rights and Choices</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Access and review your personal data.</li>
          <li>Request corrections or updates to your information.</li>
          <li>Opt-out of promotional emails at any time.</li>
          <li>Request deletion of your account and associated data.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">5. Third-Party Links</h2>
        <p className="text-gray-700 mt-2">
          Our website may contain links to third-party platforms, including social media and payment gateways. We are not responsible for their privacy practices and encourage you to review their policies separately.
        </p>

        <h2 className="text-2xl font-semibold mt-6">6. Updates to This Policy</h2>
        <p className="text-gray-700 mt-2">
          We may update this Privacy Policy from time to time to reflect changes in our practices. Any modifications will be posted on this page with an updated effective date.
        </p>

        <h2 className="text-2xl font-semibold mt-6">7. Contact Us</h2>
        <p className="text-gray-700 mt-2">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="mt-2"><strong>Subhash Academy</strong></p>
        <p>Email: <a href="subhashacademy@gmail.com" className="text-blue-600">subhashacademy@gmail.com</a></p>
        <p>Phone: [Insert Contact Number]</p>
        <p>Website: [Insert Website URL]</p>

        <p className="text-gray-700 mt-4">
          By using our website and enrolling in our courses, you agree to the terms of this Privacy Policy.
        </p>
      </div>
    </div>
  );
}
