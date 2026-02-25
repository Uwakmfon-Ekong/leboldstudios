"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }),
};

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<"studio" | "events" | "wedding">("studio");

  return (
    <div className="min-h-screen bg-[#0D0A06] text-[#F5F1E8]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Tenor+Sans&display=swap");
      `}</style>

      {/* NAV */}
      <nav className="sticky top-0 z-40 bg-[#0D0A06]/95 backdrop-blur-md border-b border-white/5 px-8 md:px-16 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity text-[#F5F1E8]">
          <ArrowLeft size={18} />
          <span className="text-xs tracking-[0.2em]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>BACK HOME</span>
        </a>
        <Image src={logo} alt="LeBold Studios" className="w-14 h-14" />
      </nav>

      {/* HEADER */}
      <header className="pt-24 pb-16 px-8 md:px-16 max-w-[1400px] mx-auto">
        <motion.div  initial="hidden" animate="show">
          <span className="text-xs tracking-[0.3em] text-[#8B7355]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
            TRANSPARENT PRICING
          </span>
          <h1 className="text-6xl md:text-8xl font-light mt-4 mb-4 leading-none" style={{ fontFamily: "'Cormorant', serif" }}>
            Investment<br /><span className="italic">Packages</span>
          </h1>
          <div className="w-20 h-[1px] bg-[#8B7355] mt-6 mb-8" />
          <p className="text-[#F5F1E8]/60 text-lg max-w-xl leading-relaxed" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
            Every moment deserves to be captured with excellence. Choose a package that fits your vision — all prices in Nigerian Naira (₦).
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-2 mt-12">
          {([
            { key: "studio", label: "Studio & Outdoor" },
            { key: "events", label: "Events / Burial" },
            { key: "wedding", label: "Wedding" },
          ] as const).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 text-xs tracking-[0.2em] transition-all duration-300 border ${
                activeTab === tab.key
                  ? "bg-[#8B7355] border-[#8B7355] text-[#F5F1E8]"
                  : "border-white/10 text-[#F5F1E8]/40 hover:border-[#8B7355]/50 hover:text-[#F5F1E8]/70"
              }`}
              style={{ fontFamily: "'Tenor Sans', sans-serif" }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* ─── STUDIO & OUTDOOR ─── */}
      {activeTab === "studio" && (
        <section className="px-8 md:px-16 pb-32 max-w-[1400px] mx-auto space-y-16">

          {/* STUDIO SHOOT */}
          <motion.div  initial="hidden" animate="show">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <span className="text-xs tracking-[0.3em] text-[#8B7355]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>STUDIO SHOOT</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
              {[
                { price: "20,000", outfits: "One Outfit", copies: "4 Edited Copies" },
                { price: "30,000", outfits: "Two Outfits", copies: "6 Edited Copies" },
                { price: "50,000", outfits: "Three Outfits", copies: "8 Edited Copies" },
                { price: "60,000", outfits: "Four Outfits", copies: "10 Edited Copies" },
              ].map((pkg, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  
                  initial="hidden"
                  animate="show"
                  className="bg-[#1A150D] p-8 group hover:bg-[#8B7355]/10 transition-colors duration-500"
                >
                  <p className="text-3xl md:text-4xl font-light text-[#8B7355] mb-1" style={{ fontFamily: "'Cormorant', serif" }}>
                    ₦{pkg.price}
                  </p>
                  <div className="w-8 h-[1px] bg-[#8B7355]/30 my-5" />
                  <p className="text-sm text-[#F5F1E8] mb-2 tracking-wide" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>{pkg.outfits}</p>
                  <p className="text-xs text-[#F5F1E8]/40 tracking-wide" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>{pkg.copies}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* OUTDOOR SHOOT */}
          <motion.div  initial="hidden" animate="show" custom={1}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <span className="text-xs tracking-[0.3em] text-[#8B7355]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>OUTDOOR SHOOT</span>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-white/5">
              {[
                { price: "25,000", outfits: "One Outfit", copies: "3 Edited Copies" },
                { price: "40,000", outfits: "Two Outfits", copies: "6 Edited Copies" },
              ].map((pkg, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  
                  initial="hidden"
                  animate="show"
                  className="bg-[#1A150D] p-8 group hover:bg-[#8B7355]/10 transition-colors duration-500"
                >
                  <p className="text-3xl md:text-4xl font-light text-[#8B7355] mb-1" style={{ fontFamily: "'Cormorant', serif" }}>
                    ₦{pkg.price}
                  </p>
                  <div className="w-8 h-[1px] bg-[#8B7355]/30 my-5" />
                  <p className="text-sm text-[#F5F1E8] mb-2 tracking-wide" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>{pkg.outfits}</p>
                  <p className="text-xs text-[#F5F1E8]/40 tracking-wide" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>{pkg.copies}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* PRE-WEDDING */}
          <motion.div  initial="hidden" animate="show" custom={2}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <span className="text-xs tracking-[0.3em] text-[#8B7355]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>PRE-WEDDING</span>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-white/5">
              {[
                { price: "60,000", outfits: "Two Outfits", copies: "5 Edited Copies" },
                { price: "80,000", outfits: "Three Outfits", copies: "8 Edited Copies" },
              ].map((pkg, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  
                  initial="hidden"
                  animate="show"
                  className="bg-[#1A150D] p-8 group hover:bg-[#8B7355]/10 transition-colors duration-500"
                >
                  <p className="text-3xl md:text-4xl font-light text-[#8B7355] mb-1" style={{ fontFamily: "'Cormorant', serif" }}>
                    ₦{pkg.price}
                  </p>
                  <div className="w-8 h-[1px] bg-[#8B7355]/30 my-5" />
                  <p className="text-sm text-[#F5F1E8] mb-2 tracking-wide" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>{pkg.outfits}</p>
                  <p className="text-xs text-[#F5F1E8]/40 tracking-wide" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>{pkg.copies}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* STANDALONE QUICK RATES */}
          <motion.div  initial="hidden" animate="show" custom={3}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <span className="text-xs tracking-[0.3em] text-[#8B7355]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>QUICK RATES</span>
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-white/5">
              {[
                { label: "Single Studio Shot", price: "6,000" },
                { label: "Local Passport", price: "4,000" },
                { label: "International Passport", price: "10,000" },
              ].map((item, i) => (
                <div key={i} className="bg-[#1A150D] px-8 py-6 flex items-center justify-between group hover:bg-[#8B7355]/10 transition-colors duration-500">
                  <span className="text-sm text-[#F5F1E8]/70 tracking-wide" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>{item.label}</span>
                  <span className="text-xl font-light text-[#8B7355]" style={{ fontFamily: "'Cormorant', serif" }}>₦{item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* ─── EVENTS / BURIAL ─── */}
      {activeTab === "events" && (
        <section className="px-8 md:px-16 pb-32 max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mt-4">

            {/* FULL RESPECT */}
            <motion.div
               initial="hidden" animate="show" custom={0}
              className="relative bg-[#1A150D] border border-white/5 p-10 flex flex-col"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] text-[#8B7355] block mb-3" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>PACKAGE 01</span>
                <h2 className="text-4xl md:text-5xl font-light leading-tight" style={{ fontFamily: "'Cormorant', serif" }}>
                  Full Respect<br /><span className="italic text-[#8B7355]">Package</span>
                </h2>
                <div className="w-12 h-[1px] bg-[#8B7355] mt-6" />
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {[
                  "4 Photo and Video DSLR HD Crew",
                  "1 Regular Photobook",
                  "1 unit 16×20 Enlargement Frame",
                  "Video Files",
                  "Flash",
                  "Trailers",
                  "Edited Soft Copies",
                  "Drone",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={14} className="text-[#8B7355] mt-1 shrink-0" />
                    <span className="text-sm text-[#F5F1E8]/70 leading-relaxed" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/5 pt-8">
                <p className="text-5xl font-light text-[#8B7355]" style={{ fontFamily: "'Cormorant', serif" }}>₦500,000</p>
                <a
                  href="/#booking"
                  className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] border border-[#8B7355] px-6 py-3 text-[#8B7355] hover:bg-[#8B7355] hover:text-[#0D0A06] transition-all duration-300"
                  style={{ fontFamily: "'Tenor Sans', sans-serif" }}
                >
                  BOOK THIS PACKAGE <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>

            {/* HALF RESPECT */}
            <motion.div
               initial="hidden" animate="show" custom={1}
              className="relative bg-[#1A150D] border border-white/5 p-10 flex flex-col"
            >
              <div className="mb-8">
                <span className="text-xs tracking-[0.3em] text-[#8B7355] block mb-3" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>PACKAGE 02</span>
                <h2 className="text-4xl md:text-5xl font-light leading-tight" style={{ fontFamily: "'Cormorant', serif" }}>
                  Half Respect<br /><span className="italic text-[#8B7355]">Package</span>
                </h2>
                <div className="w-12 h-[1px] bg-[#8B7355] mt-6" />
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {[
                  "2 Photo and Video DSLR HD Crew",
                  "Video Files",
                  "Flash",
                  "Trailers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={14} className="text-[#8B7355] mt-1 shrink-0" />
                    <span className="text-sm text-[#F5F1E8]/70 leading-relaxed" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/5 pt-8">
                <p className="text-5xl font-light text-[#8B7355]" style={{ fontFamily: "'Cormorant', serif" }}>₦350,000</p>
                <a
                  href="/#booking"
                  className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] border border-[#8B7355] px-6 py-3 text-[#8B7355] hover:bg-[#8B7355] hover:text-[#0D0A06] transition-all duration-300"
                  style={{ fontFamily: "'Tenor Sans', sans-serif" }}
                >
                  BOOK THIS PACKAGE <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── WEDDING ─── */}
      {activeTab === "wedding" && (
        <section className="px-8 md:px-16 pb-32 max-w-[1400px] mx-auto">
          <motion.div
             initial="hidden" animate="show"
            className="mt-4 relative bg-gradient-to-br from-[#1A150D] to-[#0D0A06] border border-[#8B7355]/20 p-10 md:p-16"
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-[#8B7355]/20" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-[#8B7355]/20" />

            <div className="max-w-3xl">
              <span className="text-xs tracking-[0.3em] text-[#8B7355] block mb-4" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                EXCLUSIVE PACKAGE — FULL EVENT COVERAGE
              </span>
              <h2 className="text-5xl md:text-7xl font-light leading-none mb-6" style={{ fontFamily: "'Cormorant', serif" }}>
                The<br /><span className="italic text-[#8B7355]">Exclusive</span><br />Package
              </h2>
              <p className="text-[#F5F1E8]/50 text-sm mb-2 tracking-wide" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                Physical presence and shoot by <strong className="text-[#F5F1E8]/80">Lebold himself</strong>
              </p>
              <div className="w-16 h-[1px] bg-[#8B7355] mt-6 mb-10" />

              <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 mb-14">
                {[
                  "Physical presence & shoot by Lebold himself",
                  "2 Synthetic Photobooks",
                  "5-in-1 (3D Frame Enlargement)",
                  "2 × 12×16 Office Frame",
                  "Video Files",
                  "Flash",
                  "Trailers",
                  "Edited Soft Copies",
                  "Drone",
                  "Reels",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={14} className="text-[#8B7355] mt-[3px] shrink-0" />
                    <span className="text-sm text-[#F5F1E8]/70 leading-relaxed" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-end gap-8 pt-8 border-t border-white/5">
                <div>
                  <p className="text-xs tracking-[0.2em] text-[#F5F1E8]/30 mb-2" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>INVESTMENT</p>
                  <p className="text-6xl md:text-7xl font-light text-[#8B7355]" style={{ fontFamily: "'Cormorant', serif" }}>₦2,000,000</p>
                </div>
                <a
                  href="/#booking"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.2em] bg-[#8B7355] px-10 py-4 text-[#0D0A06] hover:bg-[#9E855F] transition-all duration-300"
                  style={{ fontFamily: "'Tenor Sans', sans-serif" }}
                >
                  BOOK NOW <ArrowUpRight size={14} />
                </a>
              </div>

              <p className="text-[#F5F1E8]/20 text-xs mt-8 tracking-wide" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                T&C: No refund of money after payment.
              </p>
            </div>
          </motion.div>
        </section>
      )}

      {/* BOTTOM CTA STRIP */}
      <section className="py-20 px-8 md:px-16 bg-[#8B7355]/10 border-t border-[#8B7355]/10 text-center">
        <p className="text-xs tracking-[0.3em] text-[#8B7355] mb-4" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
          NOT SURE WHICH PACKAGE?
        </p>
        <h3 className="text-3xl md:text-4xl font-light text-[#F5F1E8] mb-6" style={{ fontFamily: "'Cormorant', serif" }}>
          Let's find your <span className="italic">perfect fit</span>
        </h3>
        <a
          href="/#booking"
          className="inline-flex items-center gap-2 border border-[#8B7355] px-10 py-4 text-[#8B7355] hover:bg-[#8B7355] hover:text-[#0D0A06] transition-all duration-300 text-xs tracking-[0.2em]"
          style={{ fontFamily: "'Tenor Sans', sans-serif" }}
        >
          CONTACT US <ArrowUpRight size={14} />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0D0A06] border-t border-white/5 py-8 px-8 md:px-16 text-center">
        <p className="text-[#F5F1E8]/15 text-xs tracking-[0.3em]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
          © {new Date().getFullYear()} LEBOLD STUDIOS — ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
}