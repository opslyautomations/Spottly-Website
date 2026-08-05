"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answerHtml: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs.length) return null;

  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left min-h-[48px]"
            >
              <span className="font-semibold text-[var(--color-dark-blue)]">{faq.question}</span>
              <span
                className={`shrink-0 text-xl text-[var(--color-primary-blue)] transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && (
              <div
                className="prose-spottly px-5 pb-5 text-[var(--color-slate)]"
                dangerouslySetInnerHTML={{ __html: faq.answerHtml }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
