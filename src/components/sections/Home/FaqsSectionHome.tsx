"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What does LocusHQ do?",
    answer: "LocusHQ builds AI-powered lead generation systems for businesses that need more customers — combining paid media on Meta and Google with GHL and ManyChat automation to create a full lead journey from first click to booked call."
  },
  {
    question: "How is LocusHQ different from a regular ads agency?",
    answer: "We focus on the entire funnel, not just the clicks. By integrating CRM automation and AI, we ensure that the leads generated actually convert into appointments and revenue."
  },
  {
    question: "Do you work with businesses in Canada and Australia?",
    answer: "Yes! We work across hospitality, real estate, med spas, immigration consulting, home services, and B2B in India, Canada, Australia, and USA."
  },
  {
    question: "How long before I see results from Meta Ads?",
    answer: "Typically, leads start coming in within the first 48 hours of the campaign going live. Our systems are built for speed and efficiency."
  }
];

export default function FaqsSectionHome() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-black py-24 px-6 font-sans">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-12 text-center text-5xl font-medium tracking-tight text-white">
          FAQs
        </h1>

        {/* The Dark Card Container from your image */}
        <div className="rounded-[32px] bg-[#0A0A0A] border border-zinc-800/40 p-8 md:p-12">
          <div className="flex flex-col">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index} 
                  className={index !== faqs.length - 1 ? "border-b border-zinc-800/40" : ""}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group flex w-full items-center justify-between py-8 text-left outline-none"
                  >
                    <span className="pr-8 text-[19px] font-medium text-white transition-opacity group-hover:opacity-70">
                      {faq.question}
                    </span>

                    {/* The Rotating Plus/Cross Icon */}
                    <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                      {/* Horizontal Bar */}
                      <motion.div 
                        className="absolute h-[1.5px] w-4 bg-zinc-400" 
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "circOut" }}
                      />
                      {/* Vertical Bar */}
                      <motion.div 
                        className="absolute h-4 w-[1.5px] bg-zinc-400" 
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={{ duration: 0.3, ease: "circOut" }}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-[16px] leading-relaxed text-zinc-500">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}