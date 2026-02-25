"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/logo.png";

const frameImages = [
  "/frame3.jpeg",
  "/frame2.jpeg",
  "/frame10.jpeg",
  "/frame4.jpeg",
  "/frame5.jpeg",
  "/frame6.jpeg",
  "/frame7.jpeg",
  "/frame8.jpeg",
  "/frame11.jpeg",
  "/frame12.jpeg",
  "/frame13.jpeg",
  "/frame14.jpeg",
  "/frame15.jpeg",
  "/frame16.jpeg",
  "/frame17.jpeg",
  "/frame18.jpeg",
  "/frame19.jpeg",
  "/frame20.jpeg",
  "/frame21.jpeg",
  "/frame22.jpeg",

];

export default function FramesGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i! - 1 + frameImages.length) % frameImages.length);
  const next = () => setLightboxIndex((i) => (i! + 1) % frameImages.length);

  return (
    <div className="min-h-screen bg-[#EAE4D7] text-[#2C2416]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&family=Tenor+Sans&family=Gilda+Display&display=swap");
      `}</style>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#EAE4D7]/95 backdrop-blur-md border-b border-[#2C2416]/10 px-8 md:px-16 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
          <ArrowLeft size={18} />
          <span className="text-xs tracking-[0.2em]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>BACK HOME</span>
        </a>
        <Image src={logo} alt="LeBold Studios" className="w-14 h-14" />
      </nav>

      {/* Header */}
      <header className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-xs tracking-[0.3em] text-[#8B7355]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
            OUR WORK — 03
          </span>
          <h1 className="text-6xl md:text-8xl font-light mt-4 mb-6 leading-none" style={{ fontFamily: "'Cormorant', serif" }}>
            Frames<br /><span className="italic">&amp; Prints</span>
          </h1>
          <div className="w-20 h-[1px] bg-[#8B7355] mb-8" />
          <p className="text-lg md:text-xl leading-relaxed text-[#4A3F2E]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
            A photograph becomes an heirloom the moment it is printed and framed. We believe that great images deserve to live beyond screens — on walls, in hands, passed between generations. Our printing process uses archival-grade materials that resist fading for decades, and our frames are sourced from master craftsmen who understand that the border of an image is part of the art itself. When quality and speed are the words, no one does it better.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="aspect-[4/5] overflow-hidden rounded-2xl">
          <img src="/frame11.jpeg" alt="Featured Frame" className="w-full h-full object-cover" />
        </motion.div>
      </header>

      {/* Gallery — Pinterest-style masonry */}
      <section className="px-8 md:px-16 pb-32 max-w-[1800px] mx-auto">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {frameImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="break-inside-avoid overflow-hidden rounded-lg cursor-pointer group relative border border-[#8B7355]/10"
              onClick={() => openLightbox(i)}
            >
              <img src={src} alt={`Frame ${i + 1}`} className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#2C2416]/0 group-hover:bg-[#2C2416]/10 transition-all duration-300" />
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
              src={frameImages[lightboxIndex]}
              alt=""
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-6 text-white/70 hover:text-white z-10"><ChevronRight size={40} /></button>
            <span className="absolute bottom-6 text-white/40 text-sm tracking-widest" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              {lightboxIndex + 1} / {frameImages.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 px-8 md:px-16 bg-[#2C2416] text-center">
        <p className="text-xs tracking-[0.3em] text-[#8B7355] mb-4" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>PUT IT ON YOUR WALL</p>
        <h2 className="text-4xl md:text-5xl font-light text-[#F5F1E8] mb-8" style={{ fontFamily: "'Cormorant', serif" }}>
          Order <span className="italic">Frames & Prints</span>
        </h2>
        <a href="/#booking" className="inline-block px-12 py-4 border border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-[#F5F1E8] transition-all duration-300 text-sm tracking-[0.2em]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
          GET IN TOUCH
        </a>
      </section>
    </div>
  );
}