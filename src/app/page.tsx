// src/app/page.tsx (or src/pages/index.tsx if using pages router)
import Image from "next/image";
import FaqsSectionHome from "@/components/sections/Home/FaqsSectionHome";
import FinalCTASection from "@/components/sections/Home/FinalCTASection";
import TestimonialsSection from "@/components/sections/Home/TestimonialsSection";
import HeroSection from "@/components/sections/Home/HeroSection";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSection/>
      <section className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to LocusHQ</h1>
      </section>

      {/* FAQ Section */}
      <TestimonialsSection />
      <FaqsSectionHome />
      <FinalCTASection />
      
    </main>
  )
}