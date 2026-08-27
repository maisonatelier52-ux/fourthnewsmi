'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'Editorial Inquiry',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-serif selection:bg-neutral-200 selection:text-black">
      <Navbar articles={[]} />

      {/* Header Banner - Uniform max-w-7xl mx-auto px-4 sm:px-6 */}
      <header className="w-full bg-[#000000] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            COMPANY • CONTACT US
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            Get in Touch with Our Newsroom
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-300 max-w-3xl leading-relaxed">
            Connect with our editorial desks, submit confidential news tips, or inquire about syndicate licensing.
          </p>
        </div>
      </header>

      {/* Main Content - Uniform max-w-7xl mx-auto px-4 sm:px-6 */}
      <main className="w-full flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Form (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 font-sans">
              <div className="border-b border-neutral-200 pb-3">
                <h2 className="text-2xl font-serif font-bold text-black">Send a Direct Message</h2>
                <p className="text-xs text-neutral-500 mt-1">Our editorial desk responds within 24 business hours.</p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-6 space-y-2 text-emerald-900">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle className="w-5 h-5 text-emerald-600" /> Message Received
                  </div>
                  <p className="text-xs leading-relaxed text-emerald-800">
                    Thank you for reaching out to Domain Name Media. Your inquiry has been routed to the {formData.department} desk.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs border border-neutral-300 rounded-none bg-neutral-50 focus:bg-white focus:border-[#c59b27] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs border border-neutral-300 rounded-none bg-neutral-50 focus:bg-white focus:border-[#c59b27] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">Department *</label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs border border-neutral-300 rounded-none bg-neutral-50 focus:bg-white focus:border-[#c59b27] focus:outline-none"
                      >
                        <option>Editorial Inquiry</option>
                        <option>Confidential News Tip</option>
                        <option>Press & Media Relations</option>
                        <option>Advertising & Partnerships</option>
                        <option>Legal & Rights of Reply</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">Subject *</label>
                      <input
                        type="text"
                        required
                        placeholder="Brief topic summary..."
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs border border-neutral-300 rounded-none bg-neutral-50 focus:bg-white focus:border-[#c59b27] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Provide detailed information regarding your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs border border-neutral-300 rounded-none bg-neutral-50 focus:bg-white focus:border-[#c59b27] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#000000] hover:bg-neutral-800 text-white font-sans font-bold text-xs uppercase tracking-wider px-6 py-3 transition-colors flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Bureau Info (5 Cols) */}
            <div className="lg:col-span-5 space-y-6 font-sans">
              <div className="bg-[#000000] text-white p-6 sm:p-8 space-y-6">
                <h3 className="text-xl font-serif font-bold text-white border-b border-neutral-800 pb-3">
                  Global Bureau Network
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#c59b27] font-bold">
                      <MapPin className="w-4 h-4" /> Main Newsroom HQ
                    </div>
                    <p className="text-neutral-300 pl-6">
                      750 Third Avenue, 18th Floor<br />
                      New York, NY 10017, United States
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#c59b27] font-bold">
                      <Mail className="w-4 h-4" /> General Press Desk
                    </div>
                    <p className="text-neutral-300 pl-6">press@domainname.com</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#c59b27] font-bold">
                      <Phone className="w-4 h-4" /> Editorial Hotline
                    </div>
                    <p className="text-neutral-300 pl-6">+1 (212) 555-0199</p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 p-6 border border-neutral-200 space-y-2 text-xs">
                <h4 className="font-bold text-black uppercase tracking-wider">Confidential Leaks & Tips</h4>
                <p className="text-neutral-600 leading-relaxed">
                  For whistleblowers and secure documentation releases, contact our encrypted Signal desk at tips@domainname.com or use PGP Key ID: 0x89AB34F1.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
