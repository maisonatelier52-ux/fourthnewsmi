import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Gazetta',
  description: 'How Gazetta collects, safeguards, and respects reader data and digital privacy under GDPR and CCPA standards.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <Navbar articles={[]} />

      {/* Light Editorial Header - No black banner */}
      <header className="w-full bg-white text-black pt-8 sm:pt-12 pb-6 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="flex items-center gap-2 text-[11px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            <span>POLICIES</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">DATA PRIVACY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-black leading-tight">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-600 leading-relaxed max-w-3xl">
            Our commitment to reader confidentiality, data minimization, and statutory privacy protections worldwide.
          </p>
          <div className="pt-2 text-xs font-sans text-neutral-400">
            Last Updated: September 2026 • Gazetta Data Governance Officer
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full flex-1 py-10 sm:py-14 bg-white font-serif">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10 text-neutral-800 leading-relaxed text-sm sm:text-base">
          
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              1. Information We Collect
            </h2>
            <p className="text-neutral-700">
              We practice intentional data minimization. We only collect details essential to delivering our editorial services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 font-sans text-xs sm:text-sm pl-2">
              <li><strong className="text-black font-semibold">Account &amp; Subscription Details:</strong> Your email address and membership preferences when subscribing to newsletters or premium editions.</li>
              <li><strong className="text-black font-semibold">Technical Diagnostics:</strong> Anonymized server logs including IP address, user agent, and aggregated page performance metrics to optimize reader experience.</li>
              <li><strong className="text-black font-semibold">Reader Preferences:</strong> Bookmarked dispatches stored locally on your device storage.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              2. Strict Non-Monetization of Reader Information
            </h2>
            <p className="text-neutral-700">
              Gazetta does not sell, lease, or broker your personal information to third-party marketing companies, programmatic data exchanges, or surveillance advertising networks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              3. Telemetry &amp; Essential Cookies
            </h2>
            <p className="text-neutral-700">
              We employ first-party session cookies required for authentication and security. We do not employ intrusive cross-site tracking scripts. You have the full right to disable all optional cookies via your browser settings without losing access to editorial articles.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-black border-b border-neutral-200 pb-2">
              4. Global Rights (GDPR &amp; CCPA/CPRA)
            </h2>
            <p className="text-neutral-700">
              Regardless of your geographic location, you retain full rights to request access to, correction of, or complete erasure of any data associated with your email address. To exercise your rights, contact our privacy desk at <span className="font-sans font-semibold text-black">privacy@gazetta.com</span>.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
