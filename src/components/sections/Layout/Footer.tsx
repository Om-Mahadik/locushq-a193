"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navigation = ["Home", "Services", "Work", "About", "Contact"];

const connect = [
  { name: "@locushq", icon: "/icons/instagram.svg", href: "#" },
  { name: "locushq", icon: "/icons/linkedin.svg", href: "#" },
  { name: "hello@locushq.co", icon: "/icons/mail.svg", href: "mailto:hello@locushq.co" },
  { name: "www.locushq.co", icon: "/icons/globe.svg", href: "https://www.locushq.co" },
];

const flags = [
  { src: "/icons/india-flag.svg", alt: "India" },
  { src: "/icons/canada-flag.svg", alt: "Canada" },
  { src: "/icons/australia-flag.svg", alt: "Australia" },
  { src: "/icons/usa-flag.svg", alt: "USA" },
];

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-20 font-sans text-white">
      <div className="mx-auto max-w-6xl">
        {/* Top Section: Branding & Links */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-semibold tracking-tight">LocusHQ</h2>
            <p className="text-lg text-zinc-400">Performance Growth System</p>
            <div className="flex gap-3">
              {flags.map((flag, i) => (
                <img 
                  key={i} 
                  src={flag.src} 
                  alt={flag.alt} 
                  className="h-8 w-8 rounded-full object-cover" 
                />
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="mb-6 text-sm font-medium uppercase tracking-widest text-zinc-500">
              Navigation
            </h3>
            <ul className="flex flex-col gap-4">
              {navigation.map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-lg text-zinc-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="mb-6 text-sm font-medium uppercase tracking-widest text-zinc-500">
              Connect
            </h3>
            <ul className="flex flex-col gap-4">
              {connect.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="flex items-center gap-4 group">
                    <img src={item.icon} alt="" className="h-5 w-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span className="text-lg text-zinc-300 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-24 rounded-[40px] bg-[#111111] p-10 text-center md:p-16">
          <h3 className="mx-auto max-w-md text-2xl font-medium leading-snug md:text-3xl">
            Get one sharp marketing insight per week. <br />
            <span className="text-zinc-500">No agency fluff.</span>
          </h3>

          <div className="mt-10 flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full bg-white py-5 pl-8 pr-20 text-black outline-none placeholder:text-zinc-400"
              />
              <button className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black transition-transform hover:scale-105 active:scale-95">
                <ArrowRight className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-zinc-900 pt-10 text-sm text-zinc-500 md:flex-row">
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <p>© 2026 LocusHQ. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}