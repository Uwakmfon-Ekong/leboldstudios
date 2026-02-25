"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/logo.png";

const droneImages = [
  "/drone1.jpeg",
  "/drone2.jpeg",
  "/drone3.jpeg",
  "/drone4.jpeg",
  "/drone5.jpeg",
  "/drone6.jpeg",
  "/drone7.jpeg",
  "/drone8.jpeg",
    "/drone9.jpeg", 
    "/drone10.jpeg",
    "/drone11.jpeg",
    "/drone12.jpeg",
];

export default function DroneGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i! - 1 + droneImages.length) % droneImages.length);
  const next = () => setLightboxIndex((i) => (i! + 1) % droneImages.length);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2416]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&family=Tenor+Sans&family=Gilda+Display&display=swap");
      `}</style>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#2C2416]/10 px-8 md:px-16 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
          <ArrowLeft size={18} />
          <span className="text-xs tracking-[0.2em]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>BACK HOME</span>
        </a>
        <Image src={logo} alt="LeBold Studios" className="w-14 h-14" />
      </nav>

      {/* Hero Header */}
      <header className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[70vh]">
          <div className="flex items-center px-8 md:px-16 py-24">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
             
              <h1 className="text-6xl md:text-8xl font-light mt-4 mb-6 leading-none" style={{ fontFamily: "'Cormorant', serif" }}>
                Drone <br /><span className="italic">Photography</span>
              </h1>
              <div className="w-20 h-[1px] bg-[#8B7355] mb-8" />
              <p className="text-lg md:text-xl leading-relaxed text-[#4A3F2E] max-w-lg" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
                Capture breathtaking perspectives from above. Our drone sessions reveal angles and details impossible from the ground, transforming landscapes, events, and projects into cinematic compositions. Safety, precision, and artistry guide every flight.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative overflow-hidden"
          >
            <img src="/drone3.jpeg" alt="Drone Photography" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/30 to-transparent" />
          </motion.div>
        </div>
      </header>

      {/* Gallery */}
      <section className="px-8 md:px-16 py-20 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {droneImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
              className="aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer group relative shadow-sm"
              onClick={() => openLightbox(i)}
            >
              <img
                src={src}
                alt={`Drone ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#2C2416]/0 group-hover:bg-[#2C2416]/10 transition-all duration-300 rounded-2xl" />
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
              src={droneImages[lightboxIndex]}
              alt=""
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-6 text-white/70 hover:text-white z-10"><ChevronRight size={40} /></button>
            <span className="absolute bottom-6 text-white/40 text-sm tracking-widest" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
              {lightboxIndex + 1} / {droneImages.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 px-8 md:px-16 bg-[#8B7355]/10 text-center border-t border-[#8B7355]/20">
        <p className="text-xs tracking-[0.3em] text-[#8B7355] mb-4" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>REACH NEW HEIGHTS</p>
        <h2 className="text-4xl md:text-5xl font-light text-[#2C2416] mb-8" style={{ fontFamily: "'Cormorant', serif" }}>
          Book a <span className="italic">Drone Session</span>
        </h2>
        <a href="/#booking" className="inline-block px-12 py-4 bg-[#2C2416] text-[#F5F1E8] hover:bg-[#3D3022] transition-all duration-300 text-sm tracking-[0.2em]" style={{ fontFamily: "'Tenor Sans', sans-serif" }}>
          GET IN TOUCH
        </a>
      </section>
    </div>
  );
}