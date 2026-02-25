"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/logo.png";

const audioImages = [
  "/audio1.jpeg",
  "/audio2.jpeg",
  "/audio3.jpeg",
  "/audio1.jpeg",
  "/audio2.jpeg",
  "/audio3.jpeg",
  
];

export default function AudioGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i! - 1 + audioImages.length) % audioImages.length);
  const next = () => setLightboxIndex((i) => (i! + 1) % audioImages.length);

  return (
    <div className="min-h-screen bg-[#0D0A06] text-[#F5F1E8]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&family=Tenor+Sans&family=Gilda+Display&display=swap");
      `}</style>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#0D0A06]/95 backdrop-blur-md border-b border-white/5 px-8 md:px-16 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity text-[#F5F1E8]">
          <ArrowLeft size={18} />
          <span className="text-xs tracking-[0.2em]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>BACK HOME</span>
        </a>
        <Image src={logo} alt="LeBold Studios" className="w-14 h-14" />
      </nav>

      {/* Hero */}
      <header className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/audio1.jpeg" alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A06] via-[#0D0A06]/60 to-transparent" />
        </div>
        <div className="relative z-10 px-8 md:px-16 pb-20 max-w-[1400px]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.3em] text-[#8B7355]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              OUR WORK — 05
            </span>
            <h1 className="text-6xl md:text-8xl font-light mt-4 mb-6 leading-none text-[#F5F1E8]" style={{ fontFamily: "'Cormorant', serif" }}>
              Audio<br /><span className="italic">Visual</span>
            </h1>
            <div className="w-20 h-[1px] bg-[#8B7355] mb-8" />
            <p className="text-lg md:text-xl leading-relaxed text-[#F5F1E8]/70 max-w-2xl" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              Sound and vision are partners in storytelling. Our audio visual work brings together cinematic photography with production-quality sound design to create experiences that are felt as much as they are seen. From album covers and music video production stills to live event coverage, we are the trusted creative partner for artists, labels, and brands who refuse to settle. The result is content that stops thumbs mid-scroll and builds lasting visual identities.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Gallery — cinematic wide grid */}
      <section className="px-8 md:px-16 py-20 max-w-[1800px] mx-auto">
        {/* Featured large row */}
        <div className="grid grid-cols-3 gap-3 mb-3">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="col-span-2 aspect-video overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openLightbox(0)}
          >
            <img src={audioImages[0]} alt="Audio 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="aspect-video overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openLightbox(1)}
          >
            <img src={audioImages[1]} alt="Audio 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>

        {/* Uniform grid for the rest */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {audioImages.slice(2).map((src, i) => (
            <motion.div
              key={i + 2}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer group relative"
              onClick={() => openLightbox(i + 2)}
            >
              <img
                src={src}
                alt={`Audio ${i + 3}`}
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
            className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white z-10"><X size={32} /></button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-6 text-white/70 hover:text-white z-10"><ChevronLeft size={40} /></button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={audioImages[lightboxIndex]}
              alt=""
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-6 text-white/70 hover:text-white z-10"><ChevronRight size={40} /></button>
            <span className="absolute bottom-6 text-white/40 text-sm tracking-widest" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              {lightboxIndex + 1} / {audioImages.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 px-8 md:px-16 border-t border-white/5 text-center">
        <p className="text-xs tracking-[0.3em] text-[#8B7355] mb-4" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>BRING YOUR VISION TO LIFE</p>
        <h2 className="text-4xl md:text-5xl font-light text-[#F5F1E8] mb-8" style={{ fontFamily: "'Cormorant', serif" }}>
          Book <span className="italic">Audio Visual</span> Services
        </h2>
        <a href="/#booking" className="inline-block px-12 py-4 border border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-[#0D0A06] transition-all duration-300 text-sm tracking-[0.2em]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
          GET IN TOUCH
        </a>
      </section>
    </div>
  );
}