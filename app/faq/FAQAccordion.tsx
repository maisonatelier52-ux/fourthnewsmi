'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-neutral-200 bg-white transition-colors"
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-black text-sm sm:text-base hover:text-neutral-600 transition-colors cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3 font-serif">
                <HelpCircle className="w-4 h-4 text-[#c59b27] shrink-0" />
                {faq.question}
              </span>
              {isOpen ? (
                <ChevronUp className="w-4 h-4 text-neutral-500 shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
              )}
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-neutral-700 text-xs sm:text-sm font-sans leading-relaxed border-t border-neutral-100">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
