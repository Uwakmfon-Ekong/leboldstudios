"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/logo.png";

const studioImages = [
  "/studio1.jpeg",
  "/studio4.jpeg",
  "/studio3.jpeg",
  "/studio5.jpeg",
  "/studio6.jpeg",
  "/studio7.jpeg",
  "/studio8.jpeg",
  "/studio9.jpeg",
  "/studio1.jpeg",
  "/studio4.jpeg",
  "/studio3.jpeg",
  "/studio5.jpeg",
];

export default function StudioGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i! - 1 + studioImages.length) % studioImages.length);
  const next = () => setLightboxIndex((i) => (i! + 1) % studioImages.length);

  return (
    <div className="min-h-screen bg-[#1A150D] text-[#F5F1E8]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&family=Tenor+Sans&family=Gilda+Display&display=swap");
      `}</style>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#1A150D]/95 backdrop-blur-md border-b border-white/10 px-8 md:px-16 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity text-[#F5F1E8]">
          <ArrowLeft size={18} />
          <span className="text-xs tracking-[0.2em]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>BACK HOME</span>
        </a>
        <Image src={logo} alt="LeBold Studios" className="w-14 h-14" />
      </nav>

      {/* Header */}
      <header className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-xs tracking-[0.3em] text-[#8B7355]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
            OUR WORK — 02
          </span>
          <h1 className="text-6xl md:text-8xl font-light mt-4 mb-6 leading-none text-[#F5F1E8]" style={{ fontFamily: "'Cormorant', serif" }}>
            Studio<br /><span className="italic">Sessions</span>
          </h1>
          <div className="w-20 h-[1px] bg-[#8B7355] mb-8" />
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl text-[#F5F1E8]/70" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
            The studio is our controlled canvas — where light obeys, shadows cooperate, and every frame is intentional. Whether you're a professional building a portfolio, an individual seeking portraits that truly capture who you are, or a brand in need of imagery that commands attention, our studio delivers. We combine technical precision with artistic instinct to create photographs that are impossible to ignore. You've never seen yourself quite like this.
          </p>
        </motion.div>
      </header>

      {/* Grid Gallery — uniform squares */}
      <section className="px-8 md:px-16 pb-32 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {studioImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
              className={`overflow-hidden cursor-pointer group relative ${i === 0 || i === 7 ? "col-span-2 row-span-2" : ""}`}
              style={{ aspectRatio: i === 0 || i === 7 ? "1/1" : "3/4" }}
              onClick={() => openLightbox(i)}
            >
              <img
                src={src}
                alt={`Studio ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#8B7355]/0 group-hover:bg-[#8B7355]/10 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white z-10"><X size={32} /></button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-6 text-white/70 hover:text-white z-10"><ChevronLeft size={40} /></button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={studioImages[lightboxIndex]}
              alt=""
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-6 text-white/70 hover:text-white z-10"><ChevronRight size={40} /></button>
            <span className="absolute bottom-6 text-white/40 text-sm tracking-widest" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              {lightboxIndex + 1} / {studioImages.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 px-8 md:px-16 bg-[#8B7355] text-center">
        <p className="text-xs tracking-[0.3em] text-[#1A150D] mb-4" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>STEP INTO THE LIGHT</p>
        <h2 className="text-4xl md:text-5xl font-light text-[#1A150D] mb-8" style={{ fontFamily: "'Cormorant', serif" }}>
          Book a <span className="italic">Studio Session</span>
        </h2>
        <a href="/#booking" className="inline-block px-12 py-4 border border-[#1A150D] text-[#1A150D] hover:bg-[#1A150D] hover:text-[#F5F1E8] transition-all duration-300 text-sm tracking-[0.2em]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
          GET IN TOUCH
        </a>
      </section>
    </div>
  );
}