"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="bg-black py-20 px-6 font-sans">
      <div className="mx-auto max-w-4xl">
        {/* Main White Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
          className="rounded-[60px] bg-white px-8 py-20 text-center md:px-16"
        >
          {/* Headline */}
          <h2 className="mx-auto max-w-2xl text-4xl font-medium leading-[1.1] tracking-tight text-black md:text-5xl">
            Ready to stop guessing where your leads are going?
          </h2>

          {/* Subheadline */}
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-zinc-800">
            Book a free 30-minute audit. We'll show you exactly where your current 
            setup is leaking money — before you spend another dollar.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Primary Button */}
            <button className="group flex items-center gap-4 rounded-full bg-black py-2 pl-8 pr-2 transition-transform active:scale-95">
              <span className="text-base font-medium text-white">Book Free Audit</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5E060] transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-5 w-5 text-black" />
              </div>
            </button>

            {/* Secondary Button */}
            <button className="h-[64px] rounded-full border border-zinc-300 px-10 text-base font-medium text-black transition-colors hover:bg-zinc-50 active:scale-95">
              See Our Work
            </button>
          </div>

          {/* Bullet Points */}
          <div className="mt-16 flex flex-col items-start justify-center gap-6 mx-auto w-fit">
            {[
              "Understand why you are not catching your full potential",
              "What can be improved and how?",
              "How to hit those dream numbers in Reality"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 text-left">
                <ChevronRight className="h-6 w-6 text-[#F5E060] shrink-0" strokeWidth={3} />
                <span className="text-lg font-medium text-black">{text}</span>
              </div>
            ))}
          </div>

          {/* Footer Text */}
          <div className="mt-20 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-medium text-zinc-400">
            <span>No pitch</span>
            <span className="text-zinc-200">•</span>
            <span>No commitment</span>
            <span className="text-zinc-200">•</span>
            <span>30 minutes</span>
            <span className="text-zinc-200">•</span>
            <span>Honest feedback</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}