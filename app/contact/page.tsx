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

      {/* Light Editorial Header - No black banner */}
      <header className="w-full bg-white text-black pt-8 sm:pt-12 pb-6 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
          <div className="flex items-center gap-2 text-[11px] font-sans font-bold uppercase tracking-widest text-[#c59b27]">
            <span>COMPANY</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">CONTACT DESK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-black leading-tight">
            Contact Gazetta
          </h1>
          <p className="text-base sm:text-lg font-sans text-neutral-600 leading-relaxed max-w-3xl">
            Direct communication channels for news tips, editorial correspondence, syndication inquiries, and public feedback.
          </p>
          <div className="pt-2 text-xs font-sans text-neutral-400">
            Newsroom Desk • 24/7 Monitored Dispatch Center
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full flex-1 py-10 sm:py-14 bg-white font-serif">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-start">
            
            {/* Contact Form (7 Cols) */}
            <div className="md:col-span-7 space-y-6 font-sans">
              <div className="border-b border-neutral-200 pb-3">
                <h2 className="text-xl font-serif font-bold text-black">Send a Direct Message</h2>
                <p className="text-xs text-neutral-500 mt-1">Our editorial desk responds within 24 business hours.</p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-6 space-y-2 text-emerald-900">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle className="w-5 h-5 text-emerald-600" /> Message Received
                  </div>
                  <p className="text-xs leading-relaxed text-emerald-800">
                    Thank you for reaching out to Gazetta. Your inquiry has been routed to the {formData.department} desk.
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
                        className="w-full px-3.5 py-2.5 text-xs border border-neutral-300 rounded-none bg-neutral-50 focus:bg-white focus:border-neutral-500 focus:outline-none"
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
                        className="w-full px-3.5 py-2.5 text-xs border border-neutral-300 rounded-none bg-neutral-50 focus:bg-white focus:border-neutral-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">Department *</label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs border border-neutral-300 rounded-none bg-neutral-50 focus:bg-white focus:border-neutral-500 focus:outline-none"
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
                        className="w-full px-3.5 py-2.5 text-xs border border-neutral-300 rounded-none bg-neutral-50 focus:bg-white focus:border-neutral-500 focus:outline-none"
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
                      className="w-full px-3.5 py-2.5 text-xs border border-neutral-300 rounded-none bg-neutral-50 focus:bg-white focus:border-neutral-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#c59b27] hover:bg-[#b0881e] text-white font-sans font-bold text-xs uppercase tracking-wider px-6 py-3 transition-colors flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Bureau Info (5 Cols) */}
            <div className="md:col-span-5 space-y-5 font-sans">
              <div className="bg-neutral-50 border border-neutral-200 p-6 space-y-5">
                <h3 className="text-base font-serif font-bold text-black border-b border-neutral-200 pb-2">
                  Global Bureau Network
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#c59b27] font-bold">
                      <MapPin className="w-4 h-4" /> Newsroom Headquarters
                    </div>
                    <p className="text-neutral-700 pl-6 leading-relaxed">
                      750 Third Avenue, 18th Floor<br />
                      New York, NY 10017, United States
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#c59b27] font-bold">
                      <Mail className="w-4 h-4" /> General Press Desk
                    </div>
                    <p className="text-neutral-700 pl-6">contact@gazetta.com</p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#c59b27] font-bold">
                      <Phone className="w-4 h-4" /> Editorial Hotline
                    </div>
                    <p className="text-neutral-700 pl-6">+1 (212) 555-0199</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#fbf9f4] p-5 border border-neutral-200 border-l-4 border-l-[#c59b27] space-y-1.5 text-xs">
                <h4 className="font-bold text-black uppercase tracking-wider">Confidential News Tips</h4>
                <p className="text-neutral-700 leading-relaxed">
                  For secure documentation releases and whistleblower dispatches, reach our encrypted Signal desk at tips@gazetta.com.
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
