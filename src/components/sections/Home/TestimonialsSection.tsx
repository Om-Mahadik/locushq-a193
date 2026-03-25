"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TestimonialsCard, Testimonial } from "../../ui/Home/TestimonialsCard";

const testimonialsData: Testimonial[] = [
  {
    quote: "We launched in Rajouri Garden — one of Delhi's most competitive food corridors — with no liquor licence and zero brand recognition. In 90 days the campaigns brought us to ₹20 lakhs a month.",
    clientName: "Avora Cafe",
    clientLocation: "Delhi, India",
  },
  {
    quote: "Our cost per lead dropped 25% and the volume actually went up at the same time. That combination is rare. Most agencies pick one — they delivered both.",
    clientName: "Aroha Banquet Hall",
    clientLocation: "Delhi, India",
    avatarSrc: "/images/aroha-avatar.jpg"
  },
  {
    quote: "Building a customer base in Toronto from scratch is genuinely hard. They understood the Canadian market, adapted the strategy, and built us a profitable acquisition engine.",
    clientName: "Tamasha Toronto",
    clientLocation: "Toronto, Canada",
    avatarSrc: "/images/tamasha-avatar.jpg"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-black py-16 md:py-24 px-6 font-sans overflow-x-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Testimonials
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 rounded-3xl sm:rounded-full bg-[#111111] border border-zinc-800/40 px-6 py-4 w-fit">
            <div className="flex items-center gap-2">
               <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
               <span className="text-2xl md:text-3xl font-bold text-white">5.0</span>
            </div>
            <span className="text-sm md:text-lg text-zinc-500 font-medium">
              Across active client accounts
            </span>
          </div>
        </div>

        {/* Testimonials List */}
        <div className="flex flex-col gap-12 md:gap-16">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }} // Fixes the "invisible on mobile" trigger
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="will-change-transform" // Optimizes mobile rendering
            >
              <TestimonialsCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}