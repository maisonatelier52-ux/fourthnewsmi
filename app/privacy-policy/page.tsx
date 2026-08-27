import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Domain Name Media',
  description: 'How Domain Name collects, protects, and respects user data and privacy across our digital platforms.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <Navbar articles={[]} />

      {/* Header Banner - Uniform max-w-7xl mx-auto px-4 sm:px-6 */}
      <header className="w-full bg-[#000000] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            POLICIES • DATA PRIVACY
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-300 max-w-3xl leading-relaxed">
            Your privacy is fundamental to our readership trust. Learn how we collect, handle, and safeguard your data under GDPR and CCPA standards.
          </p>
        </div>
      </header>

      {/* Main Content - Uniform max-w-7xl mx-auto px-4 sm:px-6 */}
      <main className="w-full flex-1 py-12 font-serif">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-4 text-neutral-800 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-black">1. Data We Collect</h2>
            <p>
              We collect minimal necessary information, including subscription email addresses, technical log telemetry (IP address, browser type), and reader preference bookmarks stored locally.
            </p>

            <h2 className="text-2xl font-serif font-bold text-black pt-4">2. Zero Sale of Reader Personal Information</h2>
            <p>
              Domain Name does not sell, rent, or trade reader personal data to third-party data brokers or marketing agencies.
            </p>

            <h2 className="text-2xl font-serif font-bold text-black pt-4">3. Cookie Preferences & Telemetry</h2>
            <p>
              We utilize essential performance cookies to manage session state and measure story analytics. Readers may opt out of non-essential analytics cookies at any time via your browser settings.
            </p>

            <h2 className="text-2xl font-serif font-bold text-black pt-4">4. Your Data Rights</h2>
            <p>
              Under global privacy frameworks (including GDPR and CCPA), readers possess the right to request access to, correction of, or permanent erasure of your account and newsletter data.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
