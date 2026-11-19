'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2 } from 'lucide-react';

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'Editorial Inquiry',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || 'Failed to transmit message. Please try again.');
      }
    } catch {
      // Local fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
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
              Thank you for reaching out to FiscalFusion. Your dispatch has been routed to the {formData.department} desk.
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
                  <option>Press &amp; Media Relations</option>
                  <option>Advertising &amp; Partnerships</option>
                  <option>Legal &amp; Rights of Reply</option>
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

            {errorMsg && (
              <p className="text-xs text-red-600 font-sans">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-[#c59b27] hover:bg-[#b0881e] text-white font-sans font-bold text-xs uppercase tracking-wider px-6 py-3 transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Transmitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>

      {/* Bureau Info (5 Cols) */}
      <div className="md:col-span-5 space-y-5 font-sans">
        <div className="bg-neutral-50 border border-neutral-200 p-6 space-y-5">
          <h3 className="text-base font-serif font-bold text-black border-b border-neutral-200 pb-2">
            Global Newsroom Bureau
          </h3>

          <div className="space-y-4 text-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#c59b27] font-bold">
                <MapPin className="w-4 h-4" /> Global Headquarters
              </div>
              <p className="text-neutral-700 pl-6 leading-relaxed">
                750 Third Avenue, 18th Floor<br />
                New York, NY 10017, United States
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#c59b27] font-bold">
                <Mail className="w-4 h-4" /> Editorial Dispatch
              </div>
              <p className="text-neutral-700 pl-6">editorial@fiscalfusion.org</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#c59b27] font-bold">
                <Mail className="w-4 h-4" /> General Press Desk
              </div>
              <p className="text-neutral-700 pl-6">contact@fiscalfusion.org</p>
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
          <h4 className="font-bold text-black uppercase tracking-wider">Confidential Financial Tips</h4>
          <p className="text-neutral-700 leading-relaxed">
            For sensitive market documents, internal corporate disclosures, and secure whistleblower communications, reach our encrypted desk at tips@fiscalfusion.org.
          </p>
        </div>
      </div>
    </div>
  );
}
