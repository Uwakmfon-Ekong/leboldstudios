"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/logo.png";

const weddingImages = [
  "/wedding6.jpeg",
  "/wedding2t.jpeg",
  "/wedding3t.jpeg",
  "/wedding11.jpeg",
  "/wedding5.jpeg",
  "/wedding13.jpeg",
  "/wedding12.jpeg",
  "/wedding8.jpeg",
  "/wedding6.jpeg",
  "/wedding2t.jpeg",
  "/wedding3t.jpeg",
  "/wedding11.jpeg",
];

export default function WeddingGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i! - 1 + weddingImages.length) % weddingImages.length);
  const next = () => setLightboxIndex((i) => (i! + 1) % weddingImages.length);

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#2C2416]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&family=Tenor+Sans&family=Gilda+Display&display=swap");
      `}</style>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#F5F1E8]/95 backdrop-blur-md border-b border-[#2C2416]/10 px-8 md:px-16 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
          <ArrowLeft size={18} />
          <span className="text-xs tracking-[0.2em]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>BACK HOME</span>
        </a>
        <Image src={logo} alt="LeBold Studios" className="w-14 h-14" />
      </nav>

      {/* Header */}
      <header className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-xs tracking-[0.3em] text-[#8B7355]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
            OUR WORK — 01
          </span>
          <h1 className="text-6xl md:text-8xl font-light mt-4 mb-6 leading-none" style={{ fontFamily: "'Cormorant', serif" }}>
            Wedding<br /><span className="italic">Photography</span>
          </h1>
          <div className="w-20 h-[1px] bg-[#8B7355] mb-8" />
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl text-[#4A3F2E]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
            Every wedding is a universe of its own — emotion layered on emotion, light shifting through moments that will never come again. We don't just photograph weddings; we preserve them. Our team brings over a decade of experience crafting images that feel both timeless and deeply personal. From the quiet morning preparations to the last dance, we are there, invisible yet ever-present, capturing what words cannot hold.
          </p>
        </motion.div>
      </header>

      {/* Masonry-style Gallery */}
      <section className="px-8 md:px-16 pb-32 max-w-[1800px] mx-auto">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {weddingImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="break-inside-avoid overflow-hidden rounded-lg cursor-pointer group relative"
              onClick={() => openLightbox(i)}
            >
              <img
                src={src}
                alt={`Wedding ${i + 1}`}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#2C2416]/0 group-hover:bg-[#2C2416]/20 transition-all duration-300" />
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
              exit={{ opacity: 0, scale: 0.95 }}
              src={weddingImages[lightboxIndex]}
              alt=""
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-6 text-white/70 hover:text-white z-10"><ChevronRight size={40} /></button>
            <span className="absolute bottom-6 text-white/40 text-sm tracking-widest" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              {lightboxIndex + 1} / {weddingImages.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 px-8 md:px-16 bg-[#2C2416] text-center">
        <p className="text-xs tracking-[0.3em] text-[#8B7355] mb-4" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>READY TO BEGIN?</p>
        <h2 className="text-4xl md:text-5xl font-light text-[#F5F1E8] mb-8" style={{ fontFamily: "'Cormorant', serif" }}>
          Book Your <span className="italic">Wedding Session</span>
        </h2>
        <a href="/#booking" className="inline-block px-12 py-4 border border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-[#F5F1E8] transition-all duration-300 text-sm tracking-[0.2em]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
          GET IN TOUCH
        </a>
      </section>
    </div>
  );
}