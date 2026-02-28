"use client";

import { ArrowLeft } from "lucide-react";
import { Cormorant, Tenor_Sans } from "next/font/google";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

const cormorant = Cormorant({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const tenorSans = Tenor_Sans({ subsets: ["latin"], weight: "400" });

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#2C2416]">

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#F5F1E8]/95 backdrop-blur-md border-b border-[#2C2416]/10 px-8 md:px-16 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
          <ArrowLeft size={18} />
          <span className={`text-xs tracking-[0.2em] ${tenorSans.className}`}>BACK HOME</span>
        </a>
        <Image src={logo} alt="LeBold Studios" className="w-14 h-14" />
      </nav>

      {/* Main Content */}
      <div className="max-w-[1200px] py-20 px-8 md:px-16 mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Image */}
        <div className="aspect-[4/5] overflow-hidden rounded-2xl grayscale">
          <Image
            src="/training1.jpeg"
            alt="Photography Training"
            width={600}
            height={800}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div>
          <span className={`text-xs tracking-[0.3em] text-[#8B7355] ${tenorSans.className}`}>
            OUR WORK — 04
          </span>

          <h1 className={`text-5xl md:text-7xl font-light mt-6 mb-8 leading-none ${cormorant.className}`}>
            Join The<br /><span className="italic">Team</span>
          </h1>

          <div className="w-20 h-[1px] bg-[#8B7355] mb-8" />

          <p className={`text-lg md:text-xl text-[#4A3F2E] mb-6 leading-relaxed ${tenorSans.className}`}>
            Learn directly from professionals. Master lighting, composition, editing, and the business of photography.
          </p>

          <p className={`mb-10 text-[#4A3F2E] ${tenorSans.className}`}>
            Chat with us for enquiries on how to join the team.
          </p>

          <Link
            href="https://wa.me/2347064876480"
            target="_blank"
            className={`inline-block px-12 py-4 border border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-[#F5F1E8] transition-all duration-300 text-sm tracking-[0.2em] ${tenorSans.className}`}
          >
            CHAT ON WHATSAPP
          </Link>
        </div>
      </div>

      {/* CTA */}
      <section className="py-24 px-8 md:px-16 bg-[#2C2416] text-center">
        <p className={`text-xs tracking-[0.3em] text-[#8B7355] mb-4 ${tenorSans.className}`}>START YOUR JOURNEY</p>
        <h2 className={`text-4xl md:text-5xl font-light text-[#F5F1E8] mb-8 ${cormorant.className}`}>
          Learn from the <span className="italic">Best</span>
        </h2>
        <Link
          href="https://wa.me/2347064876480"
          target="_blank"
          className={`inline-block px-12 py-4 border border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-[#F5F1E8] transition-all duration-300 text-sm tracking-[0.2em] ${tenorSans.className}`}
        >
          GET IN TOUCH
        </Link>
      </section>

      <Footer />
    </div>
  );
}