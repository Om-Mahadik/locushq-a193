import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/sections/Layout/Footer"; // Adjust the path based on your folder structure

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LocusHQ | Performance Growth System",
  description: "AI-powered lead generation systems for scaling businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-black text-white">
        {/* Navigation/Navbar would go here if you have one */}
        
        {/* Main content expands to fill available space */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer stays at the bottom */}
        <Footer />
      </body>
    </html>
  );
}