"use client";

import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";




export default function TrainingPage() {
    

  
  return (
    <div className="min-h-screen bg-[#EAE4D7] text-[#2C2416]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&family=Tenor+Sans&family=Gilda+Display&display=swap");
      `}</style>
    
    <nav className="sticky top-0 z-40 bg-[#EAE4D7]/95 backdrop-blur-md border-b border-[#2C2416]/10 px-8 md:px-16 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
          <ArrowLeft size={18} />
          <span className="text-xs tracking-[0.2em]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>BACK HOME</span>
        </a>
        <Image src={logo} alt="LeBold Studios" className="w-14 h-14" />
      </nav>
      
      <div className="max-w-[1200px] py-20 mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        
        <div className="aspect-[4/5] overflow-hidden rounded-2xl grayscale-80">
          <Image
            src="/training1.jpeg"
            alt="Photography Training"
            width={600}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <span className="text-xs tracking-[0.3em] text-[#8B7355]">
            PHOTOGRAPHY TRAINING
          </span>

          <h1 className="text-5xl md:text-6xl font-light mt-6 mb-8" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
            Join The <span className="italic">Team</span>
          </h1>

          <p className="text-lg text-[#4A3F2E] mb-8 leading-relaxed">
            Learn directly from professionals. Master lighting, composition,
            editing, and the business of photography.
          </p>

          <p className="mb-10 text-[#4A3F2E]">
            Chat with us for enquiries on how to join the team.
          </p>

          <Link
            href="https://wa.me/2347064876480"
            target="_blank"
            className="inline-block bg-[#2C2416] text-white px-10 py-4 hover:bg-[#3D3022] transition"
          >
            Chat on WhatsApp
          </Link>
        </div>

      
        
      </div>
      <Footer />
    </div>
  );
}













 

 
