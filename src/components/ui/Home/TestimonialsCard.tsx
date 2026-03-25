"use client";

import { Star, MapPin } from "lucide-react";

export interface Testimonial {
  quote: string;
  clientName: string;
  clientLocation: string;
  avatarSrc?: string;
}

interface TestimonialsCardProps {
  testimonial: Testimonial;
}

export function TestimonialsCard({ testimonial }: TestimonialsCardProps) {
  const { quote, clientName, clientLocation, avatarSrc } = testimonial;

  return (
    <div className="flex flex-col gap-3 w-full max-w-[600px] mx-auto font-sans">
      {/* 1. Main Quote Pill */}
      <div className="rounded-[40px] bg-[#161616] p-10 md:p-12">
        <p className="text-[20px] md:text-[22px] leading-[1.4] text-white font-normal tracking-tight">
          "{quote}"
        </p>
      </div>

      {/* 2. Bottom Row Containers */}
      <div className="flex gap-3 h-[85px]">
        
        {/* Client Info Pill */}
        <div className="flex flex-1 items-center gap-4 rounded-full bg-[#161616] pl-3 pr-8">
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full">
            {avatarSrc ? (
              <img
                src={avatarSrc}
                alt={clientName}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-zinc-400">
                {clientName.charAt(0)}
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center">
            <h4 className="text-[18px] font-medium text-white leading-tight">
              {clientName}
            </h4>
            <div className="mt-1 flex items-center gap-1 text-zinc-500">
              <MapPin className="h-4 w-4 text-[#C53030]" fill="#C53030" />
              <span className="text-[16px]">{clientLocation}</span>
            </div>
          </div>
        </div>

        {/* Rating Pill */}
        <div className="flex w-[140px] items-center justify-center gap-3 rounded-full bg-[#161616] px-2">
          <Star className="h-8 w-8 text-[#F5C518] fill-[#F5C518]" />
          <span className="text-[28px] font-medium text-white">5.0</span>
        </div>

      </div>
    </div>
  );
}